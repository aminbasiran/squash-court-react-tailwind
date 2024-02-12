import React from 'react'

const Searchbar = ({handleFilterBy,filter}) => {

    const handleFilter = (e) => {
        handleFilterBy(e.target.value)
    }

    return (
        <div className='my-3'>
            <input value={filter} onChange={handleFilter} type="text" placeholder="Filter by region" className='py-2 px-5 text-xs rounded-full shadow-md focus:outline-none   focus:ring-fuchsia-600 focus:border-fuchsia-600 focus:ring-1 dark:bg-[#202020] dark:text-white transition-all duration-500 ease-in-out'   />
        </div>
    )
}

export default Searchbar
