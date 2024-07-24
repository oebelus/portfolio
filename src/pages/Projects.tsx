import { useState } from "react";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import { projects } from "../utils/constants";
import styles from "../utils/style";

const languages = ["All", "C", "C#", "Python", "Java", "JavaScript", "TypeScript"]; // Add languages as needed

export default function Projects() {
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  const filteredProjects = projects.filter(project => 
    selectedLanguage === "All" || project.technologies.includes(selectedLanguage)
  );

  return (
    <div className='dark:bg-[#2D2E32] min-h-screen'>
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar clicked="projects." />
        </div>
      </div>

      <div className={`${styles.flexStart} w-full`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`${styles.boxWidth} mt-5 p-8 dark:text-gray-300`}>
            <h3 className="text-2xl dark:text-gray-300 text-black mb-5">
              {`|> `}I mostly learn through project-based learning. This hands-on approach helps me understand concepts better and keeps me motivated.
            </h3>
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="text-3xl font-semibold flex-shrink mx-4 text-gray-400">
                <span className="text-violet-600">{`>`}</span> My Projects:
              </span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <h3 className="text-2xl">Here are some of my favourite projects that I have worked on:</h3>
            
            <div className="flex flex-wrap justify-center mt-6">
              {languages.map(language => (
                <span 
                  key={language} 
                  onClick={() => setSelectedLanguage(language)} 
                  className={`cursor-pointer text-sm border border-lightText dark:border-gray-500 rounded-lg m-1 px-2 py-1 transition-all duration-300 hover:bg-violet-300 dark:hover:bg-violet-500 ${selectedLanguage === language ? "bg-violet-500" : "bg-gray-100 dark:bg-gray-700"}`}
                >
                  {language}
                </span>
              ))}
            </div>
            
            <div className="flex flex-col">
              {filteredProjects.map(project => (
                <Project 
                  key={project.id} 
                  id={project.id} 
                  demo={project.demo} 
                  name={project.name} 
                  github={project.github} 
                  description={project.description} 
                  technologies={project.technologies} 
                  features={project.features} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
