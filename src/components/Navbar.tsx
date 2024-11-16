import { Link } from 'react-router-dom';
import { navLinks } from '../utils/constants';
import Theme from './Theme';
import { useEffect, useState } from 'react';

export default function Navbar({clicked, setClicked}: {clicked: string, setClicked: (e: string) => void}) {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
    console.log(clicked);
  }, [clicked])

    return (
        <nav className="dark:bg-[#2D2E32] z-[99] p-6 inset-x-0 top-0 flex md:flex-col md:gap-8 justify-between items-center py-6 bg-transparent w-full">
            <div>
                <a href="/">
                    <h1 className="whitespace-nowrap text-3xl font-semibold text-zinc-800 dark:text-gray-300 mr-5"><span className='text-violet-600'>{`<`}</span>oebelus<span className='text-violet-600'>{`/>`}</span></h1>
                </a>
                <img src="https://img.icons8.com/?size=100&id=447&format=" alt="" />
            </div>
            <div className="hidden md:flex flex-1 justify-end items-center mt-16">
                <ul className="list-none flex flex-col md:gap-6 justify-end flex-1">
                    {navLinks.map((nav, index) => (
                        <li key={index} className="mr-10">
                            <Link 
                                to={nav.id === "my_notes" ? 'https://oebelus.github.io/my_notes/' : nav.id}
                                onClick={() => setClicked(nav.name)} // Update clicked state
                                className={`font-poppins font-normal cursor-pointer text-xl hover:text-violet-600 transition-all ${clicked === nav.name ? "text-violet-600" : "dark:text-gray-300"}`}
                            >
                                {nav.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div>
                    <Theme isBlog={false} />
                </div>
            </div>


            <div className="relative">
            {/* Menu Button */}
            <div className="md:hidden flex gap-4 flex-1 justify-end items-center">
                <div className="cursor-pointer mt-2 dark:text-gray-300" onClick={() => setToggle(prev => !prev )}>
                    <span className="material-symbols-outlined text-3xl">
                        menu
                    </span>
                </div>
                <Theme isBlog={false}/>
            </div>

            {/* Background Overlay */}
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-[98] transition-opacity ${toggle ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></div>

            {/* Sliding Navbar */}
            <div
                className={`${toggle ? 'translate-x-0' : 'translate-x-full'} fixed top-0 right-0 h-full w-64 bg-gradient-to-b bg-violet-300 dark:bg-purple-900 p-6 z-[99] transition-transform duration-300 ease-in-out`}>
                <div className="flex justify-between items-center mb-6">
                    <div className="cursor-pointer dark:text-gray-300" onClick={() => setToggle(false)}>
                        <span className="material-symbols-outlined text-3xl">
                            close
                        </span>
                    </div>
                </div>
                <ul className="list-none flex flex-col justify-start items-start gap-4 p-4">
                    {
                    navLinks.map((nav, index) => (
                        <li key={nav.id}>
                            <a 
                                href={nav.id == "" ? 'https://oebelus.github.io/my_notes/' : nav.id}
                                className={`cursor-pointer dark:text-gray-300 text-[16px] hover:text-violet-600 transition-all ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'} dark:text-white`}>
                                {nav.name}
                            </a>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </div>

        </nav>
    );
}
