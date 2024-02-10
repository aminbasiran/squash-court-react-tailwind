import React from 'react'
import Button from '../Button/Button'

const Card = () => {
    return (
        <div className='bg-white p-4 rounded-b-md drop-shadow-md hover:cursor-pointer'>
            <img src="" alt="" />
            <h2 className='text-left font-bold'>Squash Court, National Sports Complex</h2>
            <p className='text-left mt-1 mb-6'>Bukit Tunku, 50480 Kuala Lumpur, Federal Territory of Kuala Lumpur</p>
            <div className='mb-4'>
                <h2 className='text-left text-sm'>0362065022</h2>
                <h2 className='text-left text-sm'>http://www.stadium.gov.my/</h2>
            </div>
            <Button></Button>
        </div>
    )
}

export default Card
