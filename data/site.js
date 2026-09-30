export const GITHUB_URL = "https://github.com/DaanFrankhuizen";
export const LINKEDIN_URL = "https://www.linkedin.com/in/daan-frankhuizen-9ab238240/";
export const INSTAGRAM_URL = "https://www.instagram.com/daan.frankhuizen";

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

// `live`, `code` and `role` are optional: the matching element is hidden when left empty.
// `image` is optional: a path in /public, e.g. "/projects/portfolio.png".
export const projects = [
  {
    title: "Expertisepunt",
    year: "2026",
    role: "Lead Software Engineer",
    desc: "A medical administration application, built with React, NestJS and Python.",
    tags: ["React", "NestJS", "Python", "SQL"],
  },
  {
    title: "90plus1.nl",
    year: "2026",
    role: "Software Developer",
    desc: "A custom-built travel app for football fans.",
    tags: ["WordPress", "JavaScript"],
    live: "https://90plus1.nl",
  },
  {
    title: "utrechtunion.nl",
    year: "2025",
    role: "Software Developer",
    desc: "The website of a student talk show.",
    tags: ["WordPress", "JavaScript"],
    live: "https://utrechtunion.nl",
  },
  {
    title: "This portfolio",
    year: "2026",
    role: "Design & development",
    desc: "A hand-built personal site with light and dark themes, a site that builds itself as you scroll, and an accessibility-first component set.",
    tags: ["Next.js", "Tailwind CSS"],
    live: "https://daanfrankhuizen.nl",
    code: `${GITHUB_URL}/Portofolio`,
  },
];
