import React, { Component } from "react";
import Slider from "react-slick";

const testimonials = [
    {
        name: "Angelina",
        role: "Student",
        testimonial:
            "We put our customers' opinions first and do our best for their satisfaction. Go ahead to check some of them!",
    },
    {
        name: "John Doe",
        role: "Designer",
        testimonial:
            "This platform exceeded my expectations. The service is outstanding!",
    },
    {
        name: "Jane Smith",
        role: "Entrepreneur",
        testimonial: "Highly recommend! Great support and features.",
    },
    {
        name: "aa ww",
        role: "Entrepreneur",
        testimonial: "Highly recommend! Great support and features.",
    },
    {
        name: "vvv ww",
        role: "Entrepreneur",
        testimonial: "Highly recommend! Great support and features.",
    },
];

function PauseOnHover() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };
    return (
        <div
            className="slider-container"
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
        >
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className=" p-2">
                        <div className="bg-black w-full h-96 flex flex-col border-2 rounded-2xl py-8 ">
                            <div className="bg-gray-200 rounded-full flex mb-4 px-8 gap-4">
                                <span className="text-gray-500 text-3xl font-bold w-12 h-12 bg-white rounded-full text-center flex justify-center items-center">
                                    {testimonial.name[0]}
                                </span>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-md font-semibold text-text_gray">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                            <p className="mt-4 text-white px-4">
                                {testimonial.testimonial}
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default PauseOnHover;
