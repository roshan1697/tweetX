import { useNavigate } from "react-router-dom"




const Navbar = () => {
  const navigate = useNavigate()
    return (
        

<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#"
          onClick={()=>{
            navigate('/')
          }}
          className="block px-3 py-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Feed</a>
        </li>
        <li>
          <a href="#" 
          onClick={()=>{
            navigate('/users')
          }}
          className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">User</a>
        </li>
        <li>
          <a href="#" 
          onClick={()=>{
            navigate('/profile')
          }}
          className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Profile</a>
        </li>
        <li>
          <a href="#" 
          onClick={()=>{
            localStorage.setItem('token',null)
            navigate('/login')
          }}
          className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Logout</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    )
}

export default Navbar