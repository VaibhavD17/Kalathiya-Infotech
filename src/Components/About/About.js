import React, { useEffect, useState } from 'react'
import { FaLinkedinIn, FaGoogle, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

export default function About() {
    return (
        <>
            <HeroSection />
            <AboutKalathiya />
            <WayChooseKalathiya />
            <OurApproach />
            <Career />
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
                    <h1 className='sm:text-[60px] text-[45px] text-[#8A49D6] font-bold text-nowrap z-[-1] '>About Us</h1>
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

    const [scale, setScale] = useState(1);

    const [zoomingIn, setZoomingIn] = useState(true);

    useEffect(() => {

        const interval = setInterval(() => {
            setScale(prevScale => {

                if (zoomingIn && prevScale < 1.1) {
                    return prevScale + 0.005;
                }
                else if (!zoomingIn && prevScale > 1) {
                    return prevScale - 0.005;
                }
                else if (zoomingIn && prevScale >= 1.1) {
                    setZoomingIn(false);
                    return prevScale - 0.005;
                }
                else if (!zoomingIn && prevScale <= 1) {
                    setZoomingIn(true);
                    return prevScale + 0.005;
                }
                return prevScale;
            });
        }, 50);
        return () => clearInterval(interval);
    }, [zoomingIn]);


    return (
        <section className=' bg-white py-[80px] px-4'>
            <div className='max-w-[1480px] mx-auto w-full flex justify-between flex-wrap gap-y-10  '>
                <div className='lg:w-[50%] xl:w-[60%] w-full'>
                    <h3 className=' text-[24px] text-black font-[700] mb-[30px] '>About KALATHIYA</h3>
                    <p className='text-[16px] text-[#555555] text-[400]'><span className='font-[700] text-[#8A49D6]'>Kalathiya Infotech</span> is a amazing path of development and services company. With our comprehensive range of services, cutting-edge technologies, and a team of skilled experts, we empower our clients to achieve their goals and elevate their online presence.
                        <br /><br />
                        Our team of skilled professionals brings together a wealth of experience and knowledge to deliver top-notch services in software development, cybersecurity, cloud computing, and beyond. At Kalathiya Infotech we strive for nothing less than perfection, working tirelessly to ensure our clients stay ahead in an ever-evolving digital landscape.
                        <br /><br />
                        Our diverse team of seasoned professionals brings together a wealth of experience and expertise across various domains, including software development, cybersecurity, cloud computing, and more. We pride ourselves on our ability to deliver scalable and sustainable solutions that drive tangible results for businesses of all sizes. At Kalathiya infotech we believe in harnessing the power of technology to empower our clients to thrive in an increasingly interconnected world. Discover the difference and embark on a journey towards digital transformation today.</p>
                </div>
                <div className='lg:w-[50%] xl:w-[40%]  w-full flex lg:justify-end justify-center '>
                    <img src='./Assets/Image/aboutUs-img.png' className='w-full max-w-[470px] max-h-[470px]' />
                </div>
            </div>

            <div className='max-w-[1260px] w-full bg-[#F0E3FF] px-6 py-10 sm:px-10 sm:py-[54px] sm:pe-[80px] mx-auto mt-[40px] rounded-[30px] flex flex-col lg:flex-row gap-8'>


             

                <div className='w-full max-w-[370px] max-h-[470px] md:rounded-[30px] rounded-[20px] overflow-hidden mx-auto'>
                    {/* Image element with dynamic scale transformation */}
                    <img
                        // Placeholder image URL - replace with your actual image path if hosted
                        src='./Assets/Image/about-data-second.jpg'
                        className='w-full h-full max-w-[370px] max-h-[470px] object-cover object-center transition-transform duration-100 ease-linear'
                        style={{ transform: `scale(${scale})` }} // Apply the dynamic scale
                        alt="About Image"
                    />
                </div>

                {/* Right Content */}
                <div className='w-full flex flex-col gap-6 lg:w-[60%]'>

                    {/* Card 1 */}
                    <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-6'>
                        <div className='w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] bg-white rounded-full flex-shrink-0 flex items-center justify-center group cursor-pointer shadow-md'>
                            <img
                                src='./Assets/Image/people-about.png'
                                className='object-cover group-hover:scale-110 transition duration-300 ease-in-out'
                                alt="People"
                            />
                        </div>
                        <div className='flex flex-col gap-1 text-center sm:text-left'>
                            <h6 className='text-[20px] sm:text-[24px] text-black font-bold'>PEOPLE</h6>
                            <p className='text-[#555555] text-[14px] sm:text-[16px] font-[400]'>
                                We perpetuate a positive sparkling surrounding that encourages growth and strengthens bonds.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-6'>
                        <div className='w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] bg-white rounded-full flex-shrink-0 flex items-center justify-center group cursor-pointer shadow-md'>
                            <img
                                src='./Assets/Image/integrity-about.png'
                                className='object-cover group-hover:scale-110 transition duration-300 ease-in-out'
                                alt="Integrity"
                            />
                        </div>
                        <div className='flex flex-col gap-1 text-center sm:text-left'>
                            <h6 className='text-[20px] sm:text-[24px] text-black font-bold'>INTEGRITY</h6>
                            <p className='text-[#555555] text-[14px] sm:text-[16px] font-[400]'>
                                We hold ourselves to the highest standards, demonstrating honesty and transparency always.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-6'>
                        <div className='w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] bg-white rounded-full flex-shrink-0 flex items-center justify-center group cursor-pointer shadow-md'>
                            <img
                                src='./Assets/Image/success-about.png'
                                className='object-cover group-hover:scale-110 transition duration-300 ease-in-out'
                                alt="Success"
                            />
                        </div>
                        <div className='flex flex-col gap-1 text-center sm:text-left'>
                            <h6 className='text-[20px] sm:text-[24px] text-black font-bold'>SUCCESS</h6>
                            <p className='text-[#555555] text-[14px] sm:text-[16px] font-[400]'>
                                Success is defined by the impact we make—not just financial results.
                            </p>
                        </div>
                    </div>

                </div>
            </div>


        </section>
    )
}


const WayChooseKalathiya = () => {

    return (
        <section className=" w-full " style={{ backgroundImage: `url(./Assets/Image/curve-bg-big.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="max-w-[1480px] w-full mx-auto px-4 py-[100px]" >
                <div className='max-w-[1260px]'>
                    <h2 className="text-2xl  font-bold  mb-4">
                        Why should you choose KALATHIYA INFOTECH?
                    </h2>
                    <p className=" text-gray-600  mx-auto mb-10">
                        Choose KALATHIYA for unparalleled expertise, exceptional quality, and unwavering commitment to your success.
                        With a proven track record of delivering innovative solutions tailored to your needs, we prioritize your
                        satisfaction above all else. Join us and experience the difference of working with a dedicated partner who goes
                        above and beyond to exceed your expectations.
                    </p>
                </div>

                <div className="flex flex-wrap max-w-[1340px] gap-y-[30px] m-auto  justify-evenly ">

                    <div className='flex flex-col lg:flex-row items-center justify-between mx-auto gap-4 lg:gap-6 w-full '>

                        <div className=' lg:w-[48%] xl:w-[45%] w-full  h-full rounded-[30px] py-[20px] sm:px-[30px] px-[12px]' style={{ background: "linear-gradient( #8A49D6 6.93%, #000000 150.71%)" }}>
                            <div className='bg-white w-full p-2 rounded-s-full rounded-e-full mb-[20px]'>
                                <h3 className='text-center text-[16px] sm:text-[20px] text-black font-[700]'>Highly Experienced and Productive Professionals</h3>
                            </div>

                            <p className='text-center text-[14px] sm:text-[16px] text-white font-[400]'>Our member of workforce are expert in the IT industry and have various experience in different languages. Morever we have professional and exclusive resources to provide competitive solutions.</p>
                        </div>

                        <div className=' lg:w-[48%] xl:w-[45%] w-full  h-full rounded-[30px] py-[20px] px-[30px]' style={{ background: "linear-gradient( #8A49D6 6.93%, #000000 150.71%)" }}>
                            <div className='bg-white w-full p-1 rounded-s-full rounded-e-full mb-[20px]'>
                                <h3 className='text-center  text-[16px] sm:text-[20px]  text-black font-[700]'>The Proper Hierarchy and Escalation Path</h3>
                            </div>

                            <p className='text-center  text-[14px] sm:text-[16px]  text-white font-[400]'>We believe in clear hierarchy and escalation path ensures streamlined communication a nd effective decision-making within the team. By defining roles and responsibilities, addressing issues promptly, and escalating concerns as needed.</p>
                        </div>

                    </div>

                    <div className='flex flex-col lg:flex-row items-center  justify-between mx-auto gap-4 lg:gap-6 w-full max-w-[1240px]'>
                        <div className=' lg:w-[48%] xl:w-[45%] w-full  h-full  rounded-[30px] py-[20px] px-[30px]' style={{ background: "linear-gradient( #8A49D6 6.93%, #000000 150.71%)" }}>
                            <div className='bg-white w-full p-1 rounded-s-full rounded-e-full mb-[20px]'>
                                <h3 className='text-center  text-[16px] sm:text-[20px]  text-black font-[700]'>Expertise in multiple domains</h3>
                            </div>

                            <p className='text-center  text-[14px] sm:text-[16px]  text-white font-[400]'>We have boasts expertise across diverse domains, ranging from software development and data analytics to cybersecurity and cloud computing. With a versatile team of professionals, we offer comprehensive solutions tailored to meet the unique needs of each project.</p>
                        </div>

                        <div className=' lg:w-[48%] xl:w-[45%] w-full  h-full  rounded-[30px] py-[20px] px-[30px]' style={{ background: "linear-gradient( #8A49D6 6.93%, #000000 150.71%)" }}>
                            <div className='bg-white w-full p-1 rounded-s-full rounded-e-full mb-[20px]'>
                                <h3 className='text-center  text-[16px] sm:text-[20px]  text-black font-[700]'>Reporting Structure</h3>
                            </div>

                            <p className='text-center  text-[14px] sm:text-[16px]  text-white font-[400]'>We use many project management related tools to manage project work, time, planning, designing and execution. Main point of using this tools is to provide daily , weekly and monthly reports.</p>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row items-center justify-between mx-auto  gap-4 lg:gap-6 w-full max-w-[1140px]'>
                        <div className=' lg:w-[48%] xl:w-[45%] w-full  h-full rounded-[30px] py-[20px] px-[30px]' style={{ background: "linear-gradient( #8A49D6 6.93%, #000000 150.71%)" }}>
                            <div className='bg-white w-full p-1 rounded-s-full rounded-e-full mb-[20px]'>
                                <h3 className='text-center  text-[16px] sm:text-[20px]  text-black font-[700]'>Intellectual Property Rights Protection</h3>
                            </div>

                            <p className='text-center  text-[14px] sm:text-[16px]  text-white font-[400]'>Ensuring the safeguarding of intellectual property rights, we prioritize confidentiality and employ robust security measures, fortifying trust and protecting innovation.</p>
                        </div>

                        <div className=' lg:w-[48%] xl:w-[45%] w-full  h-full  rounded-[30px] py-[20px] px-[30px]' style={{ background: "linear-gradient( #8A49D6 6.93%, #000000 150.71%)" }}>
                            <div className='bg-white w-full p-1 rounded-s-full rounded-e-full mb-[20px]'>
                                <h3 className='text-center  text-[16px] sm:text-[20px]  text-black font-[700]'>24x7 Support</h3>
                            </div>

                            <p className='text-center  text-[14px] sm:text-[16px]  text-white font-[400]'>We don't disappoint our client any time. Once you shared your problem we would not stop till is is clear and client is satisfied. We provide 24*7 support for everyone</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const OurApproach = () => {
    return (
        <section className='w-full  pt-[140px] px-4'>

            <div className='max-w-[1480px] w-full m-auto relative border border-[#8A49D6] rounded-[30px] ' >
                <div className='w-full bg-white opacity-[81%] absolute top-0 left-0 z-10  h-full'></div>
                <img src='./Assets/Image/OurApproach-bg.jpg' className='w-full object-cover object-center z-[-1] absolute top-0 left-0  h-full rounded-[30px] overflow-hidden' />

                <div className='flex flex-col lg:flex-row items-center justify-between mx-auto gap-
                    4 lg:gap-6 w-full max-w-[1240px] z-[50] relative top-[-60px] gap-y-[40px] px-3'>

                    <div className='flex flex-col gap-y-[24px] justify-center items-center lg:w-[30%] xl:w-[28%] w-full max-w-[500px] '>

                        <div className='w-[120px] h-[120px] bg-white rounded-full flex justify-center items-center shadow' style={{ backdropFilter: 'blur(8px)' }} >
                            <img src='./Assets/Image/our-vision.svg' />
                        </div>

                        <div className='text-center'>
                            <h3 className='text-[24px] text-black font-bold'>Our Vision​</h3>
                            <p className='text-[16px] text-[#555555] font-[400]'>Our vision is to lead the way in revolutionizing technology for positive change and limitless possibilities.</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-y-[24px] justify-center items-center lg:w-[30%] xl:w-[28%] w-full max-w-[500px] '>

                        <div className='w-[120px] h-[120px] bg-white rounded-full flex justify-center items-center shadow' style={{ backdropFilter: 'blur(8px)' }} >
                            <img src='./Assets/Image/our-mission.svg' />
                        </div>

                        <div className='text-center'>
                            <h3 className='text-[24px] text-black font-bold'>Our Mission​​</h3>
                            <p className='text-[16px] text-[#555555] font-[400]'>Our mission is to convert imagination into actuality by providing our team with a positive work area and latest technology.</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-y-[24px] justify-center items-center lg:w-[30%] xl:w-[28%] w-full max-w-[500px] '>

                        <div className='w-[120px] h-[120px] bg-white rounded-full flex justify-center items-center shadow' style={{ backdropFilter: 'blur(8px)' }} >
                            <img src='./Assets/Image/core-value.svg' />
                        </div>

                        <div className='text-center'>
                            <h3 className='text-[24px] text-black font-bold'>Core Value​</h3>
                            <p className='text-[16px] text-[#555555] font-[400]'>We hand over an effective results for our clients by learning from the past and collaborating on change for the future.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

const Career = () => {
    return (
        <section className='w-full py-[110px] px-4'>
            <div className='max-w-[1480px] w-full m-auto flex justify-between items-center md:flex-nowrap flex-wrap gap-y-[40px]'>

                <div className='md:w-[47%] xl:w-[45%] w-full'>
                    <img src='./Assets/image/career-img.png' className='w-full object-cover max-w-[650px] m-auto' />
                </div>

                <div className='md:w-[47%] xl:w-[45%] w-full'>
                    <h2 className='text-[#8A49D6] text-[60px] font-[700]'>Career</h2>
                    <h5 className='text-black text-[24px] font-[700]  max-w-[460px]'>Teamwork is the force behind every successful business.</h5>
                    <p className='text-[#555555] text-[16px] font-[400] max-w-[460px] mt-4 mb-6'>At KALATHIYA Infotech, we believe in empowering talent, fostering innovation, and creating technology that impacts millions. Whether you're a seasoned professional or a passionate fresher, you'll find a place to grow, learn, and make a real difference.</p>

                    <button className='bg-[#8A49D6] text-white text-[16px] font-[600] py-2 px-[24px] flex items-center rounded-s-full rounded-e-full  gap-[18px]'>
                        Contact Us
                        <span className='w-[34px] h-[34px] bg-white rounded-full text-[#8A49D6] flex items-center justify-center'><FaArrowRight /></span>
                    </button>


                </div>

            </div>
        </section>
    )
}

