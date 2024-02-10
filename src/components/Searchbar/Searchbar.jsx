import React from 'react'

const Searchbar = ({setFilter,filter}) => {

    const handleRegionFilter = (event) => {
        setFilter(event.target.value)
    }

    return (
        <div className='mt-5 mb-16'>
            <input value={filter} onChange={handleRegionFilter} type="text" placeholder="Search..." className='py-2 px-4 rounded-full shadow-md focus:outline-none   focus:ring-fuchsia-600 focus:border-fuchsia-600 focus:ring-1' />
        </div>
    )
}

export default Searchbar
