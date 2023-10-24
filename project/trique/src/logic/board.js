import { WiNNER_COMBOS } from "../js/constants"

export const checkWinner = (boardToCheck) =>{

    for(const combo  of WiNNER_COMBOS){

      const [a,b,c] = combo

      console.log(combo)

      if(
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      )
      {
        return boardToCheck[a]
      }
    }
    return null
  }

export  const checkEndGame = (newBord) =>{

    return newBord.every((square) => square !== null )
  }