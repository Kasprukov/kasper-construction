// Translatable strings are { uk, en } leaves resolved via useLocale().loc().
// Plain values (slugs, phone, images, numbers) stay as-is.

export const brand = {
  name: 'Kasper',
  since: 2012,
}

export const nav = [
  { to: '/about', key: 'about' },
  { to: '/services', key: 'services' },
  { to: '/projects', key: 'projects' },
  { to: '/team', key: 'team' },
  { to: '/journal', key: 'journal' },
  { to: '/estimate', key: 'estimate' },
  { to: '/contacts', key: 'contacts' },
]

export const contact = {
  phone: '+380 95 179 38 53',
  email: 'studio@kasper.ua',
  address: { uk: 'Київ, вул. Велика Васильківська, 100', en: 'Kyiv, 100 Velyka Vasylkivska St.' },
  hours: { uk: 'Пн–Пт, 9:00–19:00', en: 'Mon–Fri, 9:00–19:00' },
  socials: [
    { label: 'Instagram', short: 'IG', href: '#' },
    { label: 'Facebook', short: 'FB', href: '#' },
    { label: 'Behance', short: 'Be', href: '#' },
    { label: 'LinkedIn', short: 'In', href: '#' },
  ],
}

export const stats = [
  { value: 13, suffix: '', label: { uk: 'років на ринку', en: 'years in business' } },
  { value: 700, suffix: '+', label: { uk: 'завершених обʼєктів', en: 'projects delivered' } },
  { value: 480, suffix: 'k', label: { uk: 'мІ збудовано', en: 'm² built' } },
  { value: 64, suffix: '', label: { uk: 'людей у команді', en: 'people on the team' } },
]

export const clients = [
  'NOVATEK', 'ARRICANO', 'KOVALSKA', 'DIM GROUP', 'INTERGAL', 'SAGA', 'GREENOL', 'RIVERSIDE',
]

export const home = {
  hero: {
    kicker: { uk: 'Будівельна студія повного циклу · Київ', en: 'Full-cycle construction studio · Kyiv' },
    title: {
      uk: ['Організація, управління', 'та нагляд за будівництвом'],
      en: ['Planning, management', 'and supervision of construction'],
    },
    text: {
      uk: 'Будуємо житло й комерцію під ключ — і самі контролюємо якість, щоб вам не доводилось перевіряти за нами.',
      en: 'We build homes and commercial spaces turnkey — and check the quality ourselves, so you don’t have to.',
    },
    image: '/img/hero-construction.jpg',
  },
  aboutTeaser: {
    kicker: { uk: 'Про студію', en: 'About the studio' },
    title: {
      uk: 'Будуємо так, щоб не соромно було повернутись через 10 років',
      en: 'We build so it still holds up ten years later',
    },
    text: {
      uk: 'Kasper — це інженери, архітектори й будівельники, які ведуть обʼєкт від першого ескізу до ключів. За бюджет, строки та якість відповідаємо ми, а не «субпідрядник субпідрядника».',
      en: 'Kasper is engineers, architects and builders who carry a project from the first sketch to the keys. The budget, the deadlines and the quality are on us — not on “the subcontractor’s subcontractor”.',
    },
    image: '/img/int-1.jpg',
  },
}

export const cta = {
  kicker: { uk: 'Є проєкт на думці?', en: 'Got a project in mind?' },
  title: { uk: 'Розкажіть, що плануєте', en: 'Tell us what you’re planning' },
  text: {
    uk: 'Залиште заявку — передзвонимо протягом робочого дня, без довгих анкет і навʼязливих менеджерів.',
    en: 'Leave a request — we’ll call back within a business day. No long forms, no pushy sales.',
  },
}
