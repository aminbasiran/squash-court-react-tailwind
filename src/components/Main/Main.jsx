import React, {useState} from 'react'
import Searchbar from '../Searchbar/Searchbar'
import Venuelists from '../Venuelists/Venuelists';

const Main = () => {

    const [filter,setFilter] = useState("")

    return (
        <div className='main flex flex-col'>
            <h1 className='text-3xl font-extrabold mb-2 dark:text-white transition-all duration-500 ease-in-out'>List of Squash Courts</h1>
            <p className='text-zinc-600 text-md font-medium dark:text-white transition-all duration-500 ease-in-out'>Find your favourite squash courts available here in Malaysia. <span className="hover:cursor-pointer text-fuchsia-600">Feel free to contribute.</span></p>
            <Searchbar filter={filter} setFilter={setFilter}/>
            <Venuelists filter={filter}  />
        </div>
    )
}

export default Main
