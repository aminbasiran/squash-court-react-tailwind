import React from 'react'
import axios from 'axios'

const Button = ({id}) => {

    const handleViewVenue= (id) => {
        

    }

    return (
        <div onClick={()=> handleViewVenue(id)} className='font-semibold py-2 rounded-md drop-shadow-md hover:cursor-pointer mx-auto  bg-zinc-800 dark:bg-fuchsia-500 transition-all duration-500 ease-in-out'>
            <h1 className=' h-full w-full text-white text-sm text-glow'>View</h1>
        </div>
    )
}

export default Button
