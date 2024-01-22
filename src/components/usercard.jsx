import axios from "axios"

const UserCard = ({props}) => {
   const handleClick = async() =>{
    await axios.get('http://localhost:3000/user/follow/' + props._id,{
        headers:{
            Authorization:'Bearer '  + localStorage.getItem('token')
        }
    })
   }
    
  return (
    <div
  className="relative flex flex-col w-full text-gray-700 bg-transparent border-b-2 shadow-none rounded-xl bg-clip">
  <div
    className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
    <img
      src=""
      alt=""
      className="relative inline-block object-cover object-center w-16 h-16 border border-black rounded-full " />
    <div className="flex w-full flex-row justify-between gap-0.5">
      <div className="flex flex-col ">
        <h5
          className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {props.name}
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
        {'following:' + props.following.length}
      </p>
        
      </div>
      <div className="mr-1 ">
        <button onClick={handleClick}
        className="py-1 font-bold text-white bg-red-400 rounded shadow px-7 focus:shadow-outline focus:outline-none"
        type="button"
      >
        follow
      </button>
      <button onClick={handleClick}
        className="px-8 py-1 text-gray-900 bg-white border-2 border-gray-400 rounded-lg shadow md:my-6 sm:my-10 focus:shadow-outline focus:outline-none"
        type="button"
      >
        following
      </button>
        </div>  
    
    </div>
  </div>
 
</div>  
  )
}

export default UserCard