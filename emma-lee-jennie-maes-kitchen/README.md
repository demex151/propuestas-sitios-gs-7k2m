# Emma-Lee & Jennie-Mae's Kitchen — mockup site (NOT published)
Static multi-page site: index.html, menu.html, gallery.html, reviews.html, about.html, contact.html. Open index.html or serve folder. No build step, no CDN, system fonts only.
Palette: {'bg': '#2A1A14', 'ink': '#FBF3E4', 'acc': '#E0794B', 'acc2': '#7FA27A', 'muted': '#D2BFA6'} · Display font stack: "Palatino Linotype","Book Antiqua",Palatino,serif · Body: "Optima","Candara",sans-serif

## Real (from info.md)
Name, address shown (Main St, Loris, SC), phone (843) 716-0083, hours NOT shown, rating 4.7, services "Southern home-style cooking", 0 review excerpts with date attribution, Facebook link.

## Placeholders / mockup
- Photos: 4 public images (Restaurantji/localdatacdn) used ONLY for preview; they belong to their owners — replace with owner-approved photos before publishing.

- Contact form is client-side only and sends nothing. Page has noindex.
- Hero motion is abstract SVG/CSS art, not a depiction of the business.

## Unverified / omitted
- Street number: 4957 vs 3970 Main St conflicting — site shows only "Main St, Loris"
- Hours unknown — no open-now indicator, “call for hours” instead
- Review count ≈75–83 conflicting — shown as rating only
- No review quotes collected

## Rediseño visual (4 nov 2026)
- Tipografías locales (OFL, Google Fonts) en `assets/fonts/`, cargadas con `@font-face` + `font-display:swap` (`assets/fonts.css`). Sin CDN.
- Capa visual `assets/premium.css` + `assets/premium.js`: hero cinematográfico propio, grano, viñeta, haz de luz, parallax, barra de progreso, nav de cristal al hacer scroll, botones magnéticos, contadores, transiciones entre páginas (View Transitions con fallback de fundido). Respeta `prefers-reduced-motion`.
- Las fotos `c-foto*-N.jpg` son recortes de los collages públicos de Restaurantji (mismas fotos, solo separadas). Siguen siendo de sus dueños; solo para maqueta.
- No se usaron imágenes de stock. No se añadieron datos nuevos: todo el texto del hero sale del contenido verificado ya existente.
