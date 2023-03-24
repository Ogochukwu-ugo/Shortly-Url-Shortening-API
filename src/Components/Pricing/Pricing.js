import React from 'react';
import AppLayout from '../AppLayout';
import Hero from '../Features/Hero';
import Statistics from '../Features/Statistics';

function Pricing() {
  return (
    <AppLayout>
      <div>
        <Hero/>
        <Statistics/>
      </div>
    </AppLayout>
  )
}

export default Pricing