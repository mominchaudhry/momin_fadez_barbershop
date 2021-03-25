import React from 'react'
import {Button} from './Button'
import {Link} from 'react-router-dom'
import './HeroSection.css'

function HeroSection({ lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, img, alt, imgStart }) {
    return (
        <>
            <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
                <div className="container">
                    <div className="row home__hero-row" style={{display:'flex', flexDirection: imgStart==='start' ? 'row-reverse' : 'row'}}>
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                <div className= {lightBg ? 'top-line-dark' : 'top-line'}>
                                    {topLine}
                                </div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                                <a href='https://mominfadez.setmore.com/' target='_blank'>
                                    <Button buttonSize='btn--wide' buttonColor='#525252'>{buttonLabel}</Button>
                                </a>

                            </div>
                        </div>
                        <div className="col">
                            <div className="home__hero-img-wrapper">
                                <img src={img} alt={alt} className="home__hero-img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection
