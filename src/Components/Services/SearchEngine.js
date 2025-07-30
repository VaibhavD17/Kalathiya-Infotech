import React from 'react'
import { FaLinkedinIn, FaGoogle, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import {
    FaGraduationCap, FaHeart, FaShoppingCart, FaDumbbell, FaGlobe, FaUserFriends, FaBuilding, FaShuttleVan, FaCoins, FaPlaneDeparture, FaCalendarAlt, FaUtensils,
} from 'react-icons/fa';


export default function SearchEngine() {
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
                    <h1 className='xl:text-[60px] md:text-[45px] text-[38px]  text-[#8A49D6] font-bold text-center lg:text-nowrap z-[-1] '>Search Engine Optimization</h1>
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


                        Search Engine Optimization (SEO) is a digital marketing strategy aimed at improving a website’s visibility in search engine results pages (SERPs). Its aim of SEO is to Increase Organic (non-paid) Traffic to a website by optimizing various elements such as keywords, meta tags, content quality, & backlinks, and adhering to search engine algorithms’ guidelines.
                        <br /> <br />
                        At <span className='text-[#8A49D6] font-semibold'>Kalathiya Infotech </span> , we help businesses rank higher on Google and other search engines through smart, ethical, and results-driven SEO strategies. Our goal is simple — to bring more traffic, better leads, and increased sales for your business.
                    </p>
                </div>

                <div className='lg:w-[47%] xl:w-[45%] w-full'>
                    <img src='./Assets/image/search-engine.png' className='w-full object-cover max-w-[462px] m-auto' />
                </div>

            </div>
        </section>
    )
}

