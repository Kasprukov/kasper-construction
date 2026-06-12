# Kasper — преміальний сайт будівельної студії

Багатосторінковий сайт у стилі **Dark Luxe / Cinematic**: графітовий фон, золотий
акцент, велика кінематографічна фотографія, мʼякі світлові сяйва, smooth-scroll і
анімовані переходи між сторінками.

## Стек
- **Vite** + **React 18**
- **react-router-dom** — багатосторінковість + плавні переходи (AnimatePresence)
- **SCSS** з методологією **BEM** (модульні партіали, токени, мікс-іни)
- **Framer Motion** — reveal-анімації, паралакс, переходи сторінок
- **Lenis** — інерційний smooth-scroll (з повагою до `prefers-reduced-motion`)
- Шрифти: **Playfair Display** (дисплей) + **Manrope** (текст), обидва з кирилицею

## Сторінки / маршрути
| Шлях | Сторінка |
|------|----------|
| `/` | Головна (cinematic hero, послуги, проєкти, цифри, тизер «про нас», CTA) |
| `/about` | Про нас (історія, цінності, процес, цифри) |
| `/services` | Послуги (сітка) |
| `/services/:slug` | Детальна сторінка послуги |
| `/projects` | Проєкти (фільтр приватні/комерційні) |
| `/projects/:slug` | Кейс проєкту (факти + галерея + «наступний») |
| `/team` | Команда |
| `/contacts` | Контакти + форма заявки |
| `*` | 404 |

## Запуск
> Потрібен Node.js 18+.

```bash
cd forma
npm install
npm run dev      # → http://localhost:5173
npm run build && npm run preview   # продакшн
```

## Структура
```
src/
├─ main.jsx                # точка входу (BrowserRouter)
├─ App.jsx                 # маршрути + переходи сторінок + smooth scroll
├─ layout/                 # Layout (Header/Footer), ScrollToTop
├─ pages/                  # Home, About, Services(+Detail), Projects(+Detail), Team, Contacts, NotFound
├─ components/             # PageHero, HomeHero, картки, CTA, форма, Reveal, ...
├─ hooks/                  # useLenis (singleton + scrollToTop), useCountUp
├─ data/                   # site / services / projects / team — увесь контент
└─ styles/
   ├─ main.scss
   ├─ abstracts/           # _variables (Dark Luxe токени), _mixins
   ├─ base/                # _reset, _typography, _layout
   └─ components/          # по партіалу на BEM-блок
```

## BEM
`block`, `block__element`, `block--modifier` (напр. `service-card`,
`service-card__title`, `btn--accent`). Токени/мікс-іни — через `@use '../abstracts' as *;`.

## Деплой (важливо)
Це SPA на `BrowserRouter` — на проді потрібен fallback усіх маршрутів на `index.html`
(Netlify `_redirects: /* /index.html 200`, Vercel rewrites, або `try_files ... /index.html`
у nginx). Інакше прямий перехід на `/about` дасть 404.

## Можливості (v2)
- **Інтро-лоадер** (раз на сесію), **film-grain** текстура, **кастомний курсор + magnetic** кнопки
- **Split-text** анімація заголовків, паралакс, reveal на скролі
- **Кейси проєктів:** lightbox-галерея (клавіатура ← → Esc) + **before/after** слайдер
- **Секції:** відгуки, **FAQ-акордеон**, **Журнал** (`/journal` + статті)
- **SEO:** `react-helmet-async` (унікальні title/OG на кожній сторінці), JSON-LD
  (`Organization`/`Service`/`Article`), `sitemap.xml`, `robots.txt`
- **i18n** uk/en (`react-i18next`) з перемикачем у хедері (інтерфейс; контент — uk)
- **Форма:** валідація + honeypot + стани (надсилання/успіх/помилка) + endpoint через env
- **Cookie-згода** + ленивий старт аналітики; **a11y:** skip-link, фокус при зміні сторінки
- **Перформанс:** `React.lazy` code-splitting по маршрутах

## Конфігурація (env, опційно)
Створи `.env` у `forma/`:
```
VITE_FORM_ENDPOINT=https://formspree.io/f/xxxx   # бекенд форми (без нього — демо-режим)
VITE_PLAUSIBLE_DOMAIN=kasper.ua                    # або:
VITE_GA_ID=G-XXXXXXX                              # Google Analytics 4
```
Без цих змінних форма працює в демо-режимі, а аналітика — no-op.

## Що легко змінити
- **Контент** — `src/data/*` (тексти, послуги, проєкти, команда, контакти).
- **Кольори/типографіка** — `src/styles/abstracts/_variables.scss`.
- **Фото** — зараз з Unsplash; підстав свої у `data/*`.
- **Форма** — `ContactForm.jsx` має заглушку `onSubmit`; підключи бекенд/сервіс.
