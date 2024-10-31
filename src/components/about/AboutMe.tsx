import { builds, hobbies } from "../../utils/constants";
import { getDate } from "../../utils/functions";

export default function AboutMe() {
  const { year, month, day } = getDate();
  
  return (
    <section className="p-8 mt-5 dark:text-gray-300">
      {/* Header Section */}
      <header>
        <h1 className="relative w-max font-mono text-6xl font-bold
          before:absolute before:inset-0 before:animate-typewriter before:bg-white before:dark:bg-[#2D2E32]
          after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-violet-400">
          Imane,
        </h1>
        <span className="text-2xl">Computer Science Enthusiast;</span>
      </header>

      {/* Main Content */}
      <main className="mt-10 text-xl dark:text-gray-200 text-gray-700">
        {/* Section Divider */}
        <div className="relative flex items-center py-5">
          <div className="flex-grow border-t border-gray-400" />
          <span className="mx-4 flex-shrink text-3xl font-semibold">
            <span className="text-violet-600">&gt;</span> About Me:
          </span>
          <div className="flex-grow border-t border-gray-400" />
        </div>

        {/* Bio Section */}
        <div className="space-y-6">
          <p className="pl-0 md:pl-6">
            I am
            <span className="text-violet-400"> {year}</span> years,
            <span className="text-violet-400"> {month}</span> months &
            <span className="text-violet-400"> {day}</span> days old.
          </p>

          <p className="pl-0 md:pl-6">
            I enjoy problem solving and learning programming concepts. I also quickly pick up new technologies.
          </p>

          <p className="pl-0 md:pl-6">
            I am interested in many things -I wish I had more than 24 hours a day to just learn everything I want- 
            and I wanna learn more about the theory of computation and Algebra.
          </p>

          <p className="pl-0 md:pl-6">If I am not coding, I will definitely be:</p>
        </div>

        {/* Hobbies List */}
        <ul className="mt-4 space-y-2 pl-10">
          {hobbies.map((hobby, index) => (
            <li key={index}>
              <span className="text-violet-600">&gt; </span>{hobby}
            </li>
          ))}
        </ul>

        {/* Skills Section */}
        <div className="mt-8">
          <p className="pl-0 md:pl-6">What am I able to build?</p>
          <ul className="mt-4 space-y-2 pl-10">
            {builds.map((build, index) => (
              <li key={index}>
                <span className="text-violet-600">&gt; </span>{build}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </section>
  );
}