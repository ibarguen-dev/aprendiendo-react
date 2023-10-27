import {Link} from '../Links.jsx'

const HomePage = () =>{

    return (
      <>
      <h1>Home</h1>
      <p>Esta es una pagina de ejemplo para crear un React Router desde cero</p>
      <Link to='/about'>Ir sobre nosotros </Link>
      </>
    )
  }

export default HomePage