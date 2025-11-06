import React from 'react'
import Spline from '@splinetool/react-spline'
import { Sparkles, Phone, Calendar } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/ZJX4y5m2a9p0mQvW/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay that doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-purple-900/40 via-indigo-900/30 to-background/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 flex flex-col items-center text-center text-white">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
          <Sparkles className="h-4 w-4 text-yellow-300" />
          <span className="text-sm tracking-wide">Cartomanzia intuitiva e guida spirituale</span>
        </div>

        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-[0_6px_20px_rgba(0,0,0,0.45)]">
          TIZIANA CAROZZA
        </h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg text-white/90">
          Letture dei tarocchi profonde e personalizzate per amore, lavoro e crescita personale. Entra in un mondo di simboli, intuizioni e magia.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#prenota"
            className="group inline-flex items-center gap-2 rounded-full bg-fuchsia-500/90 px-6 py-3 text-white font-semibold shadow-lg shadow-fuchsia-500/30 transition transform-gpu hover:scale-[1.03] hover:bg-fuchsia-500"
          >
            <Calendar className="h-5 w-5" /> Prenota una lettura
          </a>
          <a
            href="#servizi"
            className="inline-flex items-center gap-2 rounded-full bg-white/15 px-6 py-3 text-white font-semibold backdrop-blur transition hover:bg-white/25"
          >
            <Phone className="h-5 w-5" /> Parla con Tiziana
          </a>
        </div>
      </div>

      {/* floating orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 top-20 h-48 w-48 rounded-full bg-fuchsia-400/30 blur-3xl" />
        <div className="absolute right-0 bottom-10 h-56 w-56 rounded-full bg-indigo-400/30 blur-3xl" />
      </div>
    </section>
  )
}
