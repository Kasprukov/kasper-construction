import PageWrap from '../components/PageWrap'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import useLocale from '../hooks/useLocale'

const content = {
  privacy: {
    title: { uk: 'Політика конфіденційності', en: 'Privacy policy' },
    desc: { uk: 'Як ми збираємо, використовуємо та захищаємо ваші персональні дані.', en: 'How we collect, use and protect your personal data.' },
    sections: [
      { h: { uk: 'Які дані ми збираємо', en: 'What data we collect' }, p: { uk: 'Імʼя, телефон, email та повідомлення, які ви залишаєте через форму заявки, а також знеособлену статистику відвідувань.', en: 'Your name, phone, email and message left via the request form, plus anonymous visit statistics.' } },
      { h: { uk: 'Як ми використовуємо дані', en: 'How we use the data' }, p: { uk: 'Виключно для звʼязку з вами щодо вашого запиту та покращення сервісу. Ми не передаємо ваші дані третім сторонам для маркетингу.', en: 'Solely to contact you about your request and to improve the service. We don’t share your data with third parties for marketing.' } },
      { h: { uk: 'Зберігання та захист', en: 'Storage and protection' }, p: { uk: 'Дані зберігаються на захищених серверах і доступні лише уповноваженим співробітникам. Ми вживаємо технічних та організаційних заходів для їх захисту.', en: 'Data is kept on secure servers and accessible only to authorised staff. We apply technical and organisational measures to protect it.' } },
      { h: { uk: 'Ваші права', en: 'Your rights' }, p: { uk: 'Ви можете запросити доступ, виправлення або видалення своїх даних, написавши нам на email, вказаний у контактах.', en: 'You can request access to, correction of, or deletion of your data by emailing us at the address in Contacts.' } },
    ],
  },
  cookies: {
    title: { uk: 'Політика щодо cookie', en: 'Cookie policy' },
    desc: { uk: 'Які файли cookie ми використовуємо та як ними керувати.', en: 'Which cookies we use and how to manage them.' },
    sections: [
      { h: { uk: 'Що таке cookie', en: 'What cookies are' }, p: { uk: 'Cookie — це невеликі текстові файли, які зберігаються у вашому браузері та допомагають сайту працювати коректно.', en: 'Cookies are small text files stored in your browser that help the site work correctly.' } },
      { h: { uk: 'Які cookie ми використовуємо', en: 'Which cookies we use' }, p: { uk: 'Технічні (необхідні для роботи сайту) та аналітичні (знеособлена статистика відвідувань). Аналітика вмикається лише після вашої згоди.', en: 'Technical ones (required for the site) and analytics ones (anonymous visit stats). Analytics only loads after your consent.' } },
      { h: { uk: 'Керування cookie', en: 'Managing cookies' }, p: { uk: 'Ви можете прийняти або відхилити аналітичні cookie у банері згоди, а також очистити їх у налаштуваннях браузера в будь-який момент.', en: 'You can accept or decline analytics cookies in the consent banner, and clear them in your browser settings at any time.' } },
    ],
  },
}

export default function Legal({ kind = 'privacy' }) {
  const { loc } = useLocale()
  const data = content[kind] || content.privacy
  const path = kind === 'cookies' ? '/cookies' : '/privacy'
  return (
    <PageWrap>
      <Seo title={loc(data.title)} description={loc(data.desc)} path={path} />
      <PageHero
        kicker={loc({ uk: 'Юридична інформація', en: 'Legal' })}
        title={loc(data.title)}
        text={loc(data.desc)}
        image="/img/int-3.jpg"
        crumbs={[{ label: loc(data.title) }]}
      />
      <section className="section">
        <div className="container article">
          {data.sections.map((s, i) => (
            <Reveal className="legal__block" key={s.h.uk} delay={(i % 4) * 0.05}>
              <h2 className="legal__h">{loc(s.h)}</h2>
              <p className="article__p">{loc(s.p)}</p>
            </Reveal>
          ))}
          <p className="legal__updated">{loc({ uk: 'Оновлено: червень 2026', en: 'Updated: June 2026' })}</p>
        </div>
      </section>
    </PageWrap>
  )
}
