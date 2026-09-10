// Section équipe + réalisation.
// Parcours présentés comme des expériences acquises AVANT la création d'Amani,
// attribués nominativement, sans logos client.

const MEMBRES = [
  {
    nom: "Alioune Pouye",
    role: "Président · Consultant Business Intelligence",
    bio: "15+ ans en Business Intelligence et pilotage de la donnée. A conduit des missions pour de grands comptes en Europe : RATP, Orange, BNP Paribas Assurance, Manpower, APEC, Airbus.",
    lien: null as { href: string; label: string } | null,
  },
  {
    nom: "Mohamed Macalou",
    role: "Directeur général · Data & Intelligence artificielle",
    bio: "15+ ans en développement logiciel, administration de bases de données et support de niveau 3. Architecture data et IA pour des opérateurs télécoms sur trois continents : Orange Belgium, SFR, O2 (Royaume-Uni), STC (Arabie saoudite), Maroc Telecom, Safaricom (Kenya), Verizon (États-Unis), Singtel (Singapour).",
    lien: null,
  },
  {
    nom: "Mohamed Moustapha Sidibé",
    role: "Vice-président · Audit & conformité",
    bio: "Expert-comptable, co-fondateur du cabinet Auditec Fiduciaire. Audit financier, contrôle interne et conformité réglementaire.",
    lien: {
      href: "https://auditecfiduciaire.com/a-propos-de-nous/",
      label: "auditecfiduciaire.com",
    },
  },
]

const CERTIFICATIONS = [
  "ISO/IEC 27001 Lead Auditor",
  "Google Cybersecurity Professional",
  "AWS Certified Data Engineer – Associate",
  "AWS Certified Solutions Architect – Associate",
]

const DOMAINES = [
  "Architecture SI & cloud",
  "Business Intelligence & data",
  "Data engineering & IA / RAG",
  "Audit, gouvernance & conformité",
]

export default function Team() {
  return (
    <section id="equipe" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="max-w-2xl mb-14">
          <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
            Notre équipe
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-3">
            Des parcours vérifiables
          </h2>
          <p className="text-gray-600 mt-3">
            Expériences acquises par les membres de l&apos;équipe au cours de leur
            carrière, avant la création d&apos;Amani Technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {MEMBRES.map((m) => (
            <div
              key={m.nom}
              className="p-8 rounded-2xl border border-gray-100 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900">{m.nom}</h3>
              <p className="text-sm font-medium text-blue-600 mt-1 mb-4">{m.role}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{m.bio}</p>
              {m.lien && (
                <a
                  href={m.lien.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm font-semibold text-blue-600 hover:text-blue-700 transition"
                >
                  {m.lien.label} →
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Certifications & domaines */}
        <div className="mb-16 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
              Certifications
            </h3>
            <div className="flex flex-wrap gap-2">
              {CERTIFICATIONS.map((c) => (
                <span
                  key={c}
                  className="text-sm px-3 py-1.5 rounded-full border border-blue-100 text-blue-800 bg-blue-50"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
              Domaines d&apos;expertise
            </h3>
            <div className="flex flex-wrap gap-2">
              {DOMAINES.map((c) => (
                <span
                  key={c}
                  className="text-sm px-3 py-1.5 rounded-full border border-gray-200 text-gray-700 bg-white"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Réalisation — mini-cas anonymisé */}
        <div
          className="rounded-2xl p-8 md:p-10 text-white"
          style={{ background: "linear-gradient(145deg, #0f172a 0%, #1e3a5f 100%)" }}
        >
          <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">
            Réalisation
          </span>
          <h3 className="text-xl font-semibold mt-3 mb-6">
            Assistant de connaissance d&apos;entreprise (IA générative / RAG)
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-2">
                Contexte
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                Une organisation dont la connaissance est dispersée entre wikis,
                outils de ticketing et gestion documentaire ; des équipes qui
                perdent du temps à retrouver l&apos;information.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-2">
                Intervention
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                Conception et mise en production d&apos;un assistant de recherche en
                langage naturel : recherche hybride (sémantique + mots-clés),
                compréhension de l&apos;intention, garde-fou anti-hallucination avec
                citation systématique des sources, connecteurs vers les outils
                existants sans migration.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-2">
                Résultat
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                Solution en production, ~22 000 documents indexés, interrogée
                quotidiennement par des équipes métier ; exposée en API / MCP pour
                alimenter d&apos;autres agents IA (avant-vente, support, RH, juridique).
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
