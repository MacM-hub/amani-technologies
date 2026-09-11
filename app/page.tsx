import Team from "./components/Team"
import BrochureForm from "./components/BrochureForm"

const BROCHURE_IA = "/brochure-formation-ia.pdf"
const BROCHURE_CYBER = "/brochure-formation-cybersecurite.pdf"

const MAIL = "contact@amani-technologies.com"
const MAILTO_ECHANGE = `mailto:${MAIL}?subject=${encodeURIComponent(
  "Échange 30 min — [votre organisation]"
)}&body=${encodeURIComponent(
  "Bonjour,\n\nNous souhaitons échanger 30 minutes sur notre besoin.\n\nOrganisation :\nContexte en quelques lignes :\nDisponibilités :\n\nMerci."
)}`
const MAILTO_DIAGNOSTIC = `mailto:${MAIL}?subject=${encodeURIComponent(
  "Demande de diagnostic exploratoire"
)}&body=${encodeURIComponent(
  "Bonjour,\n\nNous souhaitons un diagnostic exploratoire.\n\nOrganisation :\nPérimètre envisagé (IA, cybersécurité, SI) :\n\nMerci."
)}`

export default function Home() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="relative overflow-hidden pt-36 pb-24 px-6">

        {/* fond décoratif */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 40%, #eff6ff 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 20% 80%, #f0fdf4 0%, transparent 60%)",
          }}
        />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Gauche */}
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest text-blue-600 uppercase mb-6">
              Conseil · IA, cybersécurité &amp; systèmes d&apos;information · Afrique
            </span>

            <h1 className="text-4xl md:text-[52px] font-bold leading-[1.1] tracking-tight text-gray-900">
              Adoptez l&apos;IA, sécurisez vos activités et{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #2563eb 0%, #059669 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                modernisez vos systèmes d&apos;information.
              </span>
            </h1>

            <p className="mt-7 text-lg text-gray-600 leading-relaxed max-w-lg">
              Amani Technologies accompagne les institutions publiques, les PME et
              les organisations financières d&apos;Afrique francophone. Commencez par
              une formation ou un diagnostic ciblé ; nous avançons ensuite jusqu&apos;au
              POC, à l&apos;intégration et à l&apos;accompagnement des équipes si le
              besoin est confirmé.
            </p>

            <div className="mt-5 flex flex-wrap gap-2 text-xs text-gray-500">
              {["Institutions publiques", "PME", "Organisations financières", "Afrique francophone"].map((s) => (
                <span key={s} className="px-3 py-1 rounded-full border border-gray-200 bg-white">
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl text-sm font-semibold text-white transition hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #1d4ed8, #059669)" }}
              >
                Échanger 30 minutes
              </a>
              <a
                href="#formations"
                className="px-6 py-3 rounded-xl text-sm font-semibold border border-gray-200 bg-white hover:border-gray-400 transition"
              >
                Découvrir nos formations →
              </a>
            </div>
          </div>

          {/* Droite — carte profil équipe */}
          <div
            className="rounded-2xl p-8 text-white shadow-2xl"
            style={{ background: "linear-gradient(145deg, #0f172a 0%, #1e3a5f 100%)" }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-medium text-gray-300 uppercase tracking-widest">
                Notre équipe
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-1">Une structure nouvelle, une équipe expérimentée</h3>
            <p className="text-sm text-gray-300 mb-6">
              Des consultants seniors avec des parcours dans de grandes organisations
              africaines et internationales.
            </p>

            <div className="space-y-3 mb-6">
              {[
                { domain: "Architecture & systèmes d'information", years: "10+ ans" },
                { domain: "Business Intelligence & data", years: "8+ ans" },
                { domain: "Audit & cybersécurité", years: "7+ ans" },
              ].map((item) => (
                <div key={item.domain} className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
                  <span className="text-sm text-gray-200">{item.domain}</span>
                  <span className="text-xs font-semibold text-emerald-400 ml-4 shrink-0">{item.years}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-5 space-y-2">
              {[
                "Banques & institutions financières",
                "Administrations publiques",
                "Expériences en Afrique et à l'international",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-200">
                  <span className="text-emerald-400">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* OFFRES — Commencer avec Amani */}
      <section id="offres" className="border-y border-gray-100 py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
              Commencer avec Amani
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3">
              Trois offres indépendantes
            </h2>
            <p className="text-gray-600 mt-3">
              Vous choisissez le point d&apos;entrée adapté à votre besoin — chacune se
              suffit à elle-même.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                n: "01",
                title: "Formation & sensibilisation",
                desc: "Formations IA et cybersécurité de niveau 1, pour dirigeants et équipes. Format atelier, sur site ou à distance.",
                href: "#formations",
                cta: "Voir les programmes",
              },
              {
                n: "02",
                title: "Diagnostic ciblé",
                desc: "Identification des processus à améliorer, des risques et des cas d'usage IA prioritaires. Restitution avec des recommandations activables.",
                href: MAILTO_DIAGNOSTIC,
                cta: "Demander un diagnostic",
              },
              {
                n: "03",
                title: "POC & mise en œuvre",
                desc: "Prototype limité et mesurable, puis intégration et accompagnement des équipes si les résultats le justifient.",
                href: "#contact",
                cta: "En parler avec nous",
              },
            ].map((o) => (
              <div
                key={o.n}
                className="flex flex-col bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-gray-200 transition"
              >
                <p className="text-5xl font-black mb-4" style={{ color: "#e2e8f0", lineHeight: 1 }}>
                  {o.n}
                </p>
                <h3 className="text-lg font-semibold mb-3">{o.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 grow">{o.desc}</p>
                <a
                  href={o.href}
                  className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition"
                >
                  {o.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATIONS */}
      <section id="formations" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
              Nos formations
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3">
              Deux formations disponibles immédiatement
            </h2>
            <p className="text-gray-600 mt-3">
              Niveau 1, pensées pour des équipes non spécialistes. Elles se suffisent
              à elles-mêmes et ne préjugent d&apos;aucune suite.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                tag: "Formation IA · Niveau 1",
                title: "IA maîtrisée au service de la productivité",
                desc: "Tirer parti de l'IA générative au quotidien sans jamais exposer les données de l'entreprise : cas d'usage par métier, bases du prompt, données à ne jamais confier, menaces assistées par IA.",
                public: "Tous collaborateurs, sans prérequis technique",
                format: "1 journée (7 h) ou 2 demi-journées · présentiel ou distanciel",
                href: BROCHURE_IA,
                formation: "IA — Niveau 1",
              },
              {
                tag: "Formation Cybersécurité · Niveau 1",
                title: "Cyber Vigilance",
                desc: "Faire de chaque collaborateur le premier rempart contre les ransomwares et l'ingénierie sociale : reconnaître le phishing, hygiène numérique, MFA, bons réflexes en cas d'incident.",
                public: "Tous collaborateurs, sans prérequis technique",
                format: "1 journée (7 h) ou 2 demi-journées · présentiel ou distanciel",
                href: BROCHURE_CYBER,
                formation: "Cybersécurité — Niveau 1",
              },
            ].map((f) => (
              <div key={f.title} className="p-8 rounded-2xl border border-gray-100 hover:shadow-md transition">
                <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
                  {f.tag}
                </span>
                <h3 className="text-lg font-semibold mt-2 mb-3">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{f.desc}</p>
                <dl className="text-sm text-gray-600 space-y-1.5 mb-6">
                  <div className="flex gap-2">
                    <dt className="font-semibold text-gray-500 shrink-0">Public</dt>
                    <dd>{f.public}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-semibold text-gray-500 shrink-0">Format</dt>
                    <dd>{f.format}</dd>
                  </div>
                </dl>
                <BrochureForm
                  href={f.href}
                  formation={f.formation}
                  label="Télécharger la brochure (PDF) →"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÉQUIPE + RÉALISATION */}
      <Team />

      {/* EXPERTISE */}
      <section id="expertise" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-14">
            <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
              Pour aller plus loin
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3">
              Trois expertises, un seul objectif
            </h2>
            <p className="text-gray-600 mt-3">
              Structurer, sécuriser et valoriser les systèmes d&apos;information de nos clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "◈",
                color: "text-blue-600",
                bg: "bg-blue-50",
                title: "Architecture & cloud",
                desc: "Urbanisation des SI, modernisation des architectures legacy, cloud hybride et gouvernance des systèmes critiques.",
                tags: ["Architecture SI", "Cloud hybride", "Migration"],
              },
              {
                icon: "◎",
                color: "text-emerald-600",
                bg: "bg-emerald-50",
                title: "Data & intelligence artificielle",
                desc: "Plateformes data, gouvernance, Business Intelligence, analytics avancé et IA au service de la décision.",
                tags: ["Data platform", "BI", "Analytics", "IA"],
              },
              {
                icon: "◉",
                color: "text-violet-600",
                bg: "bg-violet-50",
                title: "Cybersécurité",
                desc: "Audit de sécurité, gouvernance, conformité ISO 27001 et protection des infrastructures sensibles.",
                tags: ["Audit", "ISO 27001", "Gouvernance"],
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-gray-200 transition"
              >
                <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mb-6`}>
                  <span className={`text-2xl ${item.color}`}>{item.icon}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full border border-gray-200 text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTEURS */}
      <section id="secteurs" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-14">
            <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
              Nos clients
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3">
              Secteurs d&apos;intervention
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Institutions financières",
                items: [
                  "Modernisation des systèmes bancaires",
                  "Plateformes data & analytics",
                  "Conformité réglementaire (BCEAO, BEAC)",
                  "Gouvernance des données",
                ],
              },
              {
                title: "Administrations publiques",
                items: [
                  "Digitalisation des services publics",
                  "Plateformes de données",
                  "Cybersécurité des administrations",
                  "Interopérabilité des systèmes",
                ],
              },
              {
                title: "Utilities & PME",
                items: [
                  "Systèmes d'information clients",
                  "Facturation & gestion des abonnés",
                  "SIG & gestion des actifs",
                  "Transformation numérique",
                ],
              },
            ].map((sec) => (
              <div
                key={sec.title}
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg mb-5 text-gray-900">{sec.title}</h3>
                <ul className="space-y-3">
                  {sec.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <span className="mt-0.5 text-blue-500 font-bold">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROCHE */}
      <section id="approche" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-14">
            <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
              Comment nous travaillons
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3">Notre approche</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                n: "01",
                title: "Diagnostic",
                desc: "Analyse du système existant et identification précise des axes d'amélioration.",
              },
              {
                n: "02",
                title: "Cadrage",
                desc: "Architecture cible, feuille de route et indicateurs de succès définis avec vous.",
              },
              {
                n: "03",
                title: "Mise en œuvre",
                desc: "Pilotage technique, accompagnement des équipes, livraison par itérations.",
              },
              {
                n: "04",
                title: "Transfert",
                desc: "Formation des équipes locales et documentation pour garantir l'autonomie.",
              },
            ].map((step) => (
              <div key={step.n} className="relative pl-0">
                <p
                  className="text-6xl font-black mb-4"
                  style={{ color: "#e2e8f0", lineHeight: 1 }}
                >
                  {step.n}
                </p>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POSITIONNEMENT */}
      <section
        className="py-24 px-6"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">
              Pourquoi Amani
            </span>
            <h2 className="text-3xl font-bold text-white mt-3">
              Une structure nouvelle, une équipe expérimentée
            </h2>
            <p className="text-gray-300 mt-4 leading-relaxed">
              Amani est une structure nouvelle portée par des professionnels
              expérimentés. Nous privilégions des premières missions ciblées, avec un
              périmètre clair et des résultats mesurables avant tout déploiement plus
              large.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Séniorité de l'équipe",
                desc: "Nos consultants ont travaillé sur des projets complexes dans des contextes africains et internationaux exigeants.",
              },
              {
                title: "Connaissance du contexte local",
                desc: "Nous comprenons les contraintes réglementaires, organisationnelles et techniques propres à l'Afrique francophone.",
              },
              {
                title: "Approche partenariale",
                desc: "Nous construisons des relations de long terme, avec un transfert de compétences vers vos équipes à chaque mission.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="p-7 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                <h3 className="font-semibold text-white mb-3">{card.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
            Travaillons ensemble
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-5">
            Parlons de votre besoin
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Un échange de 30 minutes suffit pour savoir si une formation, un
            diagnostic ou un POC est la bonne première étape. Nous répondons sous 48 h.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <a
              href={MAILTO_ECHANGE}
              className="inline-block px-7 py-4 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition"
              style={{ background: "linear-gradient(135deg, #1d4ed8, #059669)" }}
            >
              Échanger 30 minutes sur votre besoin
            </a>
            <a
              href="#formations"
              className="inline-block px-7 py-4 rounded-xl text-sm font-semibold border border-gray-200 bg-white hover:border-gray-400 transition"
            >
              Découvrir nos formations IA &amp; cybersécurité
            </a>
          </div>
          <a
            href={MAILTO_DIAGNOSTIC}
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition"
          >
            Ou demander un diagnostic exploratoire →
          </a>

          <ContactDetails />
        </div>
      </section>

      {/*
        Formulaire statique caché : nécessaire pour que Netlify détecte le
        formulaire "brochure-catalogue" au build (Netlify Forms scanne le
        HTML généré). Les champs doivent correspondre exactement à ceux du
        formulaire réel dans components/BrochureForm.tsx.
      */}
      <form name="brochure-catalogue" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="hidden" name="form-name" value="brochure-catalogue" />
        <input name="formation" />
        <input name="nom" />
        <input name="societe" />
        <input type="email" name="email" />
        <input name="bot-field" />
      </form>

    </main>
  )
}

// Numéro WhatsApp général d'Amani (format international sans "+")
const WHATSAPP = "221773339889"
const WA_TEXT = encodeURIComponent(
  "Bonjour, je vous contacte au sujet d'Amani Technologies."
)

function ContactDetails() {
  return (
    <div className="mt-14 grid sm:grid-cols-2 gap-6 text-left">
      <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">
          Votre interlocutrice
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-gray-900">Adja Pouye</span>
          <span className="text-gray-500"> · développement commercial — Sénégal</span>
        </p>
      </div>
      <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">
          Coordonnées
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>
            <a href={`mailto:${MAIL}`} className="hover:text-gray-900 transition">
              {MAIL}
            </a>
          </li>
          <li>
            <a
              href={`https://wa.me/${WHATSAPP}?text=${WA_TEXT}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-700 hover:text-emerald-800 transition"
            >
              Nous écrire sur WhatsApp
            </a>
          </li>
          <li>Réponse sous 48 h</li>
          <li>Dakar · Afrique francophone &amp; Europe</li>
        </ul>
      </div>
    </div>
  )
}
