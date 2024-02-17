import React, {useState,useRef} from 'react'
import Searchbar from '../components/Searchbar/Searchbar'
import Venuelists from '../components/Venuelists/Venuelists';
import { useGlobalStore } from '../ContextProvider';
import ScrollToTopButton from '../components/Button/ScrollToTopButton';
import { useTranslation } from 'react-i18next';


const SquashCourt = () => {

    const { t,i18n } = useTranslation("global");
    const {state} = useGlobalStore()
    const parentRef = useRef(null);

    const handleScrollToTop = () => {
        if (parentRef.current) {
            parentRef.current.scrollTo({
            top: 0,
            behavior: 'smooth'
            });
        }
    };

    const handleFilterCourt = (filterCriteria) => {
        setFilter(filterCriteria)
    }

    
    const handleChangeTranslation = (lang) => {
        i18n.changeLanguage(lang)
    }

    const [filter,setFilter] = useState("")

    return (
        <div ref={parentRef} className='main h-full overflow-y-scroll '>
            <div className='text-xs text dark:text-white'>
                        <span onClick={()=>handleChangeTranslation("en")} className='p-1 hover:cursor-pointer'>EN</span>
                        {/* <span onClick={()=>handleChangeTranslation("es")} className='p-1 hover:cursor-pointer'>ES</span> */}
                        <span onClick={()=>handleChangeTranslation("my")} className='p-1 hover:cursor-pointer'>MY</span>
                    </div>
            <h1 className='text-3xl font-extrabold mb-2 dark:text-white transition-all duration-500 ease-in-out'>{t('Squash Finder')}</h1>
            <p className='text-zinc-600 text-md font-medium dark:text-white transition-all duration-500 ease-in-out'>{t("Play Anywhere, Anytime: Find squash courts here in Malaysia.")}<span className="hover:cursor-pointer text-fuchsia-600"> {t("Feel free to contribute.")}</span></p>
            <Searchbar handleFilterBy={handleFilterCourt} filter={filter} />
            <Venuelists filter={filter} state={state.courts} isLoading={state.courtIsLoading} />
            {(Array.isArray(state.courts) && state.courts.length) > 0 && <ScrollToTopButton handleScrollToTop={handleScrollToTop}/> }
        </div>
    )
}

export default SquashCourt
