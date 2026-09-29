"use client";
import { useLayoutEffect, useRef, useState } from "react";

// Total length of the hero build, in ms after navigation start. Keep in sync with
// the `redlines` keyframes in globals.css.
const BUILD_MS = 2600;

const px = (v) => Math.round(parseFloat(v));

function measure(section) {
  const s = section.getBoundingClientRect();
  const cs = getComputedStyle(section);
  const title = section.querySelector('[data-m="title"]');
  const grid = section.querySelector('[data-m="grid"]');
  const t = title.getBoundingClientRect();
  const g = grid.getBoundingClientRect();
  const ts = getComputedStyle(title);
  return {
    width: s.width,
    padTop: px(cs.paddingTop),
    padLeft: px(cs.paddingLeft),
    titleTop: t.top - s.top,
    titleMargin: px(ts.marginTop),
    titleSize: px(ts.fontSize),
    gridTop: g.top - s.top,
    gridMargin: px(getComputedStyle(grid).marginTop),
  };
}

function VLine({ x, y, h, label }) {
  return (
    <span className="redline-v" style={{ left: x, top: y, height: h }}>
      <span className="redline-tag left-2 top-1/2 -translate-y-1/2">{label}</span>
    </span>
  );
}

function HLine({ x, y, w, label }) {
  return (
    <span className="redline-h" style={{ left: x, top: y, width: w }}>
      <span className="redline-tag left-0 top-2">{label}</span>
    </span>
  );
}

// Figma/DevTools-style spacing annotations shown while the hero "builds".
export default function Redlines() {
  const ref = useRef(null);
  const [start, setStart] = useState(null);
  const [m, setM] = useState(null);

  useLayoutEffect(() => {
    const now = document.timeline?.currentTime ?? performance.now();
    // Skip when the page loaded slowly (build already over) or motion is reduced.
    if (now > BUILD_MS / 2 || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const section = ref.current.parentElement;
    const update = () => setM(measure(section));
    update();
    setStart(now);

    const ro = new ResizeObserver(update);
    ro.observe(section);
    const done = setTimeout(() => {
      ro.disconnect();
      setM(null);
    }, BUILD_MS - now);
    return () => {
      ro.disconnect();
      clearTimeout(done);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="redlines pointer-events-none absolute inset-0 z-10"
      style={{ animationDelay: `-${start ?? 0}ms` }}
    >
      {m && (
        <>
          <span className="redline-tag" style={{ left: m.padLeft, top: 8 }}>
            {"<Hero />"}
          </span>
          <VLine x={m.width / 2} y={0} h={m.padTop} label={`padding-top ${m.padTop}`} />
          <HLine x={0} y={m.titleTop + 12} w={m.padLeft} label={`padding ${m.padLeft}`} />
          <VLine
            x={m.width * 0.4}
            y={m.titleTop - m.titleMargin}
            h={m.titleMargin}
            label={`margin ${m.titleMargin}`}
          />
          <span className="redline-tag" style={{ right: m.padLeft, top: m.titleTop + 4 }}>
            {`Archivo 800 · ${m.titleSize}px`}
          </span>
          <VLine
            x={m.width * 0.66}
            y={m.gridTop - m.gridMargin}
            h={m.gridMargin}
            label={`margin ${m.gridMargin}`}
          />
        </>
      )}
    </div>
  );
}
