import React from 'react';
import Footer from './Footer/Footer';


function AppLayout({children}) {
  return (
    <main>
        <div>
            {children}
        </div>
        <Footer/>
    </main>
  )
}

export default AppLayout