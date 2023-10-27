import HomePage from './pages/HomePages'
import AboutPage from './pages/aboutPages'
import Router from './components/Router'
import './App.css'


const AppRoutes = [
  {
    path:'/',
    Component: HomePage
  },
  {
    path: '/about',
    Component:AboutPage
  }
]



function App() {

  
  return (
    <main>
      <Router routes={AppRoutes}/>
    </main>

  )
}

export default App
