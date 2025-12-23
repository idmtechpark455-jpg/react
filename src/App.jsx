import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Effect from './compoents/useeffect'
import Form from './compoents/form'
import Context from './compoents/useContect'
import Useref from './compoents/useref'
import Reducer from './compoents/reducer'
import Memo from './compoents/Memo'
import Custom01 from './compoents/custom01'
import HookForm from './compoents/formsss'
import { Routes,Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route index path='/' element={<Form/>}/>
        <Route path='/con' element={<Context/>}/>
        <Route path='/eff' element={<Effect/>}></Route>
      </Routes>
      
    </>
  )
}

export default App
