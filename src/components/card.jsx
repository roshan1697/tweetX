
const Card = ({props,border}) => {
    const timeStamp = (time) =>{
        const now = new Date();
        const date = new Date(time);
        const timeDifference = now - date;
      
        const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);

  if (months > 0) {
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else {
    return 'just now';
  }
    }
    return (
    
    <div className={border? "grid grid-cols-10 relative my-6  pl-4 leading-normal bg-white rounded-[2rem]   h-auto overflow-hidden" : "grid grid-cols-10 relative my-6  pl-4 leading-normal bg-white  border-gray-400 rounded-[2rem] shadow  h-auto overflow-hidden"}>
        
        <div className="flex justify-center col-span-2 pt-4 ">
        <img className="w-16 h-16 border border-black rounded-full top-2 left-8" src="" alt=""/>
          </div> 
          <div className="col-span-7 ">
            
        <div className="grid grid-rows-1 pt-8 left-32">
            
        <div className="w-full ">
        <p className="text-3xl leading-none text-gray-900">{props.name}</p>
        <p className="mr-3 text-sm text-right text-gray-400 ">{timeStamp(props.createdAt)}</p>
    </div>
    <div className="pt-4 mb-8">
        <p className="text-base text-gray-500">{props.content}</p>
    </div>
        </div>
          </div>
    <div className="relative co1l-span-1">
      
    <div className="absolute right-0 bg-red-400 rounded-l-full w-7 h-14 top-2/4"></div>
    </div>
    </div>

        
    )
}

export default Card