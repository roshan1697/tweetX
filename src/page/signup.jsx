import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
const SignUp = () => {
    const navigate = useNavigate()
    const [name,setName]= useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword]= useState('')
    const [confirmpassword, setConfirmpassword] = useState('')
    

    const handleClick = async() =>{
        if(password !== confirmpassword){
            alert(`password don't match`)
            return
        }
        const res = await axios.post('http://localhost:3000/user/signup',{
            name:name,
            email:email,
            password:password,
        })
        
        localStorage.setItem('token', res.data.token)
        navigate('/')
    }
    
  return (
    <div>
         <button 
      onClick={()=>{
        navigate('/login')
      }}
      className="px-4 py-2 font-bold text-white bg-purple-500 rounded shadow hover:bg-purple-400 focus:shadow-outline focus:outline-none" 
      type="button">
        Login
      </button>
        <span>create account</span>

<div className="w-5/12">
  <div className="mb-6 md:flex md:items-center">
    
    <div className="md:w-2/3">
      <input className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500" 
      id="inline-full-name" 
      onChange={(e)=>{
        setName(e.target.value)
      }}
      type="text" placeholder="Name"/>
    </div>
    
  </div>
  <div className="mb-6 md:flex md:items-center">
    
    <div className="md:w-2/3">
      <input className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500" 
       onChange={(e)=>{
        setEmail(e.target.value)
      }}
      id="inline-full-name" type="text" placeholder="Email"/>
    </div>
    
  </div>
  <div className="mb-6 md:flex md:items-center">
    
    <div className="md:w-2/3">
      <input className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500" 
       onChange={(e)=>{
        setPassword(e.target.value)
      }}
      id="inline-password" type="password" placeholder="Password"/>
    </div>
    
  </div>
  <div className="mb-6 md:flex md:items-center">
    
    <div className="md:w-2/3">
      <input className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
         onChange={(e)=>{
            setConfirmpassword(e.target.value)
          }}
      id="inline-password" type="password" placeholder="Confirm Password"/>
    </div>
    
  </div>
  
  <div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
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

export default SignUp