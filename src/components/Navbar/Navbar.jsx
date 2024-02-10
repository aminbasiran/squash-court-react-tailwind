import { BsMoonStarsFill } from "react-icons/bs";
import { LuSun } from "react-icons/lu";
import { useGlobalStore } from "../../ContextProvider";


const Navbar = () => {

    const {state,dispatch} = useGlobalStore()
    
    const handleDarkMode = () =>{
        sessionStorage.setItem("dark", "true");
        document.documentElement.classList.add('dark')
        dispatch({type:"SET_DARKMODE",payload:{mode:true}})
    }
    const handleBrightMode = () =>{
        sessionStorage.setItem("dark", "false");
        document.documentElement.classList.remove('dark')
        dispatch({type:"SET_DARKMODE",payload:{mode:false}})
    }

    return (
        <div className='sticky z-50 bg-white top-0 left-0 w-full p-4 shadow-lg dark:bg-[#181619] transition-all duration-500 ease-in-out'>
            <div className='flex justify-between place-items-center'>
                <h1 className='font-bold text-lg dark:text-white transition-all duration-500 ease-in-out'>Squash<span className="text-white font-extrabold pr-1 py-1 pl-1 bg-fuchsia-600 ">HUB</span></h1>
                <div className="flex place-items-center space-x-6 transition-all duration-500 ease-in-out dark:text-white">
                    {state.isDarkMode ? <LuSun onClick={handleBrightMode} className="text-xl hover:cursor-pointer"/> :<BsMoonStarsFill onClick={handleDarkMode} className="hover:cursor-pointer"/>}
                    <h1 className=" text-sm font-medium ">Store</h1>
                    <h1 className='text-sm font-medium hover:cursor-pointer'>Get API</h1>
                </div>
            </div>
        </div>
    )
}

export default Navbar
