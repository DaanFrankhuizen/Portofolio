import Image from "next/image";
import Icon from "@/components/Icon";
import InkText from "@/components/InkText";
import Redlines from "@/components/Redlines";
import { socials } from "@/data/site";

// Delay (in seconds) before an element "colors in" from its wireframe state.
const at = (s) => ({ "--d": `${s}s` });

function Portrait({ className, sizes }) {
  return (
    <span className={`b-fill relative overflow-hidden rounded-full bg-surface ${className}`} style={at(1)}>
      <Image
        src="/profile.png"
        alt="Portrait of Daan Frankhuizen"
        fill
        sizes={sizes}
        priority
        className="b-img object-cover"
        style={at(1.1)}
      />
    </span>
  );
}

const heroSocials = socials.filter((s) => s.name !== "Instagram");

export default function Hero() {
  return (
    <section
      aria-label="Intro"
      className="container-page relative pb-[clamp(56px,8vw,112px)] pt-[clamp(40px,8vw,96px)]"
    >
      <Redlines />

      <div
        className="b-box b-muted flex flex-wrap justify-between gap-x-6 gap-y-2.5 font-mono text-[13px] uppercase tracking-[.04em] text-muted"
        style={at(0.9)}
      >
        <span className="flex items-center gap-2.5">
          <span
            className="b-fill h-2 w-2 rounded-full bg-accent shadow-[0_0_0_3px_color-mix(in_oklab,var(--accent)_30%,transparent)]"
            style={at(1.5)}
          />
          Webdeveloper · Designer · Creative problem solver
        </span>
        <span>Web Development</span>
      </div>

      {/* Mobile: portrait above the name */}
      <div className="mt-9 nav:hidden">
        <Portrait className="block h-28 w-28" sizes="112px" />
      </div>

      <h1
        data-m="title"
        className="b-box display m-0 mt-[clamp(24px,4vw,48px)] text-[clamp(40px,11.2vw,166px)] leading-[.9] tracking-[-.045em] [text-wrap:balance]"
        style={at(1.05)}
      >
        <span className="flex items-center gap-[.14em]">
          <span>
            <InkText text="Daan" mode="time" from={1} spread={0.15} />
          </span>
          {/* Desktop: portrait inline with the name */}
          <Portrait className="hidden h-[.86em] w-[.86em] flex-none nav:block" sizes="(min-width: 1280px) 143px, 11vw" />
        </span>
        <span className="block">
          <InkText text="Frankhuizen" mode="time" from={1.15} spread={0.45} />
        </span>
      </h1>

      <div
        data-m="grid"
        className="mt-[clamp(32px,5vw,64px)] grid items-end gap-x-16 gap-y-8 [grid-template-columns:repeat(auto-fit,minmax(min(100%,440px),1fr))]"
      >
        <div className="flex flex-col gap-7">
          <p
            className="b-box b-muted m-0 max-w-[30ch] text-[clamp(20px,2vw,26px)] leading-[1.35] tracking-[-.015em] [text-wrap:pretty]"
            style={at(1.2)}
          >
            I design and build fast, clean websites, and I&apos;ve been doing it since I was a kid in 2014.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="b-fill inline-flex min-h-[52px] items-center gap-2.5 rounded-full bg-accent px-6 font-semibold text-on-accent transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-10px_color-mix(in_oklab,var(--accent)_80%,black)]"
              style={at(1.3)}
            >
              View my work
              <Icon name="arrow-down" />
            </a>
            <a
              href="#contact"
              className="b-fill inline-flex min-h-[52px] items-center rounded-full border-[1.5px] border-ink px-6 font-semibold transition-[transform,background,color] duration-200 hover:-translate-y-0.5 hover:bg-ink hover:text-bg"
              style={at(1.35)}
            >
              Contact me
            </a>
          </div>
        </div>

        <div className="grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr))]">
          {heroSocials.map((s, i) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${s.name}: ${s.handle} (opens in new tab)`}
              className="b-fill flex items-center gap-3.5 rounded-[18px] border border-line bg-surface px-[18px] py-4 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-[3px] hover:border-ink hover:shadow-[0_14px_30px_-18px_rgba(0,0,0,.35)]"
              style={at(1.4 + i * 0.08)}
            >
              <span
                className="b-fill grid h-11 w-11 flex-none place-items-center rounded-xl bg-ink text-bg"
                style={at(1.5 + i * 0.08)}
              >
                <Icon name={s.icon} className="h-[22px] w-[22px]" />
              </span>
              <span className="flex min-w-0 flex-col leading-tight">
                <span className="font-semibold">{s.name}</span>
                <span className="font-mono text-[13px] text-muted">{s.handle}</span>
              </span>
              <span className="ml-auto">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
