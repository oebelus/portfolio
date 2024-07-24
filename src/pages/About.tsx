import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import Navbar from "../components/Navbar";
import styles from "../utils/style";

export default function About() {
  
  return (
    <div className='dark:bg-[#2D2E32] min-h-screen'>
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar clicked="about_me." />
        </div>
      </div>

      <div className={`${styles.flexStart} w-full`}>
        <div className={`${styles.boxWidth}`}>
          <AboutMe/>
          <ContactMe />
        </div>
      </div>
    </div>
  )
}
