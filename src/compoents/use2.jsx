import { useContext } from "react";
import Three from "./use3";
import { create } from "./useContect";

export default function Two(){

    let users = useContext(create)

    return(
        <>
        <h1>Two</h1>
        <h1>{users.name}</h1>
        <Three/>
        </>
    )
}