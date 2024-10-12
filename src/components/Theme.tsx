import { useEffect, useState } from "react";
import { getTheme } from "../utils/theme";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Theme({isBlog}: {isBlog: boolean}) {
    const [theme, setTheme] = useState<string>(getTheme());

    const handleThemeSwitch = () => {
        setTheme(prevTheme => (prevTheme === "dark" ? "light" : "dark"));
    };

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    return (
        <button 
            onClick={handleThemeSwitch} 
            className={`text-2xl md:absolute mt-2 bottom-5 right-5 ${isBlog ? "top-3" : ""}`}
        >
            {theme === "dark" ? (
                <FontAwesomeIcon className="rounded-full p-1 dark:text-gray-300 transition-all hover:text-yellow-300" icon={faSun} />
            ) : (
                <FontAwesomeIcon icon={faMoon} className="transition-all hover:text-gray-500" />
            )}
        </button>
    );
}
