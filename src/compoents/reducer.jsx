import { useReducer, useState } from "react"

// function both(state,action){
//     if(action === "ADD"){
//         return {count:state.count+1}
//     }
//     if(action === "SUB"){
//         return {count:state.count-1}
//     }
//     return state.count
// }

function colored(state,action){
    if(action === "light"){
        return {theme: "light"}
    }
    if(action === "dark"){
        return {theme: "dark"}
    }
    return state
}

export default function Reducer(){

    let [theme,dispatch]=useReducer(colored,{theme:null})
    console.log(theme)
    console.log(theme.theme)

    let styledtheme = {
        backgroundColor: theme.theme === "light" ? "black" : "white",
        color: theme.theme === "dark" ? "Black" : "White" 
    }

    // let [count,setCount]=useState(0)
    // let [state,dispatch]=useReducer(both,{count:0})


    //state = {count:0}
    //dispacth = action(+,-,%,/,*)
    //both = function both(state,action)
    //count = 0


    let add = ()=>{
        // return setCount(count+1)
        dispatch("light")
    }

    let sub = ()=>{
        // return setCount(count-1)
        dispatch("dark")
    }

    return(
        <>
        <h1 style={styledtheme}>{theme.theme}</h1>
        <button onClick={add}>Ligth</button>
        <button onClick={sub}>dark</button>
        </>
    )
}