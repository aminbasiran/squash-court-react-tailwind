import React from 'react'

const Searchbar = ({setFilter,filter}) => {


    const handleRegionFilter = (event) => {
        setFilter(event.target.value)
    }

    return (
        <div className='mt-5 mb-16 '>
            <input value={filter} onChange={handleRegionFilter} type="text" placeholder="Filter by region or venue" className='py-3 px-6 text-sm rounded-full shadow-md focus:outline-none   focus:ring-fuchsia-600 focus:border-fuchsia-600 focus:ring-1 dark:bg-[#202020] dark:text-white transition-all duration-500 ease-in-out'   />
        </div>
    )
}

export default Searchbar
