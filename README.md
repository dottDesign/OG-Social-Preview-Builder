# 🎨 Social Card Studio

A playful, browser-based Open Graph and social preview image builder by **dottDesign**.

Social Card Studio helps developers, marketers, designers, and content teams create polished **1200 × 630 social sharing images**, preview them live, export them as PNG files, and generate the matching Open Graph and X/Twitter meta tags.

**Live site:** https://dottdesign.github.io/OG-Social-Preview-Builder/

---

## ✨ What it does

Social Card Studio gives you a visual workspace for building the image that appears when a webpage is shared on social platforms, messaging apps, and other services that support Open Graph metadata.

Instead of designing every social card manually, you can:

1. Add your page title and description
2. Add your site name and display URL
3. Choose a visual preset
4. Customize colours, patterns, layout, and imagery
5. Preview the card live
6. Export a 1200 × 630 PNG
7. Copy the corresponding meta tags

No design software or backend is required.

---

## 🚀 Features

### Live 1200 × 630 preview

The social card updates as you edit the content and design settings.

The working canvas uses the standard:

```text
1200 × 630
```

Open Graph image ratio.

---

### Dynamic typography

Title and description sizing automatically adapts based on content length.

This helps longer headlines fit within the social card without requiring constant manual font-size adjustments.

---

### Character counters

Live counters help keep titles and descriptions within sensible ranges.

Social platforms can crop or truncate content differently, so concise copy is still recommended.

---

### Multiple layouts

Choose from several card compositions:

- Left aligned
- Centered
- Split

This makes it easy to change the visual hierarchy without rebuilding the design.

---

### Design presets

Quick-start presets provide ready-made visual directions:

- **Midnight**
- **Sunset**
- **Lime Pop**
- **Paper**

Each preset updates the card's colour palette and background treatment while keeping your content intact.

---

### Background patterns

Add subtle visual texture using:

- Dots
- Grid
- Stripes
- No pattern

Patterns automatically use the selected accent colour.

---

### Full colour controls

Customize:

- Background colour
- Accent colour
- Primary text colour
- Secondary text colour

Colours can be selected visually or entered as hexadecimal values.

---

### Background images

Use either:

- A locally uploaded image
- A publicly accessible image URL

Uploaded files are read locally in the browser.

You can also control the image overlay strength to maintain readable text.

---

### Logo support

Add a logo using:

- Local file upload
- Remote image URL

Supported local formats include common web image formats such as:

- PNG
- JPEG
- WebP
- SVG

---

### Eyebrow / kicker text

Add a short label above the main title.

Examples:

```text
Featured
```

```text
Case Study
```

```text
New Article
```

```text
Research
```

```text
Portfolio
```

---

### Open Graph meta generation

Social Card Studio automatically generates metadata for the card.

Example:

```html
<meta property="og:type" content="website">
<meta property="og:title" content="Your Page Title">
<meta property="og:description" content="Your description">
<meta property="og:site_name" content="Example.com">
<meta property="og:url" content="https://example.com/page">
<meta property="og:image" content="https://example.com/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
```

---

### X / Twitter card metadata

