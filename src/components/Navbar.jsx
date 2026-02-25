import { useEffect, useState } from "react"

export default function Navbar() {
  const [active, setActive] = useState("home")

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item =>
        document.getElementById(item.id)
      )

      const scrollPosition = window.scrollY + 200

      sections.forEach((section, index) => {
        if (!section) return

        const offsetTop = section.offsetTop
        const height = section.offsetHeight

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + height
        ) {
          setActive(navItems[index].id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-black/60 backdrop-blur-xl px-10 py-4 rounded-2xl 
                      border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">

        <ul className="flex gap-12 text-white/70 font-medium tracking-wide">

          {navItems.map((item) => (
            <li key={item.id} className="relative group cursor-pointer">

              <a
                href={`#${item.id}`}
                className={`transition duration-300 
                ${active === item.id 
                  ? "text-orange-400" 
                  : "hover:text-orange-400"}`}
              >
                {item.name}
              </a>

              {/* Active / Hover Underline */}
              <span
                className={`absolute left-0 -bottom-2 h-[2px] bg-orange-400 
                transition-all duration-300
                ${active === item.id ? "w-full" : "w-0 group-hover:w-full"}`}
              />

            </li>
          ))}

        </ul>
      </div>
    </div>
  )
}