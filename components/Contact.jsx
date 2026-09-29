import Icon from "@/components/Icon";
import InkText from "@/components/InkText";
import SectionLabel from "@/components/SectionLabel";
import SectionRedlines from "@/components/SectionRedlines";
import { EMAIL, socials } from "@/data/site";

// Scroll progress (0–1) at which an element starts to build.
const at = (s) => ({ "--s": s });

export default function Contact() {
  return (
    // Pinned on laptops while it builds; --pin is the extra scroll distance.
    <div className="pin-track" style={{ "--pin": "100vh" }}>
      <section
        id="contact"
        aria-labelledby="contact-h"
        data-sb
        className="b-fill relative scroll-mt-[68px] bg-ink text-bg"
        style={at(0)}
      >
        <SectionRedlines name="Contact" />
        <div className="container-page py-[clamp(72px,10vw,144px)]">
          <div className="flex flex-col gap-7">
            <SectionLabel n="03" className="opacity-75">
              Contact
            </SectionLabel>
            <h2
              id="contact-h"
              data-m="title"
              className="b-box display m-0 text-[clamp(44px,9vw,136px)] leading-[.9] tracking-[-.045em] [text-wrap:balance]"
              style={at(0.1)}
            >
              <InkText text="Let's build something" from={0.1} spread={0.25} />{" "}
              <span className="text-accent">
                <InkText text="good." from={0.37} spread={0.06} />
              </span>
            </h2>
            <div className="mt-2 flex flex-wrap items-center justify-between gap-x-10 gap-y-6">
              <p
                className="b-box b-muted m-0 max-w-[40ch] text-[clamp(18px,1.8vw,22px)] [text-wrap:pretty]"
                style={at(0.2)}
              >
                Have a project, internship or idea? I&apos;d love to hear about it. I usually reply within a day or two.
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="b-fill inline-flex min-h-[60px] items-center gap-3 rounded-full bg-accent px-7 text-lg font-semibold text-on-accent transition-transform duration-200 hover:-translate-y-[3px]"
                style={at(0.3)}
              >
                <Icon name="mail" className="h-5 w-5" />
                {EMAIL}
              </a>
            </div>
          </div>

          <ul
            aria-label="Social profiles"
            className="m-0 mt-[clamp(48px,7vw,88px)] list-none border-t border-[color-mix(in_oklab,var(--bg)_22%,transparent)] p-0"
          >
            {socials.map((s, i) => (
              <li
                key={s.name}
                className="b-box border-b border-[color-mix(in_oklab,var(--bg)_22%,transparent)]"
                style={at(0.35 + i * 0.08)}
              >
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.name} profile (opens in new tab)`}
                  className="flex items-center gap-[clamp(14px,2.5vw,32px)] rounded-2xl px-[clamp(8px,1.5vw,20px)] py-[clamp(18px,2.5vw,28px)] transition-colors duration-[250ms] hover:bg-accent hover:text-on-accent"
                >
                  <Icon name={s.icon} className="h-[clamp(28px,3.4vw,44px)] w-[clamp(28px,3.4vw,44px)]" />
                  <span className="display text-[clamp(30px,5.5vw,76px)] leading-none tracking-[-.04em]">
                    <InkText text={s.name} from={0.35 + i * 0.08} spread={0.1} />
                  </span>
                  <span className="ml-auto hidden font-mono text-sm opacity-80 sm:inline">{s.handle}</span>
                  <Icon name="arrow-up-right" className="h-[clamp(20px,2.4vw,32px)] w-[clamp(20px,2.4vw,32px)]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
