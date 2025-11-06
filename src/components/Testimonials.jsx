import React from 'react'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sara M.',
    text: 'Con Tiziana ho trovato una guida sincera e precisa. Le sue letture mi hanno aiutata a fare scelte importanti.',
  },
  {
    name: 'Luca R.',
    text: 'Empatia, professionalità e risultati concreti. Ogni consulto è stato illuminante.',
  },
  {
    name: 'Giulia P.',
    text: 'Mi ha dato la serenità che cercavo: consigli pratici e un tocco di magia.',
  },
]

export default function Testimonials() {
  return (
    <section className="relative bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Cosa dicono di Tiziana</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl border border-gray-100 p-6 shadow-sm bg-gradient-to-br from-purple-50 to-white">
              <Quote className="h-6 w-6 text-purple-400" />
              <p className="mt-4 text-gray-700">“{t.text}”</p>
              <p className="mt-4 font-semibold text-gray-900">{t.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-t from-purple-200/50 to-transparent blur-2xl" />
    </section>
  )
}
