import { ClipLoader } from "react-spinners"
import Card from "../Card/Card"
import { useTranslation } from "react-i18next"

const Venuelists = ({filter,state,isLoading}) => {
    

    const {t} = useTranslation("global")
    return (
        <>
            {isLoading? <div className='mx-auto'><ClipLoader className="mt-10" color="#db70d6" size={50}/> </div> : <main className='flex flex-col space-y-9 '>
            {state.filter(filtered => filtered.region.toLowerCase().includes(filter.toLowerCase())).map(court => (
                <div key={court.id}>
                    <div className='mb-5'>
                        <h1 className='text-2xl font-bold dark:text-white transition-all duration-500 ease-in-out'>{court.region}</h1>
                    </div>
                    <div className='flex flex-col space-y-8'>
                        {court.venue.map(venue => (
                            <Card key={venue.id} venue={venue}  />
                            ))}
                    </div>
                </div>
                ))}
            {state.filter(filtered => filtered.region.toLowerCase().includes(filter.toLowerCase())).length === 0 && <h1 className="text-2xl mt-10 text-zinc-400">{t("No results found. Try another keyword.")}</h1>}
            </main> }
        </>
    )
}

export default Venuelists
