# Deborah's Kitchen — mockup site (NOT published)
Static multi-page site: index.html, menu.html, gallery.html, reviews.html, about.html, contact.html. Open index.html or serve folder. No build step, no CDN, system fonts only.
Palette: {'bg': '#FFF6E8', 'ink': '#2B1D12', 'acc': '#B5452B', 'acc2': '#E9B44C', 'muted': '#6E5A48', 'light': True} · Display font stack: "Cooper Black","Bookman Old Style",Georgia,serif · Body: "Georgia","Times New Roman",serif

## Real (from info.md)
Name, address shown (1926 S Island Rd, Georgetown, SC 29440), phone (843) 545-5548, hours shown, rating 4.6 / 197 reviews, services "Southern buffet", 4 review excerpts with date attribution, Facebook link.

## Placeholders / mockup
- Photos: 4 public images (Restaurantji/localdatacdn) used ONLY for preview; they belong to their owners — replace with owner-approved photos before publishing.

- Contact form is client-side only and sends nothing. Page has noindex.
- Hero motion is abstract SVG/CSS art, not a depiction of the business.

## Unverified / omitted
- Buffet price ≈$11–12 is from reviews only (labelled as such)
- Dishes on the buffet not listed (not verified)

## Rediseño visual (4 nov 2026)
- Tipografías locales (OFL, Google Fonts) en `assets/fonts/`, cargadas con `@font-face` + `font-display:swap` (`assets/fonts.css`). Sin CDN.
- Capa visual `assets/premium.css` + `assets/premium.js`: hero cinematográfico propio, grano, viñeta, haz de luz, parallax, barra de progreso, nav de cristal al hacer scroll, botones magnéticos, contadores, transiciones entre páginas (View Transitions con fallback de fundido). Respeta `prefers-reduced-motion`.
- Las fotos `c-foto*-N.jpg` son recortes de los collages públicos de Restaurantji (mismas fotos, solo separadas). Siguen siendo de sus dueños; solo para maqueta.
- No se usaron imágenes de stock. No se añadieron datos nuevos: todo el texto del hero sale del contenido verificado ya existente.
