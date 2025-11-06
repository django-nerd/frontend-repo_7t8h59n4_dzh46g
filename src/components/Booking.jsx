import React, { useState } from 'react'
import { CalendarCheck, Mail, Phone, Loader2 } from 'lucide-react'

export default function Booking() {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    // Simulate sending request
    await new Promise((r) => setTimeout(r, 1200))
    setSent(true)
    setLoading(false)
  }

  return (
    <section id="prenota" className="relative bg-gradient-to-tr from-purple-600 via-fuchsia-600 to-indigo-600 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Prenota una lettura</h2>
            <p className="mt-3 text-white/90">
              Consulti online o telefonici. Compila il modulo e sarai ricontattato/a per confermare giorno e orario.
            </p>
            <div className="mt-6 space-y-2 text-white/90">
              <p className="inline-flex items-center gap-2"><Phone className="h-5 w-5" /> +39 333 000 0000</p>
              <p className="inline-flex items-center gap-2"><Mail className="h-5 w-5" /> contatti@tizianacarozza.it</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl bg-white/10 p-6 backdrop-blur space-y-4">
            <div>
              <label className="block text-sm mb-1">Nome</label>
              <input required type="text" className="w-full rounded-lg border-0 bg-white/90 px-4 py-2 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-fuchsia-400" placeholder="Il tuo nome" />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input required type="email" className="w-full rounded-lg border-0 bg-white/90 px-4 py-2 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-fuchsia-400" placeholder="la-tua@email.it" />
            </div>
            <div>
              <label className="block text-sm mb-1">Telefono</label>
              <input type="tel" className="w-full rounded-lg border-0 bg-white/90 px-4 py-2 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-fuchsia-400" placeholder="Opzionale" />
            </div>
            <div>
              <label className="block text-sm mb-1">Messaggio</label>
              <textarea rows={4} className="w-full rounded-lg border-0 bg-white/90 px-4 py-2 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-fuchsia-400" placeholder="Raccontami di cosa hai bisogno" />
            </div>

            <button disabled={loading || sent} className="inline-flex items-center gap-2 rounded-lg bg-fuchsia-500 px-5 py-2.5 font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:bg-fuchsia-600 disabled:opacity-60">
              {sent ? (
                <>
                  <CalendarCheck className="h-5 w-5" /> Richiesta inviata!
                </>
              ) : loading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" /> Invio...
                </>
              ) : (
                'Invia richiesta'
              )}
            </button>
          </form>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-t from-fuchsia-300/40 to-transparent blur-2xl" />
    </section>
  )
}
