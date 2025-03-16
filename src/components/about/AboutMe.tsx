import { facts, hobbies } from "../../utils/constants";
import { getDate } from "../../utils/Date";

export default function AboutMe() {
  const { year, month, day } = getDate();
  
  return (
    <section className="p-8 mt-5 dark:text-gray-300">
      {/* Header Section */}
      <header>
        <h1 className="relative w-max font-mono text-6xl font-bold
          before:absolute before:inset-0 before:animate-typewriter before:bg-white before:dark:bg-[#11181A]
          after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-violet-400">
          Oebelus,
        </h1>
        {/* <span className="text-2xl">Computer Science Enthusiast;</span> */}
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
            - I am
            <span className="text-violet-400"> {year}</span> years,
            <span className="text-violet-400"> {month}</span> months &
            <span className="text-violet-400"> {day}</span> days old.
          </p>

          <p className="pl-0 md:pl-6 pt-4">
            - I enjoy problem solving and learning programming concepts. I also quickly pick up new technologies.
          </p>

          <p className="pl-0 md:pl-6 pt-4">
            - I am interested in many things -I wish I had more than 24 hours a day to just learn everything I want- 
            and I wanna learn more about the theory of computation and Algebra.
          </p>

          <p className="pl-0 md:pl-6 pt-4">
            - If I am not coding, I will definitely be:
          </p>
        </div>

        {/* Hobbies List */}
        <ul className="mt-4 space-y-4 pl-10">
          {hobbies.map((hobby, index) => (
            <li key={index}>
              <span className="text-violet-600">&gt; </span>{hobby}
            </li>
          ))}
        </ul>

        {/* Facts About Me */}
        <p className="pl-0 md:pl-6 mt-4 pt-4">
          - Fun facts about me:
        </p>
        <ul className="mt-4 space-y-4 pl-10">
          {facts.map((fact, index) => (
            <li key={index}>
              <span className="text-violet-600">&gt; </span>{fact}
            </li>
          ))}
        </ul>

        {/* Currently Learning */}
        <p className="pl-0 md:pl-6 mt-4 pt-4 mb-4">
          - And this is my best friend Lily:
        </p>

        <div className="hidden md:flex space-x-4 h-48 px-8">
          <img
            src="lily/1.jpg"
            alt=""
            className="rounded-xl border-2 border-violet-600 dark:border-white md:w-2/5 h-full object-cover transform rotate-2"
          />
          <img
            src="lily/2.jpg"
            alt=""
            className="border-2 border-violet-600 dark:border-white rounded-xl w-3/5 h-full object-cover transform -rotate-3" 
          />
        </div>

        <img
            src="lily/2.jpg"
            alt=""
            className="flex mt-8 mx-auto md:hidden border-2 border-violet-600 dark:border-white rounded-xl h-full transform -rotate-3" 
          />

      </main>
    </section>
  );
}