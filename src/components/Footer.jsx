export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-8 text-center text-white/40 text-sm">
      <p>© {new Date().getFullYear()} Saharak. All rights reserved.</p>
      <p className="mt-2">Built with React & Tailwind CSS</p>
    </footer>
  )
}