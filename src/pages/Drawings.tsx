import { Helmet } from "react-helmet-async";
import { images } from "../utils/constants";
import GoBack from "../components/GoBack";
import Theme from "../components/Theme";
import styles from "../utils/style";

export default function Drawings() {
  return (
    <div className='dark:bg-[#11181A] min-h-screen overflow-hidden'>
      <Helmet>
        <title>{"Drawings"}</title>
      </Helmet>
      <div className="flex justify-between relative mx-[6%] sm:mx-[4%] mt-4">
          <GoBack back="/misc" />
          <Theme isBlog={true} />
      </div>

      <div className={`${styles.flexStart} w-full`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`${styles.boxWidth} gap-x-6 gap-y-6 lg:columns-4 md:columns-3 p-8 text-gray-900 dark:text-gray-300`}>
            {
              images.map((image) => (
                <div className="dark:bg-[#27272A] bg-zinc-300 shadow-lg h-fit rounded-lg p-4 mb-6 break-inside-avoid">
                  <p>{image.name}</p>
                  <p>{image.date}</p>
                  <img className="mt-4 rounded-lg w-full h-auto object-cover" key={image.link} src={`/drawings/${image.link}`} />
                  <p className="mt-4">{image.description}</p>
                  <div className="flex gap-2 mt-2">
                    {
                      image.topics.map((topic) => (
                        <p className="px-2 dark:bg-purple-700 bg-violet-300 shadow-md rounded-lg">#{topic}</p>
                      ))
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
