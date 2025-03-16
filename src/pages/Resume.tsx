import { Helmet } from 'react-helmet-async'
import styles from '../utils/style'
import Certifications from '../components/about/Certifications'
import { builds } from '../utils/constants'
import Skills from '../components/about/Skills'
import Experience from '../components/about/Experience'

export default function Resume() {
  return (
    <div>
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
                            <span className="text-violet-600">&gt;</span> Curriculum Vitae:
                        </span>
                    <div className="flex-grow border-t border-gray-400" />
                </div>

                {/* Skills Section */}
                <div className="mt-8">
                    <p className="pl-0 md:pl-6">What am I able to build?</p>
                    <ul className="mt-4 space-y-2 pl-10">
                        {builds.map((build, index) => (
                        <li key={index}>
                            <span className="text-violet-600">&gt; </span>{build}
                        </li>
                        ))}
                    </ul>
                </div>
            
                <Skills />
                <Experience />
                <Certifications />

            </main>
            
          </div>
        </div>
    </div>
  )
}
