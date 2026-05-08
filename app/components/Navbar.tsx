"use client"

import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: "Expertise", href: "#expertise" },
    { label: "Secteurs", href: "#secteurs" },
    { label: "Approche", href: "#approche" },
  ]

  return (
    <nav className="w-full fixed top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        <a href="#" className="font-bold text-lg tracking-tight text-gray-900">
          Amani Technologies
        </a>

        {/* Liens desktop */}
        <div className="hidden md:flex gap-8 text-sm text-gray-600">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-gray-900 transition">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-block px-4 py-2 rounded-lg text-sm font-semibold text-white transition hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #1d4ed8, #059669)" }}
          >
            Nous contacter
          </a>

          {/* Burger mobile */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <div className="w-5 space-y-1">
              <span className={`block h-0.5 bg-gray-800 transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`block h-0.5 bg-gray-800 transition-all ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-gray-800 transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="block text-sm text-gray-700 hover:text-gray-900 py-1"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block text-sm font-semibold text-blue-600 py-1"
            onClick={() => setOpen(false)}
          >
            Nous contacter →
          </a>
        </div>
      )}
    </nav>
  )
}
