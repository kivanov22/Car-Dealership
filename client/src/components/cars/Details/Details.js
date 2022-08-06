import React from "react";
import styles from '../Details/Details.module.css';

import * as carService from '../../../services/carService.js';

import { Link} from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import ReactMapGL,{Marker,Popup} from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';
import {places} from '../../../api/cities.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";


function Details() {
     const [car, setCar] = useState({});
     const[selectedCity,setSelectedCity]= useState(null);
     const { carId } = useParams();

     // const coordinates = car.seller.address.map(city => ({
     //      longitude: city.long,
     //      latitude: city.lat,
     // }));

     //const center = getCenter(coordinates);

     const[viewport, setViewport] = useState({
          latitude:43.00,
          longitude:25.00,
          width:'100%',
          height:'100%',
          zoom:10,

     });

useEffect(()=>{
  carService.getOne(carId)
  .then(carData =>setCar(carData));// console.log(carData)
},[]);

//const findCity = places.find(c => c.city == car.seller.address);
//console.log(findCity);

const carDeleteHandler = async () => {
 await carService.deleteCar(car.id)
 .then(carData => setCar(carData.filter(x=>x.id != carId))); // ??
}


  return (
    <section className={styles.details}>
    <div className={styles.container}>
         <div className={styles.row}>
              <div className={styles.firstCol}>
                   <div className={styles['container-upper-pic']}>
                        <img src={car.imageUrl} alt="image"  className={styles.upperPic}/>
                   </div>

                   <br/>

                   <div className={styles.row}>
                        <div className={styles['columns-photos']}>
                             <div className={styles['little-pics']}>
                                  <img src={car.firstLowerImgUrl} alt="" loading="lazy" className={styles['img-responsive']}/>
                             </div>
                             
                             <br/>
                        </div>

                        <div className={styles['columns-photos']}>
                             <div className={styles['little-pics']}>
                             <img src={car.secondLowerImgUrl} alt="" loading="lazy" className={styles['img-responsive']}/>
                             </div>
                             
                             <br/>
                        </div>

                        <div className={styles['columns-photos']}>
                             <div className={styles['little-pics']}>
                             <img src={car.thirdLowerImgUrl} alt="" loading="lazy" className={styles['img-responsive']}/>
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
                             {/* <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Type</span>

                                       <br/>

                                       <strong className={styles['form-strong']}>{car.type}</strong>
                                  </p>
                             </div> */}

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

                             {/* <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Number of seats</span>

                                       <br/>

                                       <strong className={styles['form-strong']}>{car.seats}</strong>
                                  </p>
                             </div> */}

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

                             <div className={styles['info-col-buttons']}>
                              
                              <button className={styles.editBtn} >
                              <Link className={styles.editBtn} to={`/edit/${car.id}`}>Edit</Link>
                              </button>
                                  
                              <button className={styles.deleteBtn} onClick={() => carDeleteHandler(car.id)}>
                              {/* <Link className={styles.deleteBtn} to={`/delete/${car.id}`}>Delete</Link> */}
                              Delete
                              </button>
                             </div>
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

                                  <strong className={styles['contact-info']}><a >{car.seller ? car.seller.phone : ''}</a></strong>
                             </p>


                             <p>
                                  <span>Address</span>

                                  <br/>

                                  <strong className={styles['contact-info']}><a >{car.seller ? car.seller.address : ''}</a></strong>
                             </p>

                             <p>
                                  <span className={styles['contact-info']}>Email</span>

                                  <br/>

                                  <strong><a  className={styles['contact-info']}>{car.seller ? car.seller.email : ''}</a></strong>
                             </p>
                        </div>
                   </div>
              </div>
         </div>
    </div>

     <ReactMapGL 
     mapStyle="mapbox://styles/techwithchris7767/cl6i3lrjy006i16pk4ycgzskj"
     mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
     {...viewport}
     onViewportChange={viewport =>{setViewport(viewport)}}
     >
          {places.map(city =>(
               <Marker
               key={city.id}
               latitude={city.lat}
               longitude={city.lng}
               >
                    <p
                    onClick={() =>setSelectedCity(city.city)}
                    className={styles.markLocation}
                    >
                    <FontAwesomeIcon icon={faLocationDot} />
                    </p>
               </Marker>
          ))

          }
     </ReactMapGL >
</section>
  );
}

export default Details;
