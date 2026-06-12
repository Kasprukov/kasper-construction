# Kasper

Сайт будівельної студії. Темна тема, велика фотографія, плавна прокрутка й трохи анімації.
Зроблений на Vite + React, стилі — SCSS за методологією BEM.

## Запуск

Потрібен Node 18+.

```bash
npm install
npm run dev      # http://localhost:5173
```

Зібрати продакшн і подивитись локально:

```bash
npm run build
npm run preview
```

> `build` ще копіює `index.html` у `404.html` — це SPA-fallback для GitHub Pages.

## Сторінки

`/` головна, `/about`, `/services` (+ `/services/:slug`), `/projects` (+ `/projects/:slug`),
`/team`, `/journal` (+ `/journal/:slug`), `/estimate` (калькулятор), `/guarantees`,
`/contacts`, `/privacy`, `/cookies`.

## Як це влаштовано

```
src/
├─ main.jsx, App.jsx       роутинг, переходи сторінок, smooth scroll
├─ pages/                  по файлу на сторінку
├─ components/             хедер/футер, картки, форма, lightbox, фон тощо
├─ hooks/                  Lenis, лічильники, focus-trap
├─ data/                   увесь контент (тексти, проєкти, послуги, команда…)
├─ lib/                    asset() для base-шляхів, аналітика
└─ styles/                 abstracts / base / components (по партіалу на блок)
```

Контент винесений у `src/data/*` — щоб правити тексти й проєкти, не лізучи в розмітку.
Кольори й типографіка — у `src/styles/abstracts/_variables.scss`.

## Фото

Лежать у `public/img`. Поряд із кожним JPG є WebP/AVIF у трьох розмірах — їх генерує
`node scripts/optimize-images.mjs` (запускати після додавання нових картинок).
Компонент `Img` сам віддає `<picture>` з потрібним форматом.

## Налаштування (необовʼязкові)

Скопіюй `.env.example` у `.env`:

```
VITE_FORM_ENDPOINT=     # куди слати заявки (Formspree чи свій бекенд). Порожньо — форма в демо-режимі
VITE_PLAUSIBLE_DOMAIN=  # або
VITE_GA_ID=             # аналітика, вмикається лише після згоди на cookie
```

## Деплой

Налаштовано під **GitHub Pages**: при пуші в `main` спрацьовує
`.github/workflows/deploy.yml` і викладає сайт. `base` береться з назви репозиторію
автоматично, тож сайт коректно працює з підшляху `username.github.io/<repo>/`.

Хостиш деінде (Vercel/Netlify) — конфіги вже є (`vercel.json`, `netlify.toml`),
там сайт ляже на корінь домену без зайвих налаштувань.
