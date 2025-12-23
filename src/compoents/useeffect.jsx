import { useEffect, useState } from "react"

export default function Effect(){

    let[count,setCount]=useState(0)
    let[count1,setCount1]=useState(10)

    useEffect(()=>{
        console.log("count: "+count)
        setCount1(2000)
    })

    return(
    <>
    <h1>{count}</h1>
    <button onClick={()=> setCount(count+1)}>Increase</button>
        <h1>{count1}</h1>
    <button onClick={()=> setCount1(count1+1)}>Increase</button>
    </>
    )
}
