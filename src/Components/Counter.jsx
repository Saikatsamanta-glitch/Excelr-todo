import React, { useState } from 'react';
// useState [currVal, setcurrVal]
export default function Counter() {
        // Hooks: useState, useEffect, top of the scope
        // Hooks cannot be conditional
        const [count,setCount] = useState(0);

        const inc=()=>{
                setCount(count+1)
        }
        const dec=()=>{
                setCount(count-1)
        }
        return (
                <center className="mt-10">
               <h1 className="text-5xl">Current Count value : {count}</h1>
               <button className='btn bg-yellow-200 mt-10' onClick={inc}>Increment</button>
               <button className='btn bg-black mt-10 text-white' onClick={dec}>Decrement</button>
               </center>
        )
}

// events: onClick,onChange,onPress, onKeydown, onHover,.......