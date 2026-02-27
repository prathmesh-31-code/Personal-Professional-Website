import React from "react";
import { projects } from "../../data/projects";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";

function Projects() {
  return (
    <section className="mt-32">
      {/* Heading */}
      <div className="flex flex-col mb-12 gap-4">
        <h1 className="text-4xl font-serif text-gray-900">
          projects.
        </h1>

        <p className="text-xl leading-relaxed font-serif text-gray-500">
          here are some projects that i developed during my college years.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-white/70 backdrop-blur-sm border border-slate-200 rounded-xl overflow-hidden transition duration-300 hover:bg-slate-100 hover:shadow-lg"
          >
            {/* Image */}
            <div className="h-56 overflow-hidden bg-slate-100 border-b border-slate-200">
              <img
                src={project.image}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                {project.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {project.description}
              </p>

              {/* Links */}
              <div className="mt-6 flex gap-6 items-center text-sm">
                {project.links?.github &&
                  project.links.github !== "" &&
                  project.links.github !== "/" && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-black transition"
                    >
                      <GitHubIcon fontSize="small" />
                      GitHub
                    </a>
                  )}

                {project.links?.article &&
                  project.links.article !== "" && (
                    <a
                      href={project.links.article}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-black transition"
                    >
                      <ArticleIcon fontSize="small" />
                      Article
                    </a>
                  )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
