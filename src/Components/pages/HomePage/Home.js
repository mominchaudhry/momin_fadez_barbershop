import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjZero, homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data'

function Home({click}) {
    return (
        !click ?
        <>
            <HeroSection {...homeObjZero} />
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjTwo} />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjFour} />
        </> : <> </>
    )
}

export default Home
