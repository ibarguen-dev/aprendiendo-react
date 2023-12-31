import { useEffect, useState } from 'react'
import confetti  from 'canvas-confetti'
import Square from './components/Square'
import { TURNS } from './js/constants'
import { checkWinner, checkEndGame } from './logic/board'
import WinnerModel from './components/WinnerModel'
import { saveGameToStorage, resetGameToStorage } from './logic/storage'
import './App.css'



function App() {
  const [board,setBoard] = useState
  (
    ()=>{
      const boardFromStorage = window.localStorage.getItem('board')
      return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
    }  
    
  ) 
  const [turn,setTurn] = useState(()=>{
    const turnFormStorage = window.localStorage.getItem('turn')
    return turnFormStorage ?? TURNS.X
  })
  const [winner,setWinner] = useState(null)



  const resetGame = () =>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameToStorage()
  }

  const updateBoard = (index) =>{
    if(board[index] || winner) return
 
    const newBord = [...board]

    newBord[index] = turn


    setBoard(newBord)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X

    setTurn(newTurn)


    
    const newWinner = checkWinner(newBord)

    if(newWinner){

      setWinner(newWinner)
      confetti()
    }else if(checkEndGame(newBord))
    {
      setWinner(false)
    }
    useEffect(()=>{
      saveGameToStorage({
        bord:newBord,
        turn:turn
      },[turn,board])
    })
  }

  return (
    <>
    <main className='board'>
      <h1>Trickey</h1>
      <button onClick={resetGame}>reset del juego</button>
      <section className="game">
        {
          board.map((_,index)=>{
            return(
              <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

        <section className='turn'>
        <Square isSelected = {turn === TURNS.X}>
          {TURNS.X}
        </Square>  

        <Square isSelected = {turn === TURNS.O}>
          {TURNS.O}
        </Square> 
        </section>
        <WinnerModel winner={winner} resetGame={resetGame} />
    </main>
    </>
  )
}

export default App
