import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function ToggleSidebar() {
    const [toggle, setToggle] = useState(false);

    return (
        <button 
                onClick={() => setToggle(prev => !prev)} 
                className="mt-2 text-2xl"
            >
                {toggle ? (
                    <FontAwesomeIcon icon={faArrowLeft} className="rounded-full p-1 dark:text-white transition-all hover:text-gray-500" />
                ) : (
                    <FontAwesomeIcon icon={faArrowRight} className="transition-all dark:text-white hover:text-gray-500" />
                )}
            </button>
    )
}
