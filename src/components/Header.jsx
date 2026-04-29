function Header({ brandName, navLinks }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="shrink-0 font-display text-lg font-semibold tracking-[0.08em] text-white"
        >
          {brandName}
        </a>

        <nav className="flex-1 overflow-x-auto" aria-label="Navegacao principal">
          <ul className="flex min-w-max items-center justify-end gap-2">
            {navLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex rounded-full border border-white/10 px-3 py-2 text-sm font-medium text-slate-300 transition duration-300 hover:-translate-y-0.1 hover:border-sky-400/40 hover:bg-sky-400/8 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
