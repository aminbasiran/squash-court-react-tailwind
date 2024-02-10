import { ClipLoader } from "react-spinners"
import Card from "../Card/Card"
import { useGlobalStore } from "../../ContextProvider"

const Venuelists = ({filter}) => {

    const {state} = useGlobalStore()

    return (
        <>
            {state.isLoading ? <div className='mx-auto'><ClipLoader color="#db70d6" size={50}/> </div> : <main className='flex flex-col space-y-9 '>
            {state.courts.filter(filtered => filtered.region.toLowerCase().includes(filter.toLowerCase())).map(court => (
                <div key={court.id}>
                    <div className='mb-5'>
                        <h1 className='text-2xl font-bold dark:text-white transition-all duration-500 ease-in-out'>{court.region}</h1>
                    </div>
                    <div className='flex flex-col space-y-6'>
                        {court.venue.map(venue => (
                            <Card key={venue.id} venue={venue}  />
                            ))}
                    </div>
                </div>
                ))}
            {state.courts.filter(filtered => filtered.region.toLowerCase().includes(filter.toLowerCase())).length === 0 && <h1 className="text-2xl text-zinc-400">No results found</h1>}
            </main> }
        </>
    )
}

export default Venuelists
