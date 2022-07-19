import React from 'react';
import { useState } from 'react';

import styles from "../Create/Create.module.css";


function Create() {

  const [values, setValues] = useState({
    mainImage:'',
    firstImage:'',
    secondImage:'',
    thirdImage:'',
    price:'',
    type:'',
    make:'',
    model:'',
    firstRegistration:'',
    mileage:'',
    fuel:'',
    engineSize:'',
    power:'',
    gearBox:'',
    numberOfSeats:'',
    doors:'',
    color:'',
    description:'',
  });

  const[contact, setContact] = useState({
    name:'',
    phone:'',
    mobile:'',
    email:'',
  })

  return (
    <section className={styles.details}>
    <div className={styles.container}>
         <div className={styles.row}>
              <div className={styles.firstCol}>
                   <div className={styles['container-upper-pic']}>
                   <label htmlFor="" className={styles['span-color']}>Main Picture</label>
                    <input type="text" placeholder='url'/>
                   </div>

                   <br/>

                   <div className={styles.row}>
                        <div className={styles['columns-photos']}>
                             <div className={styles['little-pics']}>
                             <label htmlFor="" className={styles['span-color']}>First Picture</label>
                    <input type="text" placeholder='url'/>
                             </div>
                             
                             <br/>
                        </div>

                        <div className={styles['columns-photos']}>
                             <div className={styles['little-pics']}>
                             <label htmlFor="" className={styles['span-color']}>Second Picture</label>
                    <input type="text" placeholder='url'/>
                             </div>
                             
                             <br/>
                        </div>

                        <div className={styles['columns-photos']}>
                             <div className={styles['little-pics']}>
                             <label htmlFor="" className={styles['span-color']}>Third Picture</label>
                              <input type="text" placeholder='url'/>
                             </div>
                             <br/>
                        </div>
                   </div>
              </div>

              <div className={styles.secondCol}>
                   <form  method="post" className={styles.form}>
                        {/* <label htmlFor="" className={styles['form-header']}>Make and Model</label>
                        <input type="text" className={styles['form-header']} placeholder="Example: BMW X6"/>

                        <label htmlFor="" className={styles['form-header']}>Smaller description</label>
                        <textarea name="" id="" cols="80" rows="2" placeholder='Example: ABS / Four-wheel drive'></textarea> */}
                        
                        <label htmlFor="" className={styles['span-color']}>Price</label>
                        <input type="number"/>

                        <div className={styles.row}>
                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Type</span>

                                       <br/>

                                       <input type="text"/>
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Make</span>

                                       <br/>

                                       <input type="text"/>
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}> Model</span>

                                       <br/>

                                       <input type="text"/>
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>First registration</span>

                                       <br/>

                                       <input type="text"/>
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Mileage</span>

                                       <br/>

                                       <input type="text"/>
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Fuel</span>

                                       <br/>

                                       <input type="text"/>
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Engine size</span>

                                       <br/>

                                       <input type="text"/>
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Power</span>

                                       <br/>

                                       <input type="text"/>
                                  </p>
                             </div>


                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Gearbox</span>

                                       <br/>

                                       <input type="text"/>
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Number of seats</span>

                                       <br/>

                                       <input type="text"/>
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Doors</span>

                                       <br/>

                                       <input type="text"/>
                                  </p>
                             </div>

                             <div className={styles['info-col-1']}>
                                  <p className={styles['form-text']}>
                                       <span className={styles['form-span']}>Color</span>

                                       <br/>

                                       <input type="text"/>
                                  </p>
                             </div>

                             {/* <div className={styles['info-col-buttons']}>
                              
                              <button className={styles.editBtn}>
                              <Link className={styles.editBtn} to={`/edit/${car.id}`}>Edit</Link>
                              </button>
                                  
                              <button className={styles.deleteBtn}>
                              <Link className={styles.deleteBtn} to={`/delete/${car.id}`}>Delete</Link>
                              </button>
                             </div> */}
                        </div>
                        <button>CREATE</button>
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
                        <textarea name="" id="" cols="50" rows="20" placeholder='Example: - Tinted glass'></textarea>
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

                                  <input type="text" placeholder='Kristian Ivanov'/>
                             </p>

                             <p>
                                  <span>Phone</span>

                                  <br/>

                                  <input type="text" />
                             </p>


                             <p>
                                  <span>Address</span>

                                  <br/>

                                  <input type="text" />
                             </p>

                             <p>
                                  <span className={styles['contact-info']}>Email</span>

                                  <br/>

                                  <input type="text" placeholder='krisko512@gmail.com'/>
                             </p>
                        </div>
                   </div>
              </div>
         </div>
    </div>
</section>
  )
}

export default Create;

{/* <div className={styles.wrapper}>
<form className={styles.container}>
  <div className={styles['main-picture']}>
  <label htmlFor="">Main Picture</label>
  <input type="text" placeholder='url'/>
  </div>


  <div className={styles['three-little-photos']}>
  <label htmlFor="">Three smaller</label>
  <label htmlFor="">Picture:1</label>
  <input type="text" placeholder='url'/>

  <label htmlFor="">Picture:2</label>
  <input type="text" placeholder='url'/>

  <label htmlFor="">Picture:3</label>
  <input type="text" placeholder='url'/>
  </div>

  <div className={styles['main-info']}>
  <label htmlFor="">Make</label>
  <input type="text" placeholder='' />

  <label htmlFor="">Model</label>
  <input type="text" placeholder='' />

  <label htmlFor="">Description Upper</label>
  <textarea name="" id="" cols="30" rows="10"></textarea>

  <label htmlFor="">Price</label>
  <input type="text" placeholder='' />
  </div>
 
 <div className={styles.specifics}>
  <label htmlFor="">Type</label>
  <input type="text" placeholder='' />

  <label htmlFor="">Make</label>
  <input type="text" placeholder='' />

  <label htmlFor="">Model</label>
  <input type="text" placeholder='' />

  <label htmlFor="">First Registration</label>
  <input type="text" placeholder='' />

  <label htmlFor="">Mileage</label>
  <input type="text" placeholder='' />

  <label htmlFor="">Fuel</label>
  <input type="text" placeholder='' />

  <label htmlFor="">Engine Size</label>
  <input type="text" placeholder='' />

  <label htmlFor="">Power</label>
  <input type="text" placeholder='' />

  <label htmlFor="">Gearbox</label>
  <input type="text" placeholder='' />

  <label htmlFor="">Number of Seats</label>
  <input type="text" placeholder='' />

  <label htmlFor="">Doors</label>
  <input type="text" placeholder='' />

  <label htmlFor="">Color</label>
  <input type="text" placeholder='' />
 </div>

<div className={styles['bigger-description']}>
<label htmlFor="">Description</label>
<textarea name="" id="" cols="30" rows="10"></textarea>
</div>

<div className='contact-info'>
<label htmlFor="">Name</label>
  <input type="text" placeholder='' />

  <label htmlFor="">Phone</label>
  <input type="text" placeholder='' />

  <label htmlFor="">Address</label>
  <input type="text" placeholder='' />

  <label htmlFor="">Email</label>
  <input type="text" placeholder='' />
</div>

</form>
</div> */}