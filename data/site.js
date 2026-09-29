export const GITHUB_URL = "https://github.com/DaanFrankhuizen";
export const LINKEDIN_URL = "https://www.linkedin.com/in/daan-frankhuizen-9ab238240/";
export const INSTAGRAM_URL = "https://www.instagram.com/daan.frankhuizen";
export const EMAIL = "hello@daanfrankhuizen.nl";

export const socials = [
  { name: "GitHub", handle: "@DaanFrankhuizen", href: GITHUB_URL, icon: "github" },
  { name: "LinkedIn", handle: "Daan Frankhuizen", href: LINKEDIN_URL, icon: "linkedin" },
  { name: "Instagram", handle: "@daan.frankhuizen", href: INSTAGRAM_URL, icon: "instagram" },
];

export const stack = [
  "HTML/CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "Figma",
  "Git",
];

// `live` and `code` are optional: the matching button is hidden when left empty.
// `image` is optional: a path in /public, e.g. "/projects/portfolio.png".
export const projects = [
  {
    title: "This portfolio",
    year: "2026",
    desc: "A hand-built personal site with light and dark themes, scroll-driven motion and an accessibility-first component set.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    live: "https://daanfrankhuizen.nl",
    code: `${GITHUB_URL}/Portofolio`,
  },
  {
    title: "Project title",
    year: "2025",
    desc: "One or two sentences on the problem, what you built, and the result it had for the people using it.",
    tags: ["React", "TypeScript", "REST API"],
    code: GITHUB_URL,
  },
  {
    title: "Project title",
    year: "2025",
    desc: "One or two sentences on the problem, what you built, and the result it had for the people using it.",
    tags: ["JavaScript", "HTML/CSS", "Figma"],
    code: GITHUB_URL,
  },
  {
    title: "Project title",
    year: "2024",
    desc: "One or two sentences on the problem, what you built, and the result it had for the people using it.",
    tags: ["Next.js", "Tailwind CSS"],
    code: GITHUB_URL,
  },
];
