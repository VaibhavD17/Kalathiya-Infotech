import React from 'react'
import OurCoreServices from './Home-Sections/OurCoreServices'
import Technologies from './Home-Sections/Technologies'
import AboutAndSkills from './Home-Sections/AboutSectionHome'
import HeroHome from './Home-Sections/HeroHomeSection'
import DevelopmentProcess from './Home-Sections/DevelopmentProcess'
import JoinOurFamily from './Home-Sections/JoinOurFamily'



export default function Home() {
    return (
        <>
            <HeroHome />
            <AboutAndSkills />
            <Technologies />
            <OurCoreServices />
            <DevelopmentProcess />
            <JoinOurFamily />
        </>
    )
}

