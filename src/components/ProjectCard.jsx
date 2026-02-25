export default function ProjectCard({ project }) {
  return (
    <div className="bg-zinc-900/70 backdrop-blur-xl 
      border border-white/10 
      rounded-3xl overflow-hidden 
      shadow-2xl hover:shadow-white/10
      transition-all duration-300">

      <img
        src={project.image}
        alt={project.title}
        className="w-full h-72 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">
          {project.title}
        </h3>

        <div className="flex gap-2 flex-wrap">
          {project.tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs bg-white/10 rounded-lg"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}