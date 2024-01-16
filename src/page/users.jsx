import { useEffect, useState } from "react"
import Navbar from "../components/navbar"
import UserCard from "../components/usercard"
import axios from "axios"

const Users = () => {
    const [userdata, setUserdata] = useState([])
    
    
    useEffect(()=>{
        axios.get('http://localhost:3000/user/users',{
            headers:{
                Authorization:'Bearer ' + localStorage.getItem('token')
            }
        }).then((res)=>{
            
            setUserdata(res.data.users)
            
        })
    },[])
    
    
    return (
    <>
    <Navbar/>
    
    <div className="w-3/5 m-auto">
        {!userdata ? <h5>loading...</h5> : 
        userdata.map((value,index)=>{
            return <UserCard key={index} props={value}/>
            
            
        })
        }
        
    </div>
    </>
  )
}

export default Users