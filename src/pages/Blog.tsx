import Navbar from "../components/Navbar";
import styles from "../utils/style";

export default function Blog() {
  return (
    <div className='dark:bg-[#2D2E32] min-h-screen'>
      <div className={`${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
              <Navbar clicked="blog." />
          </div>
      </div>

      <div className={`${styles.flexStart} w-full`}>
          <div className={`${styles.boxWidth}`}>
              <div className={`${styles.boxWidth} mt-5 p-8 dark:text-gray-300`}>
                <h3 className="text-2xl">Nothing to show at the moments</h3>
              </div>
          </div>
      </div>
    </div>
  )
}
