import { useParams, Link, Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PageWrap from '../components/PageWrap'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import Share from '../components/Share'
import ReadingProgress from '../components/ReadingProgress'
import CTA from '../components/CTA'
import useLocale from '../hooks/useLocale'
import { getPost, posts } from '../data/journal'

export default function JournalPost() {
  const { t } = useTranslation()
  const { loc } = useLocale()
  const { slug } = useParams()
  const raw = getPost(slug)
  if (!raw) return <Navigate to="/journal" replace />

  const post = loc(raw)
  const idx = posts.findIndex((p) => p.slug === slug)
  const next = loc(posts[(idx + 1) % posts.length])

  return (
    <PageWrap>
      <ReadingProgress />
      <Seo
        title={post.title}
        description={post.excerpt}
        path={`/journal/${post.slug}`}
        image={post.cover}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          datePublished: post.date,
          image: post.cover,
          author: { '@type': 'Organization', name: 'Kasper' },
        }}
      />
      <PageHero
        kicker={`${post.category} · ${post.read} ${t('labels.minRead')}`}
        title={post.title}
        text={post.excerpt}
        image={post.cover}
        crumbs={[{ label: t('nav.journal'), to: '/journal' }, { label: post.title }]}
      />

      <section className="section">
        <div className="container article">
          {post.body.map((para, i) => (
            <Reveal as="p" className="article__p" key={i} delay={(i % 3) * 0.05}>{para}</Reveal>
          ))}

          <Reveal><Share title={post.title} /></Reveal>

          <div className="article__next">
            <span className="next-project__label">{t('sections.allPosts')}</span>
            <Link className="next-project__link" to={`/journal/${next.slug}`}>
              {next.title} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </PageWrap>
  )
}
