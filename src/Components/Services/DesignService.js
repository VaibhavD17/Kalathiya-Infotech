import React from 'react'
import { FaLinkedinIn, FaGoogle, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { MdEmail } from "react-icons/md";



export default function DesignService() {
    return (
        <>
            <HeroSection />
            <AboutKalathiya />
            <DevelopmentServices />
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
                    <h1 className='xl:text-[60px] md:text-[45px] text-[38px]  text-[#8A49D6] font-bold text-center lg:text-nowrap z-[-1] '>Design Services</h1>
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
                    <img src='./Assets/image/ui-ux-design.png' className='w-full object-cover max-w-[462px] m-auto' />
                </div>

                <div className='lg:w-[47%] xl:w-[55%] w-full'>

                    <p className='text-[#555555] text-[16px] font-[400]  mt-4 mb-6 '>
                        <span className='text-[#8A49D6] font-semibold'> Design is POWER</span>
                        it inspires and convinces users to stay engaged. We bring power to our design with a human-centered design process by not just keeping the users in mind but even by involving the users in the process. As a result, we build A design that delights users.
                        <br /> <br />
                        Our design services encompass a wide spectrum, from captivating visual identities to intuitive user interfaces. With a keen eye for detail and a passion for creativity, our team of designers works closely with clients to understand their unique brand identity and objectives. Whether it's crafting stunning logos, designing engaging websites, or conceptualizing memorable marketing materials, we combine strategic thinking with innovative design to deliver impactful solutions that elevate your brand and leave a lasting impression.
                    </p>
                </div>


            </div>
        </section>
    )
}


const DevelopmentServices = () => {
    return (
        <section className="w-full relative " >

            <div className=' w-full h-[50%] absolute top-0 left-0 z-[-1]'>
                <img src='./Assets/Image/design-up-bg.png' className=' w-full object-left-top object-cover bg-no-repeat  h-full' />
            </div>
            <div className=' w-full h-[50%] absolute bottom-0 left-0 z-[-1]'>
                <img src='./Assets/Image/design-down-bg.png' className='  w-full   object-left-bottom object-cover bg-no-repeat h-full' />
            </div>
            
            <div className="max-w-[1480px] w-full mx-auto px-4 py-[100px] z-10" >
                <div className='max-w-[1260px] z-10'>
                    <h2 className="text-[24px]  font-bold  mb-10">
                        OUR UX/UI DESIGN SERVICES
                    </h2>
                </div>

                <div className='lg:flex hidden flex-wrap justify-between gap-y-[40px]'>

                    <div className='p-6 rounded-[30px] lg:w-[49%] w-full  transition ease-in-out duration-500 hover:scale-105 ' style={{ boxShadow: '0px 4px 9px 0px #8A49D6' }}>
                        <div className='flex items-center xl:gap-[30px] h-full gap-[15px]  relative'>
                            <img src='./Assets/image/uiux-icon1.svg' className=' object-cover ' />
                            <div className='flex flex-col justify-center'>
                                <h3 className='xl:text-[24px] lg:text-[20px] font-[700] text-black mb-2 max-w-[340px]'>
                                    Responsive Web Design Development
                                </h3>
                                <p className=" text-gray-600  mx-auto max-w-[485px] ">
                                    With latest design standards, we make the design accessible on all platforms.
                                </p></div>
                            <div className='w-[50px] h-[50px] flex-shrink-0 absolute top-0 right-0 rounded-full flex items-center justify-center bg-[#F0E3FF] text-black text-[35px] font-[500]'><GoArrowUpRight /></div>
                        </div>
                    </div>

                    <div className='p-6 rounded-[30px] lg:w-[49%] w-full  transition ease-in-out duration-500 hover:scale-105 ' style={{ boxShadow: '0px 4px 9px 0px #8A49D6' }}>
                        <div className='flex items-center xl:gap-[30px] h-full gap-[15px]  relative'>
                            <img src='./Assets/image/uiux-icon2.svg' className=' object-cover ' />
                            <div className='flex flex-col justify-center'>
                                <h3 className='xl:text-[24px] lg:text-[20px] font-[700] text-black mb-2 max-w-[340px]'>
                                    Mobile App Design Development
                                </h3>
                                <p className=" text-gray-600  mx-auto max-w-[485px] ">
                                    We make your native and cross-platform apps worth drooling for.on all platforms.
                                </p></div>
                            <div className='w-[50px] h-[50px] flex-shrink-0 absolute top-0 right-0 rounded-full flex items-center justify-center bg-[#F0E3FF] text-black text-[35px] font-[500]'><GoArrowUpRight /></div>
                        </div>
                    </div>


                    <div className='p-6 rounded-[30px] lg:w-[49%] w-full  transition ease-in-out duration-500 hover:scale-105 ' style={{ boxShadow: '0px 4px 9px 0px #8A49D6' }}>
                        <div className='flex items-center xl:gap-[30px] h-full gap-[15px]  relative'>
                            <img src='./Assets/image/uiux-icon3.svg' className=' object-cover ' />
                            <div className='flex flex-col justify-center'>
                                <h3 className='xl:text-[24px] lg:text-[20px] font-[700] text-black mb-2 max-w-[340px]'>
                                    Design Prototyping Development
                                </h3>
                                <p className=" text-gray-600  mx-auto max-w-[485px] ">
                                    With our prototyping services, we ensure your design works for people and process.on all platforms.
                                </p></div>
                            <div className='w-[50px] h-[50px] flex-shrink-0 absolute top-0 right-0 rounded-full flex items-center justify-center bg-[#F0E3FF] text-black text-[35px] font-[500]'><GoArrowUpRight /></div>
                        </div>
                    </div>

                    <div className='p-6 rounded-[30px] lg:w-[49%] w-full  transition ease-in-out duration-500 hover:scale-105 ' style={{ boxShadow: '0px 4px 9px 0px #8A49D6' }}>
                        <div className='flex items-center xl:gap-[30px] h-full gap-[15px]  relative'>
                            <img src='./Assets/image/uiux-icon4.svg' className=' object-cover ' />
                            <div className='flex flex-col justify-center'>
                                <h3 className='xl:text-[24px] lg:text-[20px] font-[700] text-black mb-2 max-w-[340px]'>
                                    PSD to HTML Development

                                </h3>
                                <p className=" text-gray-600  mx-auto max-w-[485px] ">
                                    Let’s turn your beautiful design layout in PSD into responsive web pages with HTML.
                                </p></div>
                            <div className='w-[50px] h-[50px] flex-shrink-0 absolute top-0 right-0 rounded-full flex items-center justify-center bg-[#F0E3FF] text-black text-[35px] font-[500]'><GoArrowUpRight /></div>
                        </div>
                    </div>



                </div>

                <div className='flex lg:hidden flex-wrap justify-between gap-y-[40px]'>

                    <div className='p-6 rounded-[30px] w-full  transition ease-in-out duration-500 hover:scale-105 ' style={{ boxShadow: '0px 4px 9px 0px #8A49D6' }}>
                        <div className='flex items-start justify-between'>
                            <img src='./Assets/image/uiux-icon1.svg' className=' object-cover ' />
                            <div className='w-[50px] h-[50px] flex-shrink-0 rounded-full flex items-center justify-center bg-[#F0E3FF] text-black text-[35px] font-[500]'><GoArrowUpRight /></div>
                        </div>
                        <h3 className='text-[24px] font-[700] text-black mt-6 mb-4'> Responsive Web Design Development</h3>
                        <p className=" text-gray-600  mx-auto ">
                            With latest design standards, we make the design accessible on all platforms.
                        </p>
                    </div>
                    <div className='p-6 rounded-[30px] w-full  transition ease-in-out duration-500 hover:scale-105 ' style={{ boxShadow: '0px 4px 9px 0px #8A49D6' }}>
                        <div className='flex items-start justify-between'>
                            <img src='./Assets/image/uiux-icon2.svg' className=' object-cover ' />
                            <div className='w-[50px] h-[50px] flex-shrink-0 rounded-full flex items-center justify-center bg-[#F0E3FF] text-black text-[35px] font-[500]'><GoArrowUpRight /></div>
                        </div>
                        <h3 className='text-[24px] font-[700] text-black mt-6 mb-4'> Mobile App Design Development</h3>
                        <p className=" text-gray-600  mx-auto ">
                            We make your native and cross-platform apps worth drooling for.on all platforms.
                        </p>
                    </div>
                    <div className='p-6 rounded-[30px] w-full  transition ease-in-out duration-500 hover:scale-105 ' style={{ boxShadow: '0px 4px 9px 0px #8A49D6' }}>
                        <div className='flex items-start justify-between'>
                            <img src='./Assets/image/uiux-icon3.svg' className=' object-cover ' />
                            <div className='w-[50px] h-[50px] flex-shrink-0 rounded-full flex items-center justify-center bg-[#F0E3FF] text-black text-[35px] font-[500]'><GoArrowUpRight /></div>
                        </div>
                        <h3 className='text-[24px] font-[700] text-black mt-6 mb-4'>   Design Prototyping Development</h3>
                        <p className=" text-gray-600  mx-auto ">
                            With our prototyping services, we ensure your design works for people and process.on all platforms.
                        </p>
                    </div>
                    <div className='p-6 rounded-[30px] w-full  transition ease-in-out duration-500 hover:scale-105 ' style={{ boxShadow: '0px 4px 9px 0px #8A49D6' }}>
                        <div className='flex items-start justify-between'>
                            <img src='./Assets/image/uiux-icon4.svg' className=' object-cover ' />
                            <div className='w-[50px] h-[50px] flex-shrink-0 rounded-full flex items-center justify-center bg-[#F0E3FF] text-black text-[35px] font-[500]'><GoArrowUpRight /></div>
                        </div>
                        <h3 className='text-[24px] font-[700] text-black mt-6 mb-4'>  PSD to HTML Development</h3>
                        <p className=" text-gray-600  mx-auto ">
                            Let’s turn your beautiful design layout in PSD into responsive web pages with HTML.
                        </p>
                    </div>
                </div>



            </div>
        </section>
    )
}


const CoreServices = () => {
    return (
        <section className='w-full py-[80px] px-4'>

            <div className='text-center max-w-[1100px] m-auto'>
                <h2 className='sm:text-[60px] text-[50px] font-[700] text-black text-center '>Our Core Services</h2>
                <p className='text-[16px] font-[400] text-[#555555]'>At <span className='text-[#8A49D6] font-[700]'>Kalathiya Infotech</span> , we believe that a well-designed interface is more than just beautiful — it’s functional, intuitive, and built for results. Our UI/UX design services are crafted to deliver seamless digital experiences that engage users and elevate your brand.</p>
            </div>

            <div className='max-w-[1480px] w-full m-auto flex justify-between flex-wrap gap-y-[30px] mt-10'>

                <div className='lg:w-[32%] sm:w-[48%] w-full  transition ease-in-out duration-500 hover:scale-105   min-h-[250px]  p-5 bg-[#F0E3FF]' style={{ boxShadow: " 0px 0px 9px 0px #00000040 inset" }}>
                    <h3 className=' text-[24px] font-[600] text-black mb-1'>Research and Discovery</h3>
                    <p className=' text-[16px] font-[400] text-[#555555]'>
                        With different research methods up our sleeves, we learn about the users you are inviting. We put everything together from likes to dislikes – and use this insight to translate into a drooling design and flexible user experience.
                    </p>
                </div>
                <div className='lg:w-[32%] sm:w-[48%] w-full  transition ease-in-out duration-500 hover:scale-105   min-h-[250px]  p-5 bg-white' style={{ boxShadow: " 0px 0px 9px 0px #00000040 inset" }}>
                    <h3 className=' text-[24px] font-[600] text-black mb-1'>UI Design</h3>
                    <p className=' text-[16px] font-[400] text-[#555555]'>
                        Bringing together left and right hemispheres of our brains into play, we deliver visually rich design interfaces and user-centric experiences that are grounded with research, loved by users and developed with best technology.
                    </p>
                </div>
                <div className='lg:w-[32%] sm:w-[48%] w-full  transition ease-in-out duration-500 hover:scale-105   min-h-[250px]  p-5 lg:bg-[#F0E3FF] sm:bg-white bg-[#F0E3FF]' style={{ boxShadow: " 0px 0px 9px 0px #00000040 inset" }}>
                    <h3 className=' text-[24px] font-[600] text-black mb-1'>UX Design</h3>
                    <p className=' text-[16px] font-[400] text-[#555555]'>
                        The more seamless and glitch-free a user’s journey is, the chances of meeting the targets are higher. Considering that, we pay attention to designing an experience that can talk to, listen to users. We help you with UX design advantage you are looking for.
                    </p>
                </div>
                <div className='lg:w-[32%] sm:w-[48%] w-full  transition ease-in-out duration-500 hover:scale-105   min-h-[250px]  p-5 lg:bg-white sm:bg-[#F0E3FF] bg-white' style={{ boxShadow: " 0px 0px 9px 0px #00000040 inset" }}>
                    <h3 className=' text-[24px] font-[600] text-black mb-1'>Information Architecture</h3>
                    <p className=' text-[16px] font-[400] text-[#555555]'>
                        Usability plays a crucial role in design. With information architecture skills we apply the art and logic to create best structure and organize the site content and features to enable flexible site navigation.
                    </p>
                </div>
                <div className='lg:w-[32%] sm:w-[48%] w-full  transition ease-in-out duration-500 hover:scale-105   min-h-[250px]  p-5 bg-[#F0E3FF]' style={{ boxShadow: " 0px 0px 9px 0px #00000040 inset" }}>
                    <h3 className=' text-[24px] font-[600] text-black mb-1'>MVP Development</h3>
                    <p className=' text-[16px] font-[400] text-[#555555]'>
                        We help our clients by shaping their ideas into visuals with the use of story mapping and affinity diagrams. This ultimately helps turning the storyline into articulate code of a solution.
                    </p>
                </div>
                <div className='lg:w-[32%] sm:w-[48%] w-full  transition ease-in-out duration-500 hover:scale-105   min-h-[250px]  p-5 bg-white' style={{ boxShadow: " 0px 0px 9px 0px #00000040 inset" }}>
                    <h3 className=' text-[24px] font-[600] text-black mb-1'>Usability Testing</h3>
                    <p className=' text-[16px] font-[400] text-[#555555]'>
                        With our usability skills we ensure your application or website works flawlessly in the real business environment. We evaluate the user experience of product at each stage, identifying what issues are overlooked by UX developers and product managers.rning the storyline into articulate code of a solution.
                    </p>
                </div>

            </div>
        </section>
    )
}

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