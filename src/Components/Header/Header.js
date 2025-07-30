import React, { useEffect, useState } from 'react';
import { Menu, X } from "lucide-react";
import { IoCall } from "react-icons/io5";
import { NavLink, useLocation } from 'react-router-dom';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("home");
    const [activeService, setActiveService] = useState(false);
    const [activeServicePage, setActiveServicePage] = useState("");
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 80) {

                setShowHeader(false);
                setActiveService(false);
            } else {

                setShowHeader(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);


    useEffect(() => {
        const path = location.pathname;
        if (path === "/") setActiveLink("home");
        else if (path.includes("about")) setActiveLink("about");
        else if (path.includes("contact")) setActiveLink("contact");
        else if (path.includes("webdevelopment") ||
            path.includes("mobiledevelopment") ||
            path.includes("seo") ||
            path.includes("uiuxdesign") ||
            path.includes("responsivewebdesign") ||
            path.includes("fullstackdevelopment") ||
            path.includes("digitalmarketing") ||
            path.includes("reactnative")) {
            setActiveLink("services");

        }
    }, [location]);

    useEffect(() => {
        const path = location.pathname;
        const matchedService = services.find(service => path.includes(service.link.replace("/", "")));
        if (matchedService) {
            setActiveServicePage(matchedService.id);
        }
    }, [location]);



    const services = [
        { id: 1, name: "Web Development", link: "/webdevelopment" },
        { id: 2, name: "Mobile App Development", link: "/mobiledevelopment" },
        { id: 3, name: "Search Engine Optimization", link: "/seo" },
        { id: 4, name: "UI/UX Design", link: "/uiuxdesign" },
        { id: 5, name: "Responsive Web Design", link: "/responsivewebdesign" },
        { id: 6, name: "Full Stack Development", link: "/fullstackdevelopment" },
        { id: 7, name: "Digital Marketing", link: "/digitalmarketing" },
        { id: 8, name: "React Native", link: "/reactnative" },
    ];

    const HandleServicePage = (id) => {
        setActiveServicePage(id);
        setActiveService(false);
        setMenuOpen(false);
    }


    const handleLinkClick = (name) => {
        setActiveLink(name);


        if (name === "services") {
            setActiveService(!activeService);
        } else {
            setActiveService(false);
            setMenuOpen(false);
            setActiveServicePage("")
        }
    };

    return (
        <header className={`w-full sticky top-0 left-0 z-[999] transition-transform duration-700 ${showHeader ? "translate-y-0" : "-translate-y-full"}`}>


            <div className="w-full bg-[#282828]">
                <div className="max-w-[1480px] w-full m-auto bg-[#8A49D6] px-[40px]  h-[60px] hidden md:flex items-center overflow-hidden relative">
                    <h3
                        className="absolute left-0 text-white  w-full font-[400] text-[16px] sm:text-[20px] animate-slide-loop"
                        style={{ fontFamily: "Inknut Antiqua" }}
                    >
                        Info@kalathiyainfotech.com
                    </h3>
                </div>
            </div>

            <style>
                {`
                    @keyframes slide-loop {
                        0% {
                        transform: translateX(0%);
                        }
                        100% {
                        transform: translateX(100%);
                        }
                    }

                    .animate-slide-loop {
                        animation: slide-loop 10s linear infinite;
                        white-space: nowrap;
                    }
                `}
            </style>

            <div className='w-full bg-white h-[80px]'>
                <div className="w-full h-full  max-w-[1480px] mx-auto  px-4 flex items-center justify-between">

                    <div className="text-xl font-bold text-blue-600">
                        <img src="./Assets/Image/kalathiya-main-logo.png" className="w-[193px]" alt="Logo" />
                    </div>


                    <nav className="hidden md:flex lg:gap-[50px] gap-4 h-full items-center justify-center">
                        <div className="relative h-full flex items-center">
                            <NavLink
                                to="/"
                                onClick={() => handleLinkClick("home")}
                                className={`text-[16px] font-[500] cursor-pointer px-2 ${activeLink === "home" ? "text-[#8A49D6]" : "text-black"}`
                                } >Home</NavLink>
                            {activeLink === "home" && (
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[7px] bg-[#8A49D6] rounded-t-md transition-all duration-300"></div>
                            )}
                        </div>

                        <div className="relative h-full flex items-center">
                            <NavLink
                                to={"about"}
                                onClick={() => handleLinkClick("about")}
                                className={`text-[16px] font-[500] cursor-pointer px-2 ${activeLink === "about" ? "text-[#8A49D6]" : "text-black"
                                    }`}
                            >About Us</NavLink>
                            {activeLink === "about" && (
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[7px] bg-[#8A49D6] rounded-t-md transition-all duration-300"></div>
                            )}
                        </div>

                        <div className="relative h-full flex items-center">
                            <NavLink
                                onClick={() => handleLinkClick("services")}
                                className={`text-[16px] font-[500] cursor-pointer px-2 ${activeLink === "services" ? "text-[#8A49D6]" : "text-black"
                                    }`}
                            >Services</NavLink>
                            {activeLink === "services" && (
                                <>
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[7px] bg-[#8A49D6] rounded-t-md transition-all duration-300"></div>


                                </>
                            )}

                            {
                                activeService ? (
                                    <div className='absolute top-full left-1/2 -translate-x-1/2 bg-white rounded-2xl w-[583px] flex items-center justify-between p-[40px]' style={{ boxShadow: "0px 4px 4px 0px #00000040" }}>


                                        <div className='w-[45%] flex justify-center'>
                                            <img src='./Assets/Image/service-img.png' className='w-[100%]' />
                                        </div>


                                        <div className='h-[292px] w-[1px] mx-[20px]' style={{ background: "linear-gradient( #FFFFFF 0%, #CCCCCC 9.62%, #CCCCCC 90%, #FFFFFF 100%)" }}></div>



                                        <ul className='flex w-[45%]  flex-col gap-3' >
                                            {
                                                services.map((service, index) => (
                                                    <li>
                                                        <NavLink
                                                            to={service.link}
                                                            onClick={() => HandleServicePage(service.id)}
                                                            className={`text-[16px]  font-[500]  leading-[20px] 
                                                            ${activeServicePage === service.id ? `text-[#8A49D6]` : "text-black"} 
                                                            `}>{service.name}</NavLink>
                                                    </li>
                                                ))
                                            }

                                        </ul>
                                    </div>
                                )
                                    :
                                    null
                            }



                        </div>

                        <div className="relative h-full flex items-center">
                            <NavLink
                                to="/contact"
                                onClick={() => handleLinkClick("contact")}
                                className={`text-[16px] font-[500] cursor-pointer px-2 ${activeLink === "contact" ? "text-[#8A49D6]" : "text-black"
                                    }`}
                            >Contact us</NavLink>
                            {activeLink === "contact" && (
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[7px] bg-[#8A49D6] rounded-t-md transition-all duration-300"></div>
                            )}
                        </div>



                    </nav>


                    <a className="hidden md:flex lg:text-[20px] text-[18px] text-black font-[400] items-center gap-1 ">
                        <IoCall /> +0261 3102715
                    </a>


                    <button
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                        className="md:hidden text-[#8A49D6]"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>


                <div
                    className={`md:hidden bg-white shadow-md overflow-hidden transition-all duration-700 ease-in z-50 ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <nav className="flex flex-col items-start  px-4 py-4 space-y-3">
                        <NavLink
                            to={'/'}
                            onClick={() => handleLinkClick("home")}
                            className={`text-[16px] font-[500] cursor-pointer px-2 ${activeLink === "home" ? "text-[#8A49D6]" : "text-black"
                                }`} >
                            Home
                        </NavLink>

                        <NavLink
                            to={'/about'}
                            onClick={() => handleLinkClick("about")}
                            className={`text-[16px] font-[500] cursor-pointer px-2 ${activeLink === "about" ? "text-[#8A49D6]" : "text-black"
                                }`}
                        >About Us</NavLink>


                        <NavLink
                            onClick={() => handleLinkClick("services")}
                            className={`text-[16px] font-[500] cursor-pointer px-2 ${activeLink === "services" ? "text-[#8A49D6]" : "text-black"
                                }`}
                        >Services</NavLink>

                        {
                            activeService && (

                                <ul className='flex  flex-col bg-[#F0E3FF] rounded-lg gap-3 p-4 shadow-lg overflow-hidden transition-all duration-1000 ease-in-out z-50'
                                >

                                    {
                                        services.map((service, index) => (
                                            <li>
                                                <NavLink
                                                    to={service.link}
                                                    onClick={() => HandleServicePage(service.id)}
                                                    className={`text-[16px]  font-[500]  leading-[20px] 
                                                            ${activeServicePage === service.id ? `text-[#8A49D6]` : "text-black"} 
                                                            `}>{service.name}</NavLink>
                                            </li>
                                        ))
                                    }


                                </ul>
                            )
                        }



                        <NavLink
                            to={'/contact'}
                            onClick={() => handleLinkClick("contact")}
                            className={`text-[16px] font-[500] cursor-pointer px-2 ${activeLink === "contact" ? "text-[#8A49D6]" : "text-black"
                                }`}
                        >Contact us</NavLink>
                    </nav>
                    <div className="max-w-[1480px] m-auto bg-[#8A49D6] px-[40px] py-[20px]  md:hidden flex justify-center
                     items-center sm:flex-row flex-col gap-y-3">
                        <h3
                            className="sm:text-[20px] text-[16px] text-white font-[400]"
                            style={{ fontFamily: "Inknut Antiqua" }}
                        >
                            Info@kalathiyainfotech.com
                        </h3>


                    </div>
                </div>
            </div>
        </header>
    );
}
