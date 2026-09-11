"use client"

import { useState, type FormEvent } from "react"

// Formulaire Netlify Forms — capture Nom/Société/Email avant de livrer la
// brochure. Le nom du formulaire ("brochure-catalogue") et tous les champs
// doivent correspondre exactement au formulaire caché statique de page.tsx,
// sinon Netlify ne détecte pas le formulaire au build.
const FORM_NAME = "brochure-catalogue"

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&")
}

export default function BrochureForm({
  href,
  formation,
  label,
}: {
  href: string
  formation: string
  label: string
}) {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle")
  const [nom, setNom] = useState("")
  const [societe, setSociete] = useState("")
  const [email, setEmail] = useState("")

  function startDownload() {
    const a = document.createElement("a")
    a.href = href
    a.download = ""
    document.body.appendChild(a)
    a.click()
    a.remove()
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus("sending")
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": FORM_NAME, formation, nom, societe, email, "bot-field": "" }),
      })
      setStatus("done")
    } catch {
      // on ne bloque pas le prospect pour un souci réseau côté capture
      setStatus("done")
    } finally {
      startDownload()
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-block text-sm font-semibold text-blue-600 hover:text-blue-700 transition"
      >
        {label}
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-gray-900/60"
            onClick={() => setOpen(false)}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-7">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fermer"
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition text-xl leading-none"
            >
              ×
            </button>

            {status === "done" ? (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Merci !</h3>
                <p className="text-sm text-gray-600 mb-5">
                  Le téléchargement démarre. Si rien ne se passe,{" "}
                  <a href={href} className="text-blue-600 hover:text-blue-700 font-semibold">
                    cliquez ici
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-sm font-semibold text-gray-500 hover:text-gray-700 transition"
                >
                  Fermer
                </button>
              </div>
            ) : (
              <form name={FORM_NAME} onSubmit={handleSubmit}>
                <h3 className="text-lg font-semibold text-gray-900 mb-5">
                  Télécharger notre catalogue de formation
                </h3>

                <div className="space-y-4 mb-5">
                  <label className="block">
                    <span className="block text-sm text-gray-700 mb-1">Nom Prénom*</span>
                    <input
                      type="text"
                      name="nom"
                      required
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </label>
                  <label className="block">
                    <span className="block text-sm text-gray-700 mb-1">Société*</span>
                    <input
                      type="text"
                      name="societe"
                      required
                      value={societe}
                      onChange={(e) => setSociete(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </label>
                  <label className="block">
                    <span className="block text-sm text-gray-700 mb-1">Adresse email*</span>
                    <input
                      type="email"
                      name="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </label>
                </div>

                <p className="text-xs text-gray-500 leading-relaxed mb-5">
                  Vos données sont uniquement utilisées pour nous permettre de répondre à
                  votre demande.{" "}
                  <a
                    href="/mentions-legales#donnees-personnelles"
                    className="underline hover:text-gray-700"
                  >
                    En savoir plus sur la gestion de vos données et vos droits.
                  </a>
                </p>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full px-6 py-3 rounded-xl text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
                  style={{ background: "linear-gradient(135deg, #1d4ed8, #059669)" }}
                >
                  {status === "sending" ? "Envoi…" : "Télécharger le catalogue"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
