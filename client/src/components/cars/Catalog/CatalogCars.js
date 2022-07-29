import React from "react";
import styles from "../Catalog/CatalogCars.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Filter from "../../layout/Filter/Filter.js";

// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../../firebase.js";
// import { createAPIEndpoint } from "../../../api/serverApi.js";

function CatalogCars({cars,search}) {

  // const [filteredCars,setFilteredCars] = useState({})
  // const filterCars = cars.filter(option =>{
  //   if(!option.includes(search.condition)) return false;
  //   if(!option.includes(search.condition)) return false;
  //   if(!option.includes(search.condition)) return false;
  //   if(!option.includes(search.condition)) return false;
  //   if(!option.includes(search.condition)) return false;
  // })

  const submitHandler = (e) =>{
    e.preventDefault();
    
  }
 

  return (
    <section className={styles.catalog}>
      <div className={styles.row}>
        <form onSubmit={submitHandler}>
          <div className={styles.container}>
            <label htmlFor="condition">New/Used</label>
            <select name="condition" id="condition" className={styles["form-control"]}>
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
            <label htmlFor="">Make</label>
            <select className={styles["form-control"]}>
              {/* ul with li > option maybe */}
              <option value="">All</option>
              <option value="new">BMW</option>
              <option value="used">Mercedes</option>
            </select>
          </div>

          <div className={styles.container}>
            <label htmlFor="">Model</label>
            <select className={styles["form-control"]}>
              <option value="all">All</option>
              <option value="new">New vehicle</option>
              <option value="used">Used vehicle</option>
            </select>
          </div>

          <div className={styles.container}>
            <label htmlFor="">Price</label>
            <input type="number" name="price" className={styles["form-control-typed"]}/>
          </div>

          <div className={styles.container}>
            <label htmlFor="">Mileage</label>
            <input type="number" name="mileage" className={styles["form-control-typed"]}/>
          </div>

          <div className={styles.container}>
            <label htmlFor="">Engine size</label>
            <input type="number" name="engine" className={styles["form-control-typed"]}/>
          </div>

          <div className={styles.container}>
            <label htmlFor="">Power</label>
            <input type="number" name="power" className={styles["form-control-typed"]}/>
          </div>

          <div className={styles.container}>
            <label htmlFor="">Fuel</label>
            <select className={styles["form-control"]}>
              <option value="">All</option>
              <option value="petrol">Petrol</option>
              <option value="diesel">Diesel</option>
            </select>
          </div>

          <div className={styles.container}>
            <label htmlFor="gearbox">Gearbox</label>
            <select className={styles["form-control"]}>
              <option value="gearbox">All</option>
              <option value="automatic">Automatic</option>
              <option value="manual">Manual</option>
            </select>
          </div>

          <div className={styles.container}>
            <label htmlFor="">Doors</label>
            <input type="number" name="doors" className={styles["form-control-typed"]}/>
          </div>

          <div className={styles.container}>
            <label htmlFor="">Colour</label>
            <input type="text" name="colour" className={styles["form-control-typed"]}/>
          </div>

          <div className={styles.container}>
            <label htmlFor="">Year</label>
            <input type="number" name="year" className={styles["form-control-typed"]}/>
          </div>

          <div className={styles.container}>
            <button className={styles.searchBtn}>Search</button>
          </div>
        </form>
      </div>

      <div className={styles.rightSide}>
        <ul className={styles['cars-list']}>
        {/* {games.length > 0
                ? games.map(x => <CatalogItem key={x._id} game={x} />)
                : <h3 className="no-articles">No articles yet</h3>
            } */}
          {cars.map((car) => (
            <li key={car.id}>
              <div className={styles["cars-container"]}>
                <div className={styles["car-img"]}>
                  <img src={car.imageUrl} alt="" className={styles.carImage} />
                </div>
                <div className={styles.desc}>
                  <p className={styles["car-title"]}>{car.make} {car.model}</p>
                  {/* car.data.make */}
                  <p>Price: {car.price}$</p>
                  {/* car.data.price */}
                  <p>
                    {car.year} / Fuel: {car.fuel} / Gearbox: {car.gearbox}/ Doors:{car.doors} /
                  </p>
                  <button className={styles.detailsBtn}>
                  <Link className={styles.detailsBtnLink} to={`/details/${car.id}`}>Details</Link>
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
