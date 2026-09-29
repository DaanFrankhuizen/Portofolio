import Image from "next/image";
import Icon from "@/components/Icon";
import InkText from "@/components/InkText";
import SectionLabel from "@/components/SectionLabel";
import SectionRedlines from "@/components/SectionRedlines";
import { GITHUB_URL, projects } from "@/data/site";

// Scroll progress (0–1) at which an element starts to build.
const at = (s) => ({ "--s": s });

function ProjectCard({ project, n }) {
  const { title, year, desc, tags, live, code, image } = project;
  return (
    // Each card is its own build group, so cards further down build later.
    <article
      data-sb
      className="b-fill flex flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1.5 hover:border-ink hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,.35)]"
      style={at(0)}
    >
      <div
        className="b-fill relative grid aspect-[16/10] place-items-center border-b border-line bg-bg bg-[repeating-linear-gradient(135deg,var(--line)_0_1px,transparent_1px_11px)]"
        style={at(0.1)}
      >
        {image ? (
          <Image
            src={image}
            alt={`Screenshot of ${title}`}
            fill
            sizes="(min-width: 1100px) 600px, 100vw"
            className="b-img object-cover"
            style={at(0.2)}
          />
        ) : (
          <span className="rounded-md border border-line bg-surface px-2.5 py-[5px] font-mono text-xs text-muted">
            project screenshot
          </span>
        )}
        <span className="b-fill absolute left-4 top-4 rounded-full bg-ink px-[9px] py-1 font-mono text-xs text-bg" style={at(0.3)}>
          {n}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3.5 p-[clamp(20px,2.5vw,28px)]">
        <div className="flex items-baseline justify-between gap-3">
          <h3
            className="display m-0 text-[clamp(24px,2.4vw,30px)] leading-[1.05] tracking-[-.03em] [font-stretch:108%]">
            <InkText text={title} from={0.15} spread={0.2} />
          </h3>
          <span className="flex-none font-mono text-xs text-muted">{year}</span>
        </div>
        <p className="b-box b-muted m-0 text-base text-muted [text-wrap:pretty]" style={at(0.25)}>
          {desc}
        </p>
        <ul aria-label="Technologies" className="m-0 flex list-none flex-wrap gap-1.5 p-0">
          {tags.map((t, i) => (
            <li key={t} className="b-fill rounded-md border border-line px-[9px] py-1 font-mono text-xs" style={at(0.3 + i * 0.04)}>
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-2.5 pt-2.5">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live site: ${title}`}
              className="b-fill inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-[18px] text-[15px] font-semibold text-bg transition-transform duration-200 hover:-translate-y-0.5"
              style={at(0.4)}
            >
              Live
              <Icon name="arrow-up-right" className="h-4 w-4" />
            </a>
          )}
          {code && (
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Source code on GitHub: ${title}`}
              className="b-fill inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-[18px] text-[15px] font-semibold transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-ink"
              style={at(0.45)}
            >
              <Icon name="github" className="h-4 w-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-h" data-sb className="relative scroll-mt-[68px] border-t border-line">
      <SectionRedlines name="Projects" />
      <div className="container-page section-pad">
        <div className="mb-[clamp(36px,5vw,64px)] flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-7">
            <SectionLabel n="02">Projects</SectionLabel>
            <h2 id="projects-h" data-m="title" className="b-box section-heading" style={at(0.05)}>
              <InkText text="Selected work" from={0.05} spread={0.2} />
            </h2>
          </div>
          <a
            href={`${GITHUB_URL}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="b-fill inline-flex min-h-11 items-center gap-2 border-b-[1.5px] border-ink font-semibold"
            style={at(0.2)}
          >
            All repositories on GitHub
            <Icon name="arrow-up-right" className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-[clamp(20px,2.5vw,32px)] [grid-template-columns:repeat(auto-fill,minmax(min(100%,520px),1fr))]">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} n={String(i + 1).padStart(2, "0")} />
          ))}
        </div>
      </div>
    </section>
  );
}
