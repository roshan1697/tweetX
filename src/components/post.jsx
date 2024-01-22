import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Post = () => {
  const navigate = useNavigate()
  const [description, setDescription] = useState('')
    const [open, setOpen] = useState(false)

   const handleClick = async() => {
    
    
   const res = await axios.post('http://localhost:3000/user/post', {
      content:description
    },{
      headers:{
        Authorization:'Bearer ' + localStorage.getItem('token')
      }
    })
      navigate('/')
      setOpen(!open)
    
   }


  return (
    <div className="">
    <button 
    type="button" onClick={()=>{setOpen(!open)}}
     className="relative inline-flex items-center justify-center px-5 py-3 ml-3 text-xl font-medium text-white align-middle transition-all bg-red-400 border rounded-md shadow-sm w-28 hover:bg-red-500 focus:ring-red-200 focus:outline-none">
      Write
      
    </button>
  
    <div className={open ? 'absolute duration translate-y-2.5 mt-2 ml-3  opacity-1 w-1/2    min-w-[15rem] bg-white shadow-md rounded-lg p-2' 
    : 
     ' hidden'}  
     >
<textarea onChange={(e)=>{
  setDescription(e.target.value)
}} className="block w-full px-4 py-3 mt-2 text-sm border border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 " rows="3" placeholder="Description"></textarea>
<button type="button" onClick={handleClick} className="inline-flex items-center justify-center float-right gap-2 px-6 py-3 text-sm font-semibold text-white transition-all bg-red-400 border border-transparent rounded-md hover:bg-red-500 focus:ring-red-200  focus:outline-none  m-2.5">
  ADD
</button>
    </div>
  </div>
  )
}

export default Post