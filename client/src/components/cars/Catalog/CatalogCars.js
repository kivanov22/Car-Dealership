import React from "react";
import styles from "../Catalog/CatalogCars.module.css";
import { Link } from "react-router-dom";

// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../../firebase.js";
// import { createAPIEndpoint } from "../../../api/serverApi.js";

function CatalogCars({cars}) {
  // const [cars, setCars] = useState([]);

  // useEffect(()=> {
  //   const carList =   
  //   fetch("https://localhost:7213/api/Car/GetAll")
  //   .then(res => res.json())
  //   .then(data=> data);
    
    // useEffect(()=>{
    //   carService.getAll()
    //   .then(carData =>setCars(carData));
    // },[]);
  //   console.log(carList)
  // },[]);

  // createAPIEndpoint('Car/GetAll')
  // .fetch()
  // .then(res => setCars(res.json()))
  // .catch(err =>console.log(err));

  const submitHandler = (e) =>{
    e.preventDefault();
    
  }


  // useEffect(() => {
  //   getCars();
  // }, []);

  // useEffect(() => {
  //   console.log(cars);
  // }, [cars]);

  // const getCars = () => {
  //   const carsCollectionRef = collection(db, "cars");
  //   getDocs(carsCollectionRef)
  //     .then((res) => {
  //       const cars = res.docs.map((doc) => ({
  //         data: doc.data(),
  //         id: doc.id,
  //       }));
  //       setCars(cars);
  //     })
  //     .catch((err) => console.log(err.message));
  // };

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
