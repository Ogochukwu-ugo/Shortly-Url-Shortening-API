import React from 'react'
import AppLayout from '../AppLayout'
import Hero from './Hero'
import Statistics from './Statistics'

function Features() {
  return (
    <AppLayout>
      <div>
        <Hero/>
        <Statistics/>
      </div>
    </AppLayout>
  )
}

export default Features