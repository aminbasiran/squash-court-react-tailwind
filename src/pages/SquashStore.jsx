import React, {useState,useEffect} from 'react'
import Searchbar from '../components/Searchbar/Searchbar'
import { useGlobalStore } from '../ContextProvider';
import Venuelists from '../components/Venuelists/Venuelists';
import { useTranslation } from 'react-i18next';

const SquashStore = () => {

    const { t, i18n } = useTranslation("global");
    const {state} = useGlobalStore()
    const [filter,setFilter] = useState("")

    const handleFilterStore = (filterCriteria) => {
        setFilter(filterCriteria)
    }

    
    const handleChangeTranslation = (lang) => {
        i18n.changeLanguage(lang)
    }

    return (
        <div className='main h-full overflow-y-scroll'>
            <div className='text-xs text dark:text-white'>
                        <span onClick={()=>handleChangeTranslation("en")} className='p-1 hover:cursor-pointer'>EN</span>
                        {/* <span onClick={()=>handleChangeTranslation("es")} className='p-1 hover:cursor-pointer'>ES</span> */}
                        <span onClick={()=>handleChangeTranslation("my")} className='p-1 hover:cursor-pointer'>MY</span>
                    </div>
            <h1 className='text-3xl font-extrabold mb-2 dark:text-white transition-all duration-500 ease-in-out'>{t("Store Finder")}</h1>
            <p className='text-zinc-600 text-md font-medium dark:text-white transition-all duration-500 ease-in-out'>{t("Shop your squash equipments at your nearest store.")}<span className="hover:cursor-pointer text-fuchsia-600"> {t("Contribute to more stores.")}</span></p>
            <Searchbar filter={filter} handleFilterBy={handleFilterStore}/>
            <Venuelists filter={filter} state={state.stores} isLoading={state.storeIsLoading} />
        </div>
    )
}

export default SquashStore
