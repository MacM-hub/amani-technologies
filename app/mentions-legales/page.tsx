import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Mentions légales — Amani Technologies",
  description: "Mentions légales du site amani-technologies.com.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: true, follow: true },
}

const INFOS = {
  denomination: "AMANI TECHNOLOGIES",
  forme:
    "Société par Actions Simplifiée (SAS) régie par l'Acte Uniforme OHADA relatif au droit des sociétés commerciales et du GIE",
  capital: "1 000 000 FCFA",
  siege: "Hann Maristes, Cité Ady Niang, Villa N°16, Dakar (Sénégal)",
  // TODO: numéros d'immatriculation à compléter (laissés vides = ligne masquée)
  rccm: "",
  ninea: "",
  president: "Alioune Pouye",
  directeurGeneral: "Mohamed Macalou",
  directeurPublication: "Adja Pouye",
  notaire:
    "Acte reçu le 28 avril 2026 par Maître Baye Mapaté Wilane Diouck, notaire à Dakar (SCP Notaires Associés Diop, Diouck & Faye)",
  email: "contact@amani-technologies.com",
  whatsapp: "+221 77 333 98 89",
}

export default function MentionsLegales() {
  return (
    <main className="bg-white text-gray-900 px-6 pt-36 pb-24">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition">
          ← Retour à l&apos;accueil
        </Link>

        <h1 className="text-3xl font-bold mt-6 mb-10">Mentions légales</h1>

        <section className="space-y-2 mb-10">
          <h2 className="text-lg font-semibold text-gray-900">Éditeur du site</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            {INFOS.denomination} — {INFOS.forme}
            <br />
            Capital social : {INFOS.capital}
            <br />
            Siège social : {INFOS.siege}
            {INFOS.rccm && (
              <>
                <br />
                RCCM : {INFOS.rccm}
              </>
            )}
            {INFOS.ninea && (
              <>
                <br />
                NINEA : {INFOS.ninea}
              </>
            )}
            <br />
            Président : {INFOS.president} · Directeur général : {INFOS.directeurGeneral}
            <br />
            {INFOS.notaire}
          </p>
        </section>

        <section className="space-y-2 mb-10">
          <h2 className="text-lg font-semibold text-gray-900">Directrice de la publication</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            {INFOS.directeurPublication}
          </p>
        </section>

        <section className="space-y-2 mb-10">
          <h2 className="text-lg font-semibold text-gray-900">Contact</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            <a href={`mailto:${INFOS.email}`} className="text-blue-600 hover:text-blue-700 transition">
              {INFOS.email}
            </a>
            <br />
            WhatsApp : {INFOS.whatsapp}
          </p>
        </section>

        <section className="space-y-2 mb-10">
          <h2 className="text-lg font-semibold text-gray-900">Hébergement</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Site hébergé par Netlify, Inc. — 512 2nd Street, Suite 200, San Francisco,
            CA 94107, États-Unis — netlify.com
          </p>
        </section>

        <section className="space-y-2 mb-10">
          <h2 className="text-lg font-semibold text-gray-900">Propriété intellectuelle</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            L&apos;ensemble des contenus de ce site (textes, éléments graphiques, logo)
            est la propriété d&apos;Amani Technologies, sauf mention contraire. Toute
            reproduction sans autorisation préalable est interdite.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-gray-900">Données personnelles</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Ce site ne comporte pas de formulaire de collecte ni de cookies marketing.
            Les échanges se font par e-mail ou messagerie à l&apos;initiative du visiteur ;
            les informations transmises ne sont utilisées que pour répondre à la demande.
            Pour toute question :{" "}
            <a href={`mailto:${INFOS.email}`} className="text-blue-600 hover:text-blue-700 transition">
              {INFOS.email}
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  )
}
