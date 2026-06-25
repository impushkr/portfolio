import { projects } from "../data/projects";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = () => {
  return (
    <section className="pt-6 px-4 ">
        <h1 className="text-lg lg:text-xl font-bold">My Projects</h1>
      <div className="overflow-x-auto">
        <div className="flex gap-4 w-max py-2 text-start">
        {projects.map((project) => (
        <div
          key={project.id}
          className=" border border-white/10 rounded-3xl flex flex-col justify-around w-[80vw] md:w-[40vw] lg:w-[30vw] xl:w-[20vw] "
        >
          <div className="p-4">
            <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs text-violet-400">
              {project.type}
            </span>

            <h3 className="mt-4 text-xl font-bold text-white">
              {project.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs text-violet-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Features */}
            <ul className="mt-5 space-y-2 text-sm text-gray-400">
              {project.features.slice(0, 3).map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="text-violet-400">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="mt-6 flex gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-700"
              >
                <FiExternalLink />
                Live Visit
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-white transition hover:border-violet-500/40"
              >
                <FaGithub />
                Code
              </a>
            </div>
          </div>
        </div>
      ))}
      </div>
      </div>
    </section>
  );
};

export default ProjectCard;