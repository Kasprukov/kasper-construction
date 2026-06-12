import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// UI-chrome localisation (uk default). Domain content (project/service copy)
// stays in the data files / would come from a CMS per-locale.
const resources = {
  uk: {
    translation: {
      nav: { home: 'Головна', about: 'Про нас', services: 'Послуги', projects: 'Проєкти', team: 'Команда', journal: 'Журнал', estimate: 'Калькулятор', contacts: 'Контакти' },
      footer: { guarantees: 'Гарантії', privacy: 'Конфіденційність', cookies: 'Cookie', legal: 'Правова інформація', rights: 'Усі права захищені.', tagline: 'Будівництво та інтерʼєри під ключ. Київ · з {{year}} року.' },
      cta: {
        discuss: 'Обговорити проєкт', start: 'Почати проєкт', works: 'Дивитись роботи',
        allServices: 'Усі послуги', allProjects: 'Усі проєкти', aboutStudio: 'Про студію',
        leaveRequest: 'Залишити заявку', order: 'Замовити послугу', submit: 'Надіслати заявку',
        toHome: 'На головну', more: 'Детальніше', consult: 'Замовити консультацію',
      },
      labels: {
        nextProject: 'Наступний проєкт', included: 'Що входить', otherServices: 'Інші послуги',
        steps: 'Етапи роботи', scroll: 'Гортайте', trusted: 'Нам довіряють девелопери та бренди',
        crumbHome: 'Головна', readMore: 'Читати', minRead: 'хв читання',
      },
      form: {
        name: 'Імʼя', phone: 'Телефон', type: 'Тип проєкту', message: 'Повідомлення',
        choose: 'Оберіть напрям', namePh: 'Ваше імʼя', msgPh: 'Коротко про задачу…',
        note: 'Натискаючи кнопку, ви погоджуєтесь з політикою конфіденційності.',
        success: 'Дякуємо!', successText: 'Заявку надіслано. Ми звʼяжемось з вами найближчим часом.',
        sending: 'Надсилаємо…', error: 'Щось пішло не так. Спробуйте ще раз або зателефонуйте.',
        errName: 'Вкажіть імʼя', errPhone: 'Вкажіть коректний телефон',
        t1: 'Приватна нерухомість', t2: 'Комерційний обʼєкт', t3: 'Дизайн інтерʼєру', t4: 'Інше',
      },
      cookie: {
        text: 'Ми використовуємо cookie для аналітики.',
        accept: 'Прийняти', decline: 'Відхилити', more: 'Детальніше',
      },
      sections: {
        testimonialsKicker: 'Відгуки', testimonialsTitle: 'Що кажуть клієнти',
        faqKicker: 'FAQ', faqTitle: 'Часті запитання',
        journalKicker: 'Журнал', journalTitle: 'Думки та інсайти', allPosts: 'Усі статті',
      },
      loaderTagline: 'Будівельна студія повного циклу',
    },
  },
  en: {
    translation: {
      nav: { home: 'Home', about: 'About', services: 'Services', projects: 'Projects', team: 'Team', journal: 'Journal', estimate: 'Estimate', contacts: 'Contacts' },
      footer: { guarantees: 'Guarantees', privacy: 'Privacy', cookies: 'Cookies', legal: 'Legal', rights: 'All rights reserved.', tagline: 'Construction and interiors, turnkey. Kyiv · since {{year}}.' },
      cta: {
        discuss: 'Discuss a project', start: 'Start a project', works: 'View work',
        allServices: 'All services', allProjects: 'All projects', aboutStudio: 'About the studio',
        leaveRequest: 'Send a request', order: 'Order service', submit: 'Send request',
        toHome: 'Back home', more: 'Learn more', consult: 'Book a consultation',
      },
      labels: {
        nextProject: 'Next project', included: 'What’s included', otherServices: 'Other services',
        steps: 'Process', scroll: 'Scroll', trusted: 'Trusted by developers and brands',
        crumbHome: 'Home', readMore: 'Read', minRead: 'min read',
      },
      form: {
        name: 'Name', phone: 'Phone', type: 'Project type', message: 'Message',
        choose: 'Choose a direction', namePh: 'Your name', msgPh: 'Briefly about the task…',
        note: 'By clicking the button you agree to the privacy policy.',
        success: 'Thank you!', successText: 'Your request has been sent. We’ll get back to you shortly.',
        sending: 'Sending…', error: 'Something went wrong. Please try again or call us.',
        errName: 'Please enter your name', errPhone: 'Please enter a valid phone',
        t1: 'Private real estate', t2: 'Commercial property', t3: 'Interior design', t4: 'Other',
      },
      cookie: {
        text: 'We use cookies for analytics.',
        accept: 'Accept', decline: 'Decline', more: 'Learn more',
      },
      sections: {
        testimonialsKicker: 'Reviews', testimonialsTitle: 'What clients say',
        faqKicker: 'FAQ', faqTitle: 'Frequently asked',
        journalKicker: 'Journal', journalTitle: 'Thoughts & insights', allPosts: 'All articles',
      },
      loaderTagline: 'Full-cycle construction studio',
    },
  },
}

const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('lang') : null

i18n.use(initReactI18next).init({
  resources,
  lng: saved || 'uk',
  fallbackLng: 'uk',
  interpolation: { escapeValue: false },
})

if (typeof document !== 'undefined') document.documentElement.lang = i18n.language
i18n.on('languageChanged', (lng) => {
  if (typeof document !== 'undefined') document.documentElement.lang = lng
  if (typeof localStorage !== 'undefined') localStorage.setItem('lang', lng)
})

export default i18n
