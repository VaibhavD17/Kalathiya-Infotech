import React, { useState } from "react";
import { ArrowRight, ArrowLeft } from 'lucide-react';

const reactIcon = "./Assets/Image/react-icon.png";
const laravelIcon = "./Assets/Image/laravel-icon.png";
const codeigniterIcon = "./Assets/Image/codeigniter-icon.png";
const phpIcon = "./Assets/Image/php-icon.png";
const flutterIcon = "./Assets/Image/flutter-icon.png";

const jionhappy1 = "./Assets/Image/jion-happy1.png"
const jionhappy2 = "./Assets/Image/jion-happy2.png"
const jionhappy3 = "./Assets/Image/jion-happy3.png"
const jionhappy4 = "./Assets/Image/jion-happy4.png"

function JoinOurFamily() {
    const steps = [
        { label: "React.js & Node.js", icon: reactIcon },
        { label: "Laravel & Vue.JS", icon: laravelIcon },
        { label: "Codeigniter & Laravel", icon: codeigniterIcon },
        { label: "PHP Team Leader", icon: phpIcon },
        { label: "Flutter Developer", icon: flutterIcon },
    ];

    const jobSlides = [
        {
            title: "React.js & Node.js",
            skills: [
                "React.js & Node.js both technologies knowledge required.",
                "Min. 1 year of experience",
                "Communication Skills must.",
                "Min. Bachelor Degree (Computer Field)",
            ],
            salary: "As per industry standards",
            hours: "9:00 a.m. to 6:30 p.m. (Monday-Friday)",
        },
        {
            title: "Laravel & Vue.JS",
            skills: [
                "Laravel & Vue.JS experience required.",
                "1+ year building cross-platform apps",
                "Communication Skills must",
                "Bachelor Degree preferred",
            ],
            salary: "As per skills and experience",
            hours: "9:30 a.m. to 6:30 p.m.",
        },
        {
            title: "Codeigniter & Laravel",
            skills: [
                "Codeigniter & Laravel experience required.",
                "1+ year experience",
                "Communication Skills must",
                "Bachelor Degree preferred",
            ],
            salary: "As per skills and experience",
            hours: "9:30 a.m. to 6:30 p.m.",
        },
        {
            title: "PHP Team Leader",
            skills: [
                "Leadership & PHP experience required.",
                "1+ year experience",
                "Communication Skills must",
                "Bachelor Degree preferred",
            ],
            salary: "As per skills and experience",
            hours: "9:30 a.m. to 6:30 p.m.",
        },
        {
            title: "Flutter Developer",
            skills: [
                "Flutter development experience required.",
                "1+ year experience",
                "Communication Skills must",
                "Bachelor Degree preferred",
            ],
            salary: "As per skills and experience",
            hours: "9:30 a.m. to 6:30 p.m.",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
        if (currentSlide < jobSlides.length - 1) setCurrentSlide(currentSlide + 1);
    };

    const handlePrev = () => {
        if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
    };

    return (
        <>
            <section className=" py-12 px-4  text-center  ">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 md:mb-12">
                    LET'S JOIN OUR <span className='text-[#8a49d6]'>FAMILY</span>
                </h1>

                <div className="flex flex-col items-center justify-center mx-auto w-full max-w-[1488px] " >

                    {/* Step icons */}
                    <div className="relative w-full lg:px-4 py-6">
                        {/* Line shown only when in one row */}
                        <div className="hidden sm:block absolute lg:top-[40%] sm:top-[35%] left-[10%] right-[10%] h-[8px] bg-[#8a49d6] z-0" />

                        <div className="flex flex-wrap sm:flex-nowrap gap-4 sm:gap-0 justify-center w-full relative z-10 overflow-x-auto scrollbar-hide">
                            {steps.map((step, index) => (
                                <div key={index} className="flex flex-col items-center min-w-[120px] sm:w-1/5">
                                    <div
                                        className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full border-2 transition ${index === currentSlide
                                            ? "bg-[#8a49d6] shadow-lg"
                                            : "bg-white"
                                            } border-[#8a49d6]`}
                                    >
                                        <img src={step.icon} alt={step.label} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                                    </div>
                                    <p className="mt-2 text-sm sm:text-base font-semibold text-black text-center">
                                        {step.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* Slider */}
                    <div className="relative w-full overflow-hidden mb-16 mt-4">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                width: `${jobSlides.length * 100}%`,
                                transform: `translateX(-${currentSlide * (100 / jobSlides.length)}%)`,
                            }}
                        >
                            {jobSlides.map((slide, index) => (
                                <div
                                    key={index}
                                    className="w-full flex-shrink-0 px-2 sm:px-4"
                                    style={{ width: `${100 / jobSlides.length}%` }}
                                >
                                    <div className="bg-purple-50 bg-opacity-80 rounded-xl overflow-hidden w-full">
                                        <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white bg-[#8a49d6] py-4 text-center w-full rounded-t-xl">
                                            {slide.title}
                                        </h2>

                                        <div className="text-center px-4 sm:px-6 md:px-10 py-6 bg-[#f0e3ff] space-y-6">
                                            <div>
                                                <h3 className="text-base sm:text-xl md:text-2xl font-bold text-black mb-2">
                                                    Required skills:
                                                </h3>
                                                <ul className="space-y-2 text-sm sm:text-base md:text-lg font-semibold text-black">
                                                    {slide.skills.map((skill, idx) => (
                                                        <li key={idx} className="flex justify-center">
                                                            <span className="mr-2">&bull;</span>
                                                            {skill}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div>
                                                <h3 className="text-base sm:text-xl md:text-2xl font-bold text-black mb-2">Salary:</h3>
                                                <p className="text-sm sm:text-base md:text-lg font-semibold text-black">
                                                    {slide.salary}
                                                </p>
                                            </div>

                                            <div>
                                                <h3 className="text-base sm:text-xl md:text-2xl font-bold text-black mb-2">
                                                    Working Hours:
                                                </h3>
                                                <p className="text-sm sm:text-base md:text-lg font-semibold text-black">
                                                    {slide.hours}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Arrows */}

                        {currentSlide > 0 && (
                            <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 sm:block hidden">
                                <button
                                    onClick={handlePrev}
                                    className="p-2 sm:p-3 rounded-full bg-[#8a49d6] text-white shadow-md hover:bg-purple-800 transition"
                                >
                                    <ArrowLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                                </button>
                            </div>
                        )}

                        {currentSlide < jobSlides.length - 1 && (
                            <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 sm:block hidden">
                                <button
                                    onClick={handleNext}
                                    className="p-2 sm:p-3 rounded-full bg-[#8a49d6] text-white shadow-md hover:bg-purple-800 transition"
                                >
                                    <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8" />
                                </button>
                            </div>
                        )}

                        <div className="flex justify-between items-center mt-2 px-6 sm:px-10 sm:hidden">
                            <button
                                onClick={handlePrev}
                                disabled={currentSlide === 0}
                                className={`p-2 rounded-full ${currentSlide === 0 ? "bg-gray-300" : "bg-[#8a49d6] text-white hover:bg-purple-800"} transition`}
                            >
                                <ArrowLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                            </button>

                            <button
                                onClick={handleNext}
                                disabled={currentSlide === jobSlides.length - 1}
                                className={`p-2 rounded-full ${currentSlide === jobSlides.length - 1 ? "bg-gray-300" : "bg-[#8a49d6] text-white hover:bg-purple-800"} transition`}
                            >
                                <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full px-4 pb-[80px]">
                <div className="w-full max-w-[1480px] mx-auto" >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-[30px] sm:gap-4 md:gap-5 w-full">

                        <div className="flex flex-col items-center justify-center bg-white bg-opacity-80 rounded-xl p-2 sm:p-4 shadow-[0_4px_9px_0_rgba(138,73,214,1)] text-center flex-1 h-[175px]   transition ease-in-out duration-500 hover:scale-105 ">

                            <div className="flex items-center justify-center mb-3">

                                <div className=" mr-3">

                                    <img src={jionhappy1} />
                                </div>
                                <div className="text-left">
                                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight text-center">
                                        400+ Happy Clint
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-col items-center justify-center bg-white bg-opacity-80 rounded-xl p-2 sm:p-4 shadow-[0_4px_9px_0_rgba(138,73,214,1)] text-center flex-1 h-[175px]  transition ease-in-out duration-500 hover:scale-105 ">

                            <div className="flex items-center justify-center mb-3">

                                <div className="flex-shrink-0 mr-3">

                                    <img src={jionhappy2} />
                                </div>
                                <div className="text-left">
                                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight text-center">
                                       600+ PROJECT COMPLETED
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center bg-white bg-opacity-80 rounded-xl p-2 sm:p-4 shadow-[0_4px_9px_0_rgba(138,73,214,1)] text-center flex-1 h-[175px]  transition ease-in-out duration-500 hover:scale-105 ">

                            <div className="flex items-center justify-center mb-3">

                                <div className="flex-shrink-0 mr-3">

                                    <img src={jionhappy3} />
                                </div>
                                <div className="text-left">
                                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight text-center">
                                        7+ EXPERIENCE
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center bg-white bg-opacity-80 rounded-xl p-2 sm:p-4 shadow-[0_4px_9px_0_rgba(138,73,214,1)] text-center flex-1 h-[175px]  transition ease-in-out duration-500 hover:scale-105 ">

                            <div className="flex items-center justify-center mb-3">

                                <div className="flex-shrink-0 mr-3">

                                    <img src={jionhappy4} />
                                </div>
                                <div className="text-left">
                                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight text-center">
                                        30+ DEVELOPERS
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </section>
        </>
    );
}

export default JoinOurFamily;
