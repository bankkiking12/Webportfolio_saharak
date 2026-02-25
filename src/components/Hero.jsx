import { motion } from "framer-motion"
import { FaDownload } from "react-icons/fa"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-950" />
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-orange-500/10 blur-[200px] rounded-full" />

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-12">

        <div className="flex items-center justify-center gap-20">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h1 className="text-7xl font-bold bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
              Saharak Nukhao
            </h1>

            <h2 className="text-2xl text-white/60 mt-4 tracking-wide">
              Web Developer
            </h2>

            <div className="mt-6 space-y-4 text-white/60 leading-relaxed max-w-lg tracking-wide">
              <p className="indent-4 text-white/70 leading-loose tracking-wide">
                A Mathematics and Computer Science student with a strong interest in full-stack web and application development
              </p>

              <p>
                Passionate about building accessible and user-friendly interfaces while continuously learning modern development practices. Experienced in managing academic and personal projects with a structured workflow and attention to detail.
              </p>

              <p>
                Currently seeking an internship opportunity to apply technical knowledge in real-world projects and gain hands-on product development experience.
              </p>
            </div>

            <div className="mt-10 flex gap-6">
              {/* Download Button */}
              <a
                href="/resume.pdf"
                download="resume.pdf"
                className="flex items-center gap-3 px-8 py-3 rounded-full
                bg-orange-500 text-black font-semibold
                hover:scale-105 hover:bg-orange-400
                transition duration-300 shadow-lg shadow-orange-500/20"
              >
                <FaDownload />
                Download Resume
              </a>

              {/* Secondary Button */}
              <a
                href="#projects"
                className="px-8 py-3 rounded-full
                border border-white/20
                hover:bg-white hover:text-black
                transition duration-300"
              >
                View Projects
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 bg-orange-500/20 blur-2xl rounded-3xl" />
            <img
              src="/images/profile.jpeg"
              alt="profile"
              className="relative w-[380px] rounded-3xl border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.8)]"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}