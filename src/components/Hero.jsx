import { heroLinks, heroMetrics, heroSpecialties } from '../data/siteData'
import { useRotatingText } from '../hooks/useRotatingText'
import Reveal from './Reveal'

function Hero() {
  const { text, visible } = useRotatingText(heroSpecialties)

  return (
    <section
      id="hero"
      className="section-anchor relative flex min-h-screen items-center overflow-hidden border-b border-white/10"
    >
      <div
  aria-hidden="true"
  className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.15),transparent_60%),linear-gradient(180deg,rgba(2,6,23,0.72)_0%,rgba(2,6,23,0.92)_48%,rgba(2,6,23,1)_100%),linear-gradient(135deg,rgba(14,165,233,0.18),rgba(37,99,235,0.04),transparent_72%)]"
/>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-4 pb-20 pt-28 sm:px-6 md:pt-32 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-8">
        <Reveal className="space-y-8">
          <div className="space-y-5">
            <span className="inline-flex rounded-full border border-sky-400/20 bg-sky-400/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-sky-100/75">
              Freelancer disponível para novos projetos
            </span>

            <div className="space-y-4">
              <h1 className="max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                Dev especializado em{' '}
                <span
                  aria-live="polite"
                  className={`hero-word text-sky-300 sm:min-w-[17ch] ${
                    visible ? 'hero-word-visible' : 'hero-word-hidden'
                  }`}
                >
                  {text}
                </span>
              </h1>

              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Transformando suas ideias em soluções digitais completas, com código bem estruturado, tecnologias confiáveis e foco total em desempenho, segurança e escalabilidade.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#budget"
              className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:scale-[1.02] hover:bg-sky-300"
            >
              Solicitar orçamento
            </a>

            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-[1.02] hover:border-sky-300/45 hover:bg-white/5"
            >
              Ver projetos
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            {heroLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/4 px-4 py-3 text-sm font-medium text-slate-200 transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-sky-400/45 hover:bg-sky-400/10 hover:text-white"
              >
                <Icon className="text-base text-sky-300" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="glass-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,165,233,0.08),transparent_44%,rgba(59,130,246,0.1))]"
          />

          <div className="relative flex h-full flex-col gap-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-200/60">
                  Workflow de entrega
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  Diagnóstico, produto, interface e deploy.
                </p>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              

              <div className="space-y-4">
                {heroMetrics.map((item) => (
                  <div
                    key={item.label}
                    className="border-b border-white/8 pb-4 last:border-b-0 last:pb-0"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                      {item.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Hero
