import React from 'react'
import Banner from '../Banner/Banner.js';
import Footer from '../Footer/Footer.js';
import Filter from '../../common/Filter/Filter.js';
import NewestCars from '../NewestCars/NewestCars.js';
import LowerBanner from '../LowerBanner/LowerBanner.js';
import SubFooter from '../SubFooter/SubFooter.js';
import styles from './Dashboard.module.css';
import {useState} from 'react';

function Dashboard() {
  // const[search,setSearch] = useState({});

  // const setSearchResult = (data)=>{
  //   setSearch(data);
  // };
  
  return (
    <div>
        <Banner />
        {/* <section className={styles['section-filter']}>
        <Filter value={{search,setSearchResult}}/>
        </section> */}
        <NewestCars/>
        <LowerBanner />
        <Footer />
        <SubFooter />
    </div>
  )
}

export default Dashboard;