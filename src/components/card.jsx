
const Card = ({props}) => {
    return (
    
    <div className="grid grid-cols-3 relative my-2  pl-4 leading-normal bg-white  border-gray-400 rounded-[2rem] shadow-xl items-center h-32 ">
    <div className="flex items-center my-3">
        
            
        <img className="absolute w-16 h-16 border border-black rounded-full top-2 left-8" src="/img/jonathan.jpg" alt=""/>
        <div className="absolute grid w-3/4 grid-rows-1 left-32">
            
        <div className="w-full ">
        <p className="text-2xl leading-none text-gray-900">{props.name}</p>
        <p className="mr-3 text-sm text-right text-gray-400 ">Aug 18</p>
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