The generated output also includes large-image card metadata:

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Your Page Title">
<meta name="twitter:description" content="Your description">
<meta name="twitter:image" content="https://example.com/og-image.png">
```

The complete block can be copied directly from the interface.

---

### Editable canonical and image URLs

Instead of hardcoded placeholder metadata, you can enter the actual:

```text
og:url
```

and:

```text
og:image
```

values before copying the generated tags.

---

### PNG export

Export the finished card as:

```text
social-card-1200x630.png
```

The image is rendered in the browser using `html2canvas`.

---

### Export celebration 🎉

A successful PNG export triggers a confetti celebration.

Because social metadata deserves more excitement than it usually gets.

---

### GSAP interactions

GSAP powers:

- Page entrance animations
- Hero typography reveals
- Floating decorative elements
- Button micro-interactions
- Preview feedback
- Export animations

---

### Responsive interface

The editor adapts across:

- Desktop
- Tablet
- Mobile

The preview automatically scales while retaining the true 1200 × 630 export canvas.

---

### Reduced-motion support

Animations respect:

```css
prefers-reduced-motion
```

for users who request reduced motion through their operating system or browser.

---

## 🧪 How to use Social Card Studio

### 1. Add your content

Enter:

- Page title
- Description
- Site name
- Display URL
- Optional kicker

---

### 2. Choose a preset

Start with one of the built-in visual directions:

```text
Midnight
Sunset
Lime Pop
Paper
```

Or build your own colour combination.

---

### 3. Choose a layout

Select:

```text
Left aligned
Centered
Split
```

---

### 4. Customize the background

Choose a background colour and optional pattern.

You can also upload a background image or use a remote image URL.

---

### 5. Adjust the image overlay

If you're using photography, increase the overlay strength when necessary to maintain sufficient text contrast.

---

### 6. Add your logo

Upload a logo or provide its public image URL.

---

### 7. Enter your metadata URLs

Add the final webpage URL:

```text
https://example.com/page
```

and the location where the exported social image will eventually be hosted:

```text
https://example.com/og-image.png
```

---

### 8. Export the image

Click:

```text
Download PNG
```

The finished card is exported at 1200 × 630 pixels.

---

### 9. Upload the image

Upload the exported PNG to your:

- Website
- CMS
- CDN
- Media library
- Static hosting

Then update the hosted image URL in Social Card Studio if necessary.

---

### 10. Copy the meta tags

Click:

```text
Copy meta tags
```

Then add the generated tags inside the `<head>` of your webpage.

---

## 🌐 What is Open Graph?

The **Open Graph protocol** provides metadata that helps platforms understand how a webpage should appear when shared.

A typical implementation includes:

```html
<meta property="og:title" content="Page title">
<meta property="og:description" content="Page description">
<meta property="og:url" content="https://example.com/page">
<meta property="og:image" content="https://example.com/og-image.png">
```

The image is one of the most visible parts of the shared-link experience.

Social Card Studio focuses on making that image easy to create.

---

## 📐 Why 1200 × 630?

The project uses:

```text
1200 × 630 px
```

because it is a widely used Open Graph image size and provides an aspect ratio that works well for large social sharing cards.

Different platforms may crop, resize, cache, or display images differently.

Always test important pages after deployment.

---

## 🖼 Image Guidelines

For better results:

- Use high-resolution background images
- Keep important content away from extreme edges
- Maintain strong text/background contrast
- Avoid very small logos
- Keep titles concise
- Avoid putting critical information only inside the image
- Compress final images appropriately for web delivery

Remember that social platforms may crop images differently depending on the placement.

---

## ✍️ Copy Guidelines

A good starting point is:

### Title

Approximately:

```text
40–70 characters
```

### Description

Keep it concise enough to communicate the value of the page without relying on every character being displayed.

These are practical guidelines rather than strict Open Graph limits.

---

## ⚠️ Remote Image / CORS Considerations

PNG export uses `html2canvas`.

Some external image hosts prevent browser-based canvas capture because of **Cross-Origin Resource Sharing (CORS)** restrictions.

If export fails when using a remote background or logo:

1. Try uploading the image locally instead
2. Host the image on a server that permits cross-origin access
3. Remove the remote image and test the export again

Local image uploads are generally the most dependable option for the builder.

---

## 🔒 Privacy

Social Card Studio runs primarily in the browser.

Local image uploads are read using browser APIs and used to build the preview.

The core editor does not require:

- An account
- A database
- A backend
- Server-side image generation

---

## 🛠 Built With

- HTML5
- CSS3
- Vanilla JavaScript
- [GSAP](https://gsap.com/)
- [html2canvas](https://html2canvas.hertzen.com/)
- [canvas-confetti](https://github.com/catdad/canvas-confetti)
- FileReader API
- Clipboard API
- GitHub Pages

No frontend framework is required.

---

## 💻 Tech Stack

```text
HTML · CSS · JavaScript · GSAP · html2canvas · Canvas Confetti · GitHub Pages
```

---

## 🎨 Design

Social Card Studio is part of the **dottDesign** collection of small browser-based utilities.

The interface combines:

- Bold typography
- Neo-brutalist cards
- Playful colour
- Thick borders
- Offset shadows
- Responsive layouts
- GSAP motion
- Live visual feedback

The goal is to make technical web tools useful without making them visually boring.

---

## 📂 Project Structure

A simple deployment can look like:

```text
OG-Social-Preview-Builder/
├── index.html
└── README.md
```

The application can run as a static site.

---

## 💻 Running Locally

Clone the repository:

```bash
git clone https://github.com/dottDesign/OG-Social-Preview-Builder.git
```

Move into the project directory:

```bash
cd OG-Social-Preview-Builder
```

Then open:

```text
index.html
```

directly in your browser.

You can also run a lightweight local server:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

---

## 🌐 Deployment

The project can be hosted using:

- GitHub Pages
- Cloudflare Pages
- Netlify
- Vercel
- Any standard static web host

Current live site:

https://dottdesign.github.io/OG-Social-Preview-Builder/

Repository:

https://github.com/dottDesign/OG-Social-Preview-Builder

---

## ♿ Accessibility

Social Card Studio includes accessibility-minded features such as:

- Semantic form labels
- Keyboard-accessible controls
- Visible focus states
- Responsive layouts
- High-contrast interface elements
- Reduced-motion support
- Status feedback

The generated social image should also be treated as supplementary visual content. Important page information should still exist as accessible HTML content on the destination webpage.

---

## 🗺 Roadmap

Potential future additions include:

- More card templates
- Custom font selection
- Google Fonts integration
- Font weight controls
- Custom font uploads
- Image positioning controls
- Image zoom and cropping
- Logo size controls
- Logo positioning
- Gradient backgrounds
- Custom pattern controls
- Additional export formats
- Saved design presets
- Local project history
- Import/export design configurations
- LinkedIn-specific preview mode
- Facebook-specific preview mode
- X-specific preview mode
- Automatic metadata validation
- Website metadata import
- Paste-a-URL mode
- Social image safe-zone overlays

---

## 🔗 Related dottDesign Tools

Social Card Studio is part of a growing collection of browser-based tools by **dottDesign**.

### QR Pop

Create customizable QR codes with colours, shapes, logos, error correction, and high-resolution exports.

### UTM Lab

Build clean, consistent, GA4-friendly campaign tracking URLs.

### Other tools

- Image Crop & Resize
- Accessibility Checker
- Reverse UTM
- Site Scraper

Explore more:

https://apps.devworks.space/

---

## 👨‍💻 Author

Built by **Derrick Ottenbreit / dottDesign**

GitHub:

https://github.com/dottDesign

Portfolio:

https://dottdesign.github.io/portfolio/

---

## 📄 License

For an open-source browser utility, the **MIT License** is a straightforward option if you want others to be able to use, modify, and redistribute the project.

Add a `LICENSE` file to the repository if you decide to release Social Card Studio under MIT.

---

## ⭐ Support

If Social Card Studio helps make your next shared link look a little better, consider starring the repository.

**Design it. Preview it. Ship it.**

**dottDesign**
