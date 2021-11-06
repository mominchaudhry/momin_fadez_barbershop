import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaGoogle
} from 'react-icons/fa';
import image1 from '../../../white_logo_transparent_background.png';


function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <Link to='/'><h2>Home</h2></Link>
          </div>
          <div className='footer-link-items'>
            <Link to='/services'><h2>Services</h2></Link>
          </div>
          <div className='footer-link-items'>
            <Link to='/book'><h2>Book Now</h2></Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            <img className='navbar-icon' src={image1} loading='lazy' width='120' alt='home'/>
            </Link>
          </div>
          <small className='website-rights'>MOMIN FADEZ © 2020</small>
          <div className='social-icons'>
            <a
              className='social-icon-link'
              href='https://www.facebook.com/mominfadez/?ref=py_c&__xts__[0]=68.ARD6sXpoVLAMCS4KBa6YhgKSogKw4brEAjNafU7FjjdT58M9ZE8RvJIFf5xUl51N7VPCrDwpf9G6w92o0SUc-5MJx4DwiGSnP-5YCxR-ztsFNZiE8bMoIxyVDvK2f0-NlJzV91na00DaCu9ACqxeId3535mwJNTyGwsgtt79uYImS8956_Pg2Cp3zyc7TC0qBWmaLZR8rzUPfWJ-jYml9RZs2xeJ15a8kL0mjSzzBnahnP797tUtQRYFhFfEZUdbiCfwJLFcg9KYICKHEJZMqK3uMhaeBN2mIKumRbJi3EUOIU0Npsr9qyBsKt27beepdCUtqfvOmw0EA8h2ru6lRMWjC4TU&__xts__[1]=68.ARAQewdOwNWoQwoEucDWOKOiJSGiJ0h61yik6DzB7Z8SJgepEwkindgH4yBv72jf3mCyo1CIf6ffMSUIotL36_TDjJGcgSAlDXnU5kEDvgDdA1xpEbshbHxURgeITFyKgPU5tNZNbK6k4A8aMAmc3hmw0AEItC47SX0hOTUM7i8e6qzNExK_1KPme5yEi0KwkXQjFf08ZD0g3vxEOAqRydsEchEhHT6pHhNwdVanPJNyBDB0bniU6rExLhwRYIappGL55SOat3wKoxYbvo5FIGQv1C0VFp_atFaOUq87B1Br_Cijej8rE4xaPpNPQxFlU_CAsNhvfAmt0W1wK7ELyNFjB2pa'
              target='_blank' rel='noreferrer'
            >
              <FaFacebook />
            </a>
            <a
              className='social-icon-link'
              href='https://www.instagram.com/momin_fadez/?hl=en'
              target='_blank' rel='noreferrer'
            >
              <FaInstagram />
            </a>
            <a
              className='social-icon-link'
              href='https://www.google.com/search?q=momin+fadez+barbershop&ei=GiFcYIivG6aD9PwPurG74AE&oq=momin+fadez+barbershop&gs_lcp=Cgdnd3Mtd2l6EAMyAggmOgUIJhCwA1D9EViGM2DzN2gDcAB4AIAB4AGIAZQLkgEFNy4zLjKYAQCgAQGqAQdnd3Mtd2l6yAEBwAEB&sclient=gws-wiz&ved=0ahUKEwiIpPfA3MrvAhWmAZ0JHbrYDhwQ4dUDCA0&uact=5'
              target='_blank' rel='noreferrer'
            >
              <FaGoogle />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;