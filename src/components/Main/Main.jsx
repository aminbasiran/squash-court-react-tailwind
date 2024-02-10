import React, {useState} from 'react'
import Searchbar from '../Searchbar/Searchbar'
import Venuelists from '../Venuelists/Venuelists';


const Main = ({courts,isLoading}) => {

    const [filter,setFilter] = useState("")

    return (
        <div className='main flex flex-col'>
            <h1 className='text-3xl font-extrabold mb-2'>List of Squash Courts</h1>
            <p className='text-zinc-600 font-medium'>Find your favourite squash courts available here in Malaysia. <span className="hover:cursor-pointer text-fuchsia-600">Feel free to contribute.</span></p>
            <Searchbar filter={filter} setFilter={setFilter}/>
            <Venuelists courts={courts} isLoading={isLoading} filter={filter}  />
        </div>
    )
}

export default Main
