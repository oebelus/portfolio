import { Helmet } from "react-helmet-async";
import AboutMe from "../components/AboutMe";
import styles from "../utils/style";

export default function About() {
  return (
    <div>
      <Helmet>
        <title>whoami: Imane;</title>
      </Helmet>
      <div className={`${styles.flexStart} w-full`}>
          <div className={`${styles.boxWidth}`}>
            <AboutMe />
          </div>
        </div>
    </div>
  );
}
