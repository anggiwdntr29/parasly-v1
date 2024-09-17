import React, { useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
const skinData = [
    {
        label: "Spots",
        percentage: 84,
        pathColor: "#FF0000",
        description:
            "Spots refer to specific areas of the skin where blemishes or imperfections appear. Commonly associated with acne or skin irritation.",
        image: "/Image/Image-3.png",
    },
    {
        label: "Wrinkle",
        percentage: 84,
        pathColor: "#00FF00",
        description:
            "Wrinkles are fine lines and creases that form on the skin due to aging, sun exposure, or other factors.",
        image: "/Image/Image-2.png",
    },
    {
        label: "Texture",
        percentage: 84,
        pathColor: "#800080",
        description:
            "Skin texture refers to the surface condition of the skin, which can be smooth or uneven.",
        image: "/Image/Image-3.png",
    },
    {
        label: "Moisture",
        percentage: 84,
        pathColor: "#FF1493",
        description:
            "Moisture is the hydration level of the skin, which affects its softness and elasticity.",
        image: "/Image/Image-2.png",
    },
    {
        label: "Redness",
        percentage: 84,
        pathColor: "#0000FF",
        description:
            "Redness is a skin condition that can result from inflammation, irritation, or increased blood flow.",
        image: "/Image/Image-3.png",
    },
    {
        label: "Oilness",
        percentage: 84,
        pathColor: "#FF00FF",
        description:
            "Oiliness occurs when the skin produces excess sebum, leading to a shiny or greasy appearance.",
        image: "/Image/Image-2.png",
    },
    {
        label: "Acne",
        percentage: 84,
        pathColor: "#00FF00",
        description:
            "Acne is a skin condition that occurs when hair follicles are clogged with oil and dead skin cells.",
        image: "/Image/Image-3.png",
    },
    {
        label: "Radiance",
        percentage: 84,
        pathColor: "#FFD700",
        description:
            "Radiance refers to the glow and brightness of the skin, indicating healthy and well-hydrated skin.",
        image: "/Image/Image-2.png",
    },
    {
        label: "Visible Pores",
        percentage: 84,
        pathColor: "#0000FF",
        description:
            "Visible pores are enlarged pores on the skin, which can become clogged with dirt and oil.",
        image: "/Image/Image-3.png",
    },
    {
        label: "Droopy Upper Eyelid",
        percentage: 84,
        pathColor: "#00FFFF",
        description:
            "Droopy upper eyelids can occur due to aging or other factors, affecting the appearance of the eyes.",
        image: "/Image/Image-2.png",
    },
    {
        label: "Droopy Lower Eyelid",
        percentage: 84,
        pathColor: "#FF4500",
        description:
            "Droopy lower eyelids can lead to puffiness or sagging under the eyes, often due to fatigue or aging.",
        image: "/Image/Image-3.png",
    },
    {
        label: "Skin Firmness",
        percentage: 84,
        pathColor: "#808080",
        description:
            "Skin firmness refers to the elasticity and tightness of the skin, which decreases with age.",
        image: "/Image/Image-2.png",
    },
    {
        label: "Dark Circles",
        percentage: 84,
        pathColor: "#FF00FF",
        description:
            "Dark circles are dark blemishes around the eyes caused by various factors such as fatigue, aging, or genetics.",
        image: "/Image/Image-3.png",
    },
    {
        label: "Eyebag",
        percentage: 84,
        pathColor: "#FFA500",
        description:
            "Eyebags are puffy or swollen areas under the eyes, often caused by lack of sleep or fluid retention.",
        image: "/Image/Image-2.png",
    },
];

const SkinArea = () => {
    const [activeSpot, setActiveSpot] = useState(skinData[0]);
    const [hoveredColor, setHoveredColor] = useState(null);
    const handleHover = (spot, index) => {
        setActiveSpot(spot);
        setHoveredColor(index);
    };

    const handleMouseLeave = () => {
        setHoveredColor(null);
    };

    return (
        <div className="bg-gray grid grid-cols-2 rounded-2xl pl-2 overflow-hidden">
            <div
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
            >
                <div className="w-full grid grid-cols-7 gap-y-6 pt-10">
                    {skinData.map((spot, index) => (
                        <div
                            onMouseEnter={() => handleHover(spot, index)}
                            onMouseLeave={handleMouseLeave}
                            key={index}
                            className="cursor-pointer flex flex-col gap-1 items-center justify-center"
                        >
                            <div
                                className={
                                    "w-16  rounded-full h-16 text-center justify-center items-center flex font-semibold"
                                }
                                style={{
                                    backgroundColor:
                                        hoveredColor === index
                                            ? spot.pathColor
                                            : "transparent",
                                    transition: "background-color 0.3s ease",
                                }}
                            >
                                <CircularProgressbar
                                    value={spot.percentage}
                                    text={`${spot.percentage}`}
                                    styles={buildStyles({
                                        textSize: "32px",
                                        textColor: "#000",
                                        pathColor: spot.pathColor,
                                        trailColor: "transparent",
                                        strokeLinecap: "round",
                                        backgroundColor: "#000",
                                    })}
                                />
                            </div>
                            <div className="flex-1 text-md font-semibold text-center">
                                <h1 className={""}>{spot.label}</h1>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="h-64 mx-8 pl-24 py-10 pr-12 bg-secondary bg-opacity-40 border-4 border-secondary rounded-xl mt-6 flex flex-col justify-center">
                    <h1 className="text-xl font-semibold pb-2 text-text">
                        {activeSpot.label}
                    </h1>
                    <p className="text-md font-normal pb-2 text-text">
                        {activeSpot.description}
                    </p>
                </div>
            </div>
            <div
                className=" h-[600px] flex justify-center items-end overflow-hidden"
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
            >
                <img
                    className="h-full"
                    src={activeSpot.image}
                    alt="Application Logo"
                />
            </div>
        </div>
    );
};

export default SkinArea;
