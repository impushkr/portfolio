import { projects } from "../data/projects";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = () => {
  return (
      <div className="overflow-x-auto pb-4 [scrollbar-width:thin]">
  <div className="flex w-max snap-x snap-mandatory items-stretch gap-4 px-2 py-2 text-start md:gap-6">
    {projects.map((project) => (
      <div
        key={project.id}
        className="flex w-[85vw] max-w-sm shrink-0 snap-start flex-col rounded-2xl border border-white/10 p-5 shadow shadow-violet-300/50 transition hover:border-violet-500/30 sm:w-80 lg:w-96"
      >
        <div className="flex-1">
          <span className="inline-block rounded-full bg-violet-500/10 px-3 py-1 text-xs text-violet-400">
            {project.type}
          </span>

          <h3 className="mt-4 truncate text-xl font-bold text-white" title={project.title}>
            {project.title}
          </h3>

          <p className="mt-3 line-clamp-4 text-sm leading-6 text-gray-400">
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
        </div>

        {/* Buttons - hamesha card ke bottom pe */}
        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-700"
            >
              <FiExternalLink />
              Live Visit
            </a>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-violet-500/40"
          >
            <FaGithub />
            Code
          </a>
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default ProjectCard;