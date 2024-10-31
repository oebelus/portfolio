import { Helmet } from "react-helmet-async";
import AboutMe from "../components/about/AboutMe";
import styles from "../utils/style";
import Experience from "../components/about/Experience";
import Certifications from "../components/about/Certifications";
import Skills from "../components/about/Skills";

export default function About() {
  return (
    <div>
      <Helmet>
        <title>whoami: Imane;</title>
      </Helmet>
      <div className={`${styles.flexStart} w-full`}>
          <div className={`${styles.boxWidth}`}>
            <AboutMe />
            <Experience />
            <Certifications />
            <Skills />
          </div>
        </div>
    </div>
  );
}
