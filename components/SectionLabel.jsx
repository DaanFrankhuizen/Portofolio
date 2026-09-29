export default function SectionLabel({ n, children, className = "text-muted" }) {
  return (
    <span className={`eyebrow flex items-center gap-2.5 ${className}`}>
      <span className="b-fill rounded-md bg-accent px-2 py-[3px] text-on-accent">{n}</span>
      {children}
    </span>
  );
}
