import Square from "./Square";
const WinnerModel = ({winner,resetGame}) =>{
    console.log(winner)
    if(winner === null) return null;

    const winnerText = winner === false ? 'Empate' : 'Gano'
    return(
        <section className='winner'>
          <div className='text'>
            <h2>
              {winnerText}
            </h2>
            <header className='win'>
              {winner && <Square>{winner}</Square>}
            </header>
            <footer>
              <button onClick={resetGame}>Empezar de nuevo</button>
            </footer>
          </div>
        </section>
    )
}

export default WinnerModel