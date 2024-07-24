import { Outlet } from 'react-router-dom'
import './App.css'
function App() {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  return (
    <div>
       <Outlet />
    </div>
  )
}

export default App
