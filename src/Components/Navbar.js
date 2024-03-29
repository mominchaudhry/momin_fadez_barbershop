import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, } from 'react-icons/fa'
import { Button } from './Button'
import './Navbar.css'
import { IconContext } from 'react-icons/lib'
import image1 from '../white_logo_transparent_background.png';

function Navbar({click, setClick}) {
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#c6c6c6' }}>
                <div className="navbar">
                    <div className="navbar-container container">
                        <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                            <img className='navbar-icon' src={image1} loading='lazy' width='120' alt='navbar'/>
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                                    Services
                                </Link>
                            </li>
                            <li className='nav-btn'>
                                {button ? (
                                    <Link to='/book' className="btn-link" onClick={closeMobileMenu}>
                                        <Button buttonStyle='btn--outline'>Book Now</Button>
                                    </Link>
                                ) : (
                                    <Link to='/book' className="btn-link" onClick={closeMobileMenu}>
                                        <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>Book Now</Button>
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
