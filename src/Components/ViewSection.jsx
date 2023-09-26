import React from 'react'

export default function ViewSection() {
  return (
        <div className="view flex justify-between mt-10">
        <div>
        <i className="fi fi-rr-settings-sliders m-5 text-3xl"></i>
        <i className="fi fi-rr-apps m-5 text-3xl"></i>
        </div>
        <select className=" border-none btn text-2xl" >
                <option disabled >Sort by</option>
                <option value="date">Date</option>
                <option value="complete">Complete</option>
                <option value="incomplete">Incomplete</option>
        </select>
</div>
  )
}
