import { Link } from 'react-router-dom'
import PageWrap from '../components/PageWrap'
import useLocale from '../hooks/useLocale'

export default function NotFound() {
  const { loc } = useLocale()
  return (
    <PageWrap>
      <section className="notfound">
        <div className="container notfound__inner">
          <span className="notfound__code">404</span>
          <h1 className="notfound__title">{loc({ uk: 'Сторінку не знайдено', en: 'Page not found' })}</h1>
          <p className="notfound__text">{loc({ uk: 'Можливо, її переміщено або вона ще будується.', en: 'It may have moved, or it’s still under construction.' })}</p>
          <Link className="btn btn--accent btn--lg" to="/">{loc({ uk: 'На головну', en: 'Back home' })}</Link>
        </div>
      </section>
    </PageWrap>
  )
}
