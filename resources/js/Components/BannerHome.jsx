import HealthyBar from "@/Components/HealthyBar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const dataProgress = [
    { label: "Spots", percentage: 82, pathColor: "#FF0000" },
    { label: "Wrinkle", percentage: 74, pathColor: "#00FF84" },
    { label: "Texture", percentage: 84, pathColor: "#FF00FF" },
    { label: "Moisture", percentage: 94, pathColor: "#4B0082" },
    { label: "Redness", percentage: 74, pathColor: "#0000FF" },
    { label: "Oiliness", percentage: 87, pathColor: "#00FF84" },
    { label: "Acne", percentage: 84, pathColor: "#00FF00" },
    { label: "Radiance", percentage: 68, pathColor: "#FF8800" },
    { label: "Visible Pores", percentage: 81, pathColor: "#00CFFF" },
    { label: "Droopy Upper Eyelid", percentage: 72, pathColor: "#FF3300" },
    { label: "Droopy Lower Eyelid", percentage: 66, pathColor: "#FF8800" },
    { label: "Skin Firmness", percentage: 83, pathColor: "#8B4513" },
    { label: "Dark Circles", percentage: 81, pathColor: "#9400D3" },
    { label: "Eyebag", percentage: 84, pathColor: "#FF0000" },
];

// Menghitung rata-rata
const averagePercentage =
    dataProgress.reduce((sum, item) => sum + item.percentage, 0) /
    dataProgress.length;

// Membulatkan hasil rata-rata ke bilangan bulat terdekat
const roundedAverage = Math.round(averagePercentage);

const BannerHome = () => {
    return (
        <>
            <div className="absolute inset-0 bg-ring flex-1 z-0 lg:bg-cover bg-center lg:rounded-br-3xl"></div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex-1 z-10 lg:rounded-br-3xl "></div>

            {/* Content */}
            <div className="relative z-20 flex-1 p-4 flex items-end px-4 md:px-10 justify-center">
                <div className="w-full flex flex-col md:flex-row">
                    <div className="flex flex-col justify-center items-center text-2xl text-white font-bold mb-4 md:mb-0">
                        <h1>Skin Health</h1>
                        <h1 className="py-1">{roundedAverage}</h1>
                        <h1 className="bg-green px-4 py-2 rounded-full">
                            Healthy
                        </h1>
                    </div>

                    <div className="flex-1 flex flex-col gap-2">
                        {/* Grid yang responsif */}
                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-y-4">
                            {dataProgress.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col gap-1 items-center justify-center"
                                >
                                    <div
                                        className={
                                            "w-14 h-14 text-center justify-center items-center flex font-semibold"
                                        }
                                    >
                                        <CircularProgressbar
                                            value={item.percentage}
                                            text={`${item.percentage}`}
                                            styles={buildStyles({
                                                textSize: "32px",
                                                pathColor: item.pathColor,
                                                textColor: "#ffffff",
                                                trailColor: "transparent",
                                                strokeLinecap: "round",
                                            })}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h1
                                            className={
                                                "font-semibold text-sm text-white text-center"
                                            }
                                        >
                                            {item.label}
                                        </h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerHome;
