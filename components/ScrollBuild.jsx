"use client";
import { useEffect } from "react";

// Keep in sync with the pinning media query in globals.css.
const PIN_QUERY = "(min-width: 1024px)";

// Returns the pin track around a build group, when pinning is active.
function pinTrack(el, pinning) {
  const parent = el.parentElement;
  return pinning && parent?.classList.contains("pin-track") ? parent : null;
}

// Drives the scroll-linked "build" effect: sets --p (0 = wireframe, 1 = done) on
// every [data-sb] element based on where it sits in the viewport. The CSS in
// globals.css turns --p into paused, scrubbed wireframe animations.
export default function ScrollBuild() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    const pinMq = matchMedia(PIN_QUERY);
    const groups = [...document.querySelectorAll("[data-sb]")];
    let frame = 0;

    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const header = parseFloat(getComputedStyle(root).getPropertyValue("--header-h")) || 0;
      const leftToScroll = Math.max(0, root.scrollHeight - vh - window.scrollY);
      for (const el of groups) {
        const track = pinTrack(el, pinMq.matches);
        let start, end, top;
        if (track) {
          // Sticks just below the header. Starts building on the way in, finishes
          // when the pin releases (and, for sections taller than the screen,
          // once their bottom is in view).
          top = track.getBoundingClientRect().top;
          const pin = track.offsetHeight - el.offsetHeight;
          start = vh * 0.4;
          end = header - pin - Math.max(0, el.offsetHeight - (vh - header));
        } else {
          // Done once its top reaches 30% of the viewport.
          top = el.getBoundingClientRect().top;
          start = vh;
          end = vh * 0.3;
        }
        // Never require more scrolling than the page has left.
        end = Math.max(end, top - leftToScroll);
        const p = Math.min(1, Math.max(0, (start - top) / Math.max(1, start - end)));
        el.style.setProperty("--p", p.toFixed(3));
      }
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    // In-page links to a pinned section land where it's fully built.
    const onClick = (e) => {
      const link = e.target.closest?.('a[href^="#"]');
      const target = link && document.getElementById(link.getAttribute("href").slice(1));
      const track = target && pinTrack(target, pinMq.matches);
      if (!track) return;
      e.preventDefault();
      const pin = track.offsetHeight - target.offsetHeight;
      const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 0;
      window.scrollTo({ top: track.getBoundingClientRect().top + window.scrollY + pin - header, behavior: "smooth" });
      history.pushState(null, "", link.getAttribute("href"));
    };

    // Add the class first: it enables the pin spacers that update() measures.
    root.classList.add("sb-on");
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    pinMq.addEventListener("change", schedule);
    document.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      pinMq.removeEventListener("change", schedule);
      document.removeEventListener("click", onClick);
      root.classList.remove("sb-on");
    };
  }, []);

  return null;
}
