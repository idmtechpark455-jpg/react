import { createContext } from "react";
import One from "./use1";
import { useNavigate } from "react-router-dom";

 export const create = createContext();

export default function Context(){

    let user = {name:"afril",class:"mern",age:30}
    let nav = useNavigate()

    return(
        <>
        <create.Provider value={user}>
        <h1>Context</h1>
        <One/>
        <button onClick={()=>{
            nav("/eff")
        }}>Navigate to another Page</button>
        </create.Provider>
        </>
    )
}