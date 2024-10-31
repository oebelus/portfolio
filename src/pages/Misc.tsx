import { Helmet } from "react-helmet-async";
import styles from "../utils/style";
import { misc } from "../utils/constants";
import { Link } from "react-router-dom";
import MusicPlayer from "../components/MusicPlayer";

export default function Misc() {

    return (
        <div className='dark:bg-[#2D2E32] min-h-screen'>
            <Helmet>
                <title>misc;</title>
            </Helmet>

            <div className={`${styles.flexStart} w-full mb-4`}>
                <div className={`w-full xl:max-w-[1000] `}>
                    <div className={`${styles.boxWidth} px-8 py-6 dark:text-gray-300`}>
                        <h3 className="text-2xl">This is dedicated to everything else I want to share;</h3>
                    </div>

                    <div className="relative flex py-5 items-center">
                        <div className="flex-grow border-t border-gray-400"></div>
                        <span className="text-3xl font-semibold flex-shrink mx-4 dark:text-gray-400"><span className="text-violet-600">{`>`}</span> Misc:</span>
                        <div className="flex-grow border-t border-gray-400"></div>
                    </div>

                    <div className="lg:grid lg:grid-cols-5">
                        <div className="col-span-2 ">
                            <p className="px-8 text-2xl dark:text-gray-300 text-gray-600"><span>{"> "}</span> The music I am currently listening to non-stop:</p>
                            <MusicPlayer />
                        </div>

                        <div className="mt-5 col-span-3">
                            {misc.map((item) => (
                                <Link to={`/misc/${item.id}`} key={item.id} className="cursor-pointer w-[90%] rounded-lg flex flex-col mx-auto mt-4 dark:bg-zinc-800 bg-violet-200 p-4 md:p-6">
                                    <h3 className="dark:text-white md:text-2xl text-xl">{item.name}</h3>
                                    <p className="dark:text-gray-300 text-gray-600">{item.description}</p>
                                </Link>
                            ))}
                            <div className="px-20 mt-4">
                                <p className="dark:text-white text-xl">{"{ "}Will add more stuff soon :D{" }"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
