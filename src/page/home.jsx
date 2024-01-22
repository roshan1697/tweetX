import Navbar from '../components/navbar'
import Card from '../components/card'
import Post from '../components/post'
import { useEffect, useState } from 'react'
import axios from 'axios'


const Home = () => {
  const [post,setPost] = useState([])
  const [loading,setloading] = useState(true)
  
  useEffect(()=>{
    axios.get('http://localhost:3000/user/posts',{
      headers:{
        Authorization:'Bearer ' + localStorage.getItem('token')
      }
    }).then(res=>{
      setPost(res.data.post)
      setloading(false)
      
    })
  },[])
  return (
    <>
    <Navbar props='feed'/>
    <div className='w-2/5 m-auto border-2'>
    <div className='my-5'>
      
    <Post/>
    </div>
    
    {post.map((value,index)=>{
     return  <Card key={index} props={value}/>
    })}

    </div>

    </>
  )
}

export default Home