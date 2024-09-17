import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const HealthyBar = ({
    percentage,
    label,
    pathColor,
    onMouseEnter,
    className,
    textColor,
    circle,
}) => {
    return (
        <div className="flex flex-col gap-1 items-center justify-center">
            <div
                className={
                    " text-center justify-center items-center flex font-semibold" +
                    circle
                }
                onMouseEnter={onMouseEnter}
            >
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}`}
                    styles={buildStyles({
                        textSize: "32px",
                        pathColor,
                        textColor,
                        trailColor: "transparent",
                        strokeLinecap: "round",
                        backgroundColor: "#000",
                    })}
                />
            </div>
            <div className="flex-1">
                <h1 className={className}>{label}</h1>
            </div>
        </div>
    );
};

export default HealthyBar;
