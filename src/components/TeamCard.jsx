import Reveal from './Reveal'
import Img from './Img'

export default function TeamCard({ member, index = 0 }) {
  return (
    <Reveal as="li" className="team-card" delay={(index % 3) * 0.08}>
      <div className="team-card__media">
        <Img className="team-card__img" src={member.photo} alt={member.name} sizes="(min-width:1024px) 33vw, (min-width:480px) 50vw, 100vw" />
      </div>
      <div className="team-card__body">
        <h3 className="team-card__name">{member.name}</h3>
        <span className="team-card__role">{member.role}</span>
      </div>
    </Reveal>
  )
}
