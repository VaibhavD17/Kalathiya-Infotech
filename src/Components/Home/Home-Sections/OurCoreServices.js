import { GoArrowRight } from "react-icons/go";
import { NavLink } from "react-router-dom";


function OurCoreServices() {
    const services = [
        {
            title: 'Mobile App Development',
            description:
                'We try to create team of developers for software development project on a short-term, long-term, or permanent basis with guaranteed project delivery at affordable prices.',
            icon: './Assets/Image/core-mobile-app.svg',
            pathLink:"mobiledevelopment"
        },
        {
            title: 'Web Development',
            description:
                'Our web developer can make client base websites and web application solutions. We Drop-ship Websites that can help you for the growth of your business using internet technology.',
            icon: './Assets/Image/core-web-dev.svg',
            pathLink:"webdevelopment"
        },
        {
            title: 'UI/UX Design',
            description:
                'UI design focuses on the visual elements and interactive components of a product, including layout, colors, typography, icons, buttons, and other graphical elements',
            icon: './Assets/Image/core-uiux.svg',
            pathLink:"uiuxdesign"
        },
        {
            title: 'Hire Directed Devleoper',
            description:
                'We try to create team of developers for software development project on a short-term, long-term, or permanent basis with guaranteed project delivery at affordable prices.',
            icon: './Assets/Image/core-hire-directed.svg',
            pathLink:"mobiledevelopment"
        },
        {
            title: '24/7 Support',
            description:
                'We provide the best services, ensuring immediate support interruption for any of your technical issues or challenges, our team is always available to assist you.',
            icon: './Assets/Image/core-support.svg',
            pathLink:"mobiledevelopment"
        },
    ];

    return (
        <section className='relative w-full py-[100px]' style={{
            backgroundImage: `url(./Assets/Image/curve-bg-big.png)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top center',

        }}>

            <div className="min-h-screen  flex flex-col items-center  px-4 font-inter gap-20 ">
                <h1 className="text-4xl md:text-5xl font-extrabold text-black mt-16 text-center tracking-wide uppercase z-10">
                    OUR <span className="text-[#8a49d6]">CORE </span> SERVICES
                </h1>

                <div className="flex flex-wrap justify-center gap-10 lg:gap-y-[125px] gap-y-[60px] w-full container mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={`top-row-${index}`}
                            className="w-full sm:w-[45%] lg:w-[30%] xl:w-[25%]  flex justify-center"
                        >
                            <ServiceCard
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                pathLink = {service.pathLink}
                            />
                        </div>
                    ))}
                </div>



            </div>
        </section>
    );
}

const ServiceCard = ({ icon, title, description,pathLink }) => (
    <div className="relative group w-full max-w-md h-full min-h-[500px] bg-[#8a49d6] rounded-[10px_50px_10px_50px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">

        {/* Top-right blob */}
        <div className="absolute w-32 h-32 bg-[#8a49d6] rounded-md opacity-0 group-hover:opacity-100 transition-all duration-500 z-0
              top-0 right-0 transform translate-x-[-150px] translate-y-[150px]
              group-hover:translate-x-[25px] group-hover:-translate-y-[25px]"></div>

        {/* Bottom-left blob */}
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#8a49d6] rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 transform -translate-x-[25px] translate-y-[25px]"></div>



        {/* Card content */}
        <div className="bg-[#f0e3ff] rounded-[10px_50px_10px_50px] shadow-[7px_8px_20.6px_-1px_rgba(0,0,0,0.25)] p-6 border-[5px] border-[#8a49d6] flex flex-col items-center text-center h-full transform transition-all duration-500 hover:border-0 z-30">

            <div className="relative z-10 flex flex-col items-center text-center w-full h-full">

                {/* Icon */}
                <div className="bg-[#8a49d6] rounded-full p-3 mb-4 mt-2 flex items-center justify-center w-16 h-16">
                    <img src={icon} className="w-8 h-8 object-contain" />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4">{title}</h3>

                {/* Description */}
                <p className="text-black font-medium text-base sm:text-lg md:text-xl flex-grow flex items-end">{description}</p>

                {/* CTA */}
                <div className='flex flex-col items-end w-full mt-4'>
                    <NavLink to={pathLink} className="flex items-center justify-end p-2 border-[#8a49d6] border rounded-full bg-transparent group-hover:bg-[#8a49d6] transition-colors duration-500">
                        <GoArrowRight className='text-xl sm:text-2xl text-purple-700 rotate-[-45deg] group-hover:rotate-0 group-hover:text-white transition-all duration-500' />
                    </NavLink>
                    <span className="text-purple-700 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-1">
                        Read More
                    </span>
                </div>
            </div>
        </div>
    </div>
);


export default OurCoreServices;