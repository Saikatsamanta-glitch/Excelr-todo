export default function Card({data}) {
        // object
        
  return (
    <div className='h-64 w-80 rounded-xl hover:scale-110 hover:border-2 hover:bg-white hover:border-black bg-cyan-100 p-4 flex flex-col justify-between'>
    <h1>Task {data.id}</h1>
        <p className='limit_text'>{data.desc}</p>

        <h2 className='mt-3'> {data.date} </h2>

        <div className="options flex justify-between">
        {
                data.completed ? <button className='h-8 w-32 bg-green-300 rounded-lg'> Completed </button> : <button className='h-8 w-32 bg-red-300 rounded-lg'> Incomplete </button>
        }
        <i className={`hover:animate-wiggle fi fi-sr-heart text-2xl ${data.fav && "text-red-500"}` }></i>
        <i className="hover:animate-shake fi fi-rs-trash text-2xl"></i>
        
        </div>
    </div>
  )
}
