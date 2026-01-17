const els = {
  title: document.getElementById("title"),
  description: document.getElementById("description"),
  siteName: document.getElementById("siteName"),
  displayUrl: document.getElementById("displayUrl"),
  bgColor: document.getElementById("bgColor"),
  accentColor: document.getElementById("accentColor"),
  bgImageUrl: document.getElementById("bgImageUrl"),
  logoUrl: document.getElementById("logoUrl"),

  titlePreview: document.getElementById("titlePreview"),
  descriptionPreview: document.getElementById("descriptionPreview"),
  siteNamePreview: document.getElementById("siteNamePreview"),
  displayUrlPreview: document.getElementById("displayUrlPreview"),
  accentBar: document.getElementById("accentBar"),
  ogCanvas: document.getElementById("ogCanvas"),
  ogBg: document.getElementById("ogBg"),
  logo: document.getElementById("logo"),

  downloadPng: document.getElementById("downloadPng"),
  copyMeta: document.getElementById("copyMeta"),
  reset: document.getElementById("reset"),
  metaOutput: document.getElementById("metaOutput"),
};

const clamp = (n, min, max) => Math.min(max, Math.max(min, n));

function setDynamicType() {
  // Simple heuristics for title sizing based on length.
  const t = (els.title.value || "").trim();
  const d = (els.description.value || "").trim();

  const tLen = t.length;
  const dLen = d.length;

  const titleSize = clamp(86 - tLen * 0.6, 54, 86);
  const descSize = clamp(34 - dLen * 0.06, 22, 34);

  els.titlePreview.style.fontSize = `${titleSize}px`;
  els.descriptionPreview.style.fontSize = `${descSize}px`;
}

function buildMetaTags() {
  const title = (els.title.value || "").trim();
  const desc = (els.description.value || "").trim();
  const site = (els.siteName.value || "").trim();

  // These are placeholders because the builder itself cannot know where you will host the final OG image.
  const url = "https://example.com/page";
  const image = "https://example.com/og-image.png";

  const tags = [
    `<meta property="og:type" content="website">`,
    `<meta property="og:title" content="${escapeHtml(title)}">`,
    `<meta property="og:description" content="${escapeHtml(desc)}">`,
    `<meta property="og:site_name" content="${escapeHtml(site)}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:image" content="${image}">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    ``,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${escapeHtml(title)}">`,
    `<meta name="twitter:description" content="${escapeHtml(desc)}">`,
    `<meta name="twitter:image" content="${image}">`,
  ].join("\n");

  els.metaOutput.value = tags;
}

function escapeHtml(str) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function applyBgAndLogo() {
  // Background base color
  els.ogCanvas.style.background = els.bgColor.value;

  // Accent
  els.accentBar.style.background = els.accentColor.value;

  // Background image
  const bgUrl = (els.bgImageUrl.value || "").trim();
  if (bgUrl) {
    els.ogBg.style.backgroundImage =
      `linear-gradient(120deg, rgba(0,0,0,0.22), rgba(0,0,0,0.58)), url("${bgUrl}")`;
  } else {
    els.ogBg.style.backgroundImage =
      `linear-gradient(120deg, rgba(0,0,0,0.22), rgba(0,0,0,0.58))`;
  }

  // Logo
  const logoUrl = (els.logoUrl.value || "").trim();
  if (logoUrl) {
    els.logo.style.backgroundImage = `url("${logoUrl}")`;
    els.logo.style.display = "block";
  } else {
    els.logo.style.backgroundImage = "";
    els.logo.style.display = "none";
  }
}

function render() {
  els.titlePreview.textContent = (els.title.value || "").trim() || "Untitled";
  els.descriptionPreview.textContent = (els.description.value || "").trim() || "";
  els.siteNamePreview.textContent = (els.siteName.value || "").trim() || "";
  els.displayUrlPreview.textContent = (els.displayUrl.value || "").trim() || "";

  setDynamicType();
  applyBgAndLogo();
  buildMetaTags();
}

async function downloadPng() {
  // Export at true OG size: 1200x630.
  // Current display is scaled, so we temporarily scale capture.
  const node = els.ogCanvas;

  const scale = 1200 / node.getBoundingClientRect().width;

  const canvas = await html2canvas(node, {
    backgroundColor: null,
    scale: scale,
    useCORS: true, // may still fail if remote image host blocks CORS
  });

  const url = canvas.toDataURL("image/png");
  const a = document.createElement("a");
  a.href = url;
  a.download = "og-image-1200x630.png";
  a.click();
}

async function copyMeta() {
  const text = els.metaOutput.value;
  await navigator.clipboard.writeText(text);
  els.copyMeta.textContent = "Copied";
  setTimeout(() => (els.copyMeta.textContent = "Copy meta tags"), 900);
}

function resetAll() {
  els.title.value = "Your Page Title";
  els.description.value = "A short description that will appear on social previews.";
  els.siteName.value = "Example.com";
  els.displayUrl.value = "example.com/page";
  els.bgColor.value = "#0B1220";
  els.accentColor.value = "#60A5FA";
  els.bgImageUrl.value = "";
  els.logoUrl.value = "";
  render();
}

[
  els.title,
  els.description,
  els.siteName,
  els.displayUrl,
  els.bgColor,
  els.accentColor,
  els.bgImageUrl,
  els.logoUrl,
].forEach((el) => el.addEventListener("input", render));

els.downloadPng.addEventListener("click", downloadPng);
els.copyMeta.addEventListener("click", copyMeta);
els.reset.addEventListener("click", resetAll);

render();
