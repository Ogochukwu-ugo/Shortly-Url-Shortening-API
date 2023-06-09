import React from 'react';
import Brand1 from '../../images/icon-brand-recognition.svg';
import Brand2 from '../../images/icon-detailed-records.svg';
import Brand3 from '../../images/icon-fully-customizable.svg';

const Cards = () => {
  return (
    <main className='mx-auto cardContainer'>
        <div className='card1'>
            <div className='brandBG brand1'>
                <img src={Brand1} alt='brand icon' className='img-responsive icon'/>
            </div>
            <div className='card'>
                <h6>Brand Recognition</h6>
                <p>
                    Boost your brand recognition with each click. Generic links don’t mean a thing. 
                    Branded links help instil confidence in your content.
                </p>
            </div>
        </div>
         <div className="line" />
        <div className='card2'>
            <div className='brandBG brand2'>
                <img src={Brand2} alt='brand icon' className='img-responsive icon'/>
            </div>
            <div className='card'>
                <h6>Detailed Records</h6>
                <p>
                    Gain insights into who is clicking your links. 
                    Knowing when and where people engage with your content helps inform better decisions.
                </p>
            </div>
        </div>
            <div className="line line2" />
        <div className='card3'>
            <div className='brandBG brand3'>
                <img src={Brand3} alt='brand icon' className='img-responsive icon'/>
            </div>
            <div className='card'>
                <h6>Fully Customizable</h6>
                <p>
                    Improve brand awareness and content discoverability through customizable links, 
                    supercharging audience engagement.
                </p>
            </div>
        </div>
        
    </main>
  )
}

export default Cards