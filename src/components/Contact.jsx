import { directContactLinks } from '../data/siteData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Contact() {
  return (
    <section
      id="contact"
      className="section-anchor border-b border-white/10 bg-[var(--section)]"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Contato"
            title="Botões diretos para transformar interesse em conversa."
            description="Me envie uma mensagem, estou pronto para atender, caso queiram falar sobre escopo, prazo e proposta."
            centered
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {directContactLinks.map(({ label, description, href, icon: Icon }, index) => (
            <Reveal
              key={label}
              delay={index * 120}
              className="glass-panel rounded-[1.8rem] px-6 py-7 text-left transition duration-300 hover:-translate-y-1 hover:border-sky-400/25"
            >
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex h-full items-start gap-4"
              >
                <span className="rounded-2xl border border-white/10 bg-white/4 p-4 text-2xl text-sky-300">
                  <Icon />
                </span>

                <span className="space-y-2">
                  <span className="block text-lg font-semibold text-white">
                    {label}
                  </span>
                  <span className="block text-sm leading-7 text-slate-300">
                    {description}
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
