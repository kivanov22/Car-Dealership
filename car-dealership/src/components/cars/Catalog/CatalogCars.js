import React from "react";
import styles from "../Catalog/CatalogCars.module.css";
import bmw from "../../../assets/img/product-3-720x480.jpg";
import { Link } from "react-router-dom";

import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase.js";
import { useEffect } from "react";

function CatalogCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getCars();
  }, []);

  useEffect(() => {
    console.log(cars);
  }, [cars]);

  const getCars = () => {
    const carsCollectionRef = collection(db, "cars");
    getDocs(carsCollectionRef)
      .then((res) => {
        const cars = res.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setCars(cars);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <section className={styles.catalog}>
      <div className={styles.row}>
        <form >
          <div className={styles.container}>
            <label htmlFor="">New/Used</label>
            <select className={styles["form-control"]}>
              <option value="">All</option>
              <option value="new">New vehicle</option>
              <option value="used">Used vehicle</option>
            </select>
          </div>

          <div className={styles.container}>
            <label htmlFor="">Vehicle Type</label>
            <select className={styles["form-control"]}>
              <option value="">All</option>
              <option value="carsJeeps">Cars and Jeeps</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="truck">Truck</option>
            </select>
          </div>

          <div className={styles.container}>
            <label htmlFor="">Make/</label>
            <select className={styles["form-control"]}>
              <option value="">All</option>
              <option value="new">New vehicle</option>
              <option value="used">Used vehicle</option>
            </select>
          </div>

          <div className={styles.container}>
            <label htmlFor="">Model</label>
            <select className={styles["form-control"]}>
              <option value="">All</option>
              <option value="new">New vehicle</option>
              <option value="used">Used vehicle</option>
            </select>
          </div>

          <div className={styles.container}>
            <label htmlFor="">Price</label>
            <select className={styles["form-control"]}>
              <option value="">All</option>
              <option value="new">New vehicle</option>
              <option value="used">Used vehicle</option>
            </select>
          </div>

          <div className={styles.container}>
            <label htmlFor="">Mileage</label>
            <select className={styles["form-control"]}>
              <option value="">All</option>
              <option value="new">New vehicle</option>
              <option value="used">Used vehicle</option>
            </select>
          </div>

          <div className={styles.container}>
            <label htmlFor="">Engine size</label>
            <select className={styles["form-control"]}>
              <option value="">All</option>
              <option value="new">New vehicle</option>
              <option value="used">Used vehicle</option>
            </select>
          </div>

          <div className={styles.container}>
            <label htmlFor="">Power</label>
            <select className={styles["form-control"]}>
              <option value="">All</option>
              <option value="new">New vehicle</option>
              <option value="used">Used vehicle</option>
            </select>
          </div>

          <div className={styles.container}>
            <label htmlFor="">Fuel</label>
            <select className={styles["form-control"]}>
              <option value="">All</option>
              <option value="new">New vehicle</option>
              <option value="used">Used vehicle</option>
            </select>
          </div>

          <div className={styles.container}>
            <label htmlFor="">Gearbox</label>
            <select className={styles["form-control"]}>
              <option value="">All</option>
              <option value="new">New vehicle</option>
              <option value="used">Used vehicle</option>
            </select>
          </div>

          <div className={styles.container}>
            <label htmlFor="">Doors</label>
            <select className={styles["form-control"]}>
              <option value="">All</option>
              <option value="new">New vehicle</option>
              <option value="used">Used vehicle</option>
            </select>
          </div>

          <div className={styles.container}>
            <label htmlFor="">Colour</label>
            <select className={styles["form-control"]}>
              <option value="">All</option>
              <option value="new">New vehicle</option>
              <option value="used">Used vehicle</option>
            </select>
          </div>

          <div className={styles.container}>
            <label htmlFor="">Year</label>
            <select className={styles["form-control"]}>
              <option value="">All</option>
              <option value="new">New vehicle</option>
              <option value="used">Used vehicle</option>
            </select>
          </div>

          <div className={styles.container}>
            <button className={styles.searchBtn}>Search</button>
          </div>
        </form>
      </div>

      <div className={styles.rightSide}>
        <ul>
          {cars.map((car) => (
            <li key={car.id}>
              <div className={styles["cars-container"]}>
                <div className={styles["car-img"]}>
                  <img src={bmw} alt="" className={styles.carImage} />
                </div>
                <div className={styles.desc}>
                  <p className={styles["car-title"]}>{car.data.Make}</p>
                  <p>Price: {car.data.price}$</p>
                  <p>
                    {car.data.year} / Fuel: Diesel / Gearbox: Automatic/ Doors:4 /
                  </p>
                  <button className={styles.detailsBtn}>
                  <Link className={styles.detailsBtn} to={`/details/${car.id}`}>Details</Link>
                  </button>
                  {/* <button className={styles.detailsBtn}>View Details</button> */}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CatalogCars;
