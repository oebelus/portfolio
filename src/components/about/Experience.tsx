import React from "react";
import { experience } from "../../utils/constants";

export default function Experience() {
  return (
    <section className="p-8 dark:text-gray-300">
      <main className="text-xl space-y-10">
        {/* Section Divider */}
        <div className="relative flex items-center py-5">
          <div className="flex-grow border-t border-gray-400" />
          <span className="mx-4 flex-shrink text-3xl font-semibold">
            <span className="text-violet-600">&gt;</span> Experience:
          </span>
          <div className="flex-grow border-t border-gray-400" />
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experience.map((exp) => (
            <div key={exp.id} className="border rounded-lg p-6 shadow-md dark:border-gray-700">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-2xl font-bold">{exp.title}</h2>
                <span className="text-sm italic">{exp.date}</span>
              </div>
              <p className="text-lg text-gray-500">{exp.title_type} at {exp.company}</p>
              <p className="text-sm">{exp.location_type} - {exp.location}</p>
              
              {/* Stack */}
              <div className="mt-4">
                <p className="font-semibold">Tech Stack:</p>
                <ul className="flex flex-wrap gap-2 mt-2">
                  {exp.stack.map((tech, index) => (
                    <li key={index} className="bg-violet-600 text-white px-3 py-1 rounded-full text-sm">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
}
