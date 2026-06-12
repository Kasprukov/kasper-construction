import useCountUp from '../hooks/useCountUp'
import useLocale from '../hooks/useLocale'
import { stats } from '../data/site'

function Stat({ value, suffix, label }) {
  const [ref, n] = useCountUp(value)
  return (
    <div className="stat" ref={ref}>
      <div className="stat__value">{n}<span className="stat__suffix">{suffix}</span></div>
      <div className="stat__label">{label}</div>
    </div>
  )
}

export default function Stats() {
  const { loc } = useLocale()
  return (
    <section className="stats section">
      <div className="container">
        <div className="stats__grid">
          {loc(stats).map((s) => <Stat key={s.label} {...s} />)}
        </div>
      </div>
    </section>
  )
}
