import Hero from "./Hero";
import { GraduationCap, Code2, FolderKanban, Rocket } from "lucide-react";
import { FaCode } from "react-icons/fa";

export default function Home() {

  const highlights = [
    {
      id: 1,
      icon: GraduationCap,
      title: "BCA (Pursuing)",
      subtitle: "2023 - 2026",
      description: "Lyallpur Khalsa College, GNDU University",
    },
    {
      id: 2,
      icon: Code2,
      title: "Frontend Developer",
      subtitle: "Specializing in React.js",
      description: "and modern web technologies",
    },
    {
      id: 3,
      icon: FolderKanban,
      title: "Projects",
      subtitle: "Built multiple real-world",
      description: "projects and freelance work",
    },
    {
      id: 4,
      icon: Rocket,
      title: "Always Learning",
      subtitle: "Exploring backend",
      description: "technologies and improving every day",
    },
  ];

  const technologies=[
    {
        img:"src/assets/HTML.png",
        title:"HTML"
    },
    {
        img:"src/assets/CSS.png",
        title:"CSS"
    },
    {
        img:"src/assets/JS.png",
        title:"JavaScript"
    },
    {
        img:"src/assets/React.png",
        title:"React.js"
    },
    {
        img:"src/assets/Tailwind.png",
        title:"Tailwind CSS"
    },
    {
        img:"src/assets/Git.png",
        title:"Git"
    },
    {
        img:"src/assets/GitHub.png",
        title:"GitHub"
    },
    {
        img:"src/assets/VS.png",
        title:"VS Code"
    }
  ]

  return (
    <>
      <Hero />

      <section className="bg-gradient-to-r from-[#0B1020] to-[#111827] border border-white/10 p-4 rounded-2xl flex flex-wrap gap-3 flex-col md:flex-row md:justify-evenly">
        {highlights.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.id} className="flex gap-4 md:w-[40vw] xl:w-auto">
              <div className="w-12 h-12 rounded-xl bg-violet-500/15 flex items-center justify-center">
                <Icon size={22} className="text-violet-400" />
              </div>

              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.subtitle}</p>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
          );
        })}
      </section>

      <section className="pt-6 px-4 xl:text-center">
        <h1 className="text-xl lg:text-2xl font-bold">Skills & Technologies</h1>

        <div className="flex flex-wrap gap-2 xl:gap-4 justify-evenly xl:justify-center py-4 ">
            {
            technologies.map((item)=>(
                <div className="flex flex-col gap-2 bg-gray border border-white/10 rounded-sm py-4 w-[20vw] md:w-[11vw] xl:w-[8vw] items-center">
            <img src={item.img} alt={item.title} className="h-[5vh] md:h-[3vh] xl:h-[4vh]" />
            <h1 className="text-xs lg:text-sm font-semibold">{item.title}</h1>
        </div>
            ))
        }
        </div>

      </section>

      
    </>
  );
}
