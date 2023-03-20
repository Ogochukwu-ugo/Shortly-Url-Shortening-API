import React, { useState } from 'react'
import Shortendesktop from '../../images/bg-shorten-desktop.svg'
import Shortenmobile from '../../images/bg-shorten-mobile.svg'
import '../../App.css'
import Cards from './Cards'



// GET/POST: https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html


function Statistics() {

    const [url, setUrl] = useState(" ");
    const [links, setLinks] = useState([ ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!url) {
            alert("Input a link")
        } else{
            const shortenLink = async () => {
                const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
                const data = await response.json();

                console.log(data.result);
                setLinks(data.result)
                setUrl(" ")
            }
            shortenLink()
        }
    }



  return (
    <div className='statistics'>
        <section className='statFormSection'>
            <picture className='bgShorten'>
                <source srcSet={Shortenmobile} media="(max-width:499px)"/>
                 <img src={Shortendesktop} alt='bg-desktop' className='rounded-3'/>
            </picture>
            <form className='statForm ' onSubmit={handleSubmit}>
                <input 
                    type='url' 
                    name='url' 
                    placeholder='Shorten a link here...' 
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className='form-control-lg' 
                    id='shortenLink'
                    required
                />
                <input 
                    type='submit' 
                    name='button' 
                    value='Shorten it!' 
                    onClick={handleSubmit}
                    className='btn btn-md' 
                    id='shortenBtn'
                />
            </form>

            <section className='d-flex flex-md-row flex-column justify-content-between align-items-center text-center linkContainer'>
                <div className='justify-content-center'>
                    <h6>{links.original_link}</h6>
                </div>
                <hr className='d-md-none' />
                <div >
                    <ul className='d-flex flex-md-row flex-column justify-content-md-center justify-content-left '>
                        <li className='generatedLink me-md-2 me-0 mb-md-0 mb-2'>{links.full_short_link}</li>
                        <li><button className='btn copyBtn'>Copy</button></li>
                    </ul>
                </div>
            </section>
        </section>
        <article className='advanceStat'>
            <h3>Advanced Statistics</h3>
            <p className='mx-auto'>
                Track how your links are performing across the web with our 
                advanced statistics dashboard.
            </p>
        </article>
        <div>
            <Cards/>
        </div>
    </div>
  )
}

export default Statistics