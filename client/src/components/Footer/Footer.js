import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {SOCIAL_MEDIA_ACCOUNTS} from '../../utils/constants.js';
import styles from '../Footer/Footer.module.css';
import logo from '../../assets/cars.png'

function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.container}>
          <img src={logo} className={styles.logoSize} alt="" />
          <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          dolor?
        </p>
        <ul className={styles.listIcons}>
          {
            SOCIAL_MEDIA_ACCOUNTS.map(({key,icon,url})=>(
              <li
              key={key}
              className={styles.icons}
            >
              <a href={url}>
                <FontAwesomeIcon icon={icon} />
              </a>
            </li>
            ))
          }
        </ul>
        </div>
        
      </div>

          <div className={styles.wrapMiddle}>
          <h2 className={styles.usefulLinks}>Useful Links</h2>
    <div className={styles.firstMiddle}>
      <ul className={styles.listLinks}>
        <li ><a className={styles['footer-links']} href="">Home</a></li>
        <li ><a className={styles['footer-links']} href="">About</a></li>
        <li ><a className={styles['footer-links']} href="">Team</a></li>
        <li ><a className={styles['footer-links']} href="">Contact Us</a></li>
        <li ><a className={styles['footer-links']} href="">Home</a></li>
        <li ><a className={styles['footer-links']} href="">About</a></li>
        <li ><a className={styles['footer-links']} href="">Team</a></li>
        <li><a className={styles['footer-links']} href="">Contact Us</a></li>
      </ul>
    </div>

    {/* <div className={styles.secondMiddle}>
    <ul className={styles.list}>
        <li ><a className={styles['footer-links']} href="">Home</a></li>
        <li ><a className={styles['footer-links']} href="">About</a></li>
        <li ><a className={styles['footer-links']} href="">Team</a></li>
        <li><a className={styles['footer-links']} href="">Contact Us</a></li>
      </ul>
    </div> */}
          </div>
     



    <div className={styles.right}>
    <h2 className={styles.contactInfo}>Contact Information</h2>
    <p>215 Dubai</p>
    <span className={styles.bluespans}>Phone:</span>
    <a href="" className={styles.phone}>0897560308</a>
    <span className={styles.bluespans}>Email:</span>
    <a href="" className={styles.email}>ivanov.contact@company.com</a>
    </div>

    </div>
  );
}

export default Footer;
