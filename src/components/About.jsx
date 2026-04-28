import { aboutContent } from '../data/siteData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function About() {
  return (
    <section
      id="about"
      className="section-anchor border-b border-white/10 bg-[var(--section)]"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-24">
        <Reveal className="flex justify-center lg:justify-start">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-6 rounded-full border border-sky-400/20" />
            <img
              src={aboutContent.image}
              alt="Placeholder visual para foto de perfil do desenvolvedor"
              className="aspect-square w-full rounded-full border translate-y-6 border-white/10 object-cover shadow-[0_28px_70px_rgba(2,8,23,0.35)]"
            />
          </div>
        </Reveal>

        <Reveal delay={120} className="space-y-8">
          <SectionHeading
            eyebrow={aboutContent.eyebrow}
            title={aboutContent.title}
            description={aboutContent.description[0]}
          />

          <div className="space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
            <p>{aboutContent.description[1]}</p>
          </div>

          <ul className="grid gap-4 text-sm text-slate-300 sm:grid-cols-3">
            {aboutContent.highlights.map((item) => (
              <li
                key={item}
                className="rounded-3xl border border-white/8 bg-slate-950/40 px-5 py-4 transition duration-300 hover:border-sky-400/25 hover:bg-slate-950/60"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

export default About
