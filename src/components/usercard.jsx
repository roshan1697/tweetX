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
      alt="Tania Andrew"
      className="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center" />
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
      <div className="flex justify-center mr-1">
        <button onClick={handleClick}
        className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        follow
      </button>
        </div>  
    
    </div>
  </div>
 
</div>  
  )
}

export default UserCard