import { ClipLoader } from "react-spinners"
import Card from "../Card/Card"

const Venuelists = ({isLoading,courts,filter}) => {
    return (
        <>
            {isLoading ? <div className='mx-auto'><ClipLoader color="#db70d6" size={50}/> </div> : <main className='flex flex-col space-y-9 '>
            {courts.filter(filtered => filtered.region.toLowerCase().includes(filter.toLowerCase())).map(court => (
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
        </>
    )
}

export default Venuelists
