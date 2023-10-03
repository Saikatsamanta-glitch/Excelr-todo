

export default function Modal({show,setShow,task,setTask}) {
        const visible = show ? "block":"hidden";
        
       
  return (
    <div className={"z-40 h-[350px] mx-auto left-0 right-0 w-[450px] rounded-xl bg-white p-4 shadow-xl absolute top-20 "+visible   }>
    <header className="flex justify-between text-xl">
    <h2 >Create Task 🔥</h2>
    <h2 className="cursor-pointer" onClick={()=>{setShow(!show)}}> X </h2>
    </header>
    <div className="mt-8 overflow-y-scroll h-44">
        <h2 className="text-2xl">Task:  {task[task.length-1].id+1}</h2>
        <textarea cols="50" rows="10"></textarea>
    </div>
    </div>
  )
}
