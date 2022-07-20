import React from 'react'
import styles from '../Edit/Edit.module.css';
import { useEffect } from "react";
import { useState } from "react";
// import { Link} from 'react-router-dom';
import * as carService from '../../../services/carService.js';
import { useParams } from 'react-router-dom';

function Edit() {
     const [car, setCar] = useState({});
     const { carId } = useParams();

     // useEffect(() => {
     //   carService.edit(car)
     //   .then(carData =>setCar(carData,carId));
     // }, []);

     const carEditSubmitHandler =(e) => {
          e.preventDefault();
          let carData = Object.fromEntries(new FormData(e.currentTarget));

          carService.edit(carData)
          .then(carInfo =>setCar(carInfo));
     }

  return (
    <section className={styles.details}>
    <div className={styles.container}>
         <div className={styles.row}>
              <div className={styles.firstCol}>
                   <div className={styles['container-upper-pic']}>
                        {/* <img src={car} alt="" loading="lazy" className={styles.upperPic}/> */}
                   </div>

                   <br/>

                   <div className={styles.row}>
                        <div className={styles['columns-photos']}>
                             <div className={styles['little-pics']}>
                                  {/* <img src={car} alt="" loading="lazy" className={styles['img-responsive']}/> */}
                             </div>
                             
                             <br/>
                        </div>

                        <div className={styles['columns-photos']}>
                             <div className={styles['little-pics']}>
                             {/* <img src={car} alt="" loading="lazy" className={styles['img-responsive']}/> */}
                             </div>
                             
                             <br/>
                        </div>

                        <div className={styles['columns-photos']}>
                             <div className={styles['little-pics']}>
                             {/* <img src={car} alt="" loading="lazy" className={styles['img-responsive']}/> */}
                             </div>
                             <br/>
                        </div>
                   </div>
              </div>

              <div className={styles.secondCol}>
                   <form  method="POST" className={styles.form} onSubmit={carEditSubmitHandler}>
                        <input className={styles['form-header']} name="make" id="make" defaultValue={car.make}/>
                        <input className={styles['form-header']} name="model" id="model" defaultValue={car.model}/>

                        <input className={styles.description} name="miniDescription" id="miniDescription" defaultValue={car.miniDescription}/>
                        
                        <p><input className={styles['span-color']} /></p>

                        <div className={styles.row}>
                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Type</span>

                                       <br/>

                                       <input className={styles['form-strong']} name="type" id="type" defaultValue={car.type} />
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Make</span>

                                       <br/>

                                       <input className={styles['form-strong']} name="make" id="make" defaultValue={car.make} />
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}> Model</span>

                                       <br/>

                                       <input className={styles['form-strong']} name="model" id="model" defaultValue={car.model} />
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>First registration</span>

                                       <br/>

                                       <input className={styles['form-strong']} name="year" id="year" defaultValue={car.year} />
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Mileage</span>

                                       <br/>

                                       <input className={styles['form-strong']} name="mileage" id="mileage" defaultValue={car.mileage} />
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Fuel</span>

                                       <br/>

                                       <input className={styles['form-strong']} name="fuel" id="fuel" defaultValue={car.fuel} />
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Engine size</span>

                                       <br/>

                                       <input className={styles['form-strong']} name="engineSize" id="engineSize" defaultValue={car.engineSize} />
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Power</span>

                                       <br/>

                                       <input className={styles['form-strong']} name="power" id="power" defaultValue={car.power} />
                                  </p>
                             </div>


                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Gearbox</span>

                                       <br/>

                                       <input className={styles['form-strong']} name="gearbox" id="gearbox" defaultValue={car.gearbox} />
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Number of seats</span>

                                       <br/>

                                       <input className={styles['form-strong']} name="numberOfSeats" id="numberOfSeats" defaultValue={car.numberOfSeats} />
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Doors</span>

                                       <br/>

                                       <input className={styles['form-strong']} name="doors" id="doors" defaultValue={car.doors} />
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Color</span>

                                       <br/>

                                       <input className={styles['form-strong']} name="color" id="color" defaultValue={car.color} />
                                  </p>
                             </div>

                             {/* <div className={styles['info-col-buttons']}>
                              
                              <button className={styles.editBtn}>
                              <Link className={styles.editBtn} to={`/details/edit/${car.id}`}>Edit</Link>
                              </button>
                                  
                              <button className={styles.deleteBtn}>
                              <Link className={styles.deleteBtn} to={`/details/delete/${car.id}`}>Delete</Link>
                              </button>
                             </div> */}
                        </div>
                   </form>
              </div>
         </div>

         <div className={styles.row}>
              <div className={styles.thirdCol}>
                   <div className={styles['panel-default']}>
                        <div className={styles['panel-heading']}>
                             <h4 className={styles['contact-heading']}>Vehicle Description</h4>
                        </div>

                        <div className={styles['panel-body']}>
                             <textarea name="description" id="description" cols="30" rows="10"></textarea>
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

                                  {/* <input className={styles['contact-info']} name="name" id="name" defaultValue={car.seller.name}/> */}
                             </p>

                             <p>
                                  <span>Phone</span>

                                  <br/>

                                  {/* <input className={styles['contact-info']} name="phone" id="phone" defaultValue={car.seller.phone}/> */}
                             </p>


                             <p>
                                  <span>Address</span>

                                  <br/>

                                  {/* <input className={styles['contact-info']}  name="address" id="address" defaultValue={car.seller.address}/> */}
                             </p>

                             <p>
                                  <span className={styles['contact-info']}>Email</span>

                                  <br/>

                                  {/* <input href="mailto:krisko512@gmail.com" className={styles['contact-info']} name="email" id="email" defaultValue={car.seller.email}/> */}
                             </p>
                        </div>
                   </div>
              </div>
         </div>
    </div>
</section>
  );
  
}

export default Edit;