import Navbar from '../components/navbar'
import Card from '../components/card'
import Post from '../components/post'
import { useEffect, useState } from 'react'
import axios from 'axios'


const Home = () => {
  

  return (
    <>
    <Navbar/>
    <div className='w-3/5 m-auto border-2'>
    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 my-3 ml-3 w-28 focus:outline-none ">Write</button>
    <Post/>
    <Card/>
    <Card/>

    <Card/>
    <Card/>

    <Card/>

    </div>

    </>
  )
}

export default Home