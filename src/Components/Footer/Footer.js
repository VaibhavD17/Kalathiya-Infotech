import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { NavLink } from 'react-router-dom';


export default function Footer() {
    return (
        <footer className='bg-[#1E1E1E] py-[50px] w-full px-3'>
            <div className='max-w-[1480px] m-auto flex relative justify-between gap-0  xl:gap-[30px]  gap-y-10  xl:flex-nowrap flex-wrap '>

                {/* --------------------------------------- */}
                <div className='flex xl:w-[2%] w-full items-center justify-center  xl:min-w-[32px] xl:flex-col   gap-[18px]'>
                    <a className='w-8 h-8 rounded-full bg-white flex items-center justify-center text-black text-[16px]'><FaFacebook /></a>
                    <a className='w-8 h-8 rounded-full bg-white flex items-center justify-center text-black text-[16px]'><FaInstagram /></a>
                    <a className='w-8 h-8 rounded-full bg-white flex items-center justify-center text-black text-[16px]'><FaGoogle /></a>
                    <a className='w-8 h-8 rounded-full bg-white flex items-center justify-center text-black text-[16px]'><FaLinkedinIn /></a>
                    <a className='w-8 h-8 rounded-full bg-white flex items-center justify-center text-black text-[16px]'><FaYoutube /></a>
                </div>
                {/* --------------------------------------- */}

                <div className='flex flex-col gap-[10px] xl:w-[20%] text-center xl:text-start items-center  xl:items-start lg:w-[50%] w-full'>
                    <img src='./Assets/Image/kalathiya-light-logo.png' className='max-w-[192px]' />
                    <p className='text-white text-[16px] font-[400] max-w-[300px] '>KALATHIYA Infotech leverages a diverse skill set to deliver tailored solutions, driving success in every endeavor. With a focus on innovation and customer satisfaction.</p>
                </div>

                {/* --------------------------------------- */}

                <div className='h-[200px] w-[0.5px] xl:block hidden bg-[#FFFFFF80]  my-auto ' >

                </div>
                {/* --------------------------------------- */}

                <div className='flex flex-col  xl:w-[23%] lg:w-[50%] w-full text-center xl:text-start items-center  xl:items-start '>
                    <h3 className='text-[24px] font-[700] mb-[10px]  text-white'>Quick Link</h3>
                    <div className='flex flex-col gap-1 xl:mb-[42px]'>
                        <NavLink to={"/"} className=' text-white text-[16px] font-[400] hover:text-[#8A49D6]'>Hire Dedicated Development</NavLink>
                        <NavLink to={"mobiledevelopment"} className=' text-white text-[16px] font-[400] hover:text-[#8A49D6]'>Mobile Application Development</NavLink>
                        <NavLink to={"webdevelopment"} className=' text-white text-[16px] font-[400] hover:text-[#8A49D6]'>Web Development</NavLink>

                    </div>

                    <div className='flex flex-col gap-1'>
                        <NavLink to={"/"} className=' text-white text-[16px] font-[400] hover:text-[#8A49D6] '>Home</NavLink>
                        <NavLink to={"about"} className=' text-white text-[16px] font-[400] hover:text-[#8A49D6]'>About</NavLink>
                    </div>

                </div>
                {/* --------------------------------------- */}

                <div className='h-[200px] w-[0.5px] xl:block hidden bg-[#FFFFFF80] my-auto' >
                    {/* --------------------------------------- */}

                </div>

                <div className='flex flex-col   xl:w-[32%] lg:w-[50%] w-full text-center xl:text-start items-center  xl:items-start'>
                    <h3 className='text-[24px] font-[700]  flex gap-[15px] items-center  text-white'><img src='./Assets/Image/indiaGate.svg' /> India</h3>

                    <div className='flex gap-2  items-center my-[15px]'>
                        <a className='w-[31px] h-[31px] rounded-full bg-white flex items-center justify-center text-black text-[16px]'><MdCall /></a>
                        <p className='text-white text-[16px] font-[400]'>+0261 3102715</p>
                    </div>
                    <div className='flex gap-2  flex-col'>
                        <a
                            href="https://maps.app.goo.gl/faH8vdvaTZ14pHHL8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-[16px] font-[400] leading-7 xl:max-w-[283px]"
                        >
                            102-103 Silver Point, Jivanjyot Circle, Nr Yogi chowk Road, Surat -395010 <br /> (Head Office)
                        </a>

                        <div className='xl:max-w-[150px] w-full h-[0.5px] bg-[#FFFFFF80] ' ></div>

                        <a
                            href="https://maps.app.goo.gl/Cj5mC6dC8XqVfYgbA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-white text-[16px] font-[400] leading-7 '
                        >
                            402 - 405 Astha Shoppers NearBy BhagvanMahavir Collage, Vesu, Surat -395007 <br />  (Branch)
                        </a>
                    </div>

                </div>
                {/* --------------------------------------- */}

                <div className='h-[200px] w-[0.5px] bg-[#FFFFFF80] my-auto xl:block hidden' >

                </div>

                {/* --------------------------------------- */}

                <div className='flex flex-col  xl:w-[25%] lg:w-[50%] w-full text-center xl:text-start items-center  xl:items-start '>
                    <h3 className='text-[24px] font-[700]  flex gap-[20px] items-center  text-white'><img src='./Assets/Image/canada.svg' />Canada</h3>

                    <div className='flex gap-2  items-center my-[15px]'>
                        <a className='w-[31px] h-[31px] rounded-full bg-white flex items-center justify-center text-black text-[16px]'><MdCall /></a>
                        <p className='text-white text-[16px] font-[400]'>+1 5199817124</p>
                    </div>

                    <a
                        href="https://maps.app.goo.gl/y4H22JrnhoD1mxco8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-[16px] font-[400] leading-7  xl:text-start"
                    >
                        855 King Street East,Unit 210 Cambridge, ON, Canada <br /> (Branch)
                    </a>


                    <div className='flex gap-2  items-center xl:mt-[60px] mt-4'>
                        <a className='w-[31px] h-[31px] rounded-full bg-white flex items-center justify-center text-black text-[16px]'><MdEmail /></a>
                        <p className='text-white text-[16px] font-[400]'>Info@kalathiyainfotech.com</p>
                    </div>

                </div>
                {/* --------------------------------------- */}


            </div>
        </footer>
    )
}
