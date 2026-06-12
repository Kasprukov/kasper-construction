// Global site content & navigation (route-based).

export const brand = {
  name: 'Kasper',
  since: 2012,
  tagline: 'Будівельна студія повного циклу',
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
  address: 'Київ, вул. Велика Васильківська, 100',
  hours: 'Пн–Пт, 9:00–19:00',
  socials: [
    { label: 'Instagram', short: 'IG', href: '#' },
    { label: 'Facebook', short: 'FB', href: '#' },
    { label: 'Behance', short: 'Be', href: '#' },
    { label: 'LinkedIn', short: 'In', href: '#' },
  ],
}

export const stats = [
  { value: 13, suffix: '', label: 'років на ринку' },
  { value: 700, suffix: '+', label: 'завершених проєктів' },
  { value: 480, suffix: 'k', label: 'мІ збудовано' },
  { value: 64, suffix: '', label: 'людей у команді' },
]

export const clients = [
  'NOVATEK', 'ARRICANO', 'KOVALSKA', 'DIM GROUP', 'INTERGAL', 'SAGA', 'GREENOL', 'RIVERSIDE',
]

export const home = {
  hero: {
    kicker: 'Будівельна студія повного циклу · Київ',
    title: ['Організація, управління', 'та нагляд за будівництвом'],
    text:
      'Будуємо житло й комерцію під ключ — і самі контролюємо якість, щоб вам не доводилось перевіряти за нами.',
    image: '/img/hero-construction.jpg',
  },
  aboutTeaser: {
    kicker: 'Про студію',
    title: 'Будуємо так, щоб не соромно було повернутись через 10 років',
    text:
      'Kasper — це інженери, архітектори й будівельники, які ведуть обʼєкт від першого ескізу до ключів. За бюджет, строки та якість відповідаємо ми, а не «субпідрядник субпідрядника».',
    image: '/img/int-1.jpg',
  },
}

export const cta = {
  kicker: 'Є проєкт на думці?',
  title: 'Розкажіть, що плануєте',
  text: 'Залиште заявку — передзвонимо протягом робочого дня, без довгих анкет і навʼязливих менеджерів.',
}
