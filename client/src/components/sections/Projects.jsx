import React, { useState } from "react";
import { projects } from "../../data/projects";

function Projects() {
  const [activeType, setActiveType] = useState("Project");

  const filteredItems = projects.filter(
    (item) => item.type === activeType
  );

  return (
    <section
      id="projects"
      className="mt-32 px-24 max-sm:px-5"
    >
      {/* INNER COLUMN — this is the key fix */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-serif text-gray-900 mb-8">
          Projects & Research
        </h1>

        {/* Toggle */}
        <div className="flex gap-6 mb-16">
          {["Project", "Research"].map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`text-sm font-medium pb-2 border-b-2 transition
                ${
                  activeType === type
                    ? "border-gray-900 text-gray-900"
                    : "border-transparent text-gray-500 hover:text-gray-900"
                }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="space-y-16">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="border-b border-slate-200 pb-10"
            >
              <div className="flex items-start justify-between gap-6">
                <h3 className="text-xl font-semibold text-slate-900">
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

              <p className="mt-4 text-slate-600 leading-relaxed">
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

              {/* Dynamic links */}
              {item.links && (
                <div className="mt-5 flex flex-wrap gap-4">
                  {item.links.project && (
                    <a
                      href={item.links.project}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 hover:underline"
                    >
                      View Project →
                    </a>
                  )}

                  {item.links.publication && (
                    <a
                      href={item.links.publication}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 hover:underline"
                    >
                      View Publication →
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
