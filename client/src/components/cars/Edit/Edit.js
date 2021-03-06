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
     
     useEffect(() => {
         carService.getOne(carId)
          .then(carData =>setCar(carData));//
        }, []);
       

     const carEditSubmitHandler =(e) => {
          e.preventDefault();

          let {condition,
               type,
               make,
               model,
               imageUrl,
               year,
               price,
               gearbox,
               fuel,
               color,
               power,
               engineSize,
               mileage,
               doors,
               description,
               miniDescription,
               isOwner}= Object.fromEntries(new FormData(e.currentTarget));
             let {name,address,email,phone}= Object.fromEntries(new FormData(e.currentTarget));
            
              year = Number(year);
              price= Number(price);
              power= Number(power);
              engineSize = Number(engineSize);
               doors = Number(doors);
              mileage = Number(mileage);
              isOwner = Boolean(isOwner);
               phone = Number(phone);
          
             let carData = {
               condition,
               type,
               make,
               model,
               imageUrl,
               year,
               price,
               gearbox,
               fuel,
               color,
               power,
               engineSize,
               mileage,
               doors,
               description,
               miniDescription,
               isOwner
             }
         
               let seller ={
                 name,
                 address,
                 email,
                 phone
               }
         
               let sendData = {
                 ...carData,
                 seller
                 }
       
           carService.edit(carId,sendData)
           .catch(err => console.log(err.message))
           
     }

  return (
     <section className={styles.details}>
     <form
       className={styles.container}
       method="POST"
       onSubmit={carEditSubmitHandler}
     >
       <div className={styles.row}>
         <div className={styles.firstCol}>
           <div className={styles["container-upper-pic"]}>
             {/* <img src={car} alt="" loading="lazy" className={styles.upperPic}/> */}
             <label htmlFor="" className={styles["form-span"]}>
               Main Picture
             </label>
             <input type="text" id="imageUrl" name="imageUrl"  defaultValue={car.imageUrl} />
            

           </div>

           <br />

           <div className={styles.row}>
             <div className={styles["columns-photos"]}>
               <div className={styles["little-pics"]}>
                 {/* <img src={car} alt="" loading="lazy" className={styles['img-responsive']}/> */}
                 {/* <label  htmlFor="" className={styles['form-span']}>First Picture</label>
                                  <input type="text" id="firstImage" name="firstImage"/> */}
               </div>

               <br />
             </div>

             <div className={styles["columns-photos"]}>
               <div className={styles["little-pics"]}>
                 {/* <img src={car} alt="" loading="lazy" className={styles['img-responsive']}/> */}
                 {/* <label htmlFor="" className={styles['form-span']}>Second Picture</label>
                             <input type="text"  id="secondImage" name="secondImage"/> */}
               </div>

               <br />
             </div>

             <div className={styles["columns-photos"]}>
               <div className={styles["little-pics"]}>
                 {/* <img src={car} alt="" loading="lazy" className={styles['img-responsive']}/> */}
                 {/* <label htmlFor="" className={styles['form-span']}>Third Picture</label>
                             <input type="text" id="thirdImage" name="thirdImage"/> */}
               </div>
               <br />
             </div>
           </div>
         </div>

         <div className={styles.secondCol}>
           <div className={styles.form}>
             <label htmlFor="" className={styles["form-span"]}>
               Mini Description
             </label>
             <input
               name="miniDescription"
               id="miniDescription"
               defaultValue={car.miniDescription} 
             />

             <label htmlFor="condition" className={styles["form-span"]}>
               Condition
             </label>
             <input type="text" id="condition" name="condition" defaultValue={car.condition} />

             <label htmlFor="price" className={styles["form-span"]}>
               Price
             </label>
             <input type="number" id="price" name="price" defaultValue={car.price}  />

             <div className={styles.row}>
               <div className={styles["info-col-1"]}>
                 <p className={styles["form-text"]}>
                   <span className={styles["form-span"]}>Type</span>

                   <br />

                   <input
                     type="text"
                     className={styles["form-strong"]}
                     name="type"
                     id="type"
                 
                     defaultValue={car.type} 
                   />
                 </p>
               </div>

               <div className={styles["info-col-1"]}>
                 <p className={styles["form-text"]}>
                   <span className={styles["form-span"]}>Make</span>

                   <br />

                   <input
                     type="text"
                     className={styles["form-strong"]}
                     name="make"
                     id="make"
                   
                     defaultValue={car.make} 
                   />
                 </p>
               </div>

               <div className={styles["info-col-1"]}>
                 <p className={styles["form-text"]}>
                   <span className={styles["form-span"]}> Model</span>

                   <br />

                   <input
                     type="text"
                     className={styles["form-strong"]}
                     name="model"
                     id="model"
                   //   defaultValue={car.model}
                   defaultValue={car.model} 
                   />
                 </p>
               </div>

               <div className={styles["info-col-1"]}>
                 <p className={styles["form-text"]}>
                   <span className={styles["form-span"]}>
                     First registration
                   </span>

                   <br />

                   <input
                     type="number"
                     className={styles["form-strong"]}
                     name="year"
                     id="year"
                   //   defaultValue={car.year}
                   defaultValue={car.year} 
                   />
                 </p>
               </div>

               <div className={styles["info-col-1"]}>
                 <p className={styles["form-text"]}>
                   <span className={styles["form-span"]}>Mileage</span>

                   <br />

                   <input
                     type="number"
                     className={styles["form-strong"]}
                     name="mileage"
                     id="mileage"
                   //   defaultValue={car.mileage}
                   defaultValue={car.mileage} 
                   />
                 </p>
               </div>

               <div className={styles["info-col-1"]}>
                 <p className={styles["form-text"]}>
                   <span className={styles["form-span"]}>Fuel</span>

                   <br />

                   <input
                     type="text"
                     className={styles["form-strong"]}
                     name="fuel"
                     id="fuel"
                   //   defaultValue={car.fuel}
                   defaultValue={car.fuel} 
                   />
                 </p>
               </div>

               <div className={styles["info-col-1"]}>
                 <p className={styles["form-text"]}>
                   <span className={styles["form-span"]}>Engine size</span>

                   <br />

                   <input
                     type="number"
                     className={styles["form-strong"]}
                     name="engineSize"
                     id="engineSize"
                   //   defaultValue={car.engineSize}
                   defaultValue={car.engineSize} 
                   />
                 </p>
               </div>

               <div className={styles["info-col-1"]}>
                 <p className={styles["form-text"]}>
                   <span className={styles["form-span"]}>Power</span>

                   <br />

                   <input
                     type="number"
                     className={styles["form-strong"]}
                     name="power"
                     id="power"
                   //   defaultValue={car.power}
                   defaultValue={car.power} 
                   />
                 </p>
               </div>

               <div className={styles["info-col-1"]}>
                 <p className={styles["form-text"]}>
                   <span className={styles["form-span"]}>Gearbox</span>

                   <br />

                   <input
                     type="text"
                     className={styles["form-strong"]}
                     name="gearbox"
                     id="gearbox"
                   //   defaultValue={car.gearbox}
                   defaultValue={car.gearbox} 
                   />
                 </p>
               </div>

               <div className={styles["info-col-1"]}>
                 <p className={styles["form-text"]}>
                   <span className={styles["form-span"]}>isOwner</span>

                   <br />

                   <input
                     type="text"
                     className={styles["form-strong"]}
                     name="isOwner"
                     id="isOwner"
                   //   defaultValue={car.isOwner}
                   defaultValue={car.isOwner} 
                   />
                 </p>
               </div>

               <div className={styles["info-col-1"]}>
                 <p className={styles["form-text"]}>
                   <span className={styles["form-span"]}>Doors</span>

                   <br />

                   <input
                     type="number"
                     className={styles["form-strong"]}
                     name="doors"
                     id="doors"
                   //   defaultValue={car.doors}
                   defaultValue={car.doors} 
                   />
                 </p>
               </div>

               <div className={styles["info-col-1"]}>
                 <p className={styles["form-text"]}>
                   <span className={styles["form-span"]}>Color</span>

                   <br />

                   <input
                     type="text"
                     className={styles["form-strong"]}
                     name="color"
                     id="color"
                   //   defaultValue={car.color}
                   defaultValue={car.color}
                   />
                 </p>
               </div>
             </div>
           </div>
         </div>
       </div>

       <div className={styles.row}>
         <div className={styles.thirdCol}>
           <div className={styles["panel-default"]}>
             <div className={styles["panel-heading"]}>
               <h4 className={styles["contact-heading"]}>
                 Vehicle Description
               </h4>
             </div>

             <div className={styles["panel-body"]}>
               <textarea
                 type="text"
                 name="description"
                 id="description"
                 cols="30"
                 rows="10"
                 defaultValue={car.description} 
               ></textarea>
             </div>
           </div>
         </div>

         <div className={styles.fourthCol}>
           <div className={styles["panel-default"]}>
             <div className={styles["panel-heading"]}>
               <h4 className={styles["contact-heading"]}>Contact Details</h4>
             </div>

             <div className={styles["panel-body"]}>
               <p>
                 <span>Name</span>

                 <br />

                 <input
                   type="text"
                   className={styles["contact-info"]}
                   name="name"
                   id="name"
                   defaultValue={car.seller ? car.seller.name : ""} 
                  
                 />
               </p>

               <p>
                 <span>Phone</span>

                 <br />

                 <input
                   type="number"
                   className={styles["contact-info"]}
                   name="phone"
                   id="phone"
                   defaultValue={car.seller ? car.seller.phone : ""}
                 />
               </p>

               <p>
                 <span>Address</span>

                 <br />

                 <input
                   type="text"
                   className={styles["contact-info"]}
                   name="address"
                   id="address"
                   defaultValue={car.seller ? car.seller.address : ""} 
                 />
               </p>

               <p>
                 <span className={styles["contact-info"]}>Email</span>

                 <br />

                 <input
                   type="text"
                   className={styles["contact-info"]}
                   name="email"
                   id="email"
                   defaultValue={car.seller ? car.seller.email : ""} 
                 
                 />
               </p>
             </div>
           </div>
         </div>
       </div>
       <input className="" type="submit" value="Edit" />
     </form>
   </section>
  );
  
}

export default Edit;