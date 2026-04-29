import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { HiOutlineArrowUpRight } from 'react-icons/hi2'
import {
  SiCss,
  SiHtml5,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRust,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  SiZod,
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'

const publicAsset = (path) => `${import.meta.env.BASE_URL}${path}`

export const brandName = 'Pedroo.'

export const navLinks = [
  { label: 'Sobre', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Or\u00E7amento', href: '#budget' },
  { label: 'Contato', href: '#contact' },
]

const whatsappMessage =
  'Ol\u00E1, vim pelo seu portf\u00F3lio e gostaria de falar sobre um projeto.'

export const whatsappUrl = `https://wa.me/5538999367626?text=${encodeURIComponent(
  whatsappMessage,
)}`

export const heroSpecialties = [
  'Desenvolvimento Web',
  'Aplicativos Mobile',
  'APIs REST',
  'Aplica\u00E7\u00F5es Desktop',
]

export const heroLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pedroo-henrique-314677299/',
    icon: FaLinkedinIn,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Pedroo07',
    icon: FaGithub,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/henriquepedroo._/',
    icon: FaInstagram,
  },
  {
    label: 'Email',
    href: 'mailto:hello@pedroo.dev',
    icon: HiOutlineMail,
  },
  {
    label: 'WhatsApp',
    href: whatsappUrl,
    icon: FaWhatsapp,
  },
]

export const heroMetrics = [
  { label: 'Entrega orientada a negócio', value: 'SPA, SaaS e automacão' },
  { label: 'Resposta inicial', value: 'até 24h' },
  { label: 'Stack principal', value: 'React, Node e PostgreSQL' },
]

export const aboutContent = {
  eyebrow: 'Sobre mim',
  description: [
   ' Atualmente, atuo como desenvolvedor autônomo, construindo aplicações de acordo com a necessidade de cada cliente. Trabalho na área há pouco mais de 4 anos, e sou graduado em Análise e Desenvolvimento de Sistemas',

  'Tenho como principal linguagem o TypeScript, utilizando frameworks modernos e robustos que melhor se encaixam em cada aplicação, entre eles Next.js, React.js, Vue.js, Node.js e NestJS.Também possuo experiência com bancos de dados relacionais, principalmente com PostgreSQL, além de atuar no desenvolvimento mobile com React Native.'
  ],
  image: publicAsset('images/eu1.webp'),
  highlights: [
  ],
}

export const skills = [
  { name: 'TypeScript', icon: SiTypescript, tone: 'text-sky-300' },
  { name: 'JavaScript', icon: SiJavascript, tone: 'text-amber-300' },
  { name: 'React', icon: SiReact, tone: 'text-cyan-300' },
  { name: 'Vue', icon: SiVuedotjs, tone: 'text-emerald-300' },
  { name: 'PostgreSQL', icon: SiPostgresql, tone: 'text-blue-300' },
  { name: 'Next.js', icon: SiNextdotjs, tone: 'text-slate-100' },
  { name: 'NestJS', icon: SiNestjs, tone: 'text-rose-300' },
  { name: 'Node.js', icon: SiNodedotjs, tone: 'text-green-300' },
  { name: 'React Native', icon: SiReact, tone: 'text-sky-300' },
  { name: 'TailwindCSS', icon: SiTailwindcss, tone: 'text-cyan-300' },
  { name: 'HTML', icon: SiHtml5, tone: 'text-orange-300' },
  { name: 'CSS', icon: SiCss, tone: 'text-blue-300' },
  { name: 'API REST', icon: TbApi, tone: 'text-indigo-300' },
  { name: 'Prisma', icon: SiPrisma, tone: 'text-slate-200' },
  { name: 'Zod', icon: SiZod, tone: 'text-violet-300' },
  { name: 'NPM', icon: SiNpm, tone: 'text-red-300' },
  { name: 'Rust', icon: SiRust, tone: 'text-orange-200' },
]

export const projects = [
  {
    name: 'Aurora Commerce',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget magna vitae lacus gravida commodo.',
    image: publicAsset('images/project-aurora.svg'),
    link: 'https://example.com/aurora-commerce',
  },
  {
    name: 'Pulse Booking',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra ante in purus posuere tristique.',
    image: publicAsset('images/project-pulse.svg'),
    link: 'https://example.com/pulse-booking',
  },
  {
    name: 'Nova API Hub',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id lacus vitae risus luctus vulputate.',
    image: publicAsset('images/project-nova.svg'),
    link: 'https://example.com/nova-api-hub',
  },
]

export const budgetUrgencyOptions = [
  'Sem pressa',
  'Baixa',
  'M\u00E9dia',
  'Alta',
  'Urgente',
]

export const directContactLinks = [
  {
    label: 'Enviar email',
    description: 'Ideal para briefings completos, refer\u00EAncias e anexos.',
    href: 'mailto:hello@pedroo.dev?subject=Novo%20projeto%20via%20portfolio',
    icon: HiOutlineMail,
  },
  {
    label: 'Chamar no WhatsApp',
    description: 'Perfeito para alinhar escopo, prazo e valores com rapidez.',
    href: whatsappUrl,
    icon: FaWhatsapp,
  },
]

export const arrowIcon = HiOutlineArrowUpRight