const DevelopmentServices = () => {
    return (
        <section className=" w-full  " style={{ backgroundImage: `url(./Assets/Image/curve-bg-big.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="max-w-[1480px] w-full mx-auto px-4 py-[100px]" >
                <div className='max-w-[1260px]'>
                    <h2 className="text-[24px]  font-bold  mb-4 uppercase">
                        WEB APPLICATION DEVELOPMENT SERVICES
                    </h2>
                    <p className=" text-[#555555]  mb-10">
                        <span className='text-[#8A49D6] font-[700]'>Kalathiya Infotech </span>
                        LLP is a renowned website development service company catering to various industries with our bespoke website development services.
                    </p>
                </div>

                <div className='flex flex-wrap justify-between gap-y-[30px]'>

                    <div className='p-6 rounded-[30px] lg:w-[31%] md:w-[47%] min-h-[338px]  transition ease-in-out duration-500 hover:scale-105 ' style={{ boxShadow: '0px 4px 9px 0px #8A49D6' }}>
                        <div className='flex items-start justify-between'>
                            <img src='./Assets/image/keyword-search.svg' className=' object-cover ' />
                            <div className='w-[50px] h-[50px] flex-shrink-0 rounded-full flex items-center justify-center bg-[#F0E3FF] text-black text-[35px] font-[500]'><GoArrowUpRight /></div>
                        </div>
                        <h3 className='text-[24px] font-[700] text-black mt-6 mb-4'>
                            Keyword Research & Strategy
                        </h3>
                        <p className=" text-gray-600  mx-auto ">
                            Keyword research is indeed the foundation of effective SEO (Search Engine Optimization). It involves the process of identifying and analyzing the specific words and phrases that people use when searching for information online.
                        </p>
                    </div>
                    <div className='p-6 rounded-[30px] lg:w-[31%] md:w-[47%] min-h-[338px]  transition ease-in-out duration-500 hover:scale-105 ' style={{ boxShadow: '0px 4px 9px 0px #8A49D6' }}>
                        <div className='flex items-start justify-between'>
                            <img src='./Assets/image/link-building.svg' className=' object-cover ' />
                            <div className='w-[50px] h-[50px] flex-shrink-0 rounded-full flex items-center justify-center bg-[#F0E3FF] text-black text-[35px] font-[500]'><GoArrowUpRight /></div>
                        </div>
                        <h3 className='text-[24px] font-[700] text-black mt-6 mb-4'>
                            Link Building
                        </h3>
                        <p className=" text-gray-600  mx-auto ">
                            Link building is a basic aspect of search engine optimization (SEO). It involves the process of acquiring high-quality backlinks from other reputable websites to improve your own site’s authority, trustworthiness, and visibility in search engine results pages (SERPs).
                        </p>
                    </div>
                    <div className='p-6 rounded-[30px] lg:w-[31%] md:w-[47%] min-h-[338px]  transition ease-in-out duration-500 hover:scale-105 ' style={{ boxShadow: '0px 4px 9px 0px #8A49D6' }}>
                        <div className='flex items-start justify-between'>
                            <img src='./Assets/image/technicalSEO.svg' className=' object-cover ' />
                            <div className='w-[50px] h-[50px] flex-shrink-0 rounded-full flex items-center justify-center bg-[#F0E3FF] text-black text-[35px] font-[500]'><GoArrowUpRight /></div>
                        </div>
                        <h3 className='text-[24px] font-[700] text-black mt-6 mb-4'>
                            Technical SEO
                        </h3>
                        <p className=" text-gray-600  mx-auto ">
                            This aspect focuses on the technical elements of a website, ensuring that it’s structured and coded in a way that search engines can easily crawl and index. This includes optimizing site speed, and mobile-friendliness, and fixing crawl errors.
                        </p>
                    </div>
                    <div className='p-6 rounded-[30px] lg:w-[31%] md:w-[47%] min-h-[338px]  transition ease-in-out duration-500 hover:scale-105 ' style={{ boxShadow: '0px 4px 9px 0px #8A49D6' }}>
                        <div className='flex items-start justify-between'>
                            <img src='./Assets/image/ecommerceSEO.svg' className=' object-cover ' />
                            <div className='w-[50px] h-[50px] flex-shrink-0 rounded-full flex items-center justify-center bg-[#F0E3FF] text-black text-[35px] font-[500]'><GoArrowUpRight /></div>
                        </div>
                        <h3 className='text-[24px] font-[700] text-black mt-6 mb-4'>
                            E-Commerce SEO
                        </h3>
                        <p className=" text-gray-600  mx-auto ">
                            E-commerce SEO, also known as online store SEO (Search engine optimization) or retail SEO, is a specialized part of search engine optimization that is tailored to e-commerce websites. It focuses on optimizing various aspects of an online store to improve its visibility in search engine results and drive organic traffic.
                        </p>
                    </div>
                    <div className='p-6 rounded-[30px] lg:w-[31%] md:w-[47%] min-h-[338px]  transition ease-in-out duration-500 hover:scale-105 ' style={{ boxShadow: '0px 4px 9px 0px #8A49D6' }}>
                        <div className='flex items-start justify-between'>
                            <img src='./Assets/image/content-writing.svg' className=' object-cover ' />
                            <div className='w-[50px] h-[50px] flex-shrink-0 rounded-full flex items-center justify-center bg-[#F0E3FF] text-black text-[35px] font-[500]'><GoArrowUpRight /></div>
                        </div>
                        <h3 className='text-[24px] font-[700] text-black mt-6 mb-4'>
                            Content Writing
                        </h3>
                        <p className=" text-gray-600  mx-auto ">
                            Content writing is the skill & art of crafting well-crafted, valuable, and captivating content with the aim of satisfying the needs and interests of both search engines and human audiences. It plays a crucial role in search engine Optimization and digital marketing, online communication, and information dissemination.
                        </p>
                    </div>
                    <div className='p-6 rounded-[30px] lg:w-[31%] md:w-[47%] min-h-[338px]  transition ease-in-out duration-500 hover:scale-105 ' style={{ boxShadow: '0px 4px 9px 0px #8A49D6' }}>
                        <div className='flex items-start justify-between'>
                            <img src='./Assets/image/conversion-rate.svg' className=' object-cover ' />
                            <div className='w-[50px] h-[50px] flex-shrink-0 rounded-full flex items-center justify-center bg-[#F0E3FF] text-black text-[35px] font-[500]'><GoArrowUpRight /></div>
                        </div>
                        <div>
                            <h3 className='text-[24px] font-[700] text-black mt-6 mb-4'>
                                Conversion Rate Optimization
                            </h3>
                            <p className=" text-gray-600  mx-auto ">
                                Conversion Rate Optimization (CRO) is indeed a critical aspect of digital marketing that aims to enhance the percentage of website visitors who complete specific desired actions or conversions. These actions can vary depending on the goals of a website or online platform, such as making a purchase, signing up for a newsletter, or filling out a contact form.
                            </p>
                        </div>
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
                       Features of Search Engine Optimization
                    </h2>
                    <p className="text-[16px] font-[400] text-[#555555]">
                        Search Engine Optimization (SEO) is a multifaceted approach aimed at enhancing a website’s visibility in search engine results pages (SERPs). SEO encompasses various features and strategies that work together to achieve this goal.
                    </p>
                </div>


                <div className='flex flex-col-reverse lg:flex-row relative justify-between items-start gap-10 max-w-[1230px] m-auto px-4'>


                    <div className='flex flex-col gap-y-5 z-10'>
                        {[
                            "Content marketing and analysis",
                            "Keyword research/rank analysis",
                            "Adequate structure of a website",
                            "International search tracking",
                            "Link analysis and acquisition",
                            "Cross-device attribution",
                            "Technical SEO crawling"
                        ].map((text, index) => (
                            <div key={index} className='bg-[#F0E3FF] rounded-s-full rounded-e-full sm:px-10 px-5 py-2 w-fit shadow-md'>
                                <h4 className="text-[16px] sm:text-[20px] md:text-[24px] font-bold text-black ">{text}</h4>
                            </div>
                        ))}
                    </div>


                    <div className='max-w-[500px] w-full absolute right-0'>
                        <img src='./Assets/Image/feature-img.png' className='w-full h-auto object-contain z-[-1]' />
                    </div>

                </div>
            </div>
        </section>

    )
}

const DevelopmentProcess = () => {
    const steps = [
        { text: "WEBSITE ANALYSIS", color: "#F6BB49" },
        { text: "PROBLEM IDENTIFICATION", color: "#DA3D53" },
        { text: "RESEARCH TARGETED KEYWORD", color: "#379AB3" },
        { text: "ONE-PAGE SEO", color: "#3068A0" },
        { text: "COMTENT OPTIOMIZATION", color: "#1A4A6F" },
        { text: "SUBMIT SITE TO SEARCH ENGINE", color: "#1A256F" },
        { text: "OFF PAGES PROMOTION & SEO REPORTING", color: "#070F41" },
        { text: "RANKING, TRACKING, TRAFIC, REPORTING", color: "#000000" },
    ];
    return (
        <section className='pt-[80px] w-full px-4'>
            <div className='w-full max-w-[1480px] m-auto'>
                <div className='  mb-10 md:px-0 w-fit '>
                    <h2 className="sm:text-[26px] uppercase text-[24px] font-bold text-black mb-3">
                       SEARCH ENGINE OPTIOMIZATION PROCESS
                    </h2>
                    <div className='flex w-full gap-0'>
                        <span className='h-[10px] bg-[#F6BB49] w-[16.67%] '></span>
                        <span className='h-[10px] bg-[#DA3D53] w-[16.67%] '></span>
                        <span className='h-[10px] bg-[#379AB3] w-[16.67%] '></span>
                        <span className='h-[10px] bg-[#3068A0] w-[16.67%] '></span>
                        <span className='h-[10px] bg-[#1A4A6F] w-[16.67%] '></span>
                        <span className='h-[10px] bg-[#1A256F] w-[16.67%] '></span>
                        <span className='h-[10px] bg-[#070F41] w-[16.67%] '></span>
                        <span className='h-[10px] bg-[#000000] w-[16.67%] '></span>
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