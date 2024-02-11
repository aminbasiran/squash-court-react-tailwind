import React from 'react'
import { useRef } from 'react';
// import { FaArrowUp } from 'react-icons/fa';


const ScrollToTopButton = () => {
    const parentRef = useRef(null);
    
    const scrollToTop = () => {
    if (parentRef.current) {
        parentRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    }
    };

    return (
        <button onClick={scrollToTop}>Scroll to Top</button>
    );
};

export default ScrollToTopButton