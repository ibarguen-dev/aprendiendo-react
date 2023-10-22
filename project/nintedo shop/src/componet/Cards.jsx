import { useState } from "react";
import "../assets/css/card.css"

export function Cards({name,imagenJuego,imagenqr}){

    const [isDownloaded,setIsDownload] = useState(false);


    const handleClick = () => {

        setIsDownload(!isDownloaded)
    }
    
    const img = isDownloaded? 'download' : ''
    const qr = "nd3-card-imgQr"
    const juego = "nd3-card-imgJuego"
     return (
        <article className="nd3-card">
            <header>
                <img 
                    src={imagenJuego} 
                    alt="imagen del juego"
                    className={`${img} ${juego}`}
                />
                <img
                    src={imagenqr}
                    alt="codigo qr del juego "
                    className={`${img} ${qr}`}
                />
                <div>
                    <h1 className="nd3-card-name">{name}</h1>
                </div>
            </header>
            <aside>
                <button className="nd3-card-bottom" onClick={handleClick}>descargar</button>
            </aside>
        </article>
    )
}