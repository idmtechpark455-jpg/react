import { useRef, useState } from "react"

export default function Useref(){

    let [name,setName]=useState()
    let [joy,setJoy]=useState("")
    let nameds = useRef("")
    console.log("page rendred")

    let display = ()=>{
        setJoy(nameds.current.value)
         nameds.current.focus()
         console.log(nameds.current)
    }

   
    return(
        <>
        <h1>{name}</h1>
        <input type="text" value={name} onChange={(e)=>{
            setName(e.target.value)
        }} />

        <input type="text" ref={nameds}/>
        <button onClick={display}>click</button>
        {/* <h1>{joy}</h1> */}
        <h1>{joy}</h1>
        </>
    )
}