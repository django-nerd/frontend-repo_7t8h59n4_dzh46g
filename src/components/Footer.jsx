import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-lg font-semibold tracking-wide">TIZIANA CAROZZA</p>
          <p className="text-white/70 text-sm">© {new Date().getFullYear()} Tutti i diritti riservati.</p>
        </div>
        <nav className="flex items-center gap-6 text-white/80 text-sm">
          <a href="#servizi" className="hover:text-white">Servizi</a>
          <a href="#prenota" className="hover:text-white">Prenota</a>
          <a href="#" className="hover:text-white">Privacy</a>
        </nav>
      </div>
    </footer>
  )
}
