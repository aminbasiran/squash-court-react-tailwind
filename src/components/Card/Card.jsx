import React from 'react'
import Button from '../Button/Button'
import ImageNotFound from '../ImageNotFound/ImageNotFound'
import { appendAddress } from '../../utils/appendAddress'
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

const Card = ({venue}) => {
    return (
        <div>
            <div className='w-full rounded-b-md'>
                {venue.images[0] ? <img src={venue.images[0]} alt="" className='object-contain'/> : <ImageNotFound/>}
            </div>
            <div className='bg-white  p-4 rounded-b-md hover:cursor-pointer shadow-lg transition-all duration-500 ease-in-out dark:bg-[#191A1E] dark:shadow-gray-500/20 '>
                <h2 className='text-left font-semibold text-xl dark:text-white transition-all duration-500 ease-in-out'>{venue.name}</h2>
                <p className='text-left text-sm font-medium text-gray-500 mt-1 mb-6'>{appendAddress(venue.address)}</p>
                <div className='mb-4 flex flex-col space-y-2'>
                    <div className='flex space-x-2 place-items-center'>
                        <FaPhoneAlt className='text-xs dark:text-zinc-500 transition-all duration-500 ease-in-out'/>
                        <h2 className='text-left text-sm font-medium text-zinc-500'>{venue.phone.main}</h2>
                    </div>
                    {/* {venue.web !== null ? <div className='flex space-x-2 place-items-center'>
                        <AiOutlineGlobal className='text-sm'/>
                        <h2 className='text-left text-sm font-medium text-gray-500'>{null}</h2>
                    </div>: null } */}
                </div>
                <Button id={venue.id}></Button>
            </div>

        </div>
    )
}

export default Card
