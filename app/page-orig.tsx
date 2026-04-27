export default function Home() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO PREMIUM */}
      <section className="pt-20 pb-16 px-8 max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* COLONNE GAUCHE */}
          <div className="max-w-xl">

            <p className="text-sm text-gray-500 mb-4">
              Cabinet de conseil en transformation numérique
            </p>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Architecture Data, Cloud & Cybersécurité pour systèmes critiques
            </h1>

            <p className="mt-6 text-base text-gray-600">
              Amani Technologies accompagne les banques, institutions publiques et entreprises
              dans la conception, la sécurisation et la modernisation de leurs systèmes d’information.
            </p>

            <p className="mt-4 text-sm text-gray-500">
              Banque • Secteur public • Télécom • Utilities
            </p>

            <div className="mt-8 flex gap-4">
              <button className="px-5 py-2.5 bg-black text-white rounded-lg text-sm">
                Démarrer un projet
              </button>
              <button className="px-5 py-2.5 border rounded-lg text-sm">
                En savoir plus
              </button>
            </div>

          </div>

          {/* COLONNE DROITE */}
          <div className="relative">

            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-10 shadow-lg">

              <p className="text-sm text-gray-500 mb-2">
                Exemple de mission
              </p>

              <h3 className="text-xl font-semibold mb-4">
                Plateforme Data & BI bancaire
              </h3>

              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Architecture data warehouse</li>
                <li>• Intégration ETL</li>
                <li>• Dashboard décisionnel</li>
                <li>• Sécurisation des flux</li>
              </ul>

            </div>

          </div>

          </div>

      </section>

      {/* EXPERTISE */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Expertise</h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-6 border rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Architecture & Cloud</h3>
            <p className="text-gray-600">
              Conception d’architectures robustes, cloud hybride et modernisation des systèmes critiques.
            </p>
          </div>

          <div className="p-6 border rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Data & Analytics</h3>
            <p className="text-gray-600">
              Plateformes data, gouvernance et valorisation des données pour la prise de décision.
            </p>
          </div>

          <div className="p-6 border rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Cybersécurité</h3>
            <p className="text-gray-600">
              Sécurisation des systèmes critiques, audit et conformité pour environnements sensibles.
            </p>
          </div>

        </div>
      </section>

      {/* OFFRES (TRÈS IMPORTANT BUSINESS) */}
      <section className="bg-gray-50 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Offres clés</h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 bg-white border rounded-xl">
              <h3 className="font-semibold mb-3">Data Platform & BI</h3>
              <p className="text-gray-600">
                Mise en place de plateformes data, entrepôts de données et outils décisionnels.
              </p>
            </div>

            <div className="p-6 bg-white border rounded-xl">
              <h3 className="font-semibold mb-3">Cloud & Infrastructure</h3>
              <p className="text-gray-600">
                Déploiement d’infrastructures cloud et on-premise sécurisées et évolutives.
              </p>
            </div>

            <div className="p-6 bg-white border rounded-xl">
              <h3 className="font-semibold mb-3">Cybersécurité</h3>
              <p className="text-gray-600">
                Protection des systèmes critiques et mise en conformité des infrastructures.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* POSITIONNEMENT */}
      <section className="py-20 px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Un partenaire stratégique pour vos projets critiques
        </h2>
        <p className="text-gray-600">
          Nous intervenons en amont pour structurer les projets, définir les architectures
          et sécuriser les choix technologiques, en collaboration avec des partenaires internationaux.
        </p>
      </section>

      {/* CTA FINAL */}
      <section className="bg-black text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Discutons de votre projet
        </h2>
        <p className="mb-6 text-gray-300">
          Architecture, data, cybersécurité — nous vous accompagnons de bout en bout.
        </p>
        <button className="px-6 py-3 bg-white text-black rounded-lg">
          Contactez-nous
        </button>
      </section>

    </main>
  )
}
