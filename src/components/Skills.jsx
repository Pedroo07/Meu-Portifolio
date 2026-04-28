import { skills } from '../data/siteData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Skills() {
  return (
    <section id="skills" className="section-anchor border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            
            description="Tecnologias que utilizo no meu dia a dia, para construir aplicações sólidas e escaláveis."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {skills.map(({ name, icon: Icon, tone }, index) => (
            <Reveal
              key={name}
              delay={index * 30}
              className="group rounded-[1.6rem] border border-white/8 bg-slate-950/45 p-5 transition duration-300 hover:-translate-y-2 hover:border-sky-400/30 hover:bg-slate-950/70 hover:shadow-[0_20px_40px_rgba(2,8,23,0.35)]"
            >
              <div className="flex h-full flex-col items-start gap-4">
                <div className="rounded-2xl border border-white/8 bg-white/4 p-3 text-2xl transition duration-300 group-hover:border-sky-300/30 group-hover:bg-sky-400/10">
                  <Icon className={tone} />
                </div>

                <p className="text-sm font-semibold text-white">{name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
