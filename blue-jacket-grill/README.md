# Blue Jacket Grill — mockup site (NOT published)
Static multi-page site: index.html, menu.html, gallery.html, reviews.html, about.html, contact.html. Open index.html or serve folder. No build step, no CDN, system fonts only.
Palette: {'bg': '#0B1A2E', 'ink': '#F4EDE1', 'acc': '#E8A23A', 'acc2': '#C2412D', 'muted': '#9FB0C7'} · Display font stack: "Rockwell","Roboto Slab","Georgia",serif · Body: "Helvetica Neue",Arial,sans-serif

## Real (from info.md)
Name, address shown (240 8th Ave, Aynor, SC 29511), phone (843) 358-2433, hours shown, rating 4.7 / 44 reviews, services "Grill / local quick-service food", 4 review excerpts with date attribution, Facebook link.

## Placeholders / mockup
- Photos: 4 public images (Restaurantji/localdatacdn) used ONLY for preview; they belong to their owners — replace with owner-approved photos before publishing.

- Contact form is client-side only and sends nothing. Page has noindex.
- Hero motion is abstract SVG/CSS art, not a depiction of the business.

## Unverified / omitted
- Price range
- Full menu item list (only menu photos shown)

## Rediseño visual (4 nov 2026)
- Tipografías locales (OFL, Google Fonts) en `assets/fonts/`, cargadas con `@font-face` + `font-display:swap` (`assets/fonts.css`). Sin CDN.
- Capa visual `assets/premium.css` + `assets/premium.js`: hero cinematográfico propio, grano, viñeta, haz de luz, parallax, barra de progreso, nav de cristal al hacer scroll, botones magnéticos, contadores, transiciones entre páginas (View Transitions con fallback de fundido). Respeta `prefers-reduced-motion`.
- Las fotos `c-foto*-N.jpg` son recortes de los collages públicos de Restaurantji (mismas fotos, solo separadas). Siguen siendo de sus dueños; solo para maqueta.
- No se usaron imágenes de stock. No se añadieron datos nuevos: todo el texto del hero sale del contenido verificado ya existente.
