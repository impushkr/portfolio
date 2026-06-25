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

  return (
    <>
      <Hero />

      <div className="bg-gradient-to-r from-[#0B1020] to-[#111827] border border-white/10 p-4 rounded-lg flex flex-wrap gap-3 flex-col md:flex-row md:justify-evenly">
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
      </div>
    </>
  );
}
