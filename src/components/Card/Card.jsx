import React, { useEffect, useState } from "react";
import Button from '../Button/Button'
import ImageNotFound from '../ImageNotFound/ImageNotFound'
import { appendAddress } from '../../utils/appendAddress'
import { Swipecarousel } from "../Swipecarousel/Swipecarousel";

const Card = ({venue}) => {

    return (
        <div className="shadow-[2.0px_3.0px_8.0px_rgba(0,0,0,0.25)]">
            <Swipecarousel venue={venue}/>
            <div className='bg-white  p-4 rounded-b-md hover:cursor-pointer transition-all duration-500 ease-in-out dark:bg-[#191A1E] dark:shadow-gray-500/20 '>
                <h2 className=' font-semibold text-xl dark:text-white transition-all duration-500 ease-in-out'>{venue.name}</h2>
                <p className=' text-sm font-medium text-gray-500 mt-1 mb-6'>{appendAddress(venue.address)}</p>
                <Button venue={venue}></Button>
            </div>

        </div>
    )
}

export default Card


