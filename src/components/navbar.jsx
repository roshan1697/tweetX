import { useState } from "react"
import { useNavigate } from "react-router-dom"




const Navbar = ({props}) => {
  const navigate = useNavigate()
  const [active,setActive] = useState(props)
 
    return (
        

<nav className="bg-white shadow-lg border-gray-20">
  <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <span className="self-center text-2xl font-semibold text-red-400 whitespace-nowrap">TweetX</span>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
        <li>
          <a href="#"
          onClick={()=>{
          
            navigate('/')
          }}
          className={active === 'feed' ? 'block px-3 py-2 rounded md:bg-transparent md:p-0 text-red-400' :"block px-3 py-2 text-gray-400 rounded md:bg-transparent md:p-0 hover:text-red-400 "}>Feed</a>
        </li>
        <li>
          <a href="#" 
          onClick={()=>{
            
          
            navigate('/users')
          }
        }
          className={active === 'user' ? 'block px-3 py-2 rounded md:hover:bg-transparent md:p-0 text-red-400':"block px-3 py-2 text-gray-400 rounded md:hover:bg-transparent md:p-0 hover:text-red-400 "}>User</a>
        </li>
        <li>
          <a href="#" 
          onClick={()=>{
            navigate('/profile')
          }}
          className={active === 'profile' ? 'block px-3 py-2 rounded md:hover:bg-transparent md:p-0 text-red-400':"block px-3 py-2 text-gray-400 rounded md:hover:bg-transparent md:p-0 hover:text-red-400 "}>Profile</a>
        </li>
        <li>
          <a href="#" 
          onClick={()=>{
            localStorage.setItem('token',null)
            navigate('/login')
          }}
          className="block px-3 py-2 text-gray-400 rounded md:hover:bg-transparent md:p-0 hover:text-red-400 ">Logout</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    )
}

export default Navbar