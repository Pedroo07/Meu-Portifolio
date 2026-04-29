import { arrowIcon as ArrowIcon, projects } from '../data/siteData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Projects() {
  return (
    <section
      id="projects"
      className="section-anchor border-b border-white/10 bg-[var(--section)]"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Projetos"
            title="Meus projetos."
            description=""
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal
              key={project.name}
              delay={index * 80}
              className="group overflow-hidden rounded-[1.8rem] border border-white/8 bg-slate-950/55 transition duration-300 hover:scale-[1.01] hover:border-sky-400/25 hover:shadow-[0_24px_50px_rgba(2,8,23,0.35)]"
            >
              <img
                src={project.image}
                alt={`Placeholder visual do projeto ${project.name}`}
                className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />

              <div className="space-y-5 p-6">
                <div className="space-y-3">
                  <h3 className="font-display text-2xl text-white">
                    {project.name}
                  </h3>
                  <p className="text-sm leading-7 text-slate-300">
                    {project.description}
                  </p>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition duration-300 hover:gap-3 hover:text-sky-200"
                >
                  Ver projeto
                  <ArrowIcon className="text-base" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
