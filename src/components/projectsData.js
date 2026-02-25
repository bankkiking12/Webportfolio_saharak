import { DiJavascript } from "react-icons/di"
import project1 from "../assets/projects/project1.png"
import project2 from "../assets/projects/project2.png"
import project3 from "../assets/projects/project3.png"
import project4 from "../assets/projects/project4.png"
import { FaReact } from "react-icons/fa"
import { SiFirebase, SiTailwindcss } from "react-icons/si"

export const projects = [
  {
    id: 1,
    title: "Burnplernbadminton",
    image: project1,
    description: "Burnplernbadminton is a badminton court booking website built with React and Tailwind CSS. It allows users to easily find and book badminton courts in their area. The website features a user-friendly interface, real-time availability updates, and secure payment options.",
    tech: ["React", "Tailwind"],
    github: "https://github.com/bankkiking12/Burnplernbadminton.git",
    icons: [FaReact, SiFirebase, SiTailwindcss],
    stack: ["React", "Tailwind", "Firebase"],
    demo: "https://your-live-site.vercel.app"
    
  },
  {
    id: 2,
    title: "Expense Tracker",
    image: project2,
    description: "Expense Tracker is a web application built with React and Firebase that allows users to track their expenses and income. It features a clean and intuitive interface, real-time data synchronization, and secure user authentication.",
    tech: ["React", "Firebase"],
    github: "https://github.com/bankkiking12/expense-tracker.git",
    icons: [FaReact, SiFirebase, SiTailwindcss],
    stack: ["React", "Tailwind", "Firebase"],
    demo: "https://your-live-site.vercel.app"
    
  },
   {
    id: 3,
    title: "Kanban",
    image: project3,
    description: "Kanban Board is a task management application built with React and Firebase. It allows users to organize their tasks in a Kanban-style board, with drag-and-drop functionality and real-time updates.",
    tech: ["React", "Firebase"],
    github: "https://github.com/bankkiking12/finish-kanban.git",
    icons: [FaReact, SiFirebase, SiTailwindcss , DiJavascript],
    stack: ["React", "Tailwind", "Firebase", "JavaScript"],
    demo: "https://finish-kanban.vercel.app"
    
  },
  {
    id: 4,
    title: "Namicake",
    image: project4,
    description: "Namicake is a bakery website built with React and Firebase. It features a responsive design, product listings, and an integrated shopping cart system.",
    tech: ["React", "Firebase"],
    github: "https://github.com/bankkiking12/project-final-namicake.git",
    icons: [FaReact, SiFirebase, SiTailwindcss , DiJavascript],
    stack: ["React", "Tailwind", "Firebase", "JavaScript"],
    demo: "https://namicake.vercel.app"
    
  },
]
