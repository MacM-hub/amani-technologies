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
              Cabinet de conseil · Afrique
            </span>

            <h1 className="text-4xl md:text-[52px] font-bold leading-[1.1] tracking-tight text-gray-900">
              Des systèmes critiques{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #2563eb 0%, #059669 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                plus solides.
              </span>
              <br />
              Une Afrique{" "}
              <span>plus connectée.</span>
            </h1>

            <p className="mt-7 text-lg text-gray-500 leading-relaxed max-w-lg">
              Amani Technologies accompagne les banques, institutions publiques et
              entreprises africaines dans la transformation de leurs systèmes
              d&apos;information — de la stratégie à la mise en production.
            </p>

            <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-400">
              {["Banque", "Secteur public", "Télécom", "Utilities", "PME"].map((s) => (
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
                Démarrer un projet
              </a>
              <a
                href="#expertise"
                className="px-6 py-3 rounded-xl text-sm font-semibold border border-gray-200 bg-white hover:border-gray-400 transition"
              >
                Notre expertise →
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
              <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">
                Notre équipe
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-1">Une expertise forgée sur le terrain</h3>
            <p className="text-sm text-gray-400 mb-6">
              Consultants seniors avec des parcours dans de grandes organisations africaines et internationales.
            </p>

            <div className="space-y-3 mb-6">
              {[
                { domain: "Architecture & Systèmes d'information", years: "10+ ans" },
                { domain: "Business Intelligence & Data", years: "8+ ans" },
                { domain: "Audit & Cybersécurité", years: "7+ ans" },
              ].map((item) => (
                <div key={item.domain} className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
                  <span className="text-sm text-gray-300">{item.domain}</span>
                  <span className="text-xs font-semibold text-emerald-400 ml-4 shrink-0">{item.years}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-5 space-y-2">
              {[
                "Banques & institutions financières",
                "Administrations publiques",
                "Projets financés par bailleurs internationaux",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="text-emerald-400">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CHIFFRES CLÉS */}
      <section className="border-y border-gray-100 py-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "20+", label: "Ans d'expérience cumulée" },
            { value: "3", label: "Domaines d'expertise" },
            { value: "5+", label: "Pays maîtrisés en Afrique" },
            { value: "100%", label: "Engagés sur chaque mission" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERTISE */}
      <section id="expertise" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-14">
            <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
              Ce que nous faisons
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3">
              Trois expertises, un seul objectif
            </h2>
            <p className="text-gray-500 mt-3">
              Structurer, sécuriser et valoriser les systèmes d&apos;information de nos clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "◈",
                color: "text-blue-600",
                bg: "bg-blue-50",
                title: "Architecture & Cloud",
                desc: "Urbanisation des SI, modernisation des architectures legacy, cloud hybride et gouvernance des systèmes critiques.",
                tags: ["Architecture SI", "Cloud hybride", "Migration"],
              },
              {
                icon: "◎",
                color: "text-emerald-600",
                bg: "bg-emerald-50",
                title: "Data & Intelligence artificielle",
                desc: "Plateformes data, gouvernance, Business Intelligence, analytics avancé et IA au service de la décision.",
                tags: ["Data platform", "BI", "Analytics", "IA"],
              },
              {
                icon: "◉",
                color: "text-violet-600",
                bg: "bg-violet-50",
                title: "Cybersécurité",
                desc: "Audit de sécurité, gouvernance, conformité ISO 27001 et protection des infrastructures sensibles.",
                tags: ["Audit", "ISO 27001", "SOC"],
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-gray-200 transition group"
              >
                <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mb-6`}>
                  <span className={`text-2xl ${item.color}`}>{item.icon}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full border border-gray-200 text-gray-500"
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
      <section id="secteurs" className="py-24 px-6 bg-gray-50">
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
                  "Plateformes nationales de données",
                  "Cybersécurité gouvernementale",
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
      <section id="approche" className="py-24 px-6">
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
                title: "Cadrage stratégique",
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
                  style={{ color: "#f1f5f9", lineHeight: 1 }}
                >
                  {step.n}
                </p>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
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
            <p className="text-gray-400 mt-4 leading-relaxed">
              Amani Technologies est une ESN portée par des consultants seniors
              ayant exercé dans des banques, des institutions publiques et des projets financés
              par des bailleurs internationaux.
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
                desc: "Nous comprenons les contraintes réglementaires, organisationnelles et techniques propres à l'Afrique.",
              },
              {
                title: "Approche partenariale",
                desc: "Nous construisons des relations de long terme, pas des interventions ponctuelles. Votre réussite construit aussi la nôtre.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="p-7 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                <h3 className="font-semibold text-white mb-3">{card.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-28 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
            Travaillons ensemble
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-5">
            Un projet en tête ?
          </h2>
          <p className="text-gray-500 text-lg mb-10">
            Nous sommes au début de notre aventure, et c&apos;est exactement pour ça que
            nous cherchons des clients prêts à construire avec nous. Partagez-nous votre
            contexte — nous vous répondons sous 48h.
          </p>
          <a
            href="mailto:contact@amani-technologies.com"
            className="inline-block px-8 py-4 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition"
            style={{ background: "linear-gradient(135deg, #1d4ed8, #059669)" }}
          >
            Nous écrire →
          </a>
        </div>
      </section>

    </main>
  )
}
