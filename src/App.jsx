import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Booking from './components/Booking'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-[Inter]">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-white/60 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-sm font-semibold tracking-[0.2em] text-gray-900">TIZIANA CAROZZA</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#servizi" className="hover:text-gray-900">Servizi</a>
            <a href="#prenota" className="hover:text-gray-900">Prenota</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Services />
        <Testimonials />
        <Booking />
      </main>

      <Footer />
    </div>
  )
}

export default App
