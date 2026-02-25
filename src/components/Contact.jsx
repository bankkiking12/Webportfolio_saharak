import { motion } from "framer-motion"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 bg-black text-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />
      <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-500/10 blur-[180px] rounded-full" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent"
        >
          Get in Touch
        </motion.h2>

        <p className="mt-6 text-white/60 text-lg tracking-wide">
          Let’s build something impactful together.
        </p>

        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-white/5 backdrop-blur-xl border border-white/10 
                     rounded-3xl p-12 shadow-[0_20px_80px_rgba(0,0,0,0.7)]"
        >
          <p className="text-white/50 tracking-wide">
            Pathum Thani, Thailand
          </p>

          {/* Email */}
          <a
            href="mailto:yourmail@gmail.com"
            className="mt-6 inline-flex items-center gap-3 text-lg 
                       text-orange-400 hover:scale-105 transition duration-300"
          >
            <FaEnvelope />
            saharakbank@gmail.com
          </a>

          {/* Social Icons */}
          <div className="mt-10 flex justify-center gap-8 text-2xl text-white/60">
            <a
              href="https://github.com/bankkiking12"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 hover:scale-110 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/แบงค์-น้อย-2797103a5"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 hover:scale-110 transition duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}