"use client";
import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import ThemeToggle from "@/components/ThemeToggle";
import { GITHUB_URL, LINKEDIN_URL } from "@/data/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-[color-mix(in_oklab,var(--bg)_82%,transparent)] backdrop-blur-[14px]">
        <div className="container-page flex h-[68px] items-center justify-between gap-6">
          <a href="#top" aria-label="Daan Frankhuizen, back to top" className="flex items-center gap-2.5">
            <span className="display grid h-[34px] w-[34px] place-items-center rounded-full bg-accent text-sm tracking-[-.02em] text-on-accent [font-stretch:110%]">
              DF
            </span>
            <span className="text-[15px] font-semibold tracking-[-.01em]">Daan Frankhuizen</span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-1.5 nav:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3.5 py-2 text-[15px] text-muted transition-colors duration-200 hover:bg-surface hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <span className="mx-2 h-5 w-px bg-line" />
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="icon-btn">
              <Icon name="github" />
            </a>
            <ThemeToggle />
          </nav>

          <div className="flex items-center gap-2 nav:hidden">
            <ThemeToggle className="icon-btn h-11 w-11" />
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="grid h-11 w-11 place-items-center rounded-full bg-ink text-bg"
            >
              <Icon name="menu" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-[60] flex flex-col bg-bg px-5 pb-7 nav:hidden"
        >
          <div className="flex h-[68px] items-center justify-between">
            <span className="font-mono text-[13px] text-muted">Menu</span>
            <button type="button" onClick={close} aria-label="Close menu" autoFocus className="icon-btn h-11 w-11">
              <Icon name="x" className="h-5 w-5" />
            </button>
          </div>
          <nav aria-label="Mobile" className="mt-6 flex flex-col border-t border-line">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className="display flex items-baseline justify-between border-b border-line py-[18px] text-[44px] leading-none tracking-[-.035em]"
              >
                <span>{l.label}</span>
                <span className="font-mono text-[13px] font-normal tracking-normal text-muted [font-stretch:100%]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </a>
            ))}
          </nav>
          <div className="mt-auto grid gap-2.5">
            {[
              { href: GITHUB_URL, label: "GitHub", icon: "github" },
              { href: LINKEDIN_URL, label: "LinkedIn", icon: "linkedin" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[52px] items-center gap-3 rounded-[14px] border border-line bg-surface px-[18px] font-semibold"
              >
                <Icon name={s.icon} className="h-5 w-5" />
                {s.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
