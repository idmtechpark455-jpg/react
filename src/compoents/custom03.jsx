import { useState } from "react";

export default function useInput(value){

    let [name,setName]=useState(value)

    let onchange = (e)=>{
        setName(e.target.value)
    }

    let reset = ()=>{
        setName("")
    }

    return {name,onchange,reset}

}