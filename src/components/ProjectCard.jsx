import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Img from './Img'

export default function ProjectCard({ project }) {
  return (
    <motion.li
      className="project-card"
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link className="project-card__link" to={`/projects/${project.slug}`}>
        <div className="project-card__media">
          <Img className="project-card__img" src={project.cover} alt={project.title} sizes="(min-width:1024px) 33vw, (min-width:480px) 50vw, 100vw" />
        </div>
        <div className="project-card__meta">
          <span className="project-card__tag">{project.tag} · {project.year}</span>
          <h3 className="project-card__title">{project.title}</h3>
          <span className="project-card__loc">{project.location}</span>
        </div>
        <span className="project-card__plus" aria-hidden="true">↗</span>
      </Link>
    </motion.li>
  )
}
