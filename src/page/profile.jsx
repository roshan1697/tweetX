import { useEffect, useState } from "react"
import Navbar from "../components/navbar"
import axios from "axios"


const Profile = () => {
  const [userprofile,setUserprofile] = useState([])
  const [tabs,setTabs] = useState('post')
  useEffect(()=>{
    axios.get('http://localhost:3000/user/profile',{
      headers:{
        Authorization:'Bearer ' + localStorage.getItem('token')
      }
    }).then(res=>{
      setUserprofile(res.data.user)
    })
  },[])

  if(!userprofile){
    return <div>loading...</div>
  }
  
  return (
    <>
    <Navbar/>
    
    <div className="w-2/4 pt-4 m-auto">
    <div
  className="relative flex flex-col w-full text-gray-700 bg-transparent border-b-2 shadow-none rounded-xl bg-clip">
  <div
    className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
    <img
      src=""
      alt="Tania Andrew"
      className="relative inline-block h-[150px] w-[250px] !rounded-full border object-cover object-center" />
    <div className="flex flex-row w-full ml-10 ">
      <div className="flex flex-col w-full ">
        <h5
          className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {userprofile.name}
        </h5>
        <div className="flex justify-between mt-4 ">
        <p className="block font-sans text-base font-light leading-relaxed mantialiased text-blue-gray-900">
        Posts:
      </p>
      <p className="block font-sans text-base font-light leading-relaxed mantialiased text-blue-gray-900">
      Followers:{userprofile.followers.length}
      </p>
      <p className="block font-sans text-base font-light leading-relaxed mantialiased text-blue-gray-900">
        Following:{userprofile.following.length}
      </p>
        </div>
        
      </div>
      
    
    </div>
  </div>
 
</div>  
        
    <div className="text-sm font-medium text-center text-gray-500 border-t border-gray-200 ">
    <ul className="flex flex-wrap justify-between -mb-px">
        <li className="me-2">
            <a href="#" 
            onClick={()=>{
              setTabs('post')
            }}
            className="inline-block p-4 border-t-2 border-transparent hover:text-gray-600 hover:border-gray-300 ">Post</a>
        </li>
        <li className="me-2">
            <a href="#"
            onClick={()=>{
              setTabs('followers')
            }}
            className="inline-block p-4 text-blue-600 border-t-2 border-blue-600 " >followers</a>
        </li>
        <li className="me-2">
            <a href="#" 
            onClick={()=>{
              setTabs('following')
            }}
            className="inline-block p-4 border-t-2 border-transparent hover:text-gray-600 hover:border-gray-300 ">following</a>
        </li>
       
       
    </ul>
</div>
    </div>
    
    </>
  )
}

export default Profile