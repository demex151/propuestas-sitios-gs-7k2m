# R&J Seafood — mockup site (NOT published)
Static multi-page site: index.html, menu.html, gallery.html, reviews.html, about.html, contact.html. Open index.html or serve folder. No build step, no CDN, system fonts only.
Palette: {'bg': '#06242B', 'ink': '#F3EFE6', 'acc': '#F2B04B', 'acc2': '#2F8F9D', 'muted': '#9DBFC2'} · Display font stack: "Didot","Bodoni MT","Playfair Display",Georgia,serif · Body: "Gill Sans","Trebuchet MS",sans-serif

## Real (from info.md)
Name, address shown (1620 US-701 Hwy, Loris, SC 29569), phone (843) 716-0161, hours shown, rating 4.7 / 120 reviews, services "Seafood (market / prepared food)", 2 review excerpts with date attribution, Facebook link.

## Placeholders / mockup
- Photos: 3 public images (Restaurantji/localdatacdn) used ONLY for preview; they belong to their owners — replace with owner-approved photos before publishing.

- Contact form is client-side only and sends nothing. Page has noindex.
- Hero motion is abstract SVG/CSS art, not a depiction of the business.

## Unverified / omitted
- Prices / daily market prices
- Old domain randjseafoodsc.com is dead
- Second Facebook page facebook.com/Fredricka40 not linked
- Mixed reviews (Nov 9 2025, Jun 28 2025) not featured
- Nota (4 nov): foto1 original era una captura de texto, se quitó; se usan recortes de foto2 (rj-*.jpg). Los fotos son vista previa.

## Rediseño visual (4 nov 2026)
- Tipografías locales (OFL, Google Fonts) en `assets/fonts/`, cargadas con `@font-face` + `font-display:swap` (`assets/fonts.css`). Sin CDN.
- Capa visual `assets/premium.css` + `assets/premium.js`: hero cinematográfico propio, grano, viñeta, haz de luz, parallax, barra de progreso, nav de cristal al hacer scroll, botones magnéticos, contadores, transiciones entre páginas (View Transitions con fallback de fundido). Respeta `prefers-reduced-motion`.
- Las fotos `c-foto*-N.jpg` son recortes de los collages públicos de Restaurantji (mismas fotos, solo separadas). Siguen siendo de sus dueños; solo para maqueta.
- No se usaron imágenes de stock. No se añadieron datos nuevos: todo el texto del hero sale del contenido verificado ya existente.
