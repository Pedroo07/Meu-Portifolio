import { useRef, useState } from 'react'
import { budgetUrgencyOptions } from '../data/siteData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function BudgetForm() {
  const [submitted, setSubmitted] = useState(false)
  const nome = useRef('')
  const fone = useRef('')
  const email = useRef('')
  const descricao = useRef('')
  const urgencia = useRef('')
  const dataInicio = useRef('')
  const dataFim = useRef('')
  const valorMin = useRef('')
  const valorMax = useRef('')
  
  async function handleSubmit(event) {
    event.preventDefault()
    const message = `
    📩 Novo Lead

    Nome: ${nome.current.value}
    Email: ${email.current.value}
    Telefone: ${fone.current.value}

    Projeto: ${descricao.current.value}

    Urgência: ${urgencia.current.value}
    Início: ${dataInicio.current.value}
    Final: ${dataFim.current.value}

    Orçamento:
    Mín: R$ ${valorMin.current.value}
    Máx: R$ ${valorMax.current.value}
    `;

    await fetch("https://discord.com/api/webhooks/1498872190085369877/l74KvE1DiTVURML_WHhigEwy7EpSho6I4-wh-2yx4EX-CRLOkk1yxD8DYjdrVsLhEEn4", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: message,
      }),
    });
    setSubmitted(true)
  }

  return (
    <section id="budget" className="section-anchor border-b border-white/10">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8 lg:py-24">
        <Reveal className="space-y-8">
          <SectionHeading
            eyebrow="Orçamento"
            title="Solicite um orçamento."
            description="Precisa de um projeto personalizado? Preencha o formulário abaixo com os detalhes do seu projeto e entrarei em contato para discutirmos as possibilidades."
          />
        </Reveal>

        <Reveal delay={120} className="glass-panel rounded-[2rem] p-6 sm:p-8">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <fieldset className="space-y-4">
              <legend className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200/70">
                Dados do cliente
              </legend>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-slate-300">
                  <span>Nome</span>
                  <input
                    type="text"
                    name="name"
                    ref={nome}
                    placeholder="Seu nome"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-sky-400/45"
                    required
                  />
                </label>

                <label className="space-y-2 text-sm text-slate-300">
                  <span>Email</span>
                  <input
                    type="email"
                    ref={email}
                    name="email"
                    placeholder="voce@empresa.com"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-sky-400/45"
                    required
                  />
                </label>

                <label className="space-y-2 text-sm text-slate-300 sm:col-span-2">
                  <span>Telefone</span>
                  <input
                    type="tel"
                    ref={fone}
                    name="phone"
                    placeholder="(00) 00000-0000"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-sky-400/45"
                  />
                </label>
              </div>
            </fieldset>

            <fieldset className="space-y-4">
              <legend className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200/70">
                Projeto
              </legend>

              <label className="space-y-2 text-sm text-slate-300">
                <span>Descrição do projeto</span>
                <textarea
                  name="description"
                  ref={descricao}
                  rows="5"
                  placeholder="Conte sobre o objetivo, escopo e contexto do projeto."
                  className="w-full resize-none rounded-[1.5rem] border border-white/10 bg-slate-950/55 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-sky-400/45"
                  required
                />
              </label>
            </fieldset>

            <fieldset className="space-y-4">
              <legend className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200/70">
                Detalhes
              </legend>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-slate-300">
                  <span>Nível de urgência</span>
                  <select
                    name="urgency"
                    ref={urgencia}
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-white outline-none transition duration-300 focus:border-sky-400/45"
                    defaultValue={budgetUrgencyOptions[0]}
                  >
                    {budgetUrgencyOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="space-y-2 text-sm text-slate-300">
                  <span>Prazo para início</span>
                  <input
                    type="date"
                    ref={dataInicio}
                    name="startDate"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-white outline-none transition duration-300 focus:border-sky-400/45"
                  />
                </label>

                <label className="space-y-2 text-sm text-slate-300">
                  <span>Prazo para finalização</span>
                  <input
                    type="date"
                    ref={dataFim}
                    name="endDate"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-white outline-none transition duration-300 focus:border-sky-400/45"
                  />
                </label>

                <label className="space-y-2 text-sm text-slate-300">
                  <span>Valor mínimo</span>
                  <input
                    type="number"
                    ref={valorMin}
                    name="minBudget"
                    placeholder="3000"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-sky-400/45"
                  />
                </label>

                <label className="space-y-2 text-sm text-slate-300 sm:col-span-2">
                  <span>Valor máximo</span>
                  <input
                    type="number"
                    ref={valorMax}
                    name="maxBudget"
                    placeholder="12000"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-sky-400/45"
                  />
                </label>
              </div>
            </fieldset>

            <div className="space-y-4">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:scale-[1.01] hover:bg-sky-300"
              >
                Enviar pedido de orçamento
              </button>

              <p
                aria-live="polite"
                className={`text-sm text-sky-200 transition duration-200 ${submitted ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                Pedido de orçamento enviado.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

export default BudgetForm
