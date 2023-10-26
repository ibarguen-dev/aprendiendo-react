import {navigate} from '../Links.jsx'

const AboutPage   = () =>{

    return(
      <>
        <h1>About</h1>
        <p>Esto es una pagina de about</p>
        <button onClick={() => navigate('/')} >Ir al inicio</button>
      </>
    )
  
  }

export default AboutPage