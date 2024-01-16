import Home from "./page/home"
import { Routes, Route } from "react-router-dom"
import SignUp from "./page/signup"
import Login from "./page/login"
import Users from "./page/users"
import Profile from "./page/profile"
const  App = () => {

  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='/profile' element={<Profile/>}/>




    </Routes>
    
    </>
  )
}

export default App
