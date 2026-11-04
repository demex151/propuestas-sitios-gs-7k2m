# Pawfection Grooming Salon — mockup site (preview only)

Static multi-page site (index.html, services.html, gallery.html, reviews.html, about.html, contact.html). Open index.html directly or serve the folder. No build step, no CDN, fonts bundled locally (assets/fonts, OFL Google Fonts).

**Mockup notice:** built only from public data in ../info.md for an internal preview. NOT published. Photos belong to their owners; any photo used is for preview only and must be replaced with owner-approved photos before publishing. The contact form validates client-side and sends NOTHING. Page has `noindex`.

## Real (from info.md)
Name, street address, phone(s), hours, rating 4.9★ / 63 reviews, review excerpts with dates and attribution, listed social links.

## Placeholders
- Tiles marked "Foto del negocio pendiente" — swap by replacing the `.ph` div with `<img src="assets/your.jpg" alt="...">`. One real photo used: assets/foto1.jpg
- Prices shown as "ask / quote" (none verified). Hero art is abstract animated SVG, not business imagery.

## Unverified / conflicting (not presented as fact)
- 'Bath & tidy' is a generic item — verify with owner (shown as 'ask for availability')
- Online booking NOT VERIFIED
- Owner name 'Jenn' (from Facebook) not shown on site
- One real photo (foto1.jpg via bestprosintown/localdatacdn) used; others are placeholders


## Visual polish (Nov 4, 2026)
- Fonts (SIL OFL, bundled woff2): display 'DM Serif Display' + body 'Nunito Sans'.
- Added assets/premium.css + assets/premium.js: page transitions, scroll progress, magnetic CTAs, cursor glow, parallax, tilt cards, animated dividers, grain/vignette.
- No stock images used; hero art is abstract/animated SVG.
