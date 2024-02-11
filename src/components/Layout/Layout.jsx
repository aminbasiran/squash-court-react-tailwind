import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
    return (
        <div className="flex flex-col h-full transition-all duration-500 ease-in-out dark:bg-[#181619]"> 
            <Navbar/>
                {children} {/* lives venue and store page */} 
            <Footer/>
        </div>
    )
}

export default Layout
