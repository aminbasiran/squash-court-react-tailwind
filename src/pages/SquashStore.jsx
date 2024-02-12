import React, {useState,useEffect} from 'react'
import Searchbar from '../components/Searchbar/Searchbar'
import { useGlobalStore } from '../ContextProvider';

import Venuelists from '../components/Venuelists/Venuelists';

const SquashStore = () => {

    const {state} = useGlobalStore()
    const [filter,setFilter] = useState("")

    const handleFilterStore = (filterCriteria) => {
        setFilter(filterCriteria)
    }

    return (
        <div className='main h-full overflow-y-scroll'>
            <h1 className='text-3xl font-extrabold mb-2 dark:text-white transition-all duration-500 ease-in-out'>Store Finder</h1>
            <p className='text-zinc-600 text-md font-medium dark:text-white transition-all duration-500 ease-in-out'>Shop at your nearest store. <span className="hover:cursor-pointer text-fuchsia-600">Contribute to more stores.</span></p>
            <Searchbar filter={filter} handleFilterBy={handleFilterStore}/>
            <Venuelists filter={filter} state={state.stores} isLoading={state.storeIsLoading} />
        </div>
    )
}

export default SquashStore
