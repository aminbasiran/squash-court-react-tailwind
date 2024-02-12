import React from 'react'
import { FaArrowUp } from 'react-icons/fa';


const ScrollToTopButton = ({handleScrollToTop}) => {

    return (
        <button className="grid place-content-center fixed bottom-12 right-1 w-[40px] aspect-square bg-zinc-200/50 rounded-full dark:bg-black/30 dark:text-white transition-all duration-500 ease-in-out" onClick={handleScrollToTop}>
                <FaArrowUp/>
            </button>
    );
};

export default ScrollToTopButton