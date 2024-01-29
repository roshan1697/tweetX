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
    <div className="grid md:grid-cols-3 sm:grid-cols-1">

        <div className="grid md:pl-10 sm:m-auto md:m-0 md:w-full sm:w-9/12">
          <div className="grid mt-10">
            
          <spam className='text-3xl font-bold text-red-400 '>TweetX</spam>
        <button 
      onClick={()=>{
        navigate('/signup')
      }}
      className="w-56 h-10 px-8 py-1 text-gray-900 bg-white border-2 border-gray-400 rounded-lg shadow md:my-6 sm:my-10 focus:shadow-outline focus:outline-none" 
      type="button">
        Create Account
      </button>
        </div>
      
    
<div className="grid w-full">
    <span className='text-3xl font-bold text-gray-500 sm:mb-10'>Login</span>
  
  <div className="flex items-center">
    
    <div className="w-4/5 md:mb-2 sm:mb-10">
      <input className="w-full h-12 px-4 py-2 text-gray-400 bg-gray-100 rounded appearance-none focus:outline-none focus:bg-white focus:border-2 focus:border-red-400" 
      id="inline-full-name" 
      onChange={(e)=>{
        setEmail(e.target.value)
      }}
      type="text" placeholder="Name"/>
    </div>
    
  </div>
  <div className="flex items-center md:mb-4 sm:mb-10">
    
    <div className="relative w-4/5 "  >
      <input className="w-full h-12 px-4 py-2 text-gray-400 bg-gray-100 rounded appearance-none focus:outline-none focus:border-2 focus:bg-white focus:border-red-400" 
      onChange={(e)=>{
        setPassword(e.target.value)
        }}
        id="inline-password" type={showPassword?'text':'password'} placeholder="Password"/>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 leading-5 cursor-pointer"onClick={()=>setShowPassword(!showPassword)}>
        {showPassword? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-gray-400">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
</svg>
  : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-gray-400">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
}
       
</div>
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
        <div className="justify-end hidden h-full col-span-2 mt-10 md:flex ">
          
        <img src={logo}/>
        </div>
        </div>
  )
}

export default Login