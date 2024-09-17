import { Link } from "@inertiajs/react";
import { useState } from "react";

const HoverLink = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Link
            href="/register"
            className="flex overflow-hidden items-center justify-center h-12 w-12 bg-black rounded-full shadow-lg transition-all duration-300 ease-out hover:w-48 hover:justify-start hover:pl-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="flex items-center justify-center h-8 w-8 rounded-full transition-all duration-300 ease-out">
                <img
                    src="./image/Aperture.png"
                    alt="icon"
                    className="bg-accent rounded-full p-1 w-8 h-8 object-cover transition-all duration-300 ease-out"
                />
            </div>
            {/* Span will be displayed based on hover state */}
            {isHovered && (
                <span className="text-accent text-lg font-medium ml-2 transition-opacity duration-300 ease-out text-nowrap">
                    Start Free Trial
                </span>
            )}
        </Link>
    );
};

export default HoverLink;
