function SectionHeading({ eyebrow, title, description, centered = false }) {
  const alignClass = centered ? 'mx-auto items-center text-center' : 'items-start'

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignClass}`}>
      <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-sky-200/70">
        <span className="h-px w-10 bg-sky-400/50" />
        {eyebrow}
      </span>

      <div className="space-y-3">
        <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>

        {description ? (
          <p className="text-base leading-8 text-slate-300 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}

export default SectionHeading
