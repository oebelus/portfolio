import { builds, hobbies } from "../utils/constants";
import { getDate } from "../utils/functions";

export default function AboutMe() {
    return (
        <div className="mt-5 mb-[-2%] p-8 dark:text-gray-300">
            <div>
                <h1 className="text-6xl font-bold relative w-[max-content] font-mono 
                    before:absolute before:inset-0 before:animate-typewriter before:bg-white before:dark:bg-[#2D2E32] 
                    after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-violet-400">Imane,</h1>
                <span className="text-2xl">A Programmer To Be;</span>
            </div>
            <div className="mt-10">
                <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="text-3xl font-semibold flex-shrink mx-4 text-gray-400"><span className="text-violet-600">{`>`}</span> About Me:</span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>
                <p className="pl-0 md:pl-6 text-lg dark:text-gray-300">
                    <span className="text-violet-600">| </span>I am
                    <span className="text-violet-400"> {getDate().year}</span> years, 
                    <span className="text-violet-400"> {getDate().month}</span> months & 
                    <span className="text-violet-400"> {getDate().day}</span> days old.
                </p>
                <br/>
                <p className="pl-0 md:pl-6 text-lg dark:text-gray-300"><span className="text-violet-600">| </span>I enjoy problem solving and learning programming concepts.</p>
                <br/>
                <p className="pl-0 md:pl-6 text-lg dark:text-gray-300"><span className="text-violet-600">| </span>If I am not coding some side project with music blasting on my ears, I will be definitely:</p><br/>
            
                <ul className="pl-10 md:pl-20 space-y-2 text-lg dark:text-gray-300">
                    {
                        hobbies.map((hobby, key) => (
                            <li key={key}><span className="text-violet-600">{'>'} </span>{hobby}</li>       
                        ))
                    }
                </ul>
                
                <div className="mt-8">
                    <p className="pl-0 md:pl-6 text-lg dark:text-gray-300"><span className="text-violet-600">|</span> What am I able to build?</p>
                    <ul className="pl-10 md:pl-20 mt-4 space-y-2 text-lg dark:text-gray-300">
                        {
                            builds.map((build, key) => (
                                <li key={key}><span className="text-violet-600">{'>'} </span>{build}</li>       
                            ))
                        }
                    </ul>
                </div>

                <p className="pl-0 md:pl-6 mt-8 text-lg dark:text-gray-300"><span className="text-violet-600">| </span>Currently an incoming SWE Fellow @ Headstater AI.</p>
            </div>
        </div>
    )
}
