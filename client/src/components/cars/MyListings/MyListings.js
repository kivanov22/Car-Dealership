import React from 'react'
import styles from "../MyListings/MyListings.module.css";
import {useEffect} from 'react';
import {useState} from 'react';
import { Link } from "react-router-dom";
import * as carService from '../../../services/carService.js';
import * as auth from '../../common/userLocalStorage.js';
import { useContext } from "react";
import { AuthContext } from '../../../context/authContext.js';

function MyListings() {
  const [cars, setCars] = useState([]);
  const {user} = useContext(AuthContext);

  useEffect(()=>{
    carService.myCars(user.id)
    .then(carData =>
      setCars(carData));
      
  },[]);

  return (
    <section className={styles.catalog}>
      <div className={styles.row}>
      <div className={styles.rightSide}>
        <ul className={styles['cars-list']}>
          {cars.map((car) => (
            <li key={car.id}>
              <div className={styles["cars-container"]}>
                <div className={styles["car-img"]}>
                  <img src={car.imageUrl} alt="" className={styles.carImage} />
                </div>
                <div className={styles.desc}>
                  <p className={styles["car-title"]}>{car.make} {car.model}</p>
                  <p>Price: {car.price}$</p>
                  <p>
                    {car.year} / Fuel: {car.fuel} / Gearbox: {car.gearbox}/ Doors:{car.doors} /
                  </p>
                  <button className={styles.detailsBtn}>
                  <Link className={styles.detailsBtnLink} to={`/details/${car.id}`}>Details</Link>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </section>
  )
}

export default MyListings;