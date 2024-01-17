import { Outlet, Navigate } from "react-router-dom"
import { useState,useEffect } from "react"
import axios from "axios"
const PrivateRoutes = () => {
    const [userEmail, setUserEmail] = useState(null)
    const [loading, setLoading] = useState(true)


  const checkUser = async() =>{
    try{

        const res = await axios.get('http://localhost:3000/user/me',{
            headers:{
                Authorization:'Bearer ' + localStorage.getItem('token')
            }
        })
        if(res.data.user){
            setUserEmail(res.data.user)
        }
    }  
catch(err){
    console.log(err)
}finally{
    setLoading(false)
}
}
  useEffect(()=>{
  
    checkUser()
  
},[])
    if(loading){
        return <div>loading...</div>
    }

  return (
     !userEmail ? <Navigate to='/login'/> : <Outlet/>
  )
}

export default PrivateRoutes