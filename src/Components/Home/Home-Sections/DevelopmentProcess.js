
const SDI1 = "./Assets/Image/SDI1.png"
const SDI2 = "./Assets/Image/SDI2.png"
const SDI3 = "./Assets/Image/SDI3.png"
const SDI4 = "./Assets/Image/SDI4.png"
const HowWeWorkIcon = "./Assets/Image/HowWeWorkIcon.png"


const ProcessStep = ({ title, description, icon, alignment, customMarginClass }) => {
    const isRightAligned = alignment === 'right';
    const flexDirectionClass = isRightAligned ? 'md:flex-row-reverse' : 'md:flex-row';
    const textAlignClass = isRightAligned ? 'md:text-right' : 'md:text-left';

    return (
        <div className={`flex flex-col items-center ${flexDirectionClass} gap-8 md:gap-16 p-4 md:p-6 ${customMarginClass}`}>

            <div className="flex-shrink-0 w-[250px] h-[200px] sm:w-[300px] sm:h-[240px] md:w-[355px] md:h-[284px] rounded-2xl flex items-center justify-center shadow-[0px_4px_9px_0px_rgba(138,73,214,1)] bg-white">
                <img
                    src={icon}
                    alt={title}
                    className="max-w-[60%] max-h-[60%] object-contain"
                />
            </div>

            <div className={`flex-grow text-center ${textAlignClass} max-w-full md:max-w-[730px]`}>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-black">
                    {title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-3xl font-medium leading-relaxed text-gray-700">
                    {description}
                </p>
            </div>
        </div>
    );
};

function DevelopmentProcess() {

    const workPoints = [
        "We have a pre-defined way of working determined through various experiments to be the most effective for us, our clients, and the product we are developing.",
        "We use an Agile method for all types of development, whether website design or mobile app development.",
        "Every day, we inform our clients about our progress. We get a lot of work done on some days and only a little on others. However, transparency is our motto.",
        "We have expertise in all the technologies we have worked on, but we are always looking for ways to grow and expand our knowledge.",
        "We know that one bug causes another 20, so we've covered our products with automated test cases. We also understand that one thing can cause another to break. So we use GitHub or BitBucket to keep track of all the changes.",
        "To understand requirements, manage tasks, and prioritize tasks, we use JIRA, Trello, Asana, and PivotTracker."
    ];

    return (
        <>
            <section className="w-full bg-white text-black relative overflow-hidden font-sans">


                <div className="container mx-auto px-4 py-8 md:py-16 relative z-10 flex flex-col justify-center items-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 md:mb-16 text-black max-w-[750px]  px-4">
                        WE SIMPLIFY THE <span className="text-[#8a49d5]"> SOFTWARE DEVELOPMENT</span> PROCESS
                    </h1>

                    <div className="grid grid-cols-1 gap-8 md:gap-12 lg:gap-16 w-full max-w-6xl">
                        <ProcessStep
                            title="Discover"
                            description="We shape brands through exploration, applying in-depth research to challenge assumptions at every turn."
                            icon={SDI1}
                            alignment="left"
                            customMarginClass="md:ml-0 md:mr-auto"
                        />
                        <ProcessStep
                            title="Design"
                            description="We create brands through exploration, applying in-depth research to challenge assumptions at every turn."
                            icon={SDI2}
                            alignment="right"
                            customMarginClass="md:mr-0 md:ml-auto"
                        />
                        <ProcessStep
                            title="Build"
                            description="We strive to innovate by using the latest technology, creating efficient solutions through smart work."
                            icon={SDI3}
                            alignment="left"
                            customMarginClass="md:ml-0 md:mr-auto"
                        />
                        <ProcessStep
                            title="Deliver"
                            description="By embracing iteration, we foster innovation, adaptability, and efficiency in everything we do."
                            icon={SDI4}
                            alignment="right"
                            customMarginClass="md:mr-0 md:ml-auto"
                        />
                    </div>
                </div>
            </section>




            {/* ------------- how we work */}

            <section className="w-full  flex items-center justify-center p-4 sm:p-6 md:p-8 font-sans relative">

                 <div className=' w-full h-[60%] absolute top-0 left-0 z-[-1]'>
                    <img src='./Assets/Image/work-up-bg.png' className=' w-full object-left-top object-cover bg-no-repeat  h-full' />
                </div>
                <div className=' w-full h-[43%] absolute bottom-0 left-0 z-[-1]'>
                    <img src='./Assets/Image/work-down-bg.png' className='  w-full   object-left-bottom object-cover bg-no-repeat h-full' />
                </div>

               

                <div className="relative rounded-t-[50px] md:rounded-t-[100px] w-full container mx-auto overflow-hidden">


                    <div className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-14 pt-16 md:pt-24 flex flex-col items-center text-center">

                        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-white shadow-[0px_4px_9px_0px_rgba(138,73,214,1)] flex items-center justify-center -mt-2 sm:-mt-4 md:-mt-5 mb-6">
                            <img
                                src={HowWeWorkIcon}
                                alt="How We Work Icon"
                                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
                            />
                        </div>


                        <h2 className="text-xl sm:text-2xl md:text-2xl font-bold text-black mb-8">
                            HOW WE WORK
                        </h2>


                        <ul className="list-none p-0 m-0 text-left w-full space-y-6">
                            {workPoints.map((point, index) => (
                                <li key={index} className="flex text-base sm:text-lg md:text-xl text-black leading-relaxed items-center font-medium">
                                    <span className="text-black text-xl sm:text-2xl md:text-2xl mr-3 -mt-1 sm:-mt-2 md:-mt-3">
                                        &bull;
                                    </span>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


                
            </section>
        </>

    );
}

export default DevelopmentProcess;
