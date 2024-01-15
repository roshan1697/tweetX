import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

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
    window.location.reload()

  }
  return (
    <div>
        <button 
      onClick={()=>{
        navigate('/signup')
      }}
      className="px-4 py-2 font-bold text-white bg-purple-500 rounded shadow hover:bg-purple-400 focus:shadow-outline focus:outline-none" 
      type="button">
        Create Account
      </button>
        <span>login</span>
      
    
<div className="w-5/12">
  
  <div className="mb-6 md:flex md:items-center">
    
    <div className="md:w-2/3">
      <input className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500" 
      id="inline-full-name" 
      onChange={(e)=>{
        setEmail(e.target.value)
      }}
      type="text" placeholder="Name"/>
    </div>
    
  </div>
  <div className="mb-6 md:flex md:items-center">
    
    <div className="md:w-2/3"  >
      <input className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500" 
       onChange={(e)=>{
         setPassword(e.target.value)
        }}
        id="inline-password" type={showPassword?'text':'password'} placeholder="Password"/>
        <label
onClick={()=>setShowPassword(!showPassword)}
className="px-2 py-1 font-mono text-sm text-gray-600 bg-gray-300 rounded cursor-pointer hover:bg-gray-400 " >{showPassword?'hide':'show'}</label>
    </div>
    
    
  </div>
  <div className="md:flex md:items-center">
    <div className="md:w-1/3">Forgot password?</div>
    <div className="md:w-2/3">
      <button 
      onClick={handleClick}
      className="px-4 py-2 font-bold text-white bg-purple-500 rounded shadow hover:bg-purple-400 focus:shadow-outline focus:outline-none" 
      type="button">
        Sign Up
      </button>
    </div>
  </div>

    </div>
        </div>
  )
}

export default Login