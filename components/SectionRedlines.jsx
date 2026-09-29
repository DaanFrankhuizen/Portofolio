"use client";
import { useLayoutEffect, useRef, useState } from "react";

const px = (v) => Math.round(parseFloat(v));

function measure(section) {
  const s = section.getBoundingClientRect();
  const container = section.querySelector(".container-page");
  const c = container.getBoundingClientRect();
  const cs = getComputedStyle(container);
  const title = section.querySelector('[data-m="title"]');
  const t = title.getBoundingClientRect();
  return {
    width: s.width,
    left: c.left - s.left,
    padTop: px(cs.paddingTop),
    padLeft: px(cs.paddingLeft),
    titleTop: t.top - s.top,
    titleRight: s.right - t.right,
    titleSize: px(getComputedStyle(title).fontSize),
  };
}

// Spacing annotations for a scroll-built section. Visibility follows the
// section's --p (see .sb-redlines in globals.css).
export default function SectionRedlines({ name }) {
  const ref = useRef(null);
  const [m, setM] = useState(null);

  useLayoutEffect(() => {
    const section = ref.current.parentElement;
    const update = () => setM(measure(section));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(section);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className="sb-redlines pointer-events-none absolute inset-0 z-10">
      {m && (
        <>
          <span className="redline-tag" style={{ left: m.left + m.padLeft, top: 12 }}>
            {`<${name} />`}
          </span>
          <span className="redline-v" style={{ left: m.width / 2, top: 0, height: m.padTop }}>
            <span className="redline-tag left-2 top-1/2 -translate-y-1/2">{`padding-top ${m.padTop}`}</span>
          </span>
          <span className="redline-h" style={{ left: m.left, top: m.titleTop + 12, width: m.padLeft }}>
            <span className="redline-tag left-0 top-2">{`padding ${m.padLeft}`}</span>
          </span>
          <span className="redline-tag" style={{ right: m.titleRight, top: m.titleTop - 23 }}>
            {`Archivo 800 · ${m.titleSize}px`}
          </span>
        </>
      )}
    </div>
  );
}
