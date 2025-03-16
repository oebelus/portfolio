import { Helmet } from "react-helmet-async";
import styles from "../utils/style";
import { FaBook, FaGamepad, FaFilm, FaBookOpen } from "react-icons/fa"; 
import { currently } from "../utils/constants";

export default function Now() {
  type IconKey = "book" | "game" | "movie";

  const iconMap: Record<IconKey, JSX.Element> = {
    book: <FaBook className="text-2xl text-violet-600" />,
    game: <FaGamepad className="text-2xl text-violet-600" />,
    movie: <FaFilm className="text-2xl text-violet-600" />,
  };

  return (
    <div className="mb-10">
      <Helmet>
        <title>resume;</title>
      </Helmet>
      <div className={`${styles.flexStart} w-full`}>
        <div className={`${styles.boxWidth}`}>
          <main className="mt-10 text-xl dark:text-gray-200 text-gray-700">

            {/* Section Divider */}
            <div className="relative flex items-center py-5">
              <div className="flex-grow border-t border-gray-400" />
              <span className="mx-4 flex-shrink text-3xl font-semibold">
                <span className="text-violet-600">&gt;</span> Now:
              </span>
              <div className="flex-grow border-t border-gray-400" />
            </div>

            {/* Currently Section */}
            <div className="p-4">
              <p>Currently: (Will try to update this section from time to time)</p>

              {/* Grid of Boxes */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {Object.entries(currently).map(([key, value]) => {
                    
                  const icon = iconMap[value.icon as IconKey] || (
                    <FaBookOpen className="text-2xl text-violet-600" />
                  );

                  return (
                    <div
                      key={key}
                      className="bg-white dark:bg-[#111818] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-violet-100 dark:border-violet-4300"
                    >
                      <div className="flex items-center space-x-4">
                        {/* Icon */}
                        {icon}
                        {/* Title */}
                        <h3 className="text-xl font-semibold text-violet-600 dark:text-violet-400">
                          {key.toUpperCase()}
                        </h3>
                      </div>
                      {/* Verb and Items */}
                      <p className="mt-4 text-gray-700 dark:text-gray-300">
                        {value.verb}:
                      </p>
                      <ul className="list-disc flex flex-col gap-2 pl-6 mt-2 text-gray-600 dark:text-gray-400">
                        {value.items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}