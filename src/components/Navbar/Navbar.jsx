import React from 'react'

const Navbar = () => {
    return (
        <div className='sticky z-50 bg-white top-0 left-0 w-full p-4 drop-shadow-md  '>
            <div className='flex justify-between'>
                <h1 className='font-bold text-lg'>Home of Squash</h1>
                <h1 className='font-medium hover:cursor-pointer'>Get API</h1>
            </div>
        </div>
    )
}

export default Navbar
