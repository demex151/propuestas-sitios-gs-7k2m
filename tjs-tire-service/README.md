# T J's Tire Service — mockup site (preview only)

Static multi-page site (index.html, services.html, gallery.html, reviews.html, about.html, contact.html). Open index.html directly or serve the folder. No build step, no CDN, fonts bundled locally (assets/fonts, OFL Google Fonts).

**Mockup notice:** built only from public data in ../info.md for an internal preview. NOT published. Photos belong to their owners; any photo used is for preview only and must be replaced with owner-approved photos before publishing. The contact form validates client-side and sends NOTHING. Page has `noindex`.

## Real (from info.md)
Name, city only, phone(s), rating 4.8★ / 68 reviews, listed social links.

## Placeholders
- Tiles marked "Foto del negocio pendiente" — swap by replacing the `.ph` div with `<img src="assets/your.jpg" alt="...">`.
- Prices shown as "ask / quote" (none verified). Hero art is abstract animated SVG, not business imagery.

## Unverified / conflicting (not presented as fact)
- Two addresses listed (2910 9th Ave and 1311 4th Ave, Conway) — conflicting, so only 'Conway, SC' is shown; map link searches name + city
- Two phone numbers listed; both shown as published
- Hours NOT VERIFIED
- No review quotes available — reviews page shows rating only
- No social profiles verified


## Visual polish (Nov 4, 2026)
- Fonts (SIL OFL, bundled woff2): display 'Oswald' + body 'IBM Plex Sans'.
- Added assets/premium.css + assets/premium.js: page transitions, scroll progress, magnetic CTAs, cursor glow, parallax, tilt cards, animated dividers, grain/vignette.
- No stock images used; hero art is abstract/animated SVG.
