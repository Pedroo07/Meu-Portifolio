import { useState } from 'react'
import { budgetUrgencyOptions } from '../data/siteData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function BudgetForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
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
                    placeholder="Seu nome"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-sky-400/45"
                    required
                  />
                </label>

                <label className="space-y-2 text-sm text-slate-300">
                  <span>Email</span>
                  <input
                    type="email"
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
                    name="startDate"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-white outline-none transition duration-300 focus:border-sky-400/45"
                  />
                </label>

                <label className="space-y-2 text-sm text-slate-300">
                  <span>Prazo para finalização</span>
                  <input
                    type="date"
                    name="endDate"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-white outline-none transition duration-300 focus:border-sky-400/45"
                  />
                </label>

                <label className="space-y-2 text-sm text-slate-300">
                  <span>Valor mínimo</span>
                  <input
                    type="number"
                    name="minBudget"
                    placeholder="3000"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-sky-400/45"
                  />
                </label>

                <label className="space-y-2 text-sm text-slate-300 sm:col-span-2">
                  <span>Valor máximo</span>
                  <input
                    type="number"
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
                className={`text-sm text-sky-200 transition duration-300 ${
                  submitted ? 'opacity-100' : 'opacity-0'
                }`}
              >
                Briefing capturado com sucesso. Agora basta conectar o backend
                ou automação que você preferir.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

export default BudgetForm
