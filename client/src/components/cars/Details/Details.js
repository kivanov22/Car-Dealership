import React from "react";
import styles from '../Details/Details.module.css';
import car from '../../../assets/img/product-3-720x480.jpg'

import { Link} from 'react-router-dom';

function Details() {
     



  return (
    <section className={styles.details}>
    <div className={styles.container}>
         <div className={styles.row}>
              <div className={styles.firstCol}>
                   <div className={styles['container-upper-pic']}>
                        <img src={car} alt="" loading="lazy" className={styles.upperPic}/>
                   </div>

                   <br/>

                   <div className={styles.row}>
                        <div className={styles['columns-photos']}>
                             <div className={styles['little-pics']}>
                                  <img src={car} alt="" loading="lazy" className={styles['img-responsive']}/>
                             </div>
                             
                             <br/>
                        </div>

                        <div className={styles['columns-photos']}>
                             <div className={styles['little-pics']}>
                             <img src={car} alt="" loading="lazy" className={styles['img-responsive']}/>
                             </div>
                             
                             <br/>
                        </div>

                        <div className={styles['columns-photos']}>
                             <div className={styles['little-pics']}>
                             <img src={car} alt="" loading="lazy" className={styles['img-responsive']}/>
                             </div>
                             <br/>
                        </div>
                   </div>
              </div>

              <div className={styles.secondCol}>
                   <form  method="post" className={styles.form}>
                        <h2 className={styles['form-header']}>BMW X6</h2>

                        <p className={styles.description}>ABS, Leather seats, Power Assisted Steering, Electric heated seats, New HU and AU, Xenon headlights</p>
                        
                        <p className="lead"><small><del> $11999.00</del></small> <strong className={styles['span-color']}>$11779.00</strong></p>

                        <div className={styles.row}>
                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Type</span>

                                       <br/>

                                       <strong className={styles['form-strong']}>Used vehicle</strong>
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Make</span>

                                       <br/>

                                       <strong className={styles['form-strong']}>BMW</strong>
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}> Model</span>

                                       <br/>

                                       <strong className={styles['form-strong']}>X6</strong>
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>First registration</span>

                                       <br/>

                                       <strong className={styles['form-strong']}>05/2010</strong>
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Mileage</span>

                                       <br/>

                                       <strong className={styles['form-strong']}>5000 km</strong>
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Fuel</span>

                                       <br/>

                                       <strong className={styles['form-strong']}>Diesel</strong>
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Engine size</span>

                                       <br/>

                                       <strong className={styles['form-strong']}>1800 cc</strong>
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Power</span>

                                       <br/>

                                       <strong className={styles['form-strong']}>85 hp</strong>
                                  </p>
                             </div>


                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Gearbox</span>

                                       <br/>

                                       <strong className={styles['form-strong']}>Manual</strong>
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Number of seats</span>

                                       <br/>

                                       <strong className={styles['form-strong']}>4</strong>
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Doors</span>

                                       <br/>

                                       <strong className={styles['form-strong']}>2/3</strong>
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Color</span>

                                       <br/>

                                       <strong className={styles['form-strong']}>Black</strong>
                                  </p>
                             </div>

                             <div className={styles['info-col-buttons']}>
                              
                              <button className={styles.editBtn}>
                              <Link className={styles.editBtn} to={`/edit/${car.id}`}>Edit</Link>
                              </button>
                                  
                              <button className={styles.deleteBtn}>
                              <Link className={styles.deleteBtn} to={`/delete/${car.id}`}>Delete</Link>
                              </button>
                             </div>
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
                             <p >- Colour coded bumpers<br/>- Tinted glass<br/>- Immobiliser<br/>-</p>
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

                                  <strong className={styles['contact-info']}>Kristian Smith</strong>
                             </p>

                             <p>
                                  <span>Phone</span>

                                  <br/>

                                  <strong className={styles['contact-info']}><a >123-456-789</a></strong>
                             </p>


                             <p>
                                  <span>Mobile phone</span>

                                  <br/>

                                  <strong className={styles['contact-info']}><a >456789123</a></strong>
                             </p>

                             <p>
                                  <span className={styles['contact-info']}>Email</span>

                                  <br/>

                                  <strong><a  href="mailto:krisko512@gmail.com" className={styles['contact-info']}>krisko512@gmail.com</a></strong>
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
