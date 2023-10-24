export const saveGameToStorage = ({bord,turn}) =>{

    window.localStorage.setItem('board',JSON.stringify(bord))
    window.localStorage.setItem('turn',turn)

}


export const resetGameToStorage = () =>{

    window.localStorage.clear()
} 