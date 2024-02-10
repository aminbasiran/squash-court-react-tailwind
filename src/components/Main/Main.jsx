import React from 'react'
import Card from '../Card/Card'

const Main = () => {
    return (
        <div className='flex flex-col '>
            <h1 className='text-3xl font-extrabold'>List of Squash Courts</h1>
            <p className='text-zinc-600 font-medium mb-5 mt-2'>Find your favourite squash courts available here in Malaysia. <span className="text-fuchsia-600">Feel free to contribute.</span></p>
            <main className='flex flex-col space-y-9 '>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </main>
        </div>
    )
}

export default Main
