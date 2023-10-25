import { useState, useEffect } from "react";


const FollowMouse = () =>{
    const [enable, setEnable] = useState(false);
    const [position,setPosition] = useState({x:0,y:0});
    useEffect(()=>{
      console.log('efecto');
  
      const handlemove = () =>{
        const {clientX, clientY} = event
        console.log('handlemove',{clientX:clientX, clientY:clientY});
        setPosition({x:clientX, y:clientY})
      }
      if(enable){
        window.addEventListener('pointermove',handlemove)
      }else{
        setPosition({x:0, y:0})
      }
      return () =>{
        window.removeEventListener('pointermove',handlemove)
      }
    },[enable])

    return(
        <>
            <div style={{
                position: 'absolute',
                background: '#09f',
                borderRadius: '50%',
                opacity: 0.8,
                pointerEvents: 'none',
                left:-20,
                top:-20,
                width: 40,
                height:40,
                transform: `translate(${position.x}px, ${position.y}px)`,
            }}/>
            <button onClick={()=>{setEnable(!enable)}}>
                {enable ? 'Desactivar':'Activar'} seguir puntero
            </button>
        </>

    )
}


export default FollowMouse