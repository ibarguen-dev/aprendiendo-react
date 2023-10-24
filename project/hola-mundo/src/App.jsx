import {TwitterFollowCard} from "./TwitterFollowCard"
import "./App.css"

const  users =[
  {
    userName: 'juantorres',
    name: "Juan Esteban Torres Ibarguen",
    img:"",
    isFollowingDefualt:true
  },
  {
    userName: 'juantorres',
    name: "Juan Esteban Torres Ibarguen",
    img:"",
    isFollowingDefualt:false
  }
]

function App() {



  return (
    <section className="App">
      {
        users.map(user => {
          const {userName, name, isFollowingDefualt,img} = user

          return (
            <TwitterFollowCard
              userName={userName}
              
              isFollowingDefualt={isFollowingDefualt}
              img={img}
            >
              {name}
            </TwitterFollowCard>
          )
        })
      }
      
    </section>
    
  )
}

export default App
