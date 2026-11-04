# Frank's Auto Detailing — mockup site (preview only)

Static multi-page site (index.html, services.html, gallery.html, reviews.html, about.html, contact.html). Open index.html directly or serve the folder. No build step, no CDN, fonts bundled locally (assets/fonts, OFL Google Fonts).

**Mockup notice:** built only from public data in ../info.md for an internal preview. NOT published. Photos belong to their owners; any photo used is for preview only and must be replaced with owner-approved photos before publishing. The contact form validates client-side and sends NOTHING. Page has `noindex`.

## Real (from info.md)
Name, street address, phone(s), hours, rating 5.0★ / 21 reviews, review excerpts with dates and attribution, listed social links.

## Placeholders
- Tiles marked "Foto del negocio pendiente" — swap by replacing the `.ph` div with `<img src="assets/your.jpg" alt="...">`.
- Prices shown as "ask / quote" (none verified). Hero art is abstract animated SVG, not business imagery.

## Unverified / conflicting (not presented as fact)
- Package list and prices NOT VERIFIED — services shown are only those mentioned in reviews
- Facebook URL not verified — not linked
- No photos; gallery uses placeholders


## Visual polish (Nov 4, 2026)
- Fonts (SIL OFL, bundled woff2): display 'Unbounded' + body 'Inter Tight'.
- Added assets/premium.css + assets/premium.js: page transitions, scroll progress, magnetic CTAs, cursor glow, parallax, tilt cards, animated dividers, grain/vignette.
- Illustrative stock images (NOT the business's own photos; atmosphere only, never in gallery). Footer shows 'Imágenes ilustrativas':
  - assets/mood-detail.webp: “Exterior Car detailing” by Jeffkbookoo, CC0, https://commons.wikimedia.org/wiki/File:Exterior_Car_detailing.png
