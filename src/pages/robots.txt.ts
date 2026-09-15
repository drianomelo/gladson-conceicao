export function GET({ site }: { site: URL | undefined }) {
  const base = site ?? new URL("https://gladsonconceicao.com.br");
  return new Response(
    [
      `User-agent: *`,
      `Allow: /`,
      `Sitemap: ${new URL("sitemap.xml", base)}`,
      ``,
    ].join("\n"),
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
}
