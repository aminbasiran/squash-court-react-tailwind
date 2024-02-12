import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = (WrappedComponent) => {

    return (props) => {

        return (
            <div className="flex flex-col h-full transition-all duration-500 ease-in-out dark:bg-[#181619]"> 
                <Navbar/>
                <div className='text-right'>
                    <span className='text-xs'>EN</span>
                    <span className=' text-xs p-2'>MY</span>
                </div>
                    <WrappedComponent {...props}/>
                <Footer/>
            </div>
        )

    }
}

export default Layout

