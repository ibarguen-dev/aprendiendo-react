import {TwitterFollowCard} from "./TwitterFollowCard"
import "./App.css"
import React from "react"

function App() {


  return (
    <React.Fragment>
      <TwitterFollowCard userName="juantorres" name="Juan Esteban Torres Ibarguen" />
      <TwitterFollowCard/>
    </React.Fragment>
    
  )
}

export default App
