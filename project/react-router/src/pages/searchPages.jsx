import { useEffect } from "react"


const SearchPages = ({routesParams}) => {

    useEffect(() => {
        document.title = `Has buscado ${routesParams.query}`
    })
    return(

        <h1>Has buscado: {routesParams.query}</h1>
    )
}


export default SearchPages