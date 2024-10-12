import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [clicked, setClicked] = useState("");
  const location = useLocation();

  // Dark mode setup
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const noSidebarRoute = location.pathname.startsWith('/blog/') || location.pathname.startsWith('/misc/');

  return (
    <div className="dark:bg-[#2D2E32] md:flex min-h-screen">
      {!noSidebarRoute && 
        <div className="md:fixed top-0 left-0 h-full md:w-64 md:z-50">
          <Navbar clicked={clicked} setClicked={setClicked} />
        </div>
      }
      {!noSidebarRoute &&
        <div className="md:block hidden ml-64 border-l border-gray-500 dark:border-gray-300 mx-4"></div>
      }
      <div className="w-full overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
