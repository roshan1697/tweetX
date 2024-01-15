import Navbar from '../components/navbar'
import Card from '../components/card'
import Post from '../components/post'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Login from './login'
const Home = () => {
  const [userEmail, setUserEmail] = useState(null)

  const checkUser = async() =>{
    
    const res = await axios.get('http://localhost:3000/user/me',{
      headers:{
        Authorization:'Bearer ' + localStorage.getItem('token')
      }
    })
    if(res.data.user){
      setUserEmail(res.data.user)
    }
  }  
  
  useEffect(()=>{
    
    checkUser()
},[])
    if(!userEmail){
      return (
        <Login/>
      )
    }
  return (
    <>
    <Navbar/>
    <div className='w-3/5 m-auto border-2'>
    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 my-3 ml-3 w-28 focus:outline-none ">Write</button>
    <Post/>
    <Card/>
    </div>

    </>
  )
}

export default Home