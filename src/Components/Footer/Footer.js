import React from 'react'
import Footerlogo from '../../images/footer-logo .svg'
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai'
import { BsPinterest, BsInstagram } from 'react-icons/bs'
import './Footer.css'
import Bgdesktop from '../../../src/images/bg-boost-desktop.svg'
import Bgmobile from '../../../src/images/bg-boost-mobile.svg'

const Footer = () => {
  return (
    <footer className='py-auto'>
        <section className='footerBG mx-auto'>
            <picture className='bgBoost'>
                <source srcSet={Bgmobile} media="(max-width:499px)"/>
                 <img src={Bgdesktop} alt='bg-desktop' className='img-responsive w-100'/>
            </picture>
            <div className='bgBoostText'>
                <p>Boost your links today</p>
                <button>Get Started</button>
            </div>  
        </section>
        <section className='row footerMain mx-auto'>
            <div className='col-md-4 footerLogo'>
                <img src={Footerlogo} alt='logo'/>
            </div>
            <div className='col-md-8 footerNav mt-md-0 mt-2'>
                <div className='row'>
                    <div className='col-md-3 footerLinkContainer'>
                        <h5>Features</h5>
                        <ul>
                            <li>Link Shortening</li>
                            <li>Branded Links</li>
                            <li>Analytics</li>
                        </ul>
                    </div>
                    <div className='col-md-3 footerLinkContainer'>
                    <h5>Resources</h5>
                        <ul>
                            <li>Blog</li>
                            <li>Developers</li>
                            <li>Support</li>
                        </ul>
                    </div>
                    <div className='col-md-3 footerLinkContainer'>
                    <h5>Company</h5>
                        <ul>
                            <li>About</li>
                            <li>Our Team</li>
                            <li>Careers</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className='col-md-3 footerLinkContainer'>
                        <div className='socialIcons'>
                            <AiFillFacebook className='icons'/>
                            <AiOutlineTwitter className='icons'/>
                            <BsPinterest className='icons'/>
                            <BsInstagram className='icons'/>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </footer>
  )
}

export default Footer