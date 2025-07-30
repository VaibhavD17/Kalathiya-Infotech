import React from 'react'
import { FaLinkedinIn, FaGoogle, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
export default function ContactUs() {
    return (
        <>
            <HeroSection />
            <AboutKalathiya />
            <CoFounder />
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
                    <h1 className='xl:text-[60px] md:text-[45px] text-[38px]  text-[#8A49D6] font-bold text-center lg:text-nowrap z-[-1] '>Contact us</h1>
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
                    <img src='./Assets/image/contactUS-img.png' className='w-full object-cover max-w-[462px] m-auto' />
                </div>

                <div className='lg:w-[47%] xl:w-[55%] w-full'>
                    <h4 className='text-black text-[24px] font-[500]'>Do you have any Queries ? We’re happy to help!</h4>

                    <p className='text-[#555555] text-[16px] font-[400]  mt-4 mb-6 '>
                        Welcome to <span className='text-[#8A49D6] font-semibold uppercase'>Kalathiya Infotech </span> where innovation meets expertise. With a passion for technology and a commitment to excellence, we specialize in providing cutting-edge IT solutions tailored to meet the unique needs of our clients. Our team of skilled professionals brings together a wealth of experience and knowledge to deliver top-notch services in software development, cybersecurity, cloud computing, and beyond. We strive for nothing less than perfection, working tirelessly to ensure our clients stay ahead in an ever-evolving digital landscape. Discover the difference with KALATHIYA INFOTECH today.
                        <br /> <br />
                        At <span className='text-[#8A49D6] font-semibold uppercase'>Kalathiya Infotech </span>, we are dedicated to providing exceptional service and support to our clients. Whether you have a question about our products, need technical assistance, or want to explore partnership opportunities, we're here to help. Our experienced team is ready to assist you with any inquiries you may have.
                    </p>
                </div>



            </div>
        </section>
    )
}

const CoFounder = () => {

    const techRow1 = [
        { name: 'Wordpress', icon: './Assets/Image/icon1.png' },
        { name: 'CodeIgniter', icon: './Assets/Image/icon2.png' },
        { name: 'PHP', icon: './Assets/Image/icon3.png' },
        { name: 'Adobe XD', icon: './Assets/Image/icon4.png' },
        { name: 'Python', icon: './Assets/Image/icon5.png' },
        { name: 'JavaScript', icon: './Assets/Image/icon6.png' },
        { name: 'Node.js', icon: './Assets/Image/icon7.png' },
        { name: 'Next.js', icon: './Assets/Image/icon8.png' },
        { name: 'Three.js', icon: './Assets/Image/icon9.png' },
        { name: 'Apple', icon: './Assets/Image/icon10.png' },
        { name: 'CSS3', icon: './Assets/Image/icon11.png' },
        { name: 'Android', icon: './Assets/Image/icon12.png' },
        { name: 'Firebase', icon: './Assets/Image/icon13.png' },
    ];

    const techRow2 = [
        { name: 'HTML5', icon: './Assets/Image/icon14.png' },
        { name: 'MySQL', icon: './Assets/Image/icon15.png' },
        { name: 'React', icon: './Assets/Image/icon16.png' },
        { name: 'Figma', icon: './Assets/Image/icon17.png' },
        { name: 'Photoshop', icon: './Assets/Image/icon18.png' },
        { name: 'Illustrator', icon: './Assets/Image/icon19.png' },
        { name: 'Flutter', icon: './Assets/Image/icon20.png' },
        { name: 'Vue.js', icon: './Assets/Image/icon21.png' },
        { name: 'Laravel', icon: './Assets/Image/icon22.png' },
        { name: 'Swift', icon: './Assets/Image/icon23.png' },
        { name: 'Django', icon: './Assets/Image/icon24.png' },
        { name: 'MongoDB', icon: './Assets/Image/icon25.png' },
        { name: 'Angular', icon: './Assets/Image/icon26.png' },
    ];

    // To create a continuous loop, we duplicate the content of each row
    const duplicatedTechRow1 = [...techRow1, ...techRow1];
    const duplicatedTechRow2 = [...techRow2, ...techRow2];

    return (
        <section className='py-[80px] w-full' style={{
            backgroundImage: `url(./Assets/Image/curve-bg-big.png)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top center',

        }}>

            <style>
                {`
                  @keyframes scrollLeft {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); } /* Scrolls half the content width (one full set of original items) */
                  }
                  .animate-scroll-left {
                    animation: scrollLeft 30s linear infinite; /* Adjust duration for speed */
                  }
 
                  /* For the second row, we might want a slightly different speed or direction */
                  @keyframes scrollRight {
                    0% { transform: translateX(-50%); } /* Start from the duplicated content */
                    100% { transform: translateX(0%); }
                  }
                  .animate-scroll-right {
                    animation: scrollRight 30s linear infinite; /* Adjust duration for speed */
                  }
                  `}
            </style>


            <div className=" mx-auto  mb-32 relative z-10">

                <div className="text-center max-w-[1480px] px-4 w-full  mx-auto flex items-center justify-center flex-col">
                    <div className=" flex items-center justify-center relative w-full">
                        <img
                            src={'./Assets/Image/kalathiya-about-logo.png'}
                            className="z-0 w-full"
                        />
                    </div>
                    <p className="text-4xl md:text-[60px] font-bold text-[#8a49d6] mt-9 z-10 relative top-[-70px]">
                        Meet Our Secret Originators
                    </p>
                </div>

                <div className='w-full max-w-[980px] px-4 my-[80px] flex justify-between m-auto flex-wrap gap-y-[40px]'>

                    <div className=' md:w-[48%] w-full max-w-[500px] m-auto md:m-0 rounded-[70px]  transition ease-in-out duration-500 hover:scale-105 '
                        style={{ background: "linear-gradient(180deg, #FAF3D8 0%, #EDE5DB 33%, #E3D5E7 66%, #B3A1FE 100%)" }}
                    >
                        <img src='./Assets/Image/vk.png' className=' object-cover pt-[50px] px-9 w-full' />
                        <div className='bg-white py-6 text-center mb-[10px] mx-[10px] rounded-t-[20px] rounded-b-[70px]'>
                            <h3 className='sm:text-[30px] text-[25px]  font-bold text-[#8A49D6] '>Vishal Kalathiya</h3>
                            <h6 className='text-[16px] font-bold text-black '>CO-ORDINATORS</h6>
                        </div>
                    </div>

                    <div className=' md:w-[48%] w-full max-w-[500px] m-auto md:m-0 rounded-[70px]  transition ease-in-out duration-500 hover:scale-105 '
                        style={{ background: "linear-gradient(180deg, #FAF3D8 0%, #EDE5DB 33%, #E3D5E7 66%, #B3A1FE 100%)" }}
                    >
                        <img src='./Assets/Image/ak.png' className=' object-cover pt-[50px] px-9 w-full' />
                        <div className='bg-white py-6 text-center mb-[10px] mx-[10px] rounded-t-[20px] rounded-b-[70px]'>
                            <h3 className='sm:text-[30px] text-[25px]  font-bold text-[#8A49D6] '>Abhishek Kalathiya</h3>
                            <h6 className='text-[16px] font-bold text-black '>CO-ORDINATORS</h6>
                        </div>
                    </div>

                </div>

                <section className="bg-white w-full shadow-[inset_0px_0px_9px_0px_rgba(0,0,0,0.25)] overflow-hidden py-6 px-2 sm:px-6">
                  
                    <div className="flex overflow-hidden mb-4">
                        <div
                            className="flex animate-scroll-left flex-shrink-0"
                            style={{
                                width: `${duplicatedTechRow1.length * 100 / techRow1.length}%`,
                            }}
                        >
                            {duplicatedTechRow1.map((tech, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center flex-[0_0_auto] basis-1/6 sm:basis-1/6 md:basis-1/12 p-2 sm:p-3 transition-transform duration-200 hover:scale-110"
                                >
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center overflow-hidden ">
                                        <img
                                            src={tech.icon}
                                            alt={`tech-${index}`}
                                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "https://placehold.co/32x32?text=?";
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Second Row - scroll right */}
                    <div className="flex overflow-hidden">
                        <div
                            className="flex animate-scroll-right flex-shrink-0"
                            style={{
                                width: `${duplicatedTechRow2.length * 100 / techRow2.length}%`,
                            }}
                        >
                            {duplicatedTechRow2.map((tech, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center flex-[0_0_auto] basis-1/6 sm:basis-1/6 md:basis-1/12  p-2 sm:p-3 transition-transform duration-200 hover:scale-110"
                                >
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center overflow-hidden ">
                                        <img
                                            src={tech.icon}
                                            alt={`tech-${index}`}
                                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "https://placehold.co/32x32?text=?";
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


            </div>

        </section>
    )
}

const Contact = () => {
    return (
        <section className='w-full sm:px-4 px-3 py-[80px]'>
            <div className='max-w-[1000px] w-full m-auto text-center mb-[80px]'>
                <h2 className='text-[#8A49D6] sm:text-[40px] text-[35px] font-[700] mb-4'>WHAT ARE YOU THINKING? LET US KNOW!</h2>
                <p className='text-black sm:text-[26px] text-[20px] font-[400]'>We would be glad to hear from you. <br />
                    Please fill in the form below or mail us your requirements at Info <span className='text-[#8A49D6] font-semibold'>@kalathiyainfotech.com </span></p>
            </div>

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