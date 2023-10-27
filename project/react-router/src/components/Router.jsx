import { useEffect, useState } from "react"
import { EVENTS } from "../../constants"

const Router = ({ routes = [],defaultComponent: DefaultComponet = () => <h1>404</h1>}) => {
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
  
    const Page = routes.find(({path}) => path === currentPath)?.Component
    return Page  ? <Page /> : <DefaultComponet />
}

export default Router