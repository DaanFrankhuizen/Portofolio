import InkText from "@/components/InkText";
import SectionLabel from "@/components/SectionLabel";
import SectionRedlines from "@/components/SectionRedlines";
import { stack } from "@/data/site";

// Scroll progress (0–1) at which an element starts to build.
const at = (s) => ({ "--s": s });

const facts = [
  { label: "Building since", value: "2014" },
  { label: "Studying", value: "Web Development" },
];

export default function About() {
  return (
    // Pinned on laptops while it builds; --pin is the extra scroll distance.
    <div className="pin-track" style={{ "--pin": "150vh" }}>
      <section id="about" aria-labelledby="about-h" data-sb className="relative scroll-mt-[68px] border-t border-line">
        <SectionRedlines name="About" />
        <div className="container-page section-pad grid gap-x-20 gap-y-12 [grid-template-columns:repeat(auto-fit,minmax(min(100%,460px),1fr))]">
          <div className="flex flex-col gap-7">
            <SectionLabel n="01">About</SectionLabel>
            <h2 id="about-h" data-m="title" className="b-box section-heading [text-wrap:balance]" style={at(0.05)}>
              <InkText text="Twelve years in, still hooked on building for the web." from={0.05} spread={0.3} />
            </h2>
          </div>

          <div className="flex flex-col gap-10 pt-[clamp(0px,4vw,48px)]">
            <div className="b-box b-muted flex max-w-[58ch] flex-col gap-[18px]" style={at(0.15)}>
              <p className="m-0 [text-wrap:pretty]">
                I&apos;m Daan, a Web Development student at HU University of Applied Sciences in Utrecht. I built my
                first website in 2014 and never really stopped.
              </p>
              <p className="m-0 text-muted [text-wrap:pretty]">
                I love how fast this industry moves: there&apos;s always a new tool to learn and a better way to do
                things. What drives me is building things with impact, where good design and clean code make something
                genuinely easier for the people using it.
              </p>
            </div>

            <div className="flex flex-col gap-3.5">
              <span className="eyebrow">Stack</span>
              <ul aria-label="Tech stack" className="m-0 flex list-none flex-wrap gap-2 p-0">
                {stack.map((name, i) => (
                  <li
                    key={name}
                    className="b-fill flex items-center gap-2.5 rounded-full border border-line bg-surface py-[9px] pl-2.5 pr-3.5 text-[15px] font-medium transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-ink"
                    style={at(0.25 + i * 0.03)}
                  >
                    <span className="font-mono text-[11px] text-muted">{String(i + 1).padStart(2, "0")}</span>
                    {name}
                  </li>
                ))}
              </ul>
            </div>

            <dl
              className="b-box m-0 grid border-t border-line [grid-template-columns:repeat(auto-fit,minmax(150px,1fr))]"
              style={at(0.45)}
            >
              {facts.map((f) => (
                <div key={f.label} className="border-b border-line py-4">
                  <dt className="font-mono text-xs uppercase tracking-[.04em] text-muted">{f.label}</dt>
                  <dd className="display m-0 mt-1 text-[28px] tracking-[-.03em]">
                    <InkText text={f.value} from={0.45} spread={0.1} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
