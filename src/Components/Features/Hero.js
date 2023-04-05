import React from 'react'
import HeroImage from '../../images/illustration-working.svg'
import '../../App.css'

export default function Hero() {
  return (
    <main className=' heroMain'>
        <div className='col-md-7 heroContent'>
            <h1>More than just shorter links</h1>
            <p>
                Build your brand’s recognition and get detailed insights 
                on how your links are performing.
            </p>
            <button className='heroBtn mt-2'>Get Started</button>
        </div>
        <div className='col-md-5 heroImg'>
            <img src={HeroImage} alt='illustration of a person working img-responsive'/>
        </div>
    </main>
  )
}
