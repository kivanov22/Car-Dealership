import React from "react";
import styles from "../NewestCars/NewestCars.module.css";
import * as carService from '../../../services/carService.js';
import {useEffect} from 'react';
import {useState} from 'react';
import { Link } from "react-router-dom";

function NewestCars() {

  const [cars, setCars] = useState([]);

  useEffect(()=>{
    carService.getLatest()
    .then(carData =>setCars(carData));// console.log(carData)
  },[]);



  return (
    <section className={styles['section-new-cars']}>
      <h2>Newest Cars:</h2>

      <ul className={styles.list}>
      {cars.map((car) => (
        <li className={styles.item}  key={car.id}>
          <div className={styles.wrapper}>
            <div className={styles['featured-car']}>
              <div className={styles.thumb}>
                <div className={styles['thumb-img']}>
                  <img src={car.imageUrl} alt="" className={styles.carImg}/>
                </div>
                <div className={styles['overlay-content']}>
                  <strong className={styles['strong-fields']}>
                    <i className="fa fa-dashboard"></i> {car.mileage}km
                  </strong>{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <strong className={styles['strong-fields']}>
                    <i className="fa fa-cube"></i> {car.engizeSize} cc
                  </strong>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <strong className={styles['strong-fields']}>
                    <i className="fa fa-cog"></i> {car.gearbox}
                  </strong>
                </div>
              </div>
              <div className={styles['down-content']}>
                <h4>{car.miniDescription}</h4>

                <br />

                <p className={styles['container-text']}>{car.power} hp / {car.fuel} / {car.year} / {car.condition}</p>

                <p className={styles['container-text']}>
                  <span className={styles['price-span']}>
                    <strong className={styles['strong-fields']}>
                      <sup>$</sup>{car.price}
                    </strong>
                  </span>
                </p>

                <div className={styles['text-button']}>
                  <p className={styles.details}>
                  <Link to={`/details/${car.id}`} className={styles.details}> 
                    Details
                  </Link>
                    </p>
                </div>
              </div>
            </div>
          </div>
        </li>
          ))}
      </ul>
    </section>
  );
}

export default NewestCars;
