
const Card = () => {
    return (
    <div className="w-full max-w-sm lg:max-w-full lg:flex">
    <div className="flex flex-col justify-between p-4 leading-normal bg-white border-b border-l border-r border-gray-400 rounded-b lg:border-l-0 lg:border-t lg:border-gray-400 lg:rounded-b-none lg:rounded-r">
    <div className="flex items-center">
        <img className="w-10 h-10 mr-4 rounded-full" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"/>
        <div className="text-sm">
        <p className="leading-none text-gray-900">Jonathan Reinink</p>
        <p className="text-gray-600">Aug 18</p>
    </div>
    </div>
    <div className="mb-8">
        <p className="text-base text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
    </div>
    
    </div>
</div>
        
    )
}

export default Card