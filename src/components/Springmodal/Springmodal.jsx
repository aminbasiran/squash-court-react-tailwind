import { AnimatePresence, motion } from "framer-motion";

export const SpringModal = ({ venue, isOpen, setIsOpen }) => {
    return (
    <AnimatePresence>
    {isOpen && (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsOpen(false)}
        className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
        <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-[#191A1E]/90 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
        >

            <div className="relative z-10">

            <h3 className="text-black text-2xl font-bold text-center mb-2 dark:text-white">
                {venue.name}
            </h3>
            <p className="font-semibold text-gray-500 text-left text-sm mb-2">
                Operating hours:
            </p>
            <p className="font-semibold text-gray-500 text-left text-sm mb-2">
                Location:
            </p>
            <p className="font-semibold text-gray-500 text-left text-sm mb-2">
                Phone:
            </p>
            <div className="flex mt-6 gap-2">
                
                <button
                onClick={() => setIsOpen(false)}
                className="bg-zinc-800 text-white text-sm dark:bg-[#8558FF] hover:opacity-90 transition-opacity dark:text-white  font-semibold w-full py-2 rounded"
                >
                Go back
                </button>
                <button
                onClick={() => setIsOpen(false)}
                className="bg-zinc-800 text-white text-sm dark:bg-[#8558FF] hover:opacity-90 transition-opacity dark:text-white  font-semibold w-full py-2 rounded"
                >
                Book now!
                </button>
            </div>
            </div>
        </motion.div>
        </motion.div>
    )}
    </AnimatePresence>
);
};