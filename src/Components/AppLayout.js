import React from 'react';
import Footer from './Footer/Footer';


function AppLayout({children}) {
  return (
    <div>
        <div>
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default AppLayout