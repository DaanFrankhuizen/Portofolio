import Icon from "@/components/Icon";
import { socials } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-[color-mix(in_oklab,var(--bg)_22%,transparent)] bg-ink text-bg">
      <div className="container-page flex flex-wrap items-center justify-between gap-4 py-7">
        <span className="font-mono text-[13px]">Daan Frankhuizen © {new Date().getFullYear()}</span>
        <div className="flex items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${s.name} profile (opens in new tab)`}
              className="grid h-11 w-11 place-items-center rounded-full border border-[color-mix(in_oklab,var(--bg)_25%,transparent)] transition-[transform,background,color] duration-200 hover:-translate-y-0.5 hover:bg-accent hover:text-on-accent"
            >
              <Icon name={s.icon} />
            </a>
          ))}
          <a href="#top" className="ml-2 inline-flex min-h-11 items-center gap-1.5 font-mono text-[13px]">
            Back to top
            <Icon name="arrow-up" className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
