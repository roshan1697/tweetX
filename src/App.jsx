import Home from "./page/home"
import { Routes, Route } from "react-router-dom"
import SignUp from "./page/signup"
import Login from "./page/login"
import Users from "./page/users"
import Profile from "./page/profile"
import PrivateRoutes from "./components/privateroutes"
const  App = () => {

  return (
    <>
    
    <Routes>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route element={
        <PrivateRoutes/>
      }>

        <Route path='/' element={<Home/>} />
        <Route path='/users' element={<Users/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Route>



    </Routes>
    
    </>
  )
}

export default App
