import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import logo from '../assets/login.svg'

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
    <div className="grid md:grid-cols-3 sm:grid-cols-1">
      <div className="grid md:pl-10 sm:m-auto md:m-0 md:w-full sm:w-9/12 ">
        
      <div  className="grid mt-10">
      <spam className='text-3xl font-bold text-red-400 '>TweetX</spam>
         <button 
      onClick={()=>{
        navigate('/login')
      }}
      className="w-40 h-10 px-4 py-1 font-bold text-gray-900 bg-white border-2 border-gray-400 rounded-lg shadow md:my-6 sm:my-10 focus:shadow-outline focus:outline-none" 
      type="button">
        Login
      </button>
        </div>

<div className="grid w-full">
        <span  className='text-3xl font-bold text-gray-500 sm:mb-10 '>Create Account</span>
  <div className=" md:flex md:items-center">
    
    <div className="w-4/5 md:mb-4 sm:mb-10">
      <input className="w-full h-12 px-4 py-2 leading-tight text-gray-400 bg-gray-100 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-red-400" 
       
       onChange={(e)=>{
         setName(e.target.value)
        }}
        type="text" placeholder="Name"/>
    </div>
    
  </div>
  <div className="flex items-center md:mb-4 sm:mb-10">
    
    <div className="w-4/5">
      <input className="w-full h-12 px-4 py-2 leading-tight text-gray-400 bg-gray-100 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-red-400" 
       onChange={(e)=>{
         setEmail(e.target.value)
        }}
        type="text" placeholder="Email"/>
    </div>
    
  </div>
  <div className="flex items-center md:mb-4 sm:mb-10">
    
    <div className="w-4/5">
      <input className="w-full h-12 px-4 py-2 leading-tight text-gray-400 bg-gray-100 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-red-400" 
       onChange={(e)=>{
         setPassword(e.target.value)
        }}
        type="password" placeholder="Password"/>
    </div>
    
  </div>
  <div className="flex items-center md:mb-4 sm:mb-10">
    
    <div className="w-4/5">
      <input className="w-full h-12 px-4 py-2 leading-tight text-gray-400 bg-gray-100 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-red-400"
         onChange={(e)=>{
           setConfirmpassword(e.target.value)
          }}
          id="inline-password" type="password" placeholder="Confirm Password"/>
    </div>
    
  </div>
  
  <div className="flex items-center justify-between w-4/5">
    <div className=""></div>
    <div className="">
      <button 
      onClick={handleClick}
      className="px-4 py-2 font-bold text-white bg-red-400 rounded shadow focus:shadow-outline focus:outline-none" 
      type="button">
        Sign Up
      </button>
    </div>
  </div>
</div>
        </div>
<div className="justify-center hidden col-span-2 mt-10 md:flex ">
          
        <img src={logo}/>
        </div>

    </div>
  )
}

export default SignUp