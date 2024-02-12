import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";


const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
    type: "spring",
    mass: 3,
    stiffness: 500,
    damping: 50,
};

export const Swipecarousel = ({venue}) => {
    const [imgIndex, setImgIndex] = useState(0);

    const dragX = useMotionValue(0);

    useEffect(() => {
        const intervalRef = setInterval(() => {
        const x = dragX.get();

        if (x === 0) {
            setImgIndex((pv) => {
            if (pv === venue.images.length - 1) {
                return 0;
            }
            return pv + 1;
            });
        }
        }, AUTO_DELAY);

        return () => clearInterval(intervalRef);
    }, []);

    const onDragEnd = () => {
        const x = dragX.get();

        if (x <= -DRAG_BUFFER && imgIndex < venue.images.length - 1) {
        setImgIndex((pv) => pv + 1);
        } else if (x >= DRAG_BUFFER && imgIndex > 0) {
        setImgIndex((pv) => pv - 1);
        }
    };

    return (
        <div className="relative w-full overflow-x-hidden">
            <motion.div
                drag="x"
                dragConstraints={{
                left: 0,
                right: 0,
                }}
                style={{
                x: dragX,
                }}
                animate={{
                translateX: `-${imgIndex * 100}%`,
                }}
                transition={SPRING_OPTIONS}
                onDragEnd={onDragEnd}
                className="flex cursor-grab items-center active:cursor-grabbing"
            >
                <Images imgIndex={imgIndex} venue={venue}/>
            </motion.div>
        <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} venue={venue}/>

        </div>
    );
};

const Images = ({ imgIndex, venue}) => {
    return (
        <>
        {venue.images.map((imgSrc, idx) => {
            return (
            <motion.div
                key={idx}
                style={{
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                }}
                animate={{
                scale: imgIndex === idx ? 1: 0.95,
                }}
                transition={SPRING_OPTIONS}
                className="aspect-video w-full shrink-0 bg-neutral-800"
            />
            );
        })}
        </>
    );
};

const Dots = ({ imgIndex, setImgIndex,venue }) => {
    return (
        <div className=" relative bottom-4 flex justify-center gap-2">
            {venue.images.map((_, idx) => {
                return (
                <button
                    key={idx}
                    onClick={() => setImgIndex(idx)}
                    className={`h-2 aspect-square rounded-full transition-colors ${
                    idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
                    }`}
                />
                );
            })}
        </div>
    );
};
