import React from 'react'
import styles from '../LowerBanner/LowerBanner.module.css';
import bmw from '../../assets/img/contact-image-1-1920x700.jpg'

function LowerBanner() {
  return (
    <section className={styles.banner}>
        <div className={styles.overlay}></div>
        <div className={styles.container}>
           <img src={bmw} alt="" className={styles.lower}/>
         </div>
           <div className={styles.contact}>
           <span className={styles['contact-span']}>Contact Us</span>
           <h2>Drive with passion !</h2>
           <a href="" className={styles.talk}>Talk to us</a>
          </div>
    </section>
  )
}

export default LowerBanner;