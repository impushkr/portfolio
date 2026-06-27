import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <>
      <div className="mt-18 mb-5 p-5 md:p-10 flex flex-col gap-2 lg:gap-3 ">
        <div className="flex items-center space-x-1 px-2 py-1 shadow  md:text-xs xl:text-sm rounded-3xl">
          <span className="w-2 h-2 rounded-full bg-purple-400"></span>
          <span className="text-purple-400 font-medium">My Work</span>
        </div>
        <div className="space-x-4">
          <span className="text-5xl md:text-4xl lg:text-5xl xl:text-7xl font-bold">
            My
          </span>
          <span className="text-5xl md:text-4xl lg:text-5xl xl:text-7xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Projects
          </span>
        </div>
        <h3 className="md:w-[46vw] lg:w-[40vw] text-gray-400 md:text-xs lg:text-sm xl:text-base">
          Here are some of the projects I've worked on. Each project is buitt
          with passion, clean code and best practices.
        </h3>
      </div>

      <ProjectCard/>
    </>
  );
}
