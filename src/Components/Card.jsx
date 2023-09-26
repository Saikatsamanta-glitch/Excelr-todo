export default function Card(props) {
        // object
        
  return (
    <div className='h-64 w-80 rounded-xl hover:scale-110 hover:border-2 hover:bg-white hover:border-black bg-cyan-100 p-4 flex flex-col justify-between'>
    <h1>Task {props.data.id}</h1>
        <p className='limit_text'>{props.data.desc}</p>

        <h2 className='mt-3'> {props.data.date} </h2>

        <div className="options flex justify-between">
        {
                props.data.completed ? <button className='h-8 w-32 bg-green-300 rounded-xl'> Completed </button> : <button className='h-8 w-32 bg-red-300 rounded-xl'> Incomplete </button>
        }
        <i className={`fi fi-rr-icon-star text-2xl ${props.data.fav && "text-red-500"}` }></i>
        <i className="fi fi-rs-trash text-2xl"></i>
        
        </div>
    </div>
  )
}
