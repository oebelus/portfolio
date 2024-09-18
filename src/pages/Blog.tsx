import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import styles from "../utils/style";
import { posts } from "../utils/constants";
import BlogCard from "../components/BlogCard";

export default function Blog() {
  return (
    <div className='dark:bg-[#2D2E32] min-h-screen'>
      <div className={`${styles.flexCenter}`}>
        <Helmet>
          <title>blog;</title>
        </Helmet>
          <div className={`${styles.boxWidth}`}>
              <Navbar clicked="blog;" />
          </div>
      </div>

      <div className={`${styles.flexStart} w-full`}>
          <div className={`${styles.boxWidth}`}>
            <div className={`${styles.boxWidth} mt-5 p-8 dark:text-gray-300`}>
              <h3 className="text-xl dark:text-gray-300 text-black mb-5">
                <span className="text-3xl text-violet-600">{"> "}</span>These are just the notes I take while I learn about a new topic, or just to have some fun (If you notice any inaccuracies in my post, please email me!).
              </h3>
              <div className="relative flex py-4 items-center">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="text-3xl font-semibold flex-shrink mx-4 text-gray-400">
                  <span className="text-violet-600">{`>`}</span> My Articles:
                </span>
                <div className="flex-grow border-t border-gray-400"></div>
              </div>
            </div>
            <div className={`${styles.boxWidth} border-violet-600 flex flex-col gap-4 p-6 dark:text-gray-300`}>
              {
                posts.map((post) => (
                  <div className="flex">
                    <BlogCard id={post.id} title={post.title} date={post.date} category={post.category} description={post.description} />
                  </div>
                ))
              }
            </div>
          </div>
      </div>
    </div>
  )
}
