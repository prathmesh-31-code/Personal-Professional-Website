import React from "react";
import { experience } from "../../data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto mt-32 px-8"
    >
      <h2 className="text-3xl font-serif text-gray-900 mb-16">
        Experience
      </h2>

      {experience.map((item, index) => (
        <div key={index} className="mb-16 border-b border-slate-200 pb-10">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                {item.role}
              </h3>
              <p className="text-gray-600">
                {item.company} · {item.location}
              </p>
            </div>

            <span className="text-sm text-gray-500 shrink-0">
              {item.period}
            </span>
          </div>

          <p className="mt-4 text-gray-600 max-w-3xl leading-relaxed">
            {item.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            {item.skills.map((skill, i) => (
              <span
                key={i}
                className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>

          {item.certificate && (
            <div className="mt-6">
              <img
                src={item.certificate}
                alt={`${item.company} certificate`}
                className="max-w-sm rounded-lg border"
              />
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Experience;
