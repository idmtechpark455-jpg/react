import { useState } from "react";

export default function useCounter(value){

    let [count,setCount]=useState(value)

    let increment = ()=>{
        setCount(count+1)
    }

    let decrement = ()=>{
        setCount(count-1)
    }

    return {count,increment,decrement}

}