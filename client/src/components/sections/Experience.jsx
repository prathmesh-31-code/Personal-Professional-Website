import React, { useState } from "react";
import { experience } from "../../data/experience";

const Experience = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="mt-32">

      {/* Heading */}
      <div className="flex flex-col mb-12 gap-4">
        <h2 className="text-4xl font-serif text-gray-900">
          experience.
        </h2>

        <p className="text-xl leading-relaxed font-serif text-gray-500">
          some work experience that i have over the years
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l border-slate-300 ml-4 space-y-16">
        {experience.map((item, index) => (
          <div key={index} className="relative pl-8 group">

            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-slate-800 group-hover:scale-125 transition"></div>

            <div className="bg-white/70 backdrop-blur-md border border-slate-200 rounded-xl p-6 transition hover:shadow-lg">
              
              {/* Header */}
              <div className="flex justify-between flex-wrap gap-4">
                <div>

                  <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                    {item.logo && (
                      <a 
                        href={item.companylink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                      <img
                        href={item.companylink}
                        src={item.logo}
                        alt={item.company}
                        className="w-10 h-10 object-contain"
                      />
                      </a>
                    )}
                    {item.role}
                  </h3>
                  
                  <p className="text-sm text-gray-500">
                    <a 
                        href={item.companylink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                     {item.company}
                    </a> | {item.location}
                  </p>
                </div>

                <span className="text-sm text-gray-400">
                  {item.period}
                </span>
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-600 leading-relaxed">
                {item.description}
              </p>

              {/* Skills */}
              <div className="mt-4 flex flex-wrap gap-2">
                {item.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs bg-slate-100 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Certificate Button */}
              {item.certificate && (
                <div className="mt-6">
                  <button
                    onClick={() => setSelectedCert(item.certificate)}
                    className="text-sm font-medium text-slate-700 hover:text-black transition"
                  >
                    🎓 View Certificate
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Modal */}
        {selectedCert && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex items-center justify-center p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-lg"
            >
              ✕
            </button>

            {/* Image Wrapper */}
            <div className="w-full h-full flex items-center justify-center overflow-auto">
              <img
                src={selectedCert}
                alt="Certificate"
                className="max-h-[80vh] max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}


    </section>
  );
};

export default Experience;
