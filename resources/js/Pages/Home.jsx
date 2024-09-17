import { Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import BannerHome from "@/Components/BannerHome";
import HeadingBanner from "@/Components/HeadingBanner";
import { CardFeatures, PartnerSlider, Review, SkinArea } from "@/Components";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { PiScanSmileyFill } from "react-icons/pi";
import { PiChartLineFill } from "react-icons/pi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const Home = () => {
    return (
        <GuestLayout>
            <Head title="Home" />
            <div className="flex flex-col lg:flex-row">
                <div
                    className="w-fulll lg:w-1/2 lg:h-[860px] flex relative"
                    data-aos="fade-right"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-center"
                >
                    <BannerHome />
                </div>

                <div
                    className="w-fulll lg:w-1/2 px-4  lg:pr-20 lg:pl-10 py-10 h-full lg:h-[800px] justify-center flex flex-col"
                    data-aos="fade-left"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-center"
                >
                    <HeadingBanner />
                </div>
            </div>
            <div className="px-4 lg:px-20 py-12 flex flex-col items-center">
                <div
                    className="text-center"
                    data-aos="fade-up"
                    data-offset="120"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-center"
                >
                    <h1 className="text-5xl font-bold">
                        <span className="text-secondary">All in one</span>{" "}
                        beauty assistant
                    </h1>
                    <p className="text-xl py-2 font-normal text-text_gray">
                        One stop solution for your face skin problem
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-4 py-6">
                    <div
                        className="feature-card"
                        data-aos="fade-right"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        data-aos-anchor-placement="top-center"
                    >
                        <CardFeatures
                            title={"AI Skin Scanner"}
                            text={
                                "In-depth facial skin scanning feature using AI"
                            }
                            icon={
                                <PiScanSmileyFill color="#27A3AB" size={54} />
                            }
                        />
                    </div>
                    <div
                        className="feature-card"
                        data-aos="fade-right"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        data-aos-anchor-placement="top-center"
                    >
                        <CardFeatures
                            title={"Recommendation"}
                            text={
                                "Recommended products that best suit your facial skin needs"
                            }
                            icon={
                                <RiVerifiedBadgeFill
                                    color="#27A3AB"
                                    size={54}
                                />
                            }
                        />
                    </div>
                    <div
                        className="feature-card"
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        data-aos-anchor-placement="top-center"
                    >
                        <CardFeatures
                            title={"E-Commerce"}
                            text={
                                "Integrated purchase of recommended beauty products"
                            }
                            icon={
                                <MdOutlineShoppingCart
                                    color="#27A3AB"
                                    size={54}
                                />
                            }
                        />
                    </div>
                    <div
                        className="feature-card"
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        data-aos-anchor-placement="top-center"
                    >
                        <CardFeatures
                            title={"Tracking"}
                            text={
                                "Track the progress of their skin condition over time"
                            }
                            icon={<PiChartLineFill color="#27A3AB" size={54} />}
                        />
                    </div>
                </div>
            </div>
            <div className="px-20 py-12 flex flex-col">
                <div className="flex">
                    <div
                        className="w-3/4"
                        data-aos="fade-right"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        data-aos-anchor-placement="top-center"
                    >
                        <h1 className="text-5xl font-bold text-secondary">
                            Easily analyze 14 skin problems{" "}
                        </h1>
                        <h1 className="text-5xl font-bold text-black pt-4">
                            in one scan
                        </h1>
                    </div>
                    <div
                        className="w-1/4 flex justify-center items-center text-end"
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        data-aos-anchor-placement="top-center"
                    >
                        <p className="text-xl font-medium text-text_gray">
                            With its advanced AI skin scanner technology, it
                            swiftly identifies up to 14 skin concerns within 7
                            seconds
                        </p>
                    </div>
                </div>
                <div className="py-10">
                    <SkinArea />
                </div>
                <div className="py-10 mb-10 bg-black rounded-xl text-center overflow-hidden ">
                    <div
                        className="pb-8"
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        data-aos-anchor-placement="top-center"
                    >
                        <h1 className="text-4xl font-bold text-white pb-1">
                            Here our valuable{" "}
                            <span className="text-secondary">partners</span>
                        </h1>
                        <p className="text-sm font-medium text-text_gray">
                            One stop solution for your face skin problem
                        </p>
                    </div>
                    <PartnerSlider />
                </div>
                <div className="py-10 bg-gray rounded-xl overflow-hidden flex px-20">
                    <div
                        className="w-2/5 flex flex-col justify-center"
                        data-aos="fade-right"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        data-aos-anchor-placement="top-center"
                    >
                        <h1 className="text-8xl leading-3 font-bold">"</h1>
                        <h1 className="text-5xl font-bold leading-snug">
                            See what they{" "}
                            <span className="text-secondary">
                                saying about us
                            </span>
                        </h1>
                        <p className="pt-5 text-lg font-medium text-text_gray">
                            We put our customers’ opinions first and do our best
                            for their satisfaction. Go ahead to check some of
                            them!
                        </p>
                    </div>
                    <div className="w-3/5">
                        <Review />
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
};

export default Home;
