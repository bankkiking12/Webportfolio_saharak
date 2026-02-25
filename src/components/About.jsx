import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="relative py-32 bg-black text-white overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT IMAGE */}
        <motion.img
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          src="/images/profile.jpeg"
          className="rounded-3xl border border-white/10 shadow-2xl"
        />

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="mt-8 text-white/70 leading-loose indent-8">
            I am a Mathematics and Computer Science student passionate about 
            building scalable web applications and designing clean, user-focused interfaces.
          </p>

          <p className="mt-6 text-white/70 leading-loose indent-8">
            I enjoy solving real-world problems through structured thinking 
            and writing maintainable code. My goal is to become a full-stack developer 
            capable of building impactful digital products.
          </p>

          <div className="mt-10 flex gap-6 text-sm text-white/50">
            <span>• Problem Solving</span>
            <span>• Clean Architecture</span>
            <span>• UI/UX Focused</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}