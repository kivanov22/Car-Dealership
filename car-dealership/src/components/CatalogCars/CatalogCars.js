import React from 'react'
import styles from '../CatalogCars/CatalogCars.module.css';
// import carsParameters from '../../scripts/carsParameters.js';
import bmw from '../../assets/img/product-3-720x480.jpg';


function CatalogCars() {
  return (
    <div className={styles.catalog}>
        <div className={styles.column}>
            <div className={styles.row}>

                <form action="">
                  <ul className={styles['list-cars']}>
                    <li className={styles['cars-desc']}>
                    <div className={styles.container}>
                      {/* {carsParameters.map(()=>)} */}
                      <label htmlFor="">New/Used</label>
                    <select className={styles['form-control']}>
                     <option value="">All</option>
                     <option value="new">New vehicle</option>
                     <option value="used">Used vehicle</option>
                      </select>
                    </div>
                    </li>
                    <li className={styles['cars-desc']}>
                    <div className={styles.container}>
                      {/* {carsParameters.map(()=>)} */}
                      <label htmlFor="">Make</label>
                    <select className={styles['form-control']}>
                     <option value="">All</option>
                     <option value="new">New vehicle</option>
                     <option value="used">Used vehicle</option>
                      </select>
                    </div>
                    </li>
                  </ul>
                </form>

                <div className={styles['cars-container']}>
                  <div className={styles['car-img']}>
                    <img src={bmw} alt="" className={styles.carImage} />
                  </div>
                  <div className={styles.desc}>
                    <h2>Model Make</h2>
                    <p>Price</p>
                    <p>Description</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CatalogCars;