import PageWrap from '../components/PageWrap'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'

const content = {
  privacy: {
    title: 'Політика конфіденційності',
    desc: 'Як ми збираємо, використовуємо та захищаємо ваші персональні дані.',
    sections: [
      { h: 'Які дані ми збираємо', p: 'Імʼя, телефон, email та повідомлення, які ви залишаєте через форму заявки, а також знеособлену статистику відвідувань.' },
      { h: 'Як ми використовуємо дані', p: 'Виключно для звʼязку з вами щодо вашого запиту та покращення сервісу. Ми не передаємо ваші дані третім сторонам для маркетингу.' },
      { h: 'Зберігання та захист', p: 'Дані зберігаються на захищених серверах і доступні лише уповноваженим співробітникам. Ми вживаємо технічних та організаційних заходів для їх захисту.' },
      { h: 'Ваші права', p: 'Ви можете запросити доступ, виправлення або видалення своїх даних, написавши нам на email, вказаний у контактах.' },
    ],
  },
  cookies: {
    title: 'Політика щодо cookie',
    desc: 'Які файли cookie ми використовуємо та як ними керувати.',
    sections: [
      { h: 'Що таке cookie', p: 'Cookie — це невеликі текстові файли, які зберігаються у вашому браузері та допомагають сайту працювати коректно.' },
      { h: 'Які cookie ми використовуємо', p: 'Технічні (необхідні для роботи сайту) та аналітичні (знеособлена статистика відвідувань). Аналітика вмикається лише після вашої згоди.' },
      { h: 'Керування cookie', p: 'Ви можете прийняти або відхилити аналітичні cookie у банері згоди, а також очистити їх у налаштуваннях браузера в будь-який момент.' },
    ],
  },
}

export default function Legal({ kind = 'privacy' }) {
  const data = content[kind] || content.privacy
  const path = kind === 'cookies' ? '/cookies' : '/privacy'
  return (
    <PageWrap>
      <Seo title={data.title} description={data.desc} path={path} />
      <PageHero
        kicker="Юридична інформація"
        title={data.title}
        text={data.desc}
        image="/img/int-3.jpg"
        crumbs={[{ label: data.title }]}
      />
      <section className="section">
        <div className="container article">
          {data.sections.map((s, i) => (
            <Reveal className="legal__block" key={s.h} delay={(i % 4) * 0.05}>
              <h2 className="legal__h">{s.h}</h2>
              <p className="article__p">{s.p}</p>
            </Reveal>
          ))}
          <p className="legal__updated">Оновлено: червень 2026</p>
        </div>
      </section>
    </PageWrap>
  )
}
