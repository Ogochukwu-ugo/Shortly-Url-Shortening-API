import React from 'react'
import '../../App.css'
import Cards from './Cards'
import Shorten from './Shorten'



function Statistics() {
   
  return (
    <main className='statistics'>
        <Shorten/>
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
    </main>
  )
}

export default Statistics