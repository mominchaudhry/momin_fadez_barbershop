import React from 'react'
import HeroSection from '../../HeroSection'
import {haircut, beard, fullService} from './Data'

function Services() {
    return (
        <>
            <HeroSection {...haircut} />
            <HeroSection {...beard} />
            <HeroSection {...fullService} />
        </>
    )
}

export default Services