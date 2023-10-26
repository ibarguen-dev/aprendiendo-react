import {navigate} from '../Links.jsx'

const HomePage = () =>{

    return (
      <>
      <h1>Home</h1>
      <p>Esta es una pagina de ejemplo para crear un React Router desde cero</p>
      <button onClick={() => navigate('/about')}>Ir sobre nosotros </button>
      </>
    )
  }

export default HomePage