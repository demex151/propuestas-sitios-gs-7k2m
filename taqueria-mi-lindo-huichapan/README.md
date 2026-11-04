# Taqueria Mi Lindo Huichapan — mockup site (preview only)

Static multi-page site (index.html, services.html, gallery.html, reviews.html, about.html, contact.html). Open index.html directly or serve the folder. No build step, no CDN, fonts bundled locally (assets/fonts, OFL Google Fonts).

**Mockup notice:** built only from public data in ../info.md for an internal preview. NOT published. Photos belong to their owners; any photo used is for preview only and must be replaced with owner-approved photos before publishing. The contact form validates client-side and sends NOTHING. Page has `noindex`.

## Real (from info.md)
Name, street address, phone(s), hours, rating 4.9★ / 18 reviews, review excerpts with dates and attribution, listed social links.

## Placeholders
- Tiles marked "Foto del negocio pendiente" — swap by replacing the `.ph` div with `<img src="assets/your.jpg" alt="...">`.
- Prices shown as "ask / quote" (none verified). Hero art is abstract animated SVG, not business imagery.

## Unverified / conflicting (not presented as fact)
- Full menu and prices NOT VERIFIED — only carnitas and asada (from reviews) are named
- Food-truck location may change; address shown as listed


## Visual polish (Nov 4, 2026)
- Fonts (SIL OFL, bundled woff2): display 'Bebas Neue' + body 'Karla'.
- Added assets/premium.css + assets/premium.js: page transitions, scroll progress, magnetic CTAs, cursor glow, parallax, tilt cards, animated dividers, grain/vignette.
- Illustrative stock images (NOT the business's own photos; atmosphere only, never in gallery). Footer shows 'Imágenes ilustrativas':
  - assets/mood-pastor.webp: “01 Tacos al Pastor” by William Neuheisel, CC BY 2.0, https://commons.wikimedia.org/wiki/File:01_Tacos_al_Pastor.jpg
  - assets/mood-carnitas.webp: “Tacos Carnitas” by Jess Lander, CC BY 2.0, https://commons.wikimedia.org/wiki/File:Tacos_Carnitas.jpg
