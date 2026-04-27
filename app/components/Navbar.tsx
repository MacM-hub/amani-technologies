export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 border-b">
      <div className="font-bold text-lg">
        Amani Technologies
      </div>

      <div className="hidden md:flex gap-6 text-sm">
        <a href="#">Expertise</a>
        <a href="#">Secteurs</a>
        <a href="/about">À propos</a>
        <a href="/contact">Contact</a>
      </div>

      <button className="bg-black text-white px-4 py-2 rounded-lg text-sm">
        Nous contacter
      </button>
    </nav>
  )
}
