const CardFeatures = ({ data_aos, icon, text, title }) => {
    return (
        <>
            <div
                className="px-12 p-20 bg-white shadow-lg rounded-xl transition duration-300 ease-in-out"
                data-aos={data_aos}
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
            >
                <div className="flex">
                    <div className="p-2 bg-gray bg-opacity-30 rounded-lg hover:bg">
                        {icon} {/* Ini adalah tempat icon ditampilkan */}
                    </div>
                </div>
                <h1 className="border-l-2 border-secondary mt-8 pl-2 text-xl font-bold text-black">
                    {title}
                </h1>
                <p className="text-lg text-text_gray pt-5 mb-10">{text}</p>
            </div>
        </>
    );
};

export default CardFeatures;
