import React from "react";
import styles from '../Details/Details.module.css';
import car from '../../../assets/img/product-3-720x480.jpg'

function Details() {
  return (
    <section className={styles.details}>
    <div className={styles.container}>
         <div className={styles.row}>
              <div className={styles.firstCol}>
                   <div>
                        <img src={car} alt="" className={styles.upperPic}/>
                   </div>

                   <br/>

                   <div className={styles.row}>
                        <div className="col-sm-4 col-xs-6">
                             <div>
                                  <img src="images/product-1-720x480.jpg" alt="" className="img-responsive"/>
                             </div>
                             
                             <br/>
                        </div>

                        <div className="col-sm-4 col-xs-6">
                             <div>
                                  <img src="images/product-2-720x480.jpg" alt="" className="img-responsive"/>
                             </div>
                             
                             <br/>
                        </div>

                        <div className="col-sm-4 col-xs-6">
                             <div>
                                  <img src="images/product-3-720x480.jpg" alt="" className="img-responsive"/>
                             </div>

                             <br/>
                        </div>
                   </div>
              </div>

              <div className={styles.secondCol}>
                   <form action="#" method="post" className={styles.form}>
                        <h2>Lorem ipsum dolor sit amet</h2>

                        <p className="lead">ABS, Leather seats, Power Assisted Steering, Electric heated seats, New HU and AU, Xenon headlights</p>
                        
                        <p className="lead"><small><del> $11999.00</del></small> <strong className="text-primary">$11779.00</strong></p>

                        <div className={styles.row}>
                             <div className={styles['info-col-1']}>
                                  <p>
                                       <span>Type</span>

                                       <br/>

                                       <strong>Used vehicle</strong>
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p>
                                       <span>Make</span>

                                       <br/>

                                       <strong>Lorem ipsum dolor sit</strong>
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p>
                                       <span> Model</span>

                                       <br/>

                                       <strong>Lorem ipsum dolor sit</strong>
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p>
                                       <span>First registration</span>

                                       <br/>

                                       <strong>05/2010</strong>
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p>
                                       <span>Mileage</span>

                                       <br/>

                                       <strong>5000 km</strong>
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p>
                                       <span>Fuel</span>

                                       <br/>

                                       <strong>Diesel</strong>
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p>
                                       <span>Engine size</span>

                                       <br/>

                                       <strong>1800 cc</strong>
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p>
                                       <span>Power</span>

                                       <br/>

                                       <strong>85 hp</strong>
                                  </p>
                             </div>


                             <div className={styles['info-col-1']}>
                                  <p>
                                       <span>Gearbox</span>

                                       <br/>

                                       <strong>Manual</strong>
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p>
                                       <span>Number of seats</span>

                                       <br/>

                                       <strong>4</strong>
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p>
                                       <span>Doors</span>

                                       <br/>

                                       <strong>2/3</strong>
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p>
                                       <span>Color</span>

                                       <br/>

                                       <strong>Black</strong>
                                  </p>
                             </div>
                        </div>
                   </form>
              </div>
         </div>

         <div className={styles.row}>
              <div className={styles['panel-default']}>
                   <div className="panel panel-default">
                        <div className={styles['panel-heading']}>
                             <h4>Vehicle Description</h4>
                        </div>

                        <div className="panel-body">
                             <p>- Colour coded bumpers<br/>- Tinted glass<br/>- Immobiliser<br/>-</p>
                        </div>
                   </div>
              </div>

              <div className={styles.fourthCol}>
                   <div className={styles['panel-default']}>
                        <div className={styles['panel-heading']}>
                             <h4>Contact Details</h4>
                        </div>

                        <div className="panel-body">
                             <p>
                                  <span>Name</span>

                                  <br/>

                                  <strong>Kristian Smith</strong>
                             </p>

                             <p>
                                  <span>Phone</span>

                                  <br/>

                                  <strong><a href="tel:123-456-789">123-456-789</a></strong>
                             </p>


                             <p>
                                  <span>Mobile phone</span>

                                  <br/>

                                  <strong><a href="tel:456789123">456789123</a></strong>
                             </p>

                             <p>
                                  <span>Email</span>

                                  <br/>

                                  <strong><a href="mailto:krisko512@gmail.com">krsiko512@gmail.com</a></strong>
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
