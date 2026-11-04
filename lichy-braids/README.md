# Lichy Braids — mockup site (preview only)

Static multi-page site (index.html, services.html, gallery.html, reviews.html, about.html, contact.html). Open index.html directly or serve the folder. No build step, no CDN, fonts bundled locally (assets/fonts, OFL Google Fonts).

**Mockup notice:** built only from public data in ../info.md for an internal preview. NOT published. Photos belong to their owners; any photo used is for preview only and must be replaced with owner-approved photos before publishing. The contact form validates client-side and sends NOTHING. Page has `noindex`.

## Real (from info.md)
Name, street address, phone(s), rating 5.0★ / 15 reviews, review excerpts with dates and attribution, listed social links.

## Placeholders
- Tiles marked "Foto del negocio pendiente" — swap by replacing the `.ph` div with `<img src="assets/your.jpg" alt="...">`.
- Prices shown as "ask / quote" (none verified). Hero art is abstract animated SVG, not business imagery.

## Unverified / conflicting (not presented as fact)
- Opening hours NOT VERIFIED — shows 'call to confirm', no open-now status
- Prices not verified
- Phone has a 334 area code (Alabama) as listed — kept as published
- A reviewer names 'Oluchi'; not presented as owner name


## Visual polish (Nov 4, 2026)
- Fonts (SIL OFL, bundled woff2): display 'Syne' + body 'DM Sans'.
- Added assets/premium.css + assets/premium.js: page transitions, scroll progress, magnetic CTAs, cursor glow, parallax, tilt cards, animated dividers, grain/vignette.
- No stock images used; hero art is abstract/animated SVG.
