import { motion } from "framer-motion"
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPhp
} from "react-icons/fa"
import { SiTailwindcss, SiJavascript, SiMysql, SiFirebase, SiMongodb } from "react-icons/si"

export default function Skills() {
  const frontend = [
    { name: "React", icon: <FaReact /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
  ]

  const backend = [
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Firebase", icon: <SiFirebase /> },
    {name: "MongoDB", icon: <SiMongodb /> },

  ]

  return (
    <section
      id="skills"
      className="relative py-32 bg-black text-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />
      <div className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] bg-orange-500/10 blur-[160px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
          Skills
        </h2>

        {/* Frontend */}
        <div className="mt-20">
          <h3 className="text-2xl text-white/70 mb-10 tracking-widest uppercase">
            Frontend
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {frontend.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 
                           rounded-2xl p-8 flex flex-col items-center 
                           shadow-lg hover:shadow-orange-500/20 
                           transition duration-300"
              >
                <div className="text-5xl text-orange-400">
                  {skill.icon}
                </div>
                <p className="mt-4 text-white/70">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="mt-24">
          <h3 className="text-2xl text-white/70 mb-10 tracking-widest uppercase">
            Backend
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-center">
            {backend.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 
                           rounded-2xl p-8 flex flex-col items-center 
                           shadow-lg hover:shadow-orange-500/20 
                           transition duration-300"
              >
                <div className="text-5xl text-orange-400">
                  {skill.icon}
                </div>
                <p className="mt-4 text-white/70">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}