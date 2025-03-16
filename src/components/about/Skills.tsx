import { SkillsType } from "../../types/post";
import { skills } from "../../utils/constants";

export default function Skills() {
  return (
    <section className="p-8 dark:text-gray-300">
      <main className="text-xl space-y-10">
        {/* Section Divider */}
        <div className="relative flex items-center py-5">
          <div className="flex-grow border-t border-gray-400" />
          <span className="mx-4 flex-shrink text-2xl font-semibold">
            <span className="text-violet-600">&gt;</span> Skills:
          </span>
          <div className="flex-grow border-t border-gray-400" />
        </div>

        {/* Skills Cards */}
        <div className="gap-x-6 gap-y-6 columns-1 lg:columns-3 md:columns-2 gap-8 h-fit rounded-lg p-4 mb-6 break-inside-avoid">
          {Object.keys(skills).map((category) => (
            <div key={category} className=" h-fit mb-6 break-inside-avoid border rounded-lg p-6 shadow-md dark:border-gray-700">
              <h3 className="text-2xl font-semibold mb-4">{category}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-500 dark:text-gray-400">
                {skills[category as keyof SkillsType].map((skill, index) => (
                  <li key={index} className="text-lg">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
}
