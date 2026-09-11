import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-100 bg-white px-6 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Identité */}
        <div>
          <Image
            src="/logo-trimmed.png"
            alt="Amani Technologies"
            width={160}
            height={123}
            className="h-12 w-auto object-contain mb-2"
          />
          <p className="text-sm text-gray-600 leading-relaxed">
            Conseil en IA, cybersécurité et systèmes d&apos;information.
            <br />
            Dakar · Afrique francophone &amp; Europe
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Navigation</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#offres" className="hover:text-gray-900 transition">Offres</a></li>
            <li><a href="#formations" className="hover:text-gray-900 transition">Formations</a></li>
            <li><a href="#equipe" className="hover:text-gray-900 transition">Équipe</a></li>
            <li><a href="#approche" className="hover:text-gray-900 transition">Approche</a></li>
            <li><a href="#contact" className="hover:text-gray-900 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Contact</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="mailto:contact@amani-technologies.com" className="hover:text-gray-900 transition">
                contact@amani-technologies.com
              </a>
            </li>
            <li>
              <Link href="/mentions-legales" className="hover:text-gray-900 transition">
                Mentions légales
              </Link>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/146501988"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 transition"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-gray-100 text-xs text-gray-500 text-center">
        © {year} Amani Technologies. Tous droits réservés.
      </div>
    </footer>
  )
}
