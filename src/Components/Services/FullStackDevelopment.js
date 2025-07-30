import React from 'react'
import { FaLinkedinIn, FaGoogle, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import {
    FaGraduationCap, FaHeart, FaShoppingCart, FaDumbbell, FaGlobe, FaUserFriends, FaBuilding, FaShuttleVan, FaCoins, FaPlaneDeparture, FaCalendarAlt, FaUtensils,
} from 'react-icons/fa';


export default function FullStackDevelopment() {
    return (
        <>
            <HeroSection />
            <AboutKalathiya />
            <DevelopmentServices />
            <FeaturesOfDevelopment />
            <DevelopmentProcess />
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
                    <h1 className='xl:text-[60px] md:text-[45px] text-[38px]  text-[#8A49D6] font-bold text-center lg:text-nowrap z-[-1] '>Full Stack Development</h1>
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
                <div className='lg:w-[47%] xl:w-[45%] w-full'>
                    <img src='./Assets/image/fullstack-img.png' className='w-full object-cover max-w-[462px] m-auto' />
                </div>

                <div className='lg:w-[47%] xl:w-[55%] w-full'>

                    <p className='text-[#555555] text-[16px] font-[400]  mt-4 mb-6 '>
                        A Full Stack Developer possesses the skills and expertise to handle various layers of the development process, from crafting user interfaces to managing databases and server-side logic.The term "stack" refers to the combination of technologies and tools used to build a web application.
                        <br /> <br />
                        Our team of skilled developers excels in utilizing a wide array of programming languages, frameworks, and technologies to build comprehensive web applications from scratch. From crafting sleek and intuitive user interfaces to implementing robust server-side logic and database management systems, we have the expertise to handle every aspect of the development process seamlessly. With a focus on efficiency, scalability, and performance, we ensure that our full-stack solutions not only meet but exceed the expectations of our clients.
                    </p>


                </div>


            </div>
        </section>
    )
}

const DevelopmentServices = () => {
    return (
        <section className=" w-full " style={{ backgroundImage: `url(./Assets/Image/curve-bg-big.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="max-w-[1480px] w-full mx-auto px-4 py-[100px]" >
                <div className='max-w-[1260px]'>
                    <h2 className="text-[24px]  font-bold  mb-4">
                        WEB APPLICATION DEVELOPMENT SERVICES
                    </h2>
                    <p className=" text-[#555555]  mb-10">
                        <span className='text-[#8A49D6] font-[700]'>Kalathiya Infotech</span> LLP is a renowned website development service company catering to various industries with our bespoke website development services.
                    </p>
                </div>

                <div className='flex flex-wrap justify-between gap-y-[40px]'>

                    <div className='p-6 rounded-[30px] lg:w-[31%] md:w-[47%]  transition ease-in-out duration-500 hover:scale-105 ' style={{ boxShadow: '0px 4px 9px 0px #8A49D6' }}>
                        <div className='flex items-start justify-between'>
                            <img src='./Assets/image/custom-icon.svg' className=' object-cover ' />
                            <div className='w-[50px] h-[50px] flex-shrink-0 rounded-full flex items-center justify-center bg-[#F0E3FF] text-black text-[35px] font-[500]'><GoArrowUpRight /></div>
                        </div>
                        <h3 className='text-[24px] font-[700] text-black mt-6 mb-4'>Custom Web Development</h3>
                        <p className=" text-gray-600  mx-auto ">
                            Full Stack involves the creation of tailor-made web applications that meet the unique requirements and objectives of businesses or individuals.
                        </p>
                    </div>
                    <div className='p-6 rounded-[30px] lg:w-[31%] md:w-[47%]  transition ease-in-out duration-500 hover:scale-105 ' style={{ boxShadow: '0px 4px 9px 0px #8A49D6' }}>
                        <div className='flex items-start justify-between'>
                            <img src='./Assets/image/web-portal.svg' className=' object-cover ' />
                            <div className='w-[50px] h-[50px] flex-shrink-0 rounded-full flex items-center justify-center bg-[#F0E3FF] text-black text-[35px] font-[500]'><GoArrowUpRight /></div>
                        </div>
                        <h3 className='text-[24px] font-[700] text-black mt-6 mb-4'>Web Portal Development</h3>
                        <p className=" text-gray-600  mx-auto ">
                           Our team of seasoned professionals is adept at leveraging open-source solutions to deliver tailored web development services that align with your unique objectives.

                        </p>
                    </div>
                    <div className='p-6 rounded-[30px] lg:w-[31%] md:w-[47%]  transition ease-in-out duration-500 hover:scale-105 ' style={{ boxShadow: '0px 4px 9px 0px #8A49D6' }}>
                        <div className='flex items-start justify-between'>
                            <img src='./Assets/image/e-commerce.svg' className=' object-cover ' />
                            <div className='w-[50px] h-[50px] flex-shrink-0 rounded-full flex items-center justify-center bg-[#F0E3FF] text-black text-[35px] font-[500]'><GoArrowUpRight /></div>
                        </div>
                        <h3 className='text-[24px] font-[700] text-black mt-6 mb-4'>E-commerce Development</h3>
                        <p className=" text-gray-600  mx-auto ">
                            Hey contribute to various stages of the development process, including design,
backend development, payment gateway integration, and maintenance.
                        </p>
                    </div>
                    <div className='p-6 rounded-[30px] lg:w-[31%] md:w-[47%]  transition ease-in-out duration-500 hover:scale-105 ' style={{ boxShadow: '0px 4px 9px 0px #8A49D6' }}>
                        <div className='flex items-start justify-between'>
                            <img src='./Assets/image/open-source.svg' className=' object-cover ' />
                            <div className='w-[50px] h-[50px] flex-shrink-0 rounded-full flex items-center justify-center bg-[#F0E3FF] text-black text-[35px] font-[500]'><GoArrowUpRight /></div>
                        </div>
                        <h3 className='text-[24px] font-[700] text-black mt-6 mb-4'>Web Open Source Integration and Customization</h3>
                        <p className=" text-gray-600  mx-auto ">
                           Full stack development refers to the development process of web application components on the client side (front-end) and on the server side (back-end).
                        </p>
                    </div>
                    <div className='p-6 rounded-[30px] lg:w-[31%] md:w-[47%]  transition ease-in-out duration-500 hover:scale-105 ' style={{ boxShadow: '0px 4px 9px 0px #8A49D6' }}>
                        <div className='flex items-start justify-between'>
                            <img src='./Assets/image/mobile-friendly.svg' className=' object-cover ' />
                            <div className='w-[50px] h-[50px] flex-shrink-0 rounded-full flex items-center justify-center bg-[#F0E3FF] text-black text-[35px] font-[500]'><GoArrowUpRight /></div>
                        </div>
                        <h3 className='text-[24px] font-[700] text-black mt-6 mb-4'>Mobile-Friendly Website Development</h3>
                        <p className=" text-gray-600  mx-auto ">
                           Our team develops a compelling mobile presence solution that is easily accessible on all handsets or devices. web applications from our experienced resources.

                        </p>
                    </div>
                    <div className='p-6 rounded-[30px] lg:w-[31%] md:w-[47%]  transition ease-in-out duration-500 hover:scale-105 ' style={{ boxShadow: '0px 4px 9px 0px #8A49D6' }}>
                        <div className='flex items-start justify-between'>
                            <img src='./Assets/image/flexible.svg' className=' object-cover ' />
                            <div className='w-[50px] h-[50px] flex-shrink-0 rounded-full flex items-center justify-center bg-[#F0E3FF] text-black text-[35px] font-[500]'><GoArrowUpRight /></div>
                        </div>
                        <h3 className='text-[24px] font-[700] text-black mt-6 mb-4'>Flexible Web Maintenance Custom Web Development</h3>
                        <p className=" text-gray-600  mx-auto ">
                           Our team is committed to ensuring the ongoing flexibility and reliability of your web presence, while also delivering customized solutions that precisely meet your unique requirements.

                        </p>
                    </div>

                </div>

            </div>
        </section>
    )
}

const FeaturesOfDevelopment = () => {
    return (
        <section className='pt-[80px] w-full px-4 md:px-0'>
            <div className='w-full max-w-[1480px] py-[50px] relative m-auto rounded-[20px] bg-white' style={{ boxShadow: "0px 4px 9px 0px #8A49D6" }}>

                <div className='m-auto w-full text-center mb-10 px-3'>
                    <h2 className="text-[24px] font-bold text-black mb-3">
                        Features of Website Development
                    </h2>
                    <p className="text-[16px] font-[400] text-[#555555]">
                        By keeping your budget in mind, our expert developers assist you in building an excellent website and maintaining it regularly.
                    </p>
                </div>


                <div className='flex flex-col-reverse lg:flex-row relative justify-between items-start gap-10 max-w-[1230px] m-auto px-4'>


                    <div className='flex flex-col gap-y-5 z-10'>
                        {[
                            "Proper understanding of client’s requirement",
                            "Friendly admin page for marketing purposes",
                            "Required plugins for backend purpose",
                            "Adequate structure of a website",
                            "User – Friendly content",
                            "A checkout page",
                            "Security"
                        ].map((text, index) => (
                            <div key={index} className='bg-[#F0E3FF] rounded-s-full rounded-e-full sm:px-10 px-5 py-2 w-fit shadow-md'>
                                <h4 className="text-[16px] sm:text-[20px] md:text-[24px] font-bold text-black ">{text}</h4>
                            </div>
                        ))}
                    </div>


                    <div className='max-w-[500px] w-full absolute right-0'>
                        <img src='./Assets/Image/fullstack-features.png' className='w-full h-auto object-contain z-[-1]' />
                    </div>

                </div>
            </div>
        </section>

    )
}

const DevelopmentProcess = () => {
    const steps = [
        { text: "DISCOVERY", color: "#F6BB49" },
        { text: "INFORMATION ARCHITECTURE", color: "#DA3D53" },
        { text: "WEBSITE & UI DESIGN", color: "#3FA8BC" },
        { text: "WEBSITE DEVELOPMENT", color: "#336699" },
        { text: "TESTING & DEPLOYMENT", color: "#204E68" },
        { text: "LAUNCH & LIVE", color: "#1B2463" },
    ];
    return (
        <section className='pt-[80px] w-full px-4'>
            <div className='w-full max-w-[1480px] m-auto'>
                <div className='  mb-10 md:px-0 w-fit '>
                    <h2 className="sm:text-[26px] text-[24px] font-bold text-black mb-3">
                        OUR WEB DEVLOPMENT PROCESS
                    </h2>
                    <div className='flex w-full gap-0'>
                        <span className='h-[10px] bg-[#F6BB49] w-[16.67%] '></span>
                        <span className='h-[10px] bg-[#DA3D53] w-[16.67%] '></span>
                        <span className='h-[10px] bg-[#379AB3] w-[16.67%] '></span>
                        <span className='h-[10px] bg-[#3068A0] w-[16.67%] '></span>
                        <span className='h-[10px] bg-[#1A4A6F] w-[16.67%] '></span>
                        <span className='h-[10px] bg-[#1A256F] w-[16.67%] '></span>
                    </div>

                </div>

                <div className="flex w-full gap-[3px] lg:flex-row flex-col justify-center ">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative h-[140px] flex items-center justify-center text-center px-2 lg:w-1/6 "
                            style={{ backgroundColor: step.color, }}
                        >
                            <p className="uppercase text-[14px] font-bold text-white leading-[1.2] break-words whitespace-normal max-w-[80%]">
                                {step.text}
                            </p>


                            {index !== steps.length - 1 && (
                                <>
                                    <div
                                        className="hidden lg:block w-0 h-0 absolute left-full top-1/2 -translate-y-1/2 z-10
                        border-t-[39px] border-b-[39px] border-l-[27px]
                        border-t-transparent border-b-transparent border-l-white"
                                    ></div>

                                    <div
                                        className={`hidden lg:block w-0 h-0 absolute left-full top-1/2 -translate-y-1/2 z-20
                        border-t-[33px] border-b-[33px] border-l-[23px]
                        border-t-transparent border-b-transparent`}
                                        style={{ borderLeftColor: steps[index].color }}
                                    ></div>

                                    <div
                                        className="lg:hidden w-0 h-0 absolute top-full left-1/2 -translate-x-1/2 z-10
                        border-l-[39px] border-r-[39px] border-t-[27px]
                        border-l-transparent border-r-transparent border-t-white"
                                    ></div>

                                    <div
                                        className="lg:hidden w-0 h-0 absolute top-full left-1/2 -translate-x-1/2 z-20
                        border-l-[33px] border-r-[33px] border-t-[23px]
                        border-l-transparent border-r-transparent"
                                        style={{ borderTopColor: steps[index].color }}
                                    ></div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
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