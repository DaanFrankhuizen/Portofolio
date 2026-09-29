// Splits text into letters that are "inked" one by one: the outline is drawn
// left to right, then the letter fills in (see .ink in globals.css).
//
// mode "time":   letters animate on page load, starting after `from` seconds.
// mode "scroll": letters build with scroll progress, starting at --p = `from`.
// `spread` is the time/progress between the first and the last letter.
export default function InkText({ text, from = 0, spread = 0.3, mode = "scroll" }) {
  const words = text.split(" ");
  const total = text.replace(/ /g, "").length;
  const step = total > 1 ? spread / (total - 1) : 0;
  let i = 0;

  const styleFor = (n) => (mode === "time" ? { "--d": `${from + n * step}s` } : { "--s": from + n * step });

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, w) => (
          <span key={w}>
            <span className="whitespace-nowrap">
              {[...word].map((ch, c) => (
                <span key={c} className="ink" style={styleFor(i++)}>
                  {ch}
                </span>
              ))}
            </span>
            {w < words.length - 1 && " "}
          </span>
        ))}
      </span>
    </>
  );
}
