import React from 'react'
import HeroSection from '../../HeroSection'
import {haircut, beard, fullService, cleanup} from './Data'

function Services() {
    return (
        <>
            <HeroSection {...fullService} />
            <HeroSection {...haircut} />
            <HeroSection {...cleanup} />
            <HeroSection {...beard} />
            
        </>
    )
}

export default Services