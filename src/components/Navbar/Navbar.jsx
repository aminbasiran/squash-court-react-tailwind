import { BsMoonStarsFill } from "react-icons/bs";
import { LuSun } from "react-icons/lu";
import { useGlobalStore } from "../../ContextProvider";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';



const Navbar = () => {

    const { t, i18n } = useTranslation("global");
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

    
    const handleChangeTranslation = (lang) => {
        i18n.changeLanguage(lang)
    }

    return (
        <div className=' bg-white grow-0 p-4 shadow-lg dark:bg-[#181619] transition-all duration-500 ease-in-out'>
            <div className='flex justify-between place-items-center'>
                <Link to="/">
                    <h1 className='font-bold text-lg dark:text-white transition-all duration-500 ease-in-out'>Squash<span className="text-white font-extrabold pr-2 py-1  bg-[#8558FF]">HUB</span>.io</h1>
                
                </Link>
                <div className='text-xs dark:text-white'>
                    <span onClick={()=>handleChangeTranslation("en")} className='p-1 hover:cursor-pointer'>EN</span>
                    {/* <span onClick={()=>handleChangeTranslation("es")} className='p-1 hover:cursor-pointer'>ES</span> */}
                    <span onClick={()=>handleChangeTranslation("my")} className='p-1 hover:cursor-pointer'>MY</span>
                </div>
                <div className="flex place-items-center space-x-4 transition-all duration-500 ease-in-out dark:text-white">
                    {state.isDarkMode ?  <LuSun onClick={handleBrightMode} className="text-xl hover:cursor-pointer"/> :<BsMoonStarsFill onClick={handleDarkMode} className="hover:cursor-pointer"/>}
                    {/* <h1 className=" text-sm font-medium ">Store</h1> */}
                    <Link to="/store">
                        <h1 className=" text-sm font-medium ">{t("Store")}</h1>
                    </Link>
                    <a href="https://example.com" target="_blank" rel="noopener noreferrer"><h1 className='text-sm font-medium hover:cursor-pointer'>{t("Get API")}</h1></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
