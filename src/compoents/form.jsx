import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Form() {

    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [pass, setPass] = useState("")
    let [con, setCon] = useState(0)
    let [data, setData] = useState()
    let [geted, setGeted] = useState([])
    let nav = useNavigate()


    useEffect(() => {
        axios.get("http://localhost:2005/geted").then((res) => {
            setGeted(res.data.data)
            console.log(res.data.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [data])

    function checked(e) {
        e.preventDefault()
        if (name.length >= 3) {
            console.log(name)
        } else {
            alert("wrong name")
            return
        }
        console.log(email, pass, con)
        let payload = { Name: name, Email: email, Password: pass, Age: con }
        axios.post("http://localhost:2005/signup", payload).then((res) => {
            setData(res.data.data)
            console.log(res.data.data)
        }).catch((err) => {
            console.log(err)
        })
        alert("done")
        setName("")
        setCon(0)
        setEmail("")
        setPass("")
        // window.location.reload()
    }

    function up(id) {
        let name = prompt("Enter the Name to upadted")
        let age = Number(prompt("Enter the age"))
        let payload= {Name:name,Age:age}
        axios.put(`http://localhost:2005/up/${id}`,payload).then((res)=>{
            setData(res.data.data)
            console.log(res.data.data)
        }).catch((err)=>{
            console.log(err)
        })
        
    }

    function dell(id){
        axios.delete(`http://localhost:2005/del/${id}`).then((res)=>{
            setData(res.data.data)
            console.log(res.data.data)
        }).catch((err)=>{
            console.log(err)
        })
        
    }


    return (
        <>
            <form onSubmit={checked}>
                <input type="text" value={name} onChange={(e) => {
                    setName(e.target.value)
                }} /> <br />
                <input type="email" value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }} /> <br />
                <input type="password" value={pass} onChange={(e) => {
                    setPass(e.target.value)
                }} /> <br />
                <input type="number" value={con} onChange={(e) => {
                    setCon(e.target.value)
                }} /> <br />
                <input type="submit" />
            </form>



            <h1>Login user Details</h1>
            {
                geted.map((item, index) => (
                    <ul key={index}>
                        <hr />
                        <li><h1>user Name: {item.Name}</h1></li>
                        <li><h1>user Email: {item.Email}</h1></li>
                        <li><h1>user Password: {item.Password}</h1></li>
                        <li><h1>user Age: {item.Age}</h1></li>
                        <li><h1>User Id: {item._id}</h1></li>
                        <button onClick={() => {
                            up(item._id)
                        }}>Updated</button>
                        <button onClick={()=>{
                            dell(item._id)
                        }}>Delted</button>
                        <hr />
                    </ul>
                ))
            }

            <button onClick={()=>{
                nav("/con")
            }}>Naviaget to another Page</button>
        </>
    )
}