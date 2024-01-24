
const Card = ({props}) => {
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
    
    <div className="grid grid-cols-3 relative my-2  pl-4 leading-normal bg-white  border-gray-400 rounded-[2rem] shadow-xl items-center h-32 ">
    <div className="flex items-center my-3">
        
            
        <img className="absolute w-16 h-16 border border-black rounded-full top-2 left-8" src="/img/jonathan.jpg" alt=""/>
        <div className="absolute grid w-3/4 grid-rows-1 left-32">
            
        <div className="w-full ">
        <p className="text-2xl leading-none text-gray-900">{props.name}</p>
        <p className="mr-3 text-sm text-right text-gray-400 ">{timeStamp(props.createdAt)}</p>
    </div>
    <div className="mb-8">
        <p className="text-base text-gray-500">{props.content}</p>
    </div>
        </div>
    </div>
    
    <div className="absolute right-0 w-8 h-16 bg-red-400 rounded-l-full"></div>
    </div>

        
    )
}

export default Card