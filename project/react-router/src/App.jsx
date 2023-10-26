import { useEffect, useState } from 'react'
import { EVENTS } from '../constants'
import './App.css'
import HomePage from './pages/HomePages'
import AboutPage from './pages/aboutPages'


function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  useEffect(() =>{
    const onLocationsChanges = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener(EVENTS.PUSHSTATE,onLocationsChanges)
    window.addEventListener(EVENTS.POPSTATE,onLocationsChanges)
    return () =>{
      window.removeEventListener(EVENTS.POPSTATE,onLocationsChanges)
      window.removeEventListener(EVENTS.PUSHSTATE,onLocationsChanges)
    }
  },[])
  
  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>

  )
}

export default App
