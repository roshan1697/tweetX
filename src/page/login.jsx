import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import logo from '../assets/login.svg'

const Login = () => {
  const navigate = useNavigate()
  const [email , setEmail ] = useState('')
  const [password,setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)



  const handleClick = async() =>{
    const res = await axios.post('http://localhost:3000/user/login',{
      email:email,
      password:password
    })
    localStorage.setItem('token', res.data.token)
    navigate('/')

  }
  return (
    <div className="grid grid-cols-3 ">

        <div className="grid pl-10 ">
          <div className="grid mt-10">
            
          <spam className='text-3xl font-bold text-red-400 '>TweetX</spam>
        <button 
      onClick={()=>{
        navigate('/signup')
      }}
      className="w-56 h-10 px-8 py-2 text-gray-900 bg-white border-2 border-gray-400 rounded shadow focus:shadow-outline focus:outline-none" 
      type="button">
        Create Account
      </button>
        </div>
      
    
<div className="grid w-full">
    <span className='text-3xl font-bold text-gray-500 '>Login</span>
  
  <div className=" md:flex md:items-center">
    
    <div className="w-4/5">
      <input className="w-full h-12 px-4 py-2 leading-tight text-gray-400 bg-gray-100 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-red-400" 
      id="inline-full-name" 
      onChange={(e)=>{
        setEmail(e.target.value)
      }}
      type="text" placeholder="Name"/>
    </div>
    
  </div>
  <div className=" md:flex md:items-center">
    
    <div className="w-4/5 "  >
      <input className="w-full h-12 px-4 py-2 leading-tight text-gray-400 bg-gray-100 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-red-400" 
       onChange={(e)=>{
         setPassword(e.target.value)
        }}
        id="inline-password" type={showPassword?'text':'password'} placeholder="Password"/>
        <label
onClick={()=>setShowPassword(!showPassword)}
className="px-2 py-1 font-mono text-sm text-gray-600 bg-gray-300 rounded cursor-pointer hover:bg-gray-400 " >{showPassword?'hide':'show'}</label>
    </div>
    
    
  </div>
  <div className="flex items-center justify-between w-4/5 ">
    <div className="cursor-pointer">Forgot password?</div>
    <div className="">
      <button 
      onClick={handleClick}
      className="px-4 py-2 font-bold text-white bg-red-400 rounded shadow focus:shadow-outline focus:outline-none" 
      type="button">
        Login
      </button>
    </div>
  </div>

    </div>
        </div>
        <div className=" md:mt-10 md:col-span-2 md:justify-center md:flex">
          
        <img src={logo}/>
        </div>
        </div>
  )
}

export default Login