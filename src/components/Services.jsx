import React from 'react'
import { Cards, Heart, Briefcase, Sun } from 'lucide-react'

const services = [
  {
    icon: <Heart className="h-6 w-6 text-pink-500" />,
    title: 'Amore e Relazioni',
    description:
      'Chiarezza su sentimenti, ritorni, nuove conoscenze e armonia di coppia.',
  },
  {
    icon: <Briefcase className="h-6 w-6 text-amber-500" />,
    title: 'Lavoro e Carriera',
    description:
      'Orientamento su opportunità, colloqui, cambiamenti e crescita professionale.',
  },
  {
    icon: <Cards className="h-6 w-6 text-indigo-500" />,
    title: 'Percorsi di Crescita',
    description:
      'Sessioni mirate per sbloccare energie, prendere decisioni e ritrovare equilibrio.',
  },
  {
    icon: <Sun className="h-6 w-6 text-yellow-500" />,
    title: 'Pulizia Energetica',
    description:
      'Rituali e consigli per rinnovare la tua energia e attrarre il meglio.',
  },
]

export default function Services() {
  return (
    <section id="servizi" className="relative bg-gradient-to-b from-white to-purple-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Servizi</h2>
        <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">
          Ogni consulto è unico: ascolto, sensibilità ed esperienza per guidarti con rispetto e discrezione.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-purple-100 bg-white p-6 shadow-sm transition hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-purple-50 p-3">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{s.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-48 bg-gradient-to-b from-purple-200/40 to-transparent blur-2xl" />
    </section>
  )
}
