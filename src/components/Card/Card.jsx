import React from 'react'
import Button from '../Button/Button'
import ImageNotFound from '../ImageNotFound/ImageNotFound'
import { appendAddress } from '../../utils/appendAddress'

const Card = ({venue}) => {
    return (
        <div>
            <div className='w-full rounded-b-md'>
                {venue.images[0] ? <img src={venue.images[0]} alt="" className='object-contain'/> : <ImageNotFound/>}
            </div>
            <div className='bg-white p-4 rounded-b-md shadow-md hover:cursor-pointer'>
                <h2 className='text-left text-xl font-bold'>{venue.name}</h2>
                <p className='text-left mt-1 mb-6'>{appendAddress(venue.address)}</p>
                <div className='mb-4'>
                    <h2 className='text-left text-sm'>{venue.phone.main}</h2>
                    <h2 className='text-left text-sm'>{venue.web !== null ? venue.web : null }</h2>
                </div>
                <Button></Button>
            </div>
        </div>
    )
}

export default Card
