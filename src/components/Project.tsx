interface ProjectProps {
    id: string,
    name: string,
    description: string, 
    github: string,
    technologies: string[],
    features: string[],
    demo?: string
}

export default function Project({id, name, features, description, github, technologies, demo}: ProjectProps) {
  return (
    <div id={id} className="p-4 border-b border-gray-300 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-600 mt-6">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">{name}</h2>
            <div className="flex gap-4">
                {
                    demo ? 
                    <button className="text-white bg-violet-500 hover:bg-violet-600 dark:bg-violet-700 dark:hover:bg-violet-800 rounded-lg px-4 py-2">
                        <a href={demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </button>
                    :
                    ""
                }
                <button className="text-white bg-violet-500 hover:bg-violet-600 dark:bg-violet-700 dark:hover:bg-violet-800 rounded-lg px-4 py-2">
                    <a href={github} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                </button>
            </div>
        </div>
        <div className="mb-2 text-sm flex-1 ml-4">
            <p className="">{description}</p><br/>
            <p>{`> `}Features:</p>
            <ul className="pl-10">
                {
                    features.map(feature => (
                        <li>- {feature}</li>
                    ))
                }
            </ul>
        </div><br/>
        <div className="flex flex-wrap">
            {technologies.map(tech => (
                <span key={tech} className="text-sm border border-lightText dark:border-gray-500 bg-gray-100 dark:bg-gray-700 rounded-lg m-1 px-2 py-1 transition-all duration-300 hover:bg-violet-300 dark:hover:bg-violet-500">{tech}</span>
            ))}
        </div>
    </div>
  )
}
