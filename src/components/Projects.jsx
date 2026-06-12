import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-12">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project) => (
          <div key={project.title} className="mb-12 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width="150"
                height="150"
                alt={`${project.title} preview`}
                loading="lazy"
                className="mb-6 rounded-xl"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <div className="mb-2 flex flex-wrap items-center gap-3">
                <h3 className="font-semibold">{project.title}</h3>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} source code on GitHub`}
                    className="text-lg text-neutral-400 transition-colors duration-300 hover:text-white"
                  >
                    <FaGithub aria-hidden="true" />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live demo`}
                    className="text-lg text-neutral-400 transition-colors duration-300 hover:text-white"
                  >
                    <FiExternalLink aria-hidden="true" />
                  </a>
                )}
              </div>
              {project.award && (
                <p className="mb-2 inline-block rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300">
                  🏆 {project.award}
                </p>
              )}
              <p className="mb-4 leading-relaxed text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
