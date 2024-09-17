import React, { useState, useEffect } from "react";
import { FaCaretLeft } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa";

const logos = [
    {
        src: "image/undiksha.png",
        alt: "Undiksha Logo",
    },
    {
        src: "image/yepa.png", // Replace with your actual YEPPA logo
        alt: "YEPPA Logo",
    },
    {
        src: "image/google.png", // Replace with your actual third logo
        alt: "Google Logo",
    },
];

const PartnerSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? logos.length - 1 : prevIndex - 1
        );
    };

    // Automatically change logos every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000); // 5 seconds

        return () => clearInterval(interval); // Cleanup the interval on unmount
    }, [currentIndex]);

    // Helper function to get the next logo index
    const getIndex = (index) => {
        return (index + logos.length) % logos.length;
    };

    return (
        <div
            className="flex items-center justify-center space-x-4"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
        >
            <button
                className="text-2xl p-2 bg-secondary w-10 h-10 rounded-full flex justify-center items-center"
                onClick={handlePrev}
            >
                <FaCaretLeft className="text-center text-white" size={24} />
            </button>
            {/* Show the previous, current, and next logo */}
            <div className="flex space-x-4 items-center">
                <img
                    className="w-32 h-32 p-2 bg-white shadow-md rounded-md  object-contain opacity-50 transition-transform duration-500 ease-in-out transform scale-90"
                    src={logos[getIndex(currentIndex - 1)].src}
                    alt={logos[getIndex(currentIndex - 1)].alt}
                />
                <img
                    className="w-40 h-40 p-4 bg-white object-contain rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform scale-100"
                    src={logos[currentIndex].src}
                    alt={logos[currentIndex].alt}
                />
                <img
                    className="w-32 h-32 p-2 bg-white shadow-md rounded-md object-contain opacity-50 transition-transform duration-500 ease-in-out transform scale-90"
                    src={logos[getIndex(currentIndex + 1)].src}
                    alt={logos[getIndex(currentIndex + 1)].alt}
                />
            </div>
            <button
                className="text-2xl p-2 bg-secondary w-10 h-10 rounded-full flex justify-center items-center"
                onClick={handleNext}
            >
                <FaCaretRight className="text-center text-white" size={24} />
            </button>
        </div>
    );
};

export default PartnerSlider;
