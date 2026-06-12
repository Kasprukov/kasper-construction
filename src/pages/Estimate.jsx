import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PageWrap from '../components/PageWrap'
import PageHero from '../components/PageHero'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import useLocale from '../hooks/useLocale'

// Rates are in USD per m² (base, "standard" finish, turnkey scope).
const types = [
  { id: 'house', label: { uk: 'Приватний будинок', en: 'Private house' }, rate: 680 },
  { id: 'apartment', label: { uk: 'Квартира', en: 'Apartment' }, rate: 540 },
  { id: 'commercial', label: { uk: 'Комерційний обʼєкт', en: 'Commercial' }, rate: 580 },
]
const finishes = [
  { id: 'rough', label: { uk: 'Чорнове', en: 'Shell' }, k: 0.55 },
  { id: 'standard', label: { uk: 'Стандарт', en: 'Standard' }, k: 1 },
  { id: 'premium', label: { uk: 'Преміум', en: 'Premium' }, k: 1.55 },
]
const scopes = [
  { id: 'build', label: { uk: 'Лише будівництво', en: 'Construction only' }, k: 0.85 },
  { id: 'turnkey', label: { uk: 'Під ключ', en: 'Turnkey' }, k: 1 },
  { id: 'full', label: { uk: 'Під ключ + меблі', en: 'Turnkey + furniture' }, k: 1.2 },
]

const fmt = (n) => '$' + new Intl.NumberFormat('en-US').format(Math.round(n / 500) * 500)

export default function Estimate() {
  const { loc } = useLocale()
  const [type, setType] = useState(types[0].id)
  const [area, setArea] = useState(150)
  const [finish, setFinish] = useState('standard')
  const [scope, setScope] = useState('turnkey')

  const estimate = useMemo(() => {
    const tp = types.find((x) => x.id === type)
    const f = finishes.find((x) => x.id === finish)
    const s = scopes.find((x) => x.id === scope)
    const base = tp.rate * area * f.k * s.k
    return { low: base * 0.9, high: base * 1.15, perM: base / area }
  }, [type, area, finish, scope])

  const m2 = loc({ uk: 'мІ', en: 'm²' })

  return (
    <PageWrap>
      <Seo title={loc({ uk: 'Калькулятор вартості', en: 'Cost estimate' })} description={loc({ uk: 'Орієнтовний розрахунок вартості будівництва під ключ за хвилину.', en: 'A rough turnkey construction estimate in under a minute.' })} path="/estimate" />
      <PageHero
        kicker={loc({ uk: 'Калькулятор', en: 'Estimate' })}
        title={loc({ uk: 'Орієнтовна вартість за хвилину', en: 'A ballpark figure in a minute' })}
        text={loc({ uk: 'Налаштуйте параметри — і отримайте діапазон бюджету. Точний кошторис складемо після зустрічі.', en: 'Set the parameters and get a budget range. We’ll prepare an exact estimate after a meeting.' })}
        image="/img/hero-build.jpg"
        crumbs={[{ label: loc({ uk: 'Калькулятор', en: 'Estimate' }) }]}
      />

      <section className="section">
        <div className="container estimate">
          <div className="estimate__controls">
            <Reveal className="estimate__group">
              <span className="estimate__label">{loc({ uk: 'Тип обʼєкта', en: 'Property type' })}</span>
              <div className="chips">
                {types.map((o) => (
                  <button key={o.id} className={`chip${type === o.id ? ' chip--active' : ''}`} onClick={() => setType(o.id)}>{loc(o.label)}</button>
                ))}
              </div>
            </Reveal>

            <Reveal className="estimate__group" delay={0.05}>
              <span className="estimate__label">{loc({ uk: 'Площа', en: 'Area' })} — <b>{area} {m2}</b></span>
              <input className="estimate__range" type="range" min="40" max="800" step="10" value={area} onChange={(e) => setArea(+e.target.value)} />
              <div className="estimate__scale"><span>40 {m2}</span><span>800 {m2}</span></div>
            </Reveal>

            <Reveal className="estimate__group" delay={0.1}>
              <span className="estimate__label">{loc({ uk: 'Рівень оздоблення', en: 'Finish level' })}</span>
              <div className="chips">
                {finishes.map((o) => (
                  <button key={o.id} className={`chip${finish === o.id ? ' chip--active' : ''}`} onClick={() => setFinish(o.id)}>{loc(o.label)}</button>
                ))}
              </div>
            </Reveal>

            <Reveal className="estimate__group" delay={0.15}>
              <span className="estimate__label">{loc({ uk: 'Обсяг робіт', en: 'Scope of work' })}</span>
              <div className="chips">
                {scopes.map((o) => (
                  <button key={o.id} className={`chip${scope === o.id ? ' chip--active' : ''}`} onClick={() => setScope(o.id)}>{loc(o.label)}</button>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal className="estimate__result" delay={0.1}>
            <div className="estimate__glow" aria-hidden="true" />
            <span className="estimate__result-label">{loc({ uk: 'Орієнтовний бюджет', en: 'Estimated budget' })}</span>
            <div className="estimate__amount" aria-live="polite">
              {fmt(estimate.low)} – {fmt(estimate.high)} <span className="estimate__cur">USD</span>
            </div>
            <span className="estimate__per">≈ {fmt(estimate.perM)}/{m2} · {area} {m2}</span>
            <p className="estimate__note">
              {loc({ uk: 'Ціни вказані для України. Для країн Європи вартість може бути вищою. Це попередня оцінка для планування — фіксований кошторис складаємо після зустрічі.', en: 'Prices are for Ukraine. For European countries the cost may be higher. This is a rough figure for planning — we prepare a fixed estimate after a meeting.' })}
            </p>
            <Link className="btn btn--accent btn--block btn--lg" to="/contacts">{loc({ uk: 'Отримати точний кошторис', en: 'Get an exact estimate' })}</Link>
          </Reveal>
        </div>
      </section>
    </PageWrap>
  )
}
