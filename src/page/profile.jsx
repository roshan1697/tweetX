import { useEffect, useState } from "react"
import Navbar from "../components/navbar"
import axios from "axios"


const Profile = () => {
  const [profile,setProfile] = useState([])
  const [loading,setLoading] = useState(true)
  const [tabs,setTabs] = useState('post')
  useEffect(()=>{
    axios.get('http://localhost:3000/user/profile',{
      headers:{
        Authorization:'Bearer ' + localStorage.getItem('token')
      }
    }).then(res=>{
      setProfile(res.data.user)
      setLoading(false)
    })
  },[])

  if(loading){
    return (
      <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
  <svg className="w-16 h-16 animate-spin text-gray-900/50" viewBox="0 0 64 64" fill="none"
    xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path
      d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
      stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path
      d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
      stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" className="text-gray-900">
    </path>
  </svg>
</div>  
    )
  }
  
  return (
    <>
    <Navbar props='profile'/>
    
    <div className="w-2/5 pt-4 m-auto">
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
            {profile.name}
        </h5>
        <div className="flex justify-between mt-4 ">
        <p className="block font-sans text-base font-light leading-relaxed mantialiased text-blue-gray-900">
        Posts:{profile.userpost.length}
      </p>
      <p className="block font-sans text-base font-light leading-relaxed mantialiased text-blue-gray-900">
      Followers:{profile.followers.length}
      </p>
      <p className="block font-sans text-base font-light leading-relaxed mantialiased text-blue-gray-900">
        Following:{profile.following.length}
      </p>
        </div>
        
      </div>
      
    
    </div>
  </div>
 
</div>  
        
    <div className="text-sm font-medium text-center text-gray-500 border-t border-gray-200 ">
    <ul className="flex flex-wrap justify-between -mb-px">
        <li className="me-2">
            <a  
            onClick={()=>{
              setTabs('post')
            }}
            className={tabs ==='post' ? 'flex  text-gray-600 cursor-pointer border-gray-300 p-4 border-t-2' :  "flex  p-4 border-t-2 border-transparent cursor-pointer hover:text-gray-600 hover:border-gray-300"}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 mr-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>

              Post</a>
        </li>
        <li className="me-2">
            <a 
            onClick={()=>{
              setTabs('followers')
            }}
            className={tabs === 'followers' ? 'flex  text-gray-600 cursor-pointer border-gray-300 p-4 border-t-2 ' :"flex p-4 border-t-2 border-transparent cursor-pointer hover:text-gray-600 hover:border-gray-300"} >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 mr-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>
              followers</a>
        </li>
        <li className="me-2">
            <a  
            onClick={()=>{
              setTabs('following')
            }}
            className={tabs === 'following' ? 'flex  text-gray-600 cursor-pointer border-gray-300 p-4 border-t-2' : "flex p-4 border-t-2 border-transparent cursor-pointer hover:text-gray-600 hover:border-gray-300 "}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 mr-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>
              following</a>
        </li>
      
      
    </ul>
</div>

<div className={tabs === 'post'? '' : 'hidden'}>post</div>

<div className={tabs === 'followers'? '' : 'hidden'}>followers</div>

<div className={tabs === 'following'? '' : 'hidden'}>following</div>



    </div>
    </>
  )
}

export default Profile




