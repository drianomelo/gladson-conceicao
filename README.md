# Gladson Conceição — Direito Sucessório

Site institucional estático desenvolvido com Astro e preparado para publicação no Cloudflare Pages.

## Requisitos

- Node.js 22.19.0 ou superior
- npm 10 ou superior

## Desenvolvimento

```sh
npm install
npx astro dev --background
```

Gerencie o servidor em segundo plano com:

```sh
npx astro dev status
npx astro dev logs
npx astro dev stop
```

## Validação

```sh
npm run check
npm run format:check
npm run build
```

O build estático é gerado em `dist/`.

## Cloudflare Pages

Configure o projeto com:

- Framework preset: `Astro`
- Production branch: `master`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`
- Node.js: definido por `.node-version`

O projeto não precisa do adaptador `@astrojs/cloudflare`, pois todas as páginas são geradas estaticamente.

Depois do primeiro deploy:

1. Adicione `gladsonconceicao.com.br` e `www.gladsonconceicao.com.br` em **Custom domains**.
2. Defina `gladsonconceicao.com.br` como domínio principal.
3. Crie uma regra de redirecionamento permanente de `www` para o domínio principal.
4. Confirme que os headers definidos em `public/_headers` estão presentes nas respostas.

## Domínio e SEO

O domínio canônico é configurado em `astro.config.mjs`. Sitemap e robots são gerados nas rotas `/sitemap.xml` e `/robots.txt`.

Caso o domínio definitivo mude, atualize `site` em `astro.config.mjs` antes de publicar.
