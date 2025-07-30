import React from 'react'
import { FaLinkedinIn, FaGoogle, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import {
    FaGraduationCap, FaHeart, FaShoppingCart, FaDumbbell, FaGlobe, FaUserFriends, FaBuilding, FaShuttleVan, FaCoins, FaPlaneDeparture, FaCalendarAlt, FaUtensils,
} from 'react-icons/fa';


export default function ResponsiveDesign() {
    return (
        <>
            <HeroSection />
            <AboutKalathiya />
            <ResponsiveDesignServices />
            <OurExperience />
            <DevelopmentConsultation />
            <CoreServices />
            <Contact />
        </>
    )
}

const HeroSection = () => {
    return (
        <>
            <section id='HeroSection' className=' w-full sm:h-[395px] h-[300px] overflow-hidden  relative '

            >
                <img src='./Assets/Image/about-hero-bg.png ' className='w-full h-full absolute top-0 left-0 ' />
                <div className=' absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 '>
                    <h1 className='xl:text-[60px] md:text-[45px] text-[38px]  text-[#8A49D6] font-bold text-center lg:text-nowrap z-[-1] '>Responsive Web Design Development</h1>
                </div>

                <div className=' absolute bottom-0  left-[50%] -translate-x-1/2 w-[90%] lg:w-[60%] max-w-[920px]  '>
                    <img src='./Assets/Image/kalathiya-about-logo.png' className='w-full' />
                </div>

                <div className='flex flex-col items-center gap-2 absolute right-2 sm:right-[15%] bottom-0'>
                    <div className='w-8 h-8 rounded-full flex items-center justify-center text-white text-[16px]' style={{ background: "linear-gradient( #8A49D6 12.85%, #FFD700 91.13%)" }}><FaFacebook /></div>

                    <div className='w-8 h-8 rounded-full flex items-center justify-center text-[#868686] text-[16px]' style={{ border: "0.4px solid #8A49D6" }} ><FaInstagram /></div>

                    <div className='w-8 h-8 rounded-full flex items-center justify-center text-[#868686] text-[16px]' style={{ border: "0.4px solid #8A49D6" }} ><FaGoogle /></div>

                    <div className='w-8 h-8 rounded-full flex items-center justify-center text-[#868686] text-[16px]' style={{ border: "0.4px solid #8A49D6" }} ><FaLinkedinIn /></div>

                    <div className='w-8 h-8 rounded-full flex items-center justify-center text-[#868686] text-[16px]' style={{ border: "0.4px solid #8A49D6" }} ><FaYoutube /></div>

                    <div className=' w-[0.5px] h-[82px] ' style={{ border: "0.4px solid #8A49D6" }}></div>
                </div>

            </section>

        </>
    )
}

const AboutKalathiya = () => {
    return (
        <section className='w-full py-[80px] px-4'>
            <div className='max-w-[1480px] w-full m-auto flex justify-between items-center lg:flex-nowrap flex-wrap gap-y-[40px]'>

                <div className='lg:w-[47%] xl:w-[55%] w-full'>

                    <p className='text-[#555555] text-[16px] font-[400]  mt-4 mb-6 '>

                        In today's digital landscape, it's essential to prioritize the needs of individuals who have been immersed in the online world since childhood, seamlessly transitioning between web and mobile experiences. Recognizing this, we emphasize responsive web design to cater to this diverse audience. Our team of design specialists is dedicated to tailoring standards to suit any platform or device, ensuring your website or mobile app resonates with a wide-ranging audience.
                        <br /> <br />
                        At  <span className='text-[#8A49D6] font-semibold'>Kalathiya Infotech </span>, we build fast, secure, and fully responsive websites that deliver seamless user experiences across all screen sizes. Whether it’s a smartphone, tablet, laptop, or desktop — your website will look stunning and function flawlessly.
                    </p>
                </div>

                <div className='lg:w-[47%] xl:w-[45%] w-full'>
                    <img src='./Assets/image/responsive-design-img.png' className='w-full object-cover max-w-[462px] m-auto' />
                </div>

            </div>
        </section>
    )
}

const ResponsiveDesignServices = () => {
    const services = [
        "Responsive Web Design Services",
        "Interface Design Services",
        "Feature-Rich And Advanced Web Design",
        "Highly Impressive and Professional Design",
        "Adaptive Web Design",
        "Liquid Web Design",
        "User Interface & Front-end Design",
        "Landing Page Redesign & Optimization"
    ];

    return (
        <section className="w-full py-[80px] px-4">
            <div className="flex items-center justify-center p-4 font-sans">
                <div className="bg-[#8a49d6] rounded-3xl p-4 pt-8 md:p-5 w-full max-w-[1480px] mx-auto">

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-white text-2xl sm:text-3xl md:text-[40px] font-bold mb-5 leading-tight">
                            Web Application Development Services
                        </h1>
                        <p className="text-white text-sm md:text-base">
                            Innovative Responsive Web Design Alongside Unrivaled Expertise
                        </p>
                    </div>

                    {/* White card */}
                    <div className=" pt-[50px] sm:px-[70px] px-3 pb-[80px] bg-white shadow-[inset_0px_0px_9px_0px_rgba(138,73,214,1)] rounded-[30px]">
                        {/* Logo */}
                        <div className="flex items-center justify-center bg-gradient-to-r from-white via-[#F0E3FF] to-white mb-6 h-[60px] sm:h-[70px] rounded-xl">
                            <img
                                src="./Assets/Image/kalathiya-main-logo.png"
                                alt="Company Logo"
                                className="object-contain h-[40px] sm:h-[50px] w-[160px] sm:w-[193px]"
                            />
                        </div>

                        {/* Services Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className={`
                                        flex items-center gap-4 px-4 py-6 sm:px-6 sm:py-8 
                                        border-b border-gray-200
                                        ${index % 4 !== 3 ? 'lg:border-r' : ''}
                                    `}
                                >
                                    <div className="text-purple-600 text-[36px] sm:text-[48px] font-semibold leading-none">
                                        {index + 1}
                                    </div>
                                    <p className="text-purple-700 text-sm sm:text-base md:text-[17px] leading-snug">
                                        {service}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};


const OurExperience = () => {

    return (
        <section className='w-full py-[80px] relative px-4 lg:px-0  flex items-center gap-14 lg:flex-row flex-col-reverse '>

            <div className="absolute lg:block hidden right-0 h-[65%] max-w-[1073px] w-[75%] bg-[#f0e3ff]  rounded-s-[30px] z-[-1]"></div>

            <div className='max-w-[1073px] lg:w-[75%] w-full bg-white  lg:shadow-[-10px_11px_18px_0px_rgba(0,0,0,0.06)] z-10 rounded-e-[30px] flex justify-end py-9 lg:px-14 '  >
                <div className='max-w-[800px] w-full '>
                    <h2 className='sm:text-[60px] text-[35px] font-bold text-black lg:absolute top-0 lg:mb-0 mb-3 '>Our Experience</h2>
                    <h3 className='sm:text-[40px] text-[25px] font-bold text-black max-w-[746px]'> <span className='text-[#8A49D6]'>Create Impact</span> With Every Touch Point Of Users On Any Device</h3>
                    <p className='text-[16px] text-[#555555] font-[400] mt-2'>
                        Make every interaction count across all user touchpoints, regardless of the device they use. With the shift towards mobile, ensuring websites are responsive has become paramount. At Kalathiya Infotech, our expertise in web development spans the transition from desktop to mobile to Progressive Web Apps (PWA). This journey equips us with unparalleled mastery in crafting responsive and mobile-friendly designs, ensuring seamless experiences for users on any device.
                        <br /> <br />
                        <span className='text-[#8A49D6] font-bold'>Kalathiya Infotech </span> is one of the leading web design companies with expertise and experience across all facets of web user experience and many design trends and protocols that have evolved over the years. We are one of the early adopters of responsive web design and have already designed and built countless successful websites with responsive design elements.
                    </p>
                </div>
            </div>

            <div className='lg:pe-4'>
                <img src={'./Assets/Image/ai-shadow-img.png'} className='z-10' />
            </div>

        </section>
    )
}

const DevelopmentConsultation = () => {
    return (
        <section className='w-full px-4 py-[80px] text-center'>
            <h4 className='text-[26px] text-[#8A49D6] font-bold'>Get a Free Mobile App Development consultation</h4>
            <h2 className='md:text-[60px] text-[40px] text-black font-bold mt-2'>with our experts today!</h2>
            <button className='py-2 px-[40px] rounded-full bg-[#8A49D6] text-white mt-5'>Contact Us</button>
        </section>
    )
}

const CoreServices = () => {
    const services = [
        { label: 'Education', icon: <FaGraduationCap /> },
        { label: 'Health Care', icon: <FaHeart /> },
        { label: 'E-commerce', icon: <FaShoppingCart /> },
        { label: 'Fitness', icon: <FaDumbbell /> },
        { label: 'Social Network', icon: <FaGlobe /> },
        { label: 'Lifestyle', icon: <FaUserFriends /> },
        { label: 'Real Estate', icon: <FaBuilding /> },
        { label: 'Transportation', icon: <FaShuttleVan /> },
        { label: 'Finance', icon: <FaCoins /> },
        { label: 'Travel', icon: <FaPlaneDeparture /> },
        { label: 'Event Management', icon: <FaCalendarAlt /> },
        { label: 'Food & Drink', icon: <FaUtensils /> },
    ];

    return (
        <section className="bg-[#F2E6FF] py-12 px-4">
            <div className="max-w-[1200px] mx-auto text-center">
                <h2 className="text-3xl font-bold mb-10">Our Core Services</h2>

                <div className="flex flex-col gap-8">

                    <div className="hidden lg:flex flex-col gap-8 items-center">

                        <div className="flex justify-center gap-0">
                            {services.slice(0, 5).map((service, i) => (
                                <div className="flex items-center" key={i}>
                                    <ServiceCard {...service} />
                                    {i !== 4 && <Divider />}
                                </div>
                            ))}
                        </div>


                        <div className="flex justify-center gap-0">
                            {services.slice(5, 9).map((service, i) => (
                                <div className="flex items-center" key={i}>
                                    <ServiceCard {...service} />
                                    {i !== 3 && <Divider />}
                                </div>
                            ))}
                        </div>


                        <div className="flex justify-center gap-0">
                            {services.slice(9, 12).map((service, i) => (
                                <div className="flex items-center" key={i}>
                                    <ServiceCard {...service} />
                                    {i !== 2 && <Divider />}
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-y-10 gap-x-6 lg:hidden">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const ServiceCard = ({ icon, label }) => (
    <div className="flex flex-col items-center gap-2 px-4">
        <div className="text-purple-600 text-[50px]">{icon}</div>
        <p className="text-[22px] font-semibold text-black text-center">{label}</p>
    </div>
);

const Divider = () => (
    <div className="h-[80px] w-[1px] bg-black mx-4 opacity-30" />
);


const Contact = () => {
    return (
        <section className='w-full sm:px-4 px-2 py-[80px]'>

            <div className="flex flex-col lg:flex-row  rounded-2xl overflow-hidden max-w-[1230px] mx-auto" style={{ boxShadow: "0px 4px 9px 0px #8A49D6" }}>



                <div className="lg:w-1/2 w-full bg-white sm:p-8 p-4 flex flex-col justify-between">
                    <div>
                        <h2 className="text-[24px] font-bold text-[#8A49D6] mb-2">Let’s get in touch</h2>
                        <p className="text-[18px] font-[400] mb-6">Ready to start a project ?</p>


                        <div className="mb-6 max-w-[410px]">
                            <h3 className="font-bold text-[24px] flex items-baseline gap-4">
                                <img src='./Assets/Image/india-purpel.svg' /> India
                            </h3>
                            <div className='flex gap-2  items-center my-[15px]'>
                                <a className='w-[31px] h-[31px] rounded-full bg-[#8A49D6] flex items-center justify-center text-white text-[16px]'><MdCall /></a>
                                <p className='text-black text-[16px] font-[400]'>+0261 3102715</p>
                            </div>
                            <div className='flex gap-2  flex-col'>
                                <a
                                    href="https://maps.app.goo.gl/faH8vdvaTZ14pHHL8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black text-[16px] font-[400] leading-7 xl:max-w-[372px]"
                                >
                                    102-103 Silver Point, Jivanjyot Circle, Nr Yogi chowk Road, Surat -395010 (Head Office)
                                </a>

                                <div className='xl:max-w-[150px] w-full opacity-[50%] h-[0.5px] bg-[#555555] ' ></div>

                                <a
                                    href="https://maps.app.goo.gl/Cj5mC6dC8XqVfYgbA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='text-black text-[16px] font-[400] leading-7 '
                                >
                                    402 - 405 Astha Shoppers NearBy BhagvanMahavir Collage, Vesu, Surat -395007   (Branch)
                                </a>
                            </div>
                        </div>


                        <div className="mb-6 max-w-[350px]">
                            <h3 className="font-bold text-[24px] flex items-baseline gap-4">
                                <img src='./Assets/Image/canada-purpel.svg' /> Canada
                            </h3>
                            <div className='flex gap-2  items-center my-[15px]'>
                                <a className='w-[31px] h-[31px] rounded-full bg-[#8A49D6] flex items-center justify-center text-white text-[16px]'><MdCall /></a>
                                <p className='text-black text-[16px] font-[400]'>+0261 3102715</p>
                            </div>

                            <p className="text-sm mt-2">
                                855 King Street East, Unit 210 Cambridge, ON, Canada (Branch)
                            </p>
                        </div>


                        <div className='flex gap-2  items-center  mt-4'>
                            <a className='w-[31px] h-[31px] rounded-full flex-shrink-0 bg-[#8A49D6] flex items-center justify-center text-white text-[16px]'><MdEmail /></a>
                            <p className='text-black text-[16px] font-[400] '>Info@kalathiyainfotech.com</p>
                        </div>
                    </div>


                    <div className='flex  items-center gap-[18px] mt-[100px] lg:justify-start justify-center'>
                        <a className='w-8 h-8 rounded-full bg-[#8A49D6] flex items-center justify-center text-white text-[16px]'><FaFacebook /></a>
                        <a className='w-8 h-8 rounded-full bg-[#8A49D6] flex items-center justify-center text-white text-[16px]'><FaInstagram /></a>
                        <a className='w-8 h-8 rounded-full bg-[#8A49D6] flex items-center justify-center text-white text-[16px]'><FaGoogle /></a>
                        <a className='w-8 h-8 rounded-full bg-[#8A49D6] flex items-center justify-center text-white text-[16px]'><FaLinkedinIn /></a>
                        <a className='w-8 h-8 rounded-full bg-[#8A49D6] flex items-center justify-center text-white text-[16px]'><FaYoutube /></a>
                    </div>
                </div>


                <div className="lg:w-1/2 w-full bg-[#8A49D6] text-white lg:p-8 p-4">
                    <h2 className="text-[26px] font-bold mb-6">Contact us</h2>
                    <form className="flex flex-col gap-4">
                        <input type="text" placeholder="Name" className="rounded-[100px] px-5 py-3 bg-transparent border border-white placeholder-white focus:outline-none" />
                        <input type="email" placeholder="Email" className="rounded-[100px] px-5 py-3 bg-transparent border border-white placeholder-white focus:outline-none" />
                        <input type="tel" placeholder="Mobile Number" className="rounded-[100px] px-5 py-3 bg-transparent border border-white placeholder-white focus:outline-none" />
                        <input type="text" placeholder="Subject" className="rounded-[100px] px-5 py-3 bg-transparent border border-white placeholder-white focus:outline-none" />
                        <textarea placeholder="Message" rows={6} className="rounded-[30px] px-6 py-3 bg-transparent border border-white placeholder-[#FFFFFF99] focus:outline-none resize-none" />


                        <div className="bg-white w-fit px-2 py-2 rounded shadow">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" />
                                <span className="text-black text-sm">I'm not a robot</span>
                            </label>
                        </div>



                        <button type="submit" className="bg-white text-[#8A49D6] w-fit font-semibold py-2 px-[40px] rounded-[100px] mt-2 hover:bg-gray-200 transition">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}