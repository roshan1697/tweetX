import axios from "axios"

const UserCard = ({props,border}) => {
  
   const handlefollow = async() =>{
    await axios.get('http://localhost:3000/user/follow/' + props._id,{
        headers:{
            Authorization:'Bearer '  + localStorage.getItem('token')
        }
    })
   }

   const handleunfollow = async() =>{
    await axios.get('http://localhost:3000/user/unfollow/' + props._id,{
        headers:{
            Authorization:'Bearer '  + localStorage.getItem('token')
        }
    })
   }
    
  return (
    <div
  className={border? "grid grid-cols-6 py-8 bg-transparent":"grid grid-cols-6 py-8 bg-transparent border-b-2"}>
  <div className="col-span-1">
    
    <img
      src=""
      alt=""
      className="object-cover object-center w-16 h-16 border border-black rounded-full " />
      </div>
      <div className="col-span-3">
        <h5
          className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {props.name}
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
        {'following:' + props.following.length}
      </p>
        
      </div>
      <div className="flex justify-center col-span-2">
        {props.userfollow?  <button onClick={handleunfollow}
        className="px-4 py-1 text-gray-900 bg-white border-2 border-gray-400 rounded-lg shadow md:my-6 sm:my-10 focus:shadow-outline focus:outline-none"
        type="button"
      >
        following
      </button> :
      <button onClick={handlefollow}
      className="px-6 py-2 text-white bg-red-400 rounded-lg shadow md:my-6 sm:my-10 focus:shadow-outline focus:outline-none"
      type="button"
    >
      follow
    </button>
      }
        
     
        </div>  
    
 
</div>  
  )
}

export default UserCard