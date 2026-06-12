import { Link } from 'react-router-dom'
import PageWrap from '../components/PageWrap'

export default function NotFound() {
  return (
    <PageWrap>
      <section className="notfound">
        <div className="container notfound__inner">
          <span className="notfound__code">404</span>
          <h1 className="notfound__title">Сторінку не знайдено</h1>
          <p className="notfound__text">Можливо, її переміщено або вона ще будується.</p>
          <Link className="btn btn--accent btn--lg" to="/">На головну</Link>
        </div>
      </section>
    </PageWrap>
  )
}
