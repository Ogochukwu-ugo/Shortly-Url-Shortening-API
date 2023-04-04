import React, { useEffect, useState, useRef } from 'react';
import ShortenDesktop from '../../images/bg-shorten-desktop.svg';
import ShortenMobile from '../../images/bg-shorten-mobile.svg';
import '../../App.css';


function Shorten() {

    const [url, setUrl] = useState("");
    const [links, setLinks] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const inputRef = useRef(null);
    const [shortenHeight, setShortenHeight] = useState(null);



    // Get links from localStorage
    useEffect(() => {
        const storedLinks = JSON.parse(localStorage.getItem("links"));
        if (storedLinks) {
            setLinks(storedLinks);
        }
    }, []);

    useEffect(() => {
        if (inputRef.current) {
          setShortenHeight(inputRef.current.clientHeight);
        }
      }, [setShortenHeight]);

    useEffect(() => {
        if (shortenHeight) {
        document.documentElement.style.setProperty(
        "--shorten-section-height",
       ` ${shortenHeight}px`
        );
        }
        }, [shortenHeight]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        formValidation();
    };

    const formValidation = () => {
        if (url === "" || !url) {
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
          const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
          const data = await response.json();
          console.log(data.result);

          const newLink = {
            original_link: url,
            full_short_link: data.result.full_short_link,
            buttonText: 'Copy'
          };
        
          const updatedLinks = [...links, newLink];
         setLinks(updatedLinks);
         localStorage.setItem('links', JSON.stringify(updatedLinks));
          setUrl('');
        } catch (error) {
          console.error(error);
        }
    };

    
    const handleCopy = (index) => {
        navigator.clipboard.writeText(links[index].full_short_link);
        const newLinks = [...links];
        newLinks[index] = {...newLinks[index], buttonText: 'Copied!'};
        setLinks(newLinks);
    };
    

  return (
    <>
        <section className='statFormSection' style={{ marginBottom: `${shortenHeight}px` }}>
            <picture className='bgShorten'>
                <source srcSet={ShortenMobile} media="(max-width:499px)"/>
                 <img src={ShortenDesktop} alt='bg-desktop' className='rounded-3'/>
            </picture>
            <form className='statForm ' onSubmit={handleSubmit}>
                <input 
                    type='url' 
                    name='url' 
                    placeholder='Shorten a link here...' 
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className={`form-control-lg shortenLink ${errorMessage ? 'errorClass' : ''}`} 
                    ref={inputRef}
                />
               {errorMessage &&  <div className="errormsg">{errorMessage}</div>}
                <input 
                    type='submit' 
                    name='button' 
                    value='Shorten it!' 
                    className='btn btn-md' 
                    id='shortenBtn'
                />
            </form>
            <section className='result'>
                {links.map((link,index) => (
                    <article key={index} className='d-flex flex-md-row flex-column linkContainer'>
                        <div className='justify-content-center'>
                            <h6 className='my-auto' style={{wordWrap: 'break-word'}}>{link.original_link}</h6>
                        </div>
                        <div className='generateLine'></div>
                        <div className='generateContainer my-auto'>
                            <ul className='d-flex flex-md-row flex-column'>
                                <li className='generatedLink'>{link.full_short_link}</li>
                                <li className='copyBtnContainer'>
                                    <button className='btn copyBtn' onClick={() => handleCopy(index)}>
                                        {link.buttonText}
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </article>
                ))}
            </section>
        </section>
    </>
  )
}

export default Shorten