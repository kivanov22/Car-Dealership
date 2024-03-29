import React, { useContext } from "react";
import styles from '../Details/Details.module.css';

import * as carService from '../../../services/carService.js';

import { Link, useNavigate} from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import { AuthContext } from "../../../context/AuthContext.js";

function Details() {
     const navigate = useNavigate();
     const [car, setCar] = useState({});
     const { carId } = useParams();
     const { user } = useContext(AuthContext);
     const [currentCar,setCurrentCar] = useState('');

     //const {selectCar} = useContext(CarsContext)


useEffect(()=>{
  carService.getOne(carId)
  .then(carData =>setCar(carData));
},[carId]);

useEffect(()=>{
     carService.getUser(carId)
     .then(carData =>setCurrentCar(carData));
   },[carId]);



const isOwner = currentCar === user.id;


const carDeleteHandler = async () => {
const confirmDeleteCar = window.confirm('Are you sure you want to delete this car?');

if(confirmDeleteCar){
 await carService.deleteCar(car.id)
 .then(carData => setCar(carData.filter(x=>x.id !== carId))); // ??
 navigate('/catalogCars')
}
}



  return (
    <section className={styles.details}>
    <div className={styles.container}>
         <div className={styles.row}>
              <div className={styles.firstCol}>
                   <div className={styles['container-upper-pic']}>
                        <img src={car.imageUrl} alt="error"  className={styles.upperPic}/>
                   </div>

                   <br/>

                   <div className={styles.row}>
                        <div className={styles['columns-photos']}>
                             <div className={styles['little-pics']}>
                                  <img src={car.firstLowerImgUrl} alt="error" loading="lazy" className={styles['img-responsive']}/>
                             </div>
                             
                             <br/>
                        </div>

                        <div className={styles['columns-photos']}>
                             <div className={styles['little-pics']}>
                             <img src={car.secondLowerImgUrl} alt="error" loading="lazy" className={styles['img-responsive']}/>
                             </div>
                             
                             <br/>
                        </div>

                        <div className={styles['columns-photos']}>
                             <div className={styles['little-pics']}>
                             <img src={car.thirdLowerImgUrl} alt="error" loading="lazy" className={styles['img-responsive']}/>
                             </div>
                             <br/>
                        </div>
                   </div>
              </div>

              <div className={styles.secondCol}>
                   <div className={styles.form}>
                        <h2 className={styles['form-header']}>{car.make} {car.model}</h2>

                        <p className={styles.description}>{car.miniDescription}</p>
                        
                        <p className="lead"><strong className={styles['span-color']}>${car.price}</strong></p>

                        <div className={styles.row}>

                        <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Condition</span>

                                       <br/>

                                       <strong className={styles['form-strong']}>{car.condition}</strong>
                                  </p>
                             </div>


                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Make</span>

                                       <br/>

                                       <strong className={styles['form-strong']}>{car.make}</strong>
                                  </p>
                             </div>

                             

                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}> Model</span>

                                       <br/>

                                       <strong className={styles['form-strong']}>{car.model}</strong>
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>First registration</span>

                                       <br/>

                                       <strong className={styles['form-strong']}>{car.year}</strong>
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Mileage</span>

                                       <br/>

                                       <strong className={styles['form-strong']}>{car.mileage} km</strong>
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Fuel</span>

                                       <br/>

                                       <strong className={styles['form-strong']}>{car.fuel}</strong>
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Engine size</span>

                                       <br/>

                                       <strong className={styles['form-strong']}>{car.engineSize} cc</strong>
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Power</span>

                                       <br/>

                                       <strong className={styles['form-strong']}>{car.power} hp</strong>
                                  </p>
                             </div>


                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Gearbox</span>

                                       <br/>

                                       <strong className={styles['form-strong']}>{car.gearbox}</strong>
                                  </p>
                             </div>


                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Doors</span>

                                       <br/>

                                       <strong className={styles['form-strong']}>{car.doors}</strong>
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Color</span>

                                       <br/>

                                       <strong className={styles['form-strong']}>{car.color}</strong>
                                  </p>
                             </div>

                              {isOwner && 
                             <div className={styles['info-col-buttons']}>
                              
                              <button className={styles.editBtn} >
                              <Link className={styles.editBtn} to={`/edit/${car.id}`}>Edit</Link>
                              </button>
                                  
                              <button className={styles.deleteBtn} onClick={() => carDeleteHandler(car.id)}>
                              Delete
                              </button>
                             </div>
                              }
                        </div>
                   </div>
              </div>
         </div>

         <div className={styles.row}>
              <div className={styles.thirdCol}>
                   <div className={styles['panel-default']}>
                        <div className={styles['panel-heading']}>
                             <h4 className={styles['contact-heading']}>Vehicle Description</h4>
                        </div>

                        <div className={styles['panel-body']}>
                             <p >- {car.description}-</p>
                        </div>
                   </div>
              </div>

              <div className={styles.fourthCol}>
                   <div className={styles['panel-default']}>
                        <div className={styles['panel-heading']}>
                             <h4 className={styles['contact-heading']}>Contact Details</h4>
                        </div>

                        <div className={styles['panel-body']}>
                             <p>
                                  <span>Name</span>

                                  <br/>

                                  <strong className={styles['contact-info']}>{car.seller ? car.seller.fullName : ''}</strong>
                             </p>

                             <p>
                                  <span>Phone</span>

                                  <br/>

                                  <strong className={styles['contact-info']}><p >{car.seller ? car.seller.phone : ''}</p></strong>
                             </p>


                             <p>
                                  <span>Address</span>

                                  <br/>

                                  <strong className={styles['contact-info']}><p >{car.seller ? car.seller.address : ''}</p></strong>
                             </p>

                             <p>
                                  <span className={styles['contact-info']}>Email</span>

                                  <br/>

                                  <strong><p  className={styles['contact-info']}>{car.seller ? car.seller.email : ''}</p></strong>
                             </p>
                        </div>
                   </div>
              </div>
         </div>
    </div>
</section>
  );
}

export default Details;
