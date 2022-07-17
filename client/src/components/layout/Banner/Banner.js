import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from '../Banner/Banner.module.css';
import car1 from "../../../assets/cars/audi.jpg";
import car2 from "../../../assets/cars/mercedes.jpg";
import car3 from "../../../assets/cars/mercedes2.jpg";


function Banner() {
  return (
    <div className={styles.wrapper}>
            <div className={styles['carousel-container']}/>
            <Carousel
             autoPlay
             infiniteLoop
             showStatus={false}
             showIndicators={false}
             showThumbs={false}
             interval={5000}
            >
               <div>
                   <img loading="lazy" src={car1} alt="" />
               </div>

               <div>
               <img loading="lazy" src={car2} alt="" />
               </div>

               <div>
               <img loading="lazy" src={car3} alt="" />
               </div>
            </Carousel>
        </div>
  )
}

export default Banner;