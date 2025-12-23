import useCounter from "./custom02"
import useInput from "./custom03"
export default function Custom01(){

    let {count,increment,decrement}=useCounter(0)
    let {name,onchange,reset}=useInput("")

    return(
        <>
        <h1>Custom Hooks</h1>
        <h2>{count}</h2>
        <button onClick={increment}>add</button>
        <button onClick={decrement}>sub</button>
        <textarea value={name} onChange={onchange}></textarea>
        <button onClick={reset}>Reset name</button>
        <h1>{name}</h1>
        </>
    )
}