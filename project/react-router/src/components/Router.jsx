import { useEffect, useState, Children } from "react"
import { EVENTS } from "../../constants"
import { match } from "path-to-regexp"



const Router = ({ children,routes = [],defaultComponent: DefaultComponet = () => <h1>a</h1>}) => {

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

    let routesParams = {}

    
    const routerFromChildren = Children.map (children, ({props,type})=> {
      const { name } = type
      const isRoute = name === 'Route'
      return isRoute ? props : null
    })
    console.log(routerFromChildren)
    const routesToUse = routes.concat(routerFromChildren)
    
    const Page = routesToUse.find(({path}) => {

      if (path === currentPath) return true;

     const matcherUrl = match(path,{decode:decodeURIComponent})

     const matched = matcherUrl(currentPath)

     if(!matched) return false

     routesParams = matched.params

     return true

    })?.Component
    return Page  ? <Page routesParams={routesParams}/> : <DefaultComponet routesParams={routesParams}/>
}

export default Router