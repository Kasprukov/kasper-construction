import { clients } from '../data/site'

export default function Clients() {
  const track = [...clients, ...clients]
  return (
    <section className="clients section" aria-label="Клієнти та партнери">
      <div className="container">
        <p className="clients__caption">Нам довіряють девелопери та бренди</p>
      </div>
      <div className="clients__marquee">
        <div className="clients__track">
          {track.map((c, i) => (
            <span className="clients__item" key={i} aria-hidden={i >= clients.length}>{c}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
