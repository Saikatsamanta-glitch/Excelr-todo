import React from 'react'

export default function Card() {
  return (
    <div className='h-64 w-80 rounded-xl hover:scale-110 hover:border-2 hover:bg-white hover:border-black bg-cyan-100 p-4 flex flex-col justify-between'>
    <h1>Task 1</h1>
        <p className='limit_text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam perspiciatis recusandae soluta doloribus porro delectus accusamus enim dolor. Modi esse, dignissimos blanditiis atque corrupti molestiae consequuntur assumenda incidunt? Quibusdam, suscipit?</p>

        <h2 className='mt-3'> {new Date().toLocaleDateString()} </h2>

        <div className="options flex justify-between">
        <button className='h-8 w-32 bg-green-300 rounded-xl'> Completed </button>
        <i className="fi fi-rr-icon-star text-2xl"></i>
        <i className="fi fi-rs-trash text-2xl"></i>
        
        </div>
    </div>
  )
}
