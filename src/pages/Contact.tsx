import { Helmet } from "react-helmet-async";
import styles from "../utils/style";
import ContactMe from "../components/ContactMe";

export default function Contact() {
  return (
    <div>
        <Helmet>
          <title>contact_me;</title>
        </Helmet>

        <div className={`${styles.flexStart} w-full`}>
          <div className={`${styles.boxWidth}`}>
            <ContactMe />
          </div>
        </div>
    </div>
  )
}
