import React from 'react'
import { Link } from 'react-router-dom'

const SquashStore = () => {
    return (
        <div className='main h-full overflow-y-scroll'>
            <Link to="/store">
                store
            </Link>
            <div></div>
            <Link to="/">
                court
            </Link>
        </div>
    )
}

export default SquashStore
