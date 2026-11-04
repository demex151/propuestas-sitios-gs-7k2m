# Avant Auto Repair — mockup site (NOT published)
Static multi-page site: index.html, services.html, gallery.html, reviews.html, about.html, contact.html. Open index.html or serve folder. No build step, no CDN, system fonts only.
Palette: {'bg': '#0E1420', 'ink': '#EEF3F8', 'acc': '#2FD3C8', 'acc2': '#1F6FEB', 'muted': '#9AA8BA'} · Display font stack: "Futura","Century Gothic","Avenir Next",sans-serif · Body: "Avenir","Segoe UI",Arial,sans-serif

## Real (from info.md)
Name, address shown (3411 Cates Bay Hwy, Conway, SC 29527), phone (843) 450-5922, hours shown, rating 4.8 / 69 reviews, services "Automotive repair", 0 review excerpts with date attribution.

## Placeholders / mockup
- Photos: 0 public images (Restaurantji/localdatacdn) used ONLY for preview; they belong to their owners — replace with owner-approved photos before publishing.
- No public photos: dashed "Foto del negocio pendiente" slots; drop owner photos into assets/img/ and replace the .ph divs.
- Contact form is client-side only and sends nothing. Page has noindex.
- Hero motion is abstract SVG/CSS art, not a depiction of the business.

## Unverified / omitted
- Hours and rating come from web directory results only
- No public review quotes collected, so none are shown
- Prices and specific service list

## Rediseño visual (4 nov 2026)
- Tipografías locales (OFL, Google Fonts) en `assets/fonts/`, cargadas con `@font-face` + `font-display:swap` (`assets/fonts.css`). Sin CDN.
- Capa visual `assets/premium.css` + `assets/premium.js`: hero cinematográfico propio, grano, viñeta, haz de luz, parallax, barra de progreso, nav de cristal al hacer scroll, botones magnéticos, contadores, transiciones entre páginas (View Transitions con fallback de fundido). Respeta `prefers-reduced-motion`.
- Las fotos `c-foto*-N.jpg` son recortes de los collages públicos de Restaurantji (mismas fotos, solo separadas). Siguen siendo de sus dueños; solo para maqueta.
- No se usaron imágenes de stock. No se añadieron datos nuevos: todo el texto del hero sale del contenido verificado ya existente.
