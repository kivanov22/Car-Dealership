// import React from 'react'
// import styles from '../Car/Car.module.css';
// import bmw from "../../assets/img/product-3-720x480.jpg";

// import { useState } from 'react';
// import {collection,getDocs} from 'firebase/firestore';
// import {db} from '../../firebase.js';
// import { useEffect } from 'react';


// function Car() {
//     const[cars, setCars] = useState([]);

//     useEffect(() => {
//         getCars()
//     },[])

//     useEffect(()=>{
//         console.log(cars)
//     },[cars])

//     const getCars = () => {
//         const carsCollectionRef = collection(db, 'cars')
//         getDocs(carsCollectionRef).then(res => {
//             const cars = res.docs.map(doc =>({
//                 data:doc.data(),
//                 id: doc.id,
//             }))
//             setCars(cars)
//         })
//         .catch(err => console.log(err.message))
//     }

//   return (
//       <div className={styles["cars-container"]}>
//         {/* {cars.map(car => */}
//         <div className={styles["car-img"]}>
//           <img src={bmw} alt="" className={styles.carImage} />
//         </div>
//         <div className={styles.desc} key={cars.id}>
//           <p className={styles["car-title"]}>{data.Make}</p>
//           <p>Price: 40000$</p>
//           <p>{data.year} / Fuel: Diesel / Gearbox: Automatic/ Doors:4 /</p>
//           <button className={styles.detailsBtn}>View Details</button>
//         </div>
//       {/* )} */}
//       </div>
//   )
// }

// export default Car;