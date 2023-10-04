import { useContext, useState } from "react";
import { Data } from "../App";

export default function Modal({show,setShow}) {
        const {task,setTask} = useContext(Data)
        const visible = show ? "block":"hidden";
        
        const [desc,setDesc] =useState("");
        const addevent = ()=>{
                setTask([...task, {
                        id:task[task.length-1].id+1,
                        desc:desc,
                        date:new Date().toLocaleDateString(),
                        completed:false,
                        fav:false,
                        deleted:false,
                        imp:false
                }])
                setDesc("")
                setShow(!show)
        }
        const handleChange=(e)=>{
                setDesc(e.target.value)
        }
       
  return (
    <div className={"z-40 h-[350px] mx-auto left-0 right-0 w-[450px] flex flex-col justify-between rounded-xl bg-white p-4 shadow-xl absolute top-20 "+visible   }>
    <header className="flex justify-between text-xl">
    <h2 >Create Task 🔥</h2>
    <h2 className="cursor-pointer" onClick={()=>{setShow(!show)}}> X </h2>
    </header>
    <div className="mt-8 overflow-y-scroll h-44">
        <h2 className="text-2xl">Task:  {task[task.length-1].id+1}</h2>
        <textarea cols="50" rows="5" onChange={handleChange} className="border-none rounded"></textarea>
    </div>
    <div className="flex justify-between">
        <button onClick={()=>{setShow(!show)}} className="bg-red-500 px-2 rounded h-10 w-24 text-white">Cancel</button>
        <button onClick={addevent} className="bg-blue-500 rounded px-2 h-10 w-28 text-white"> Add Task ✅ </button>
    </div>
    </div>
  )
}
