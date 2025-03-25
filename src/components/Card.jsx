import React from 'react'

const Card = ({name,city,age,profession,profilePic}) => {
    console.log(name,city,age,profession,profilePic);                

    return (
    <>
        <div className='mr-5 mt-3 bg-slate-200 text-black inline-block p-6 text-center rounded'>

        <img className='ml-6 h-32 w-32 rounded-full mb-3' src={profilePic} alt=''/>   
       
        <h2>{name}</h2>
        <h2>{city}</h2>
        <h2>{age}</h2>
        <h2>{profession}</h2>

        <button className="px-4 py-2 rounded bg-green-600 text-black font-semibold">
                  Add Friend</button>
        </div>
    </>
  )                                    
}                                      

export default Card



