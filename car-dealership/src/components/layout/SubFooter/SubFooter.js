import React from 'react'
import styles from '../SubFooter/SubFooter.module.css';

function SubFooter() {
  return (
    <footer>
     <div className={styles.subfooter}>
    <p className={styles['footer-text']}>Created with React. By Kristian Ivanov.</p>
      </div>     
    </footer>
  )
}

export default SubFooter;