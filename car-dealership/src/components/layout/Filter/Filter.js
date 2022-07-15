import React, { useState } from 'react';
import styles from '../Filter/Filter.module.css';

function Filter() {

    const[make,setMake] = useState('');
    const[model,setModel] = useState('');



  return (
    <section className={styles['section-filter']}>
      <form >
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <label htmlFor="">Used/New:</label>
            <select name="" id="" className={styles.group}>
              <option value="">Used</option>
              <option value="">New</option>
            </select>
          </div>


          <div className={styles.container}>
            <label htmlFor="">Vehicle Type:</label>
            <select name="" id="" className={styles.group}>
              <option value="">Used</option>
              <option value="">New</option>
            </select>
          </div>

          <div className={styles.container}>
            <label htmlFor="">Make:</label>
            {/* onChange={(e)=>setMake(e.target.value)} */}
            <select name="" id="" className={styles.group} value={make}>
              <option value="">Used</option>
              <option value="">New</option>
            </select>
          </div>

          <div className={styles.container}>
            <label htmlFor="">Model:</label>
            <select name="" id="" className={styles.group} value={model}>
              <option value="">Used</option>
              <option value="">New</option>
            </select>
          </div>

          <div className={styles.container}>
            <label htmlFor="">Used/New:</label>
            <select name="" id="" className={styles.group}>
              <option value="">Used</option>
              <option value="">New</option>
            </select>
          </div>


          <div className={styles.container}>
            <label htmlFor="">Vehicle Type:</label>
            <select name="" id="" className={styles.group}>
              <option value="">Used</option>
              <option value="">New</option>
            </select>
          </div>

          <div className={styles.container}>
            <label htmlFor="">Make:</label>
            <select name="" id="" className={styles.group}>
              <option value="">Used</option>
              <option value="">New</option>
            </select>
          </div>

          <div className={styles.container}>
            <label htmlFor="">Model:</label>
            <select name="" id="" className={styles.group}>
              <option value="">Used</option>
              <option value="">New</option>
            </select>
          </div>


          <div className={styles.container}>
            <label htmlFor="">Used/New:</label>
            <select name="" id="" className={styles.group}>
              <option value="">Used</option>
              <option value="">New</option>
            </select>
          </div>


          <div className={styles.container}>
            <label htmlFor="">Vehicle Type:</label>
            <select name="" id="" className={styles.group}>
              <option value="">Used</option>
              <option value="">New</option>
            </select>
          </div>

          <div className={styles.container}>
            <label htmlFor="">Make:</label>
            <select name="" id="" className={styles.group}>
              <option value="">Used</option>
              <option value="">New</option>
            </select>
          </div>

          <div className={styles.container}>
            <label htmlFor="">Model:</label>
            <select name="" id="" className={styles.group}>
              <option value="">Used</option>
              <option value="">New</option>
            </select>
          </div>

          <div className={styles.container}>
            <button className={styles.button}>Search</button>
          </div>
        </div>
        </form>
    </section>
  )
}

export default Filter;


