import React from 'react'
import Banner from '../Banner/Banner.js';
import Footer from '../Footer/Footer.js';
import NewestCars from '../NewestCars/NewestCars.js';
import LowerBanner from '../LowerBanner/LowerBanner.js';
import SubFooter from '../SubFooter/SubFooter.js';

function Dashboard() {
  
  return (
    <div>
        <Banner />
        <NewestCars/>
        <LowerBanner />
        <Footer />
        <SubFooter />
    </div>
  )
}

export default Dashboard;