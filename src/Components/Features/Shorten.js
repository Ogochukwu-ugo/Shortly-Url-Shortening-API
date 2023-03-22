import React, { useEffect, useState, useRef } from 'react';
import ShortenDesktop from '../../images/bg-shorten-desktop.svg';
import ShortenMobile from '../../images/bg-shorten-mobile.svg';
import '../../App.css';


const getLinkStored = () => {
    let links = localStorage.getItem("links")

    if (links) {
        return JSON.parse(links)
    } else {
        return [];
    }
};

function Shorten() {

    const [text, setText] = useState("");
    const [links, setLinks] = useState(getLinkStored());
    const [buttonText, setButtonText] = useState("Copy");
    const [errorMessage, setErrorMessage] = useState("");
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        formValidation();
    };

    const formValidation = () => {
        if (text === "") {
             setErrorMessage("Please add a link");
            console.log("Failed to input link");
            inputRef.current.focus();
            inputRef.current.classList.add('errorClass');
        } else {
            inputRef.current.classList.remove('errorClass');
            setErrorMessage("");
            shortenLink();
        }
    };


    const shortenLink = async () => {
        try {
          const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`);
          const data = await response.json();
    
          console.log(data.result);
          setLinks(data.result);
          setText('');
          saveLink(data.result); // Save the new link to localStorage
        } catch (error) {
          console.error(error);
        }
    };

    

    const handleCopy = (full_short_link) => {
        navigator.clipboard.writeText(full_short_link);
        setButtonText('Copied!');
    };

    useEffect(() => {
        const storedLinks = getLinkStored()
        setLinks(storedLinks)
    }, [])
    
    useEffect(() => {
    localStorage.setItem('links', JSON.stringify(links));
    }, [links]);

    
    const saveLink = (data) => {
        const newLink = { original_link: data.original_link, full_short_link: data.full_short_link }
        const links = getLinkStored()
        const updatedLinks = [...links, newLink]
        localStorage.setItem('links', JSON.stringify(updatedLinks))
      }

  return (
    <>
        <section className='statFormSection'>
            <picture className='bgShorten'>
                <source srcSet={ShortenMobile} media="(max-width:499px)"/>
                 <img src={ShortenDesktop} alt='bg-desktop' className='rounded-3'/>
            </picture>
            <form className='statForm ' onSubmit={handleSubmit}>
                <input 
                    type='url' 
                    name='url' 
                    placeholder='Shorten a link here...' 
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className={`form-control-lg ${errorMessage ? 'errorClass' : ''}`} 
                    id='shortenLink'
                    ref={inputRef}
                />
               {errorMessage &&  <div className="errormsg">{errorMessage}</div>}
                <input 
                    type='submit' 
                    name='button' 
                    value='Shorten it!' 
                    className='btn btn-md' 
                    id='shortenBtn'
                    onClick={handleSubmit}
                />
            </form>

            
            <section className='d-flex flex-md-row flex-column linkContainer'>
                <div className='justify-content-center'>
                    <h6>{links.original_link}</h6>
                </div>
                <div className='generateLine'></div>
                <div className='generateContainer border-2'>
                    <ul className='d-flex flex-md-row flex-column border'>
                        <li className='generatedLink'>{links.full_short_link}</li>
                        <li>
                        <button className='btn copyBtn' onClick={() => handleCopy(links.full_short_link)}>
                            {buttonText}
                        </button>
                        </li>
                    </ul>
                </div>
            </section>
            
        </section>
    </>
  )
}

export default Shorten