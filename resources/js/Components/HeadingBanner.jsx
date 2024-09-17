const HeadingBanner = () => {
    return (
        <>
            <h1 className="text-5xl md:text-7xl font-bold text-text">
                Parasly
            </h1>
            <h1 className="text-lg md:text-2xl font-medium text-text_gray mt-5 mb-10">
                An innovative startup in the beauty sector that uses AI
                technology to analyze facial skin problems.
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-secondary rounded-xl text-center py-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-accent">
                        1590
                    </h1>
                    <h1 className="text-sm md:text-lg font-medium text-primary">
                        time accessed
                    </h1>
                </div>
                <div className="bg-secondary rounded-xl text-center py-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-accent">
                        1444
                    </h1>
                    <h1 className="text-sm md:text-lg font-medium text-primary">
                        times have scanned the face
                    </h1>
                </div>
            </div>
            <div>
                <button className="bg-accent px-4 md:px-8 py-2 md:py-4 rounded-full mt-8 md:mt-16">
                    <h1 className="text-lg md:text-xl font-bold text-text">
                        START FREE TRIAL
                    </h1>
                </button>
            </div>
        </>
    );
};
export default HeadingBanner;
