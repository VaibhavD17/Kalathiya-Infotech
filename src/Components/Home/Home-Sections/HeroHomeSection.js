import React from "react";
import { NavLink } from "react-router-dom";

const heroImg1 = "./Assets/Image/heroImg1.png"
const heroImg2 = "./Assets/Image/heroImg2.png"
const heroImg3 = "./Assets/Image/heroImg3.png"
const layer1 = "./Assets/Image/layer1.png"
const layer2 = "./Assets/Image/layer2.png"
const middle = "./Assets/Image/middle.png"
 
function HeroHome() {
    return (
        <section className="relative bg-[linear-gradient(104.12deg,_#AE51EC_16.15%,_rgba(28,16,184,0.8)_99.41%)] text-white py-10 overflow-hidden h-[56vh] sm:h-[65vh] md:h-[100vh]">
            <div className="container mx-auto text-center px-4 mt-16 sm:mt-24 md:mt-32 lg:mt-36 xl:mt-48 2xl:mt-56">
 
                <div className="mb-4 sm:mb-6">
                    <img
                        src={middle}
                        alt="Center Illustration"
                        className="absolute top-8 sm:top-12 md:top-16 lg:top-20 xl:top-24 left-1/2 transform -translate-x-1/2 w-14 sm:w-20 md:w-24 lg:w-28 xl:w-32 animate-float"
                    />
                </div>
 
                <h1 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">
                    Empowers Businesses <br className="hidden sm:block" />with <br />
                </h1>
                <h1 className="block text-2xl  sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] 2xl:text-[4rem] font-bold mb-4 sm:mb-6 !leading-tight tracking-wide">
                    Cutting-Edge Solutions for <br className="hidden sm:block" /> Digital Success
                </h1>
 
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto mb-6 sm:mb-8 px-2 sm:px-0">
                    At Kalathiya Infotech, we are passionate about helping businesses thrive
                    in the digital landscape. With our comprehensive range of services,
                    cutting-edge technologies, and a team of skilled experts{" "}
                    <span className="font-semibold">Read More .....</span>
                </p>
 
                <NavLink to={"contact"} className="bg-white w-fit relative px-12 sm:px-16 sm:pr-24 py-2 rounded-lg font-bold shadow-md hover:bg-gray-100 transition duration-300 flex items-center justify-center mx-auto">
                    <span className="
                bg-[linear-gradient(104.12deg,_#AE51EC_16.15%,_rgba(28,16,184,0.8)_99.41%)]
                bg-clip-text
                text-transparent
                text-sm sm:text-base
            ">
                        GET IN TOUCH
                    </span>
                    <span className="absolute ml-2 text-white text-base sm:text-lg right-4 sm:right-6 w-6 h-6 sm:w-7 sm:h-7 font-light bg-[#6230d0] items-center justify-center flex rounded-full">➔</span>
                </NavLink>
            </div>
 
            <img
                src={heroImg1}
                alt="Left Illustration"
                className="absolute top-[8%] sm:top-[10%] md:top-[11%] lg:top-[12%] xl:top-[13%] left-[3%] sm:left-[8%] md:left-[12%] lg:left-[10%] xl:left-[12%] w-16 sm:w-24 md:w-40 lg:w-48 xl:w-56 animate-bounce2s"
            />
            <img
                src={heroImg2}
                alt="Right Illustration"
                className="absolute top-[8%] sm:top-[10%] md:top-[11%] lg:top-[12%] xl:top-[13%] right-[3%] sm:right-[12%] md:right-[18%] lg:right-[15%] xl:right-[18%] w-16 sm:w-24 md:w-40 lg:w-48 xl:w-56 animate-bounce2s"
            />
            <img
                src={heroImg3}
                alt="Bottom Illustration"
                className="absolute bottom-[12%] sm:bottom-[16%] md:bottom-[19%] lg:bottom-[20%] xl:bottom-[18%] right-[3%] sm:right-[6%] md:right-[8%] lg:right-[6%] xl:right-[8%] w-20 sm:w-28 md:w-48 lg:w-56 xl:w-64 animate-bounce2s"
            />
 
            <img
                src={'./Assets/Image/bot-icon.png'}
                alt="Bot Icon"
                className="absolute bottom-[12%] sm:bottom-[16%] md:bottom-[19%] lg:bottom-[20%] xl:bottom-[18%] left-[3%] sm:left-[12%] md:left-[18%] lg:left-[15%] xl:left-[18%] w-10 sm:w-14 md:w-24 lg:w-28 xl:w-32 animate-bounce2s"
            />
 
            <div className="absolute bottom-0 left-0 w-full">
                <img src={layer2} alt="Wave Layer 2" className="w-full" />
            </div>
            <div className="absolute bottom-0 left-0 w-full">
                <img src={layer1} alt="Wave Layer 1" className="w-full" />
            </div>
        </section>
    );
}
 
export default HeroHome;
 