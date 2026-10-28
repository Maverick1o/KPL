import { readFile, writeFile } from "node:fs/promises";
import { renderSite } from "./site-content.mjs";

const pages = {
  "index.html": "home",
  "about.html": "about",
  "app-building.html": "app",
  "booking.html": "booking",
  "contact.html": "contact",
  "pricing.html": "pricing",
  "student-coaching.html": "students",
  "website-building.html": "website",
};
const year = new Date().getFullYear();

for (const [file, page] of Object.entries(pages)) {
  const html = await readFile(file, "utf8");
  const marker = '<div id="site">';
  const mountStart = html.indexOf(marker);
  const bodyEnd = html.indexOf("</body>");
  const mountEnd = html.lastIndexOf("</div>", bodyEnd);
  if (mountStart < 0 || bodyEnd < 0 || mountEnd < mountStart) throw new Error(`Missing site mount in ${file}`);
  const markup = renderSite(page)
    .replace("<span data-year></span>", `<span data-year>${year}</span>`)
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n");
  const output = html.slice(0, mountStart) + marker + markup + html.slice(mountEnd + "</div>".length);
  await writeFile(file, output);
  console.log(`Rendered ${file}`);
}
