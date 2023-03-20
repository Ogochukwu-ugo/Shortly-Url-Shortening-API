import React from 'react'
import '../../App.css'

const Card = ({img, title, detail}) => {
  return (
    <div className='position-relative'>
        <div className='brandBG'>
            <img src={img} alt='brand icon' className='img-responsive icon'/>
        </div>
        <div className='card'>
            <h6>{title}</h6>
            <p>{detail}</p>
        </div>
    </div>
  )
}
export default Card