import { services } from "../data/services";

export function GET({ site }: { site: URL | undefined }) {
  const base = site ?? new URL("https://gladsonconceicao.com.br");
  const paths = [
    "/",
    "/areas-de-atuacao/",
    ...services.map((service) => `/areas-de-atuacao/${service.slug}/`),
    "/sobre/",
    "/contato/",
    "/politica-de-privacidade/",
  ];
  const urls = paths
    .map((path) => `<url><loc>${new URL(path, base).href}</loc></url>`)
    .join("");
  const body = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
