# Mohamed Tarek Azab — Portfolio

Source code for Mohamed Tarek Azab's developer portfolio, published at
[dragonwar101.github.io](https://dragonwar101.github.io). The site presents his
full-stack development skills, projects, professional experience, and resume.

## Profile

Mohamed Tarek Azab is a full-stack developer based in Alexandria, Egypt, with
7+ years of experience building web products. His work includes Python and
Django backends, PHP and Laravel applications, Vue.js and React interfaces,
payments, integrations, and deployment.

## Technology

- Next.js 14 App Router with static export
- TypeScript, React, and Tailwind CSS
- Framer Motion
- GitHub Pages deployment

Portfolio content is maintained in `config/`.

## Local development

Requirements: Node.js and npm.

```bash
npm ci
npm run dev
```

Create a production static export with:

```bash
npm run build
```

The exported site is written to `out/`.

## Deployment

Pushing to `main` runs the GitHub Pages workflow in
`.github/workflows/publish.yml`.

## License

See [LICENSE](./LICENSE).
