import React, {useState} from 'react'
import { SpringModal } from '../Springmodal/Springmodal';
import { useTranslation } from 'react-i18next';

const Button = ({venue}) => {

    const { t } = useTranslation("global");
    const [isOpen, setIsOpen] = useState(false);

    const handleViewVenue= () => {
        setIsOpen(true)
    }

    return (
        <div>
            <div onClick={handleViewVenue} className='font-semibold py-2 rounded-md drop-shadow-md hover:cursor-pointer mx-auto  bg-zinc-800 dark:bg-[#8558FF] transition-all duration-500 ease-in-out'>
                <h1 className=' h-full w-full text-white text-sm text-glow'>{t("View more")}</h1>
            </div>
            <SpringModal venue={venue} isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}

export default Button
