import Reveal from './Reveal'
import SplitReveal from './SplitReveal'

export default function SectionHead({ kicker, title, lead, align = 'left', light = false }) {
  return (
    <div className={`section-head section-head--${align}${light ? ' section-head--light' : ''}`}>
      {kicker && <Reveal as="span" className="section-head__kicker">{kicker}</Reveal>}
      {title && <SplitReveal as="h2" className="section-head__title" text={title} delay={0.05} />}
      {lead && <Reveal as="p" className="section-head__lead" delay={0.1}>{lead}</Reveal>}
    </div>
  )
}
