import React from "react";
import { projects } from "../../data/projects";

function Projects() {
  return (
    <section
  id="projects"
  className="max-w-7xl mx-auto mt-32 px-8"
>
  <h1 className="text-3xl font-serif text-gray-900 mb-16">
    Projects & Research
  </h1>

  <div className="space-y-16">
    {projects.map((item, index) => (
      <div
        key={index}
        className="border-b border-slate-200 pb-10"
      >
        <div className="flex items-start justify-between gap-6">
          <h3 className="text-xl font-semibold text-slate-900 max-w-3xl">
            {item.title}
          </h3>

          <span
            className={`shrink-0 text-xs font-medium px-3 py-1 rounded-full
              ${
                item.type === "Research"
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-blue-50 text-blue-700"
              }`}
          >
            {item.type}
          </span>
        </div>

        <p className="mt-4 text-slate-600 max-w-3xl">
          {item.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {item.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 text-sm font-medium text-blue-600 hover:underline"
          >
            View {item.type === "Research" ? "Publication" : "Project"} →
          </a>
        )}
      </div>
    ))}
  </div>
</section>
  );
}

export default Projects;
