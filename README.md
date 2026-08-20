# lab.sys

Website do lab.sys — sistemas, semânticas e digitalização.

## Desenvolvimento local

Requisitos: Node.js 22.13 ou superior e pnpm.

```bash
pnpm install
pnpm dev
```

## Build estático

```bash
pnpm build
```

O build gera o site estático na pasta `out/`.

## Publicação

Cada envio para a branch `main` executa o workflow de GitHub Actions e publica o conteúdo no GitHub Pages:

<https://antoniobrasiljr.github.io/lab-sys/>
