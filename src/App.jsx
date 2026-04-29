import About from './components/About'
import BudgetForm from './components/BudgetForm'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import { brandName, navLinks } from './data/siteData'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--page)] text-slate-100">
      <div aria-hidden="true" className="site-backdrop" />

      <Header brandName={brandName} navLinks={navLinks} />

      <main>
        <Hero />
        <About />
        <Skills />
        <BudgetForm />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
