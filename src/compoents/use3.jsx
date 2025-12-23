import { useContext } from "react"
import { create } from "./useContect"

export default function Three(){

    let users = useContext(create)
    return(
        <>
        <h1>Three</h1>
        <h1>{users.name}</h1>
        <h1>{users.class}</h1>
        <h1>{users.age}</h1>
        </>
    )
}