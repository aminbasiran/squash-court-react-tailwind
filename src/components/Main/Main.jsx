import React from 'react'
import Card from '../Card/Card'
import Searchbar from '../Searchbar/Searchbar'
import ClipLoader from "react-spinners/ClipLoader";

const Main = ({courts,isLoading}) => {
    return (
        <div className='main flex flex-col'>
            <h1 className='text-3xl font-extrabold mb-2'>List of Squash Courts</h1>
            <p className='text-zinc-600 font-medium'>Find your favourite squash courts available here in Malaysia. <span className="text-fuchsia-600">Feel free to contribute.</span></p>
            <Searchbar/>
            {isLoading ? <div className='mx-auto'><ClipLoader color="#db70d6" size={50}/> </div> : <main className='flex flex-col space-y-9 '>
                {/* {courts.map(court => <><h1 key={court.id}>{court.region}</h1>{court.venue.map(venue => <Card key={venue.id} venue={venue}/>)}</>)} */}
                {courts.map(court => (
                    <div key={court.id}>
                        <div className='mb-5'>
                            <h1 className='text-2xl font-bold'>{court.region}</h1>
                        </div>
                        <div className='flex flex-col space-y-6'>
                            {court.venue.map(venue => (
                                <Card key={venue.id} venue={venue}  />
                                ))}
                        </div>
                    </div>
                    ))}
            </main> }
            
        </div>
    )
}

export default Main
