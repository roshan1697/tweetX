import Home from "./page/home"
import { Routes, Route } from "react-router-dom"
import SignUp from "./page/signup"
import Login from "./page/login"
const  App = () => {

  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>


    </Routes>
    
    </>
  )
}

export default App
