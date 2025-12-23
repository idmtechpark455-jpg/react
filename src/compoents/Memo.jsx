import { useState, useCallback } from "react"
import ProductList from "./index"

export default function App() {
  const [theme, setTheme] = useState(false)

  console.log("Parent rendered")

  const filterProducts = useCallback(() => {
    console.log("Filtering products...")
  }, [])

  return (

    <div style={{
      background: theme ? "black" : "white",
      color: theme ? "white" : "black"
    }}>
    
      <ProductList onFilter={filterProducts} />

      <button onClick={() => setTheme(t => !t)}>
        Toggle Theme
      </button>
    </div>
  )
}
