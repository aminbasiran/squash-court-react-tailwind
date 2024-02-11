import React, {useState,useRef} from 'react'
import Searchbar from '../Searchbar/Searchbar'
import Venuelists from '../Venuelists/Venuelists';
import { FaArrowUp } from 'react-icons/fa';
import { useGlobalStore } from '../../ContextProvider';

const Main = () => {

    const {state} = useGlobalStore()

    const parentRef = useRef(null);

    const scrollToTop = () => {
        if (parentRef.current) {
            parentRef.current.scrollTo({
            top: 0,
            behavior: 'smooth'
            });
        }
    };

    const [filter,setFilter] = useState("")

    return (
        <div ref={parentRef} className='main h-full overflow-y-scroll '>
            <h1 className='text-3xl font-extrabold mb-2 dark:text-white transition-all duration-500 ease-in-out'>List of Squash Courts</h1>
            <p className='text-zinc-600 text-md font-medium dark:text-white transition-all duration-500 ease-in-out'>Find your favourite squash courts available here in Malaysia. <span className="hover:cursor-pointer text-fuchsia-600">Feel free to contribute.</span></p>
            <Searchbar filter={filter} setFilter={setFilter}/>
            <Venuelists filter={filter}  />
            {(Array.isArray(state.courts) && state.courts.length) > 0 && <button className="grid place-content-center fixed bottom-12 right-1 w-[40px] aspect-square bg-zinc-200/50 rounded-full dark:bg-fuchsia-500/30 dark:text-white transition-all duration-500 ease-in-out" onClick={scrollToTop}>
                <FaArrowUp/>
            </button>}
        </div>
    )
}

export default Main
