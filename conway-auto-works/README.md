# Conway Auto Works — mockup site (NOT published)
Static multi-page site: index.html, services.html, gallery.html, reviews.html, about.html, contact.html. Open index.html or serve folder. No build step, no CDN, system fonts only.
Palette: {'bg': '#111111', 'ink': '#F2F2F0', 'acc': '#FF5A1F', 'acc2': '#3A3A3A', 'muted': '#A7A7A2'} · Display font stack: "Impact","Haettenschweiler","Arial Narrow Bold",sans-serif · Body: "Segoe UI",Roboto,Arial,sans-serif

## Real (from info.md)
Name, address shown (3195 US-501, Conway, SC 29526), phone (843) 457-4041, hours shown, rating 4.8 / 19 reviews, services "Automotive repair", 3 review excerpts with date attribution, Facebook link.

## Placeholders / mockup
- Photos: 0 public images (Restaurantji/localdatacdn) used ONLY for preview; they belong to their owners — replace with owner-approved photos before publishing.
- No public photos: dashed "Foto del negocio pendiente" slots; drop owner photos into assets/img/ and replace the .ph divs.
- Contact form is client-side only and sends nothing. Page has noindex.
- Hero motion is abstract SVG/CSS art, not a depiction of the business.

## Unverified / omitted
- Older listing 4.9★/43 reviews (not shown)
- Prices, warranties, specific service list
- One negative review (Oct 23, 2025) about a price change is public but not featured in the carousel

## Rediseño visual (4 nov 2026)
- Tipografías locales (OFL, Google Fonts) en `assets/fonts/`, cargadas con `@font-face` + `font-display:swap` (`assets/fonts.css`). Sin CDN.
- Capa visual `assets/premium.css` + `assets/premium.js`: hero cinematográfico propio, grano, viñeta, haz de luz, parallax, barra de progreso, nav de cristal al hacer scroll, botones magnéticos, contadores, transiciones entre páginas (View Transitions con fallback de fundido). Respeta `prefers-reduced-motion`.
- Las fotos `c-foto*-N.jpg` son recortes de los collages públicos de Restaurantji (mismas fotos, solo separadas). Siguen siendo de sus dueños; solo para maqueta.
- No se usaron imágenes de stock. No se añadieron datos nuevos: todo el texto del hero sale del contenido verificado ya existente.
