import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import {
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
  HiOutlineArrowTopRightOnSquare,
} from 'react-icons/hi2'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const publicAsset = (path) => `${import.meta.env.BASE_URL}${path}`

const projects = [
  {
    name: 'B-Finances',
    eyebrow: 'Gestão financeira pessoal',
    description:
      'Uma plataforma para organizar receitas, despesas, cartões, contas recorrentes e investimentos. O painel reúne indicadores e projeções para ajudar a acompanhar a vida financeira com mais clareza.',
    github: 'https://github.com/Pedroo07/B-Finances',
    live: 'https://b-finances.vercel.app/',
    images: [
      { file: 'Dashboard.png', alt: 'Painel geral do B-Finances' },
      { file: 'Transações.png', alt: 'Histórico de transações financeiras' },
      { file: 'Sessão-de-cartões.png', alt: 'Área de cartões e faturas' },
      { file: 'Contas-a-pagar.png', alt: 'Contas a pagar e recorrências' },
      { file: 'Investimentos.png', alt: 'Área de investimentos' },
      {
        file: 'organize-suas-finaças-pelo-whatssap.png',
        alt: 'Assistente financeiro pelo WhatsApp',
        presentation: 'phone',
      },
    ],
  },
  {
    name: 'B-Training',
    eyebrow: 'Treinos personalizados',
    description:
      'Uma experiência de treino que reúne catálogo de exercícios, montagem de treinos personalizados e acompanhamento da evolução. As telas mostram o fluxo desde a criação da conta até a execução do treino em tempo real.',
    github: 'https://github.com/Pedroo07/B-Trainning',
    live: 'https://b-training.vercel.app/',
    images: [
      { file: 'treine-com-facilidade.png', alt: 'Apresentação do B-Training' },
      { file: 'Crie-sua-conta.png', alt: 'Criação de conta no B-Training' },
      { file: 'Catálogo-de-exercíos.png', alt: 'Catálogo de exercícios' },
      { file: 'monte-seu-treino.png', alt: 'Montagem de um treino personalizado' },
      { file: 'Treino-Personalizado.png', alt: 'Detalhes do treino personalizado' },
      {
        file: 'treine-em-tempo-real.png',
        alt: 'Execução do treino em tempo real',
        presentation: 'phone',
      },
      { file: 'evolução.png', alt: 'Acompanhamento da evolução dos treinos' },
    ],
  },
]

function ProjectCard({ project, index }) {
  const [activeImage, setActiveImage] = useState(0)
  const image = project.images[activeImage]
  const projectPath = project.name === 'B-Finances' ? 'B-finances' : 'B-training'
  const imageUrl = publicAsset(`Projetos/${projectPath}/${image.file}`)
  const isPhoneScreenshot = image.presentation === 'phone'

  const showImage = (nextIndex) => {
    const imageCount = project.images.length
    setActiveImage((nextIndex + imageCount) % imageCount)
  }

  return (
    <Reveal
      delay={index * 100}
      className="group overflow-hidden rounded-[1.8rem] border border-white/10 bg-slate-950/55 transition duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:shadow-[0_24px_50px_rgba(2,8,23,0.35)]"
    >
      <div className="relative overflow-hidden bg-slate-900">
        {isPhoneScreenshot ? (
          <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-slate-950">
            <img
              src={imageUrl}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full scale-110 object-cover opacity-35 blur-2xl"
            />
            <div className="absolute inset-0 bg-slate-950/45" />

            <div className="relative z-10 h-[98%] aspect-[9/19.5] rounded-[2rem] border-[5px] border-slate-700 bg-black p-1 shadow-[0_18px_45px_rgba(0,0,0,0.65)]">
              <div className="h-full w-full overflow-hidden rounded-[1.55rem] bg-slate-950">
                <img
                  key={image.file}
                  src={imageUrl}
                  alt={image.alt}
                  className="h-full w-full scale-[1.03] object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => showImage(activeImage - 1)}
              aria-label={`Imagem anterior de ${project.name}`}
              className="absolute left-3 top-1/2 z-20 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/75 text-white transition hover:border-sky-300/60 hover:bg-sky-400/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 sm:left-5"
            >
              <HiOutlineArrowLeft aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => showImage(activeImage + 1)}
              aria-label={`Próxima imagem de ${project.name}`}
              className="absolute right-3 top-1/2 z-20 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/75 text-white transition hover:border-sky-300/60 hover:bg-sky-400/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 sm:right-5"
            >
              <HiOutlineArrowRight aria-hidden="true" />
            </button>

            <span
              className="absolute bottom-3 left-3 z-10 max-w-[30%] break-words rounded-lg border border-white/10 bg-slate-950/80 px-2.5 py-1.5 text-[10px] font-medium leading-4 text-white/90 backdrop-blur-sm sm:bottom-4 sm:left-4 sm:text-xs"
              aria-live="polite"
            >
              {image.alt}
            </span>
          </div>
        ) : (
          <div className="relative">
            <img
              key={image.file}
              src={imageUrl}
              alt={image.alt}
              className="aspect-[16/9] w-full object-cover"
              loading="lazy"
            />

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent px-5 pb-4 pt-12">
              <span className="text-xs font-medium text-white/90" aria-live="polite">
                {image.alt}
              </span>
              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={() => showImage(activeImage - 1)}
                  aria-label={`Imagem anterior de ${project.name}`}
                  className="inline-flex size-9 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-white transition hover:border-sky-300/60 hover:bg-sky-400/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                >
                  <HiOutlineArrowLeft aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => showImage(activeImage + 1)}
                  aria-label={`Próxima imagem de ${project.name}`}
                  className="inline-flex size-9 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-white transition hover:border-sky-300/60 hover:bg-sky-400/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                >
                  <HiOutlineArrowRight aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="space-y-6 p-6 sm:p-7">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200/70">
            {project.eyebrow}
          </p>
          <h3 className="font-display text-2xl text-white sm:text-3xl">
            {project.name}
          </h3>
          <p className="text-sm leading-7 text-slate-300 sm:text-base">
            {project.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir ${project.name} no site publicado em nova guia`}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-sky-300 px-3 text-sm font-bold text-slate-950 transition hover:bg-sky-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200"
          >
            <HiOutlineArrowTopRightOnSquare aria-hidden="true" className="text-base" />
            Acessar projeto
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir repositório do ${project.name} no GitHub em nova guia`}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-3 text-sm font-semibold text-slate-100 transition hover:border-sky-300/40 hover:bg-sky-300/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200"
          >
            <FaGithub aria-hidden="true" className="text-base" />
            GitHub
          </a>
        </div>

        <div className="flex items-center justify-center gap-1.5" aria-label={`Imagem ${activeImage + 1} de ${project.images.length}`}>
          {project.images.map((item, dotIndex) => (
            <button
              key={item.file}
              type="button"
              onClick={() => setActiveImage(dotIndex)}
              aria-label={`Mostrar imagem ${dotIndex + 1}: ${item.alt}`}
              aria-pressed={dotIndex === activeImage}
              className={`h-1.5 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 ${
                dotIndex === activeImage
                  ? 'w-6 bg-sky-300'
                  : 'w-1.5 bg-white/25 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </Reveal>
  )
}

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
            title="Projetos que já estão no ar."
            description="Produtos que desenvolvi para resolver necessidades reais, com atenção à experiência, às regras de negócio e aos detalhes de cada fluxo."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
