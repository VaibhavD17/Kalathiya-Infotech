import React, { useEffect, useState } from 'react'


function AboutAndSkills() {
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
        <>

            {/* ---------------------About---------------------- */}

            <section className="py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-10 bg-white font-sans relative overflow-hidden">

                <div className="absolute top-0 left-0 h-[120%] flex items-center z-0" style={{ perspective: '1000px' }}>
                    <img
                        src={'./Assets/Image/About-Line 1.png'}
                        alt="Decorative Left"
                        className="object-contain h-full w-auto animate-spinX hidden md:block"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://placehold.co/100x600/F0E3FF/8A49D6?text=Left+Accent+Fallback";
                        }}
                    />
                </div>

                <div className="absolute top-0 right-0 h-[120%] flex items-center z-0" style={{ perspective: '1000px' }}>
                    <img
                        src={'./Assets/Image/About-Line 2.png'}
                        alt="Decorative Right"
                        className="object-contain h-full w-auto animate-spinX hidden md:block"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://placehold.co/100x600/F0E3FF/8A49D6?text=Right+Accent+Fallback";
                        }}
                    />
                </div>

                <div className="max-w-4xl mx-auto z-10">
                    <div className="text-center mb-6 ">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
                            <span className="block">ABOUT</span>
                            <span className="block text-[#8a49d6] mt-2 sm:mt-3 md:mt-4">KALATHIYA INFOTECH</span>
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-lg mx-auto leading-relaxed">
                            Kalathiya Infotech is a dynamic IT company dedicated to delivering cutting-edge solutions that empower businesses to thrive in the digital age. With a focus on innovation, reliability, and customer satisfaction, we have established ourselves as a trusted partner for businesses worldwide.
                        </p>
                    </div>
                </div>



                <div className='max-w-[1260px] w-full bg-[#F0E3FF] px-6 py-10 sm:px-10 sm:py-[54px] sm:pe-[80px] mx-auto mt-[40px] mb-[100px] rounded-[30px] flex flex-col lg:flex-row gap-8'>


                    <div className='w-full max-w-[370px] max-h-[470px] md:rounded-[30px] rounded-[20px] overflow-hidden mx-auto'>

                        <img

                            src='./Assets/Image/about-data-second.jpg'
                            className='w-full h-full max-w-[370px] max-h-[470px] object-cover object-center transition-transform duration-100 ease-linear'
                            style={{ transform: `scale(${scale})` }}
                            alt="About Image"
                        />
                    </div>

              
                    <div className='w-full flex flex-col gap-6 lg:w-[60%] z-10'>

                   
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

            {/* -------------------------Skills--------------------------------- */}

            <section className="relative  rounded-lg mx-auto py-[80px]   ">
                <div className=' w-full h-[60%] absolute top-0 left-0 z-[-1]'>
                    <img src='./Assets/Image/skill-top-bg.png' className=' w-full object-left-top object-cover bg-no-repeat  h-full' />
                </div>
                <div className=' w-full h-[41%] absolute bottom-0 left-0 z-[-1]'>
                    <img src='./Assets/Image/skill-bottom-bg.png' className='  w-full   object-left-bottom object-cover bg-no-repeat h-full' />
                </div>




                <div className="  z-10 px-4 flex flex-col items-center justify-center text-center max-w-7xl mx-auto ">
                    <div className="bg-white p-6 rounded-full mb-6 flex items-center justify-center shadow-[0px_4px_9px_0px_rgba(138,73,214,1)]"
                        style={{
                            width: '120px',
                            height: '120px',
                        }}
                    >
                        <img
                            src={'./Assets/Image/skill-icon.png'}
                            alt="Success Icon"
                            className="w-full h-full object-contain "
                        />
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold text-black uppercase tracking-wide mb-6">
                        Our Skills
                    </h2>

                    <p className="text-lg md:text-xl text-black leading-relaxed font-semibold">
                        At Kalathiya Infotech, our skills are as diverse as our team members. From technical expertise to creative problem-solving, our collective abilities drive our success and enable us to deliver exceptional results for our clients. Skills, combined with our dedication to excellence and integrity, form the foundation of our company's success. We continuously invest in the development of our team members, ensuring that we remain at the forefront of our industry and continue to deliver value to our clients.
                    </p>
                </div>




            </section>
        </>
    );
}

export default AboutAndSkills;


