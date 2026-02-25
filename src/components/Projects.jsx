import { useState, useEffect, useRef } from "react"
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring
} from "framer-motion"
import { FaGithub, FaArrowUp, FaArrowDown, FaTimes } from "react-icons/fa"
import { projects } from "./projectsData"
import { FaExternalLinkAlt } from "react-icons/fa"

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [viewAll, setViewAll] = useState(false)

  const containerRef = useRef(null)

  // =========================
  // Spotlight Motion
  // =========================
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  const rotateX = useTransform(smoothY, [-400, 400], [10, -10])
  const rotateY = useTransform(smoothX, [-400, 400], [-10, 10])

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

 
  const next = () =>
    setActiveIndex((p) =>
      p === projects.length - 1 ? 0 : p + 1
    )

  const prev = () =>
    setActiveIndex((p) =>
      p === 0 ? projects.length - 1 : p - 1
    )


  useEffect(() => {
    if (isDragging || viewAll) return
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [isDragging, viewAll])

  return (
    <>
      <section
        ref={containerRef}
        id = "projects"
        onMouseMove={handleMouseMove}
        className="relative min-h-screen bg-black text-white overflow-hidden"
      >
        
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-950" />

        
        <motion.div
          animate={{ x: [0, 120, -120, 0], y: [0, -80, 80, 0] }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute w-[1000px] h-[1000px]
          bg-white/10 blur-[220px] rounded-full
          top-[-300px] left-1/2 -translate-x-1/2"
        />

        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center">

          <div className="grid grid-cols-2 gap-28 w-full">


<div className="relative h-[560px] flex items-center justify-center">

  {projects.map((project, index) => {
    const offset = index - activeIndex

    return (
      <motion.div
        key={project.id}
        drag="y"
        dragElastic={0.2}
        dragConstraints={{ top: 0, bottom: 0 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={(e, info) => {
          setIsDragging(false)
          if (info.offset.y < -150) next()
          if (info.offset.y > 150) prev()
        }}
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1200
        }}
        className="absolute w-[480px] h-[520px]
        bg-gradient-to-b from-white/10 to-white/5
        backdrop-blur-3xl
        border border-white/10
        rounded-3xl overflow-hidden
        shadow-[0_40px_120px_rgba(0,0,0,0.8)]
        cursor-grab active:cursor-grabbing
        group"
        animate={{
          y: offset * 80,
          scale: 1 - Math.abs(offset) * 0.1,
          opacity: Math.abs(offset) > 3 ? 0 : 1,
          filter: `blur(${Math.abs(offset) * 2}px)`,
          zIndex: projects.length - Math.abs(offset)
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20
        }}
      >

        
        <div className="relative overflow-hidden">

          {/* Image */}
          <img
            src={project.image}
            className="w-full h-80 object-cover
            group-hover:scale-105
            transition duration-700 ease-out"
            alt={project.title}
          />

         
          <div className="absolute inset-0 
            bg-gradient-to-t from-black/70 via-black/20 to-transparent
            opacity-80"
          />

        
          <div className="absolute inset-0 
            bg-white/10 opacity-0 
            group-hover:opacity-100 
            transition duration-500"
          />

          
          {project.icons && (
            <div className="absolute bottom-4 left-4 flex gap-3 z-20">
              {project.icons.map((Icon, i) => (
                <div
                  key={i}
                  className="p-2 rounded-full
                  bg-black/70 backdrop-blur-md
                  border border-white/20
                  text-white
                  shadow-lg
                  hover:scale-110
                  hover:text-orange-400
                  transition duration-300"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-6">

          <h3 className="text-2xl font-semibold mb-4 tracking-wide">
            {project.title}
          </h3>

          {project.stack && (
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full
                  bg-white/10 border border-white/20
                  text-white/70
                  hover:text-orange-400
                  hover:border-orange-400/50
                  transition duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

      </motion.div>
    )
  })}
</div>

            <div className="flex items-center relative">

              <AnimatePresence mode="wait">
                <motion.div
                  key={projects[activeIndex].id}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -60 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white/5 backdrop-blur-3xl
                  border border-white/10
                  rounded-3xl p-16 w-full
                  shadow-[0_20px_80px_rgba(0,0,0,0.7)]"
                >
                  <h2 className="text-4xl font-bold mb-6">
                    {projects[activeIndex].title}
                  </h2>

                  <p className="text-white/70 leading-relaxed mb-10">
                    {projects[activeIndex].description}
                  </p>

         <div className="flex gap-4 flex-wrap">

  <a
    href={projects[activeIndex].github}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2
    px-5 py-2
    text-sm font-medium
    rounded-full
    bg-white text-black
    hover:scale-105
    transition duration-300"
  >
    <FaGithub size={14} />
    GitHub
  </a>

  <a
    href={projects[activeIndex].demo}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2
    px-5 py-2
    text-sm font-medium
    rounded-full
    border border-orange-400/40
    text-orange-400
    backdrop-blur-xl
    hover:bg-orange-500
    hover:text-black
    hover:scale-105
    transition duration-300"
  >
    <FaExternalLinkAlt size={13} />
    Live Demo
  </a>

  <button
    onClick={() => setViewAll(true)}
    className="inline-flex items-center gap-2
    px-5 py-2
    text-sm font-medium
    rounded-full
    border border-white/30
    text-white/80
    hover:bg-white
    hover:text-black
    hover:scale-105
    transition duration-300"
  >
    View All Projects
  </button>

</div>
                </motion.div>
              </AnimatePresence>

             
              <div className="absolute -left-24 flex flex-col gap-6">
                <button
                  onClick={prev}
                  className="p-4 rounded-full border border-white/20
                  bg-white/5 hover:bg-white hover:text-black transition"
                >
                  <FaArrowUp />
                </button>
                <button
                  onClick={next}
                  className="p-4 rounded-full border border-white/20
                  bg-white/5 hover:bg-white hover:text-black transition"
                >
                  <FaArrowDown />
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

     

<section className="py-32 bg-gradient-to-b from-black to-zinc-950 text-white">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold text-orange-500 mb-16">
      Project Highlights
    </h2>

    <div className="grid md:grid-cols-3 gap-10">
      <div className="bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-xl">
        <h3 className="text-3xl font-bold text-orange-400 mb-4">
          {projects.length}+
        </h3>
        <p className="text-white/70">Completed Projects</p>
      </div>

      <div className="bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-xl">
        <h3 className="text-3xl font-bold text-orange-400 mb-4">
          Interactive UI
        </h3>
        <p className="text-white/70">
          3D Drag, Motion & Depth Effect
        </p>
      </div>

      <div className="bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-xl">
        <h3 className="text-3xl font-bold text-orange-400 mb-4">
          Modern Stack
        </h3>
        <p className="text-white/70">
          React · Tailwind · Framer Motion
        </p>
      </div>
    </div>
  </div>
</section>






<AnimatePresence>
  {viewAll && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 backdrop-blur-2xl
      z-50 p-20 overflow-y-auto"
    >

      
      <button
        onClick={() => setViewAll(false)}
        className="absolute top-10 right-10
        w-12 h-12
        flex items-center justify-center
        rounded-full
        border border-white/20
        bg-white/5 backdrop-blur-xl
        text-white
        hover:bg-white hover:text-black
        transition duration-300"
      >
        <FaTimes />
      </button>

      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold text-white tracking-wide">
          All Projects
        </h2>
        <div className="w-24 h-[2px] bg-orange-500 mx-auto mt-4" />
      </div>

      
      <div className="grid grid-cols-3 gap-10 text-white">

        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -8 }}
            className="group
            bg-gradient-to-b from-white/10 to-white/5
            p-6 rounded-2xl
            border border-white/10
            backdrop-blur-2xl
            shadow-[0_20px_60px_rgba(0,0,0,0.6)]
            transition duration-300"
          >

          
            <div className="relative overflow-hidden rounded-xl mb-4">
              <img
                src={project.image}
                className="rounded-xl
                group-hover:scale-105
                transition duration-700"
              />

              
              <div className="absolute inset-0
              bg-gradient-to-t from-black/70 to-transparent
              opacity-80" />
            </div>

           
            <h3 className="text-xl font-semibold mb-4 tracking-wide">
              {project.title}
            </h3>

            
            <div className="flex gap-4 items-center">

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm
                px-4 py-2
                rounded-full
                border border-white/20
                text-white/80
                hover:text-white
                hover:border-white/40
                transition duration-300"
              >
                View GitHub
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm
                  px-4 py-2
                  rounded-full
                  bg-orange-500/90
                  text-black
                  hover:bg-orange-400
                  transition duration-300"
                >
                  Live Demo
                </a>
              )}

            </div>

          </motion.div>
        ))}

      </div>

    </motion.div>
  )}
</AnimatePresence>
    </>
  )
}