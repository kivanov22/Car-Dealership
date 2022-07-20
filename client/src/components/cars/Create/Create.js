import React from "react";
import { useState } from "react";

import styles from "../Create/Create.module.css";
import { useEffect } from "react";
import * as carService from "../../../services/carService.js";
import { useParams } from "react-router-dom";

function Create() {
//   const [car, setCar] = useState({});

  //   firstImage: "",
  //     secondImage: "",
  //     thirdImage: "",
  //     numberOfSeats: "",

  const [values, setValues] = useState({
    condition: "",
    type: "",
    make: "",
    model: "",
    imageUrl: "",
    year: "",
    price: "",
    gearbox: "",
    fuel: "",
    color: "",
    power: "",
    engineSize: "",
    mileage: "",
    doors: "",
    description: "",
    miniDescription: "",
    isOwner: Boolean,
    seller: {
      name: "",
      phone: "",
      email: "",
      address: "",
    },
  });

//   const[name,setName] = useState('');
//   const[address,setAddress] = useState('');
//   const[email,setEmail] = useState('');
//   const[phone,setPhone] = useState('');


  const changeHandler = (e)=> {
     setValues(state => ({
       ...state
       [e.target]
       
     }));
   };

  

  const carCreateSubmitHandler = (e) => {
    e.preventDefault();
    let carData= Object.fromEntries(new FormData(e.currentTarget));
   

     // console.log(carData);

    //const { condition,isOwner, ...seller} = carData;
//     values.condition = carData.condition;
//     values.imageUrl = carData.imageUrl;
//     values.price = carData.condition;
//     values.make = carData.make;
//     values.model = carData.model;
//     values.year = carData.year;
//     values.mileage = carData.mileage;
//     values.fuel = carData.fuel;
//     values.engineSize = carData.engineSize;
//     values.power = carData.power;
//     values.gearbox = carData.gearbox;
//     values.doors = carData.doors;
//     values.color = carData.color;
//     values.description = carData.description;
//     values.miniDescription = carData.miniDescription;
//     values.isOwner = carData.isOwner;
//     values.seller.name = carData.name;
//     values.seller.phone = carData.phone;
//     values.seller.email = carData.email;
//     values.seller.address = carData.address;
    //let cars = Object.assign(values);

    //    let sellerData =   setValues({...values,seller:{
    //           // ...values.seller,
    //           name:carData.name,
    //           phone:carData.phone,
    //           address:carData.address,
    //           email: carData.email,

    //      }});

    // let sendData = {
    //      ...values,
    //      ...sellerData
    // }

    // const {
    // mainImage,
    // condition,
    // price,
    // type,
    // make,
    // model,
    // firstRegistration,
    // mileage,
    // fuel,
    // engineSize,
    // power,
    // gearBox,
    // doors,
    // color,
    // description,
    // isOwner,
    // seller: {
    //   name,
    //   phone,
    //   address,
    //   email} = this.values;

    //     const sendData = setValues( state =>{
    //           values.mainImage = {...carData.mainImage};
    //           values.condition = {...state.condition};
    //           values.price = {...state.price};
    //           values.make = {...state.make};
    //           values.model = {...state.model};
    //           values.firstRegistration = {...state.firstRegistration};
    //           values.mileage = {...state.mileage};
    //           values.fuel = {...state.fuel};
    //           values.engineSize = {...state.engineSize};
    //           values.power = {...state.power};
    //           values.gearBox = {...state.gearBox};
    //           values.doors = {...state.doors};
    //           values.color = {...state.color};
    //           values.description = {...state.description};
    //           values.isOwner = {...state.isOwner};
    //           values.miniDescription = {...state.miniDescription};
    //           values.seller.name = {...state.seller.name};
    //           values.seller.phone = {...state.seller.phone};
    //           values.seller.email = {...state.seller.email};
    //           values.seller.address = {...state.seller.address};

    //           return {values};
    //     });

    console.log(carData);
    carService.create(carData);
//     .then(res =>console.log(res)
//     .catch(err =>console.log(err)));
  };

  return (
    <section className={styles.details}>
      <form
        className={styles.container}
        method="POST"
        onSubmit={carCreateSubmitHandler}
      >
        <div className={styles.row}>
          <div className={styles.firstCol}>
            <div className={styles["container-upper-pic"]}>
              {/* <img src={car} alt="" loading="lazy" className={styles.upperPic}/> */}
              <label htmlFor="" className={styles["form-span"]}>
                Main Picture
              </label>
              <input type="text" id="imageUrl" name="imageUrl"  value={values.imageUrl} onChange={changeHandler}/>
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
               //  defaultValue={car.miniDescription}
                value={values.miniDescription} onChange={changeHandler}
              />

              <label htmlFor="condition" className={styles["form-span"]}>
                Condition
              </label>
              <input type="text" id="condition" name="condition" value={values.condition} onChange={changeHandler}/>

              <label htmlFor="price" className={styles["form-span"]}>
                Price
              </label>
              <input type="number" id="price" name="price" value={values.price} onChange={changeHandler} />

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
                    //   defaultValue={car.type}
                      value={values.type} onChange={changeHandler}
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
                    //   defaultValue={car.make}
                    value={values.make} onChange={changeHandler}
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
                    value={values.model} onChange={changeHandler}
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
                    value={values.year} onChange={changeHandler}
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
                    value={values.mileage} onChange={changeHandler}
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
                    value={values.fuel} onChange={changeHandler}
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
                    value={values.engineSize} onChange={changeHandler}
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
                    value={values.power} onChange={changeHandler}
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
                    value={values.gearbox} onChange={changeHandler}
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
                    value={values.isOwner} onChange={changeHandler}
                    />
                  </p>
                </div>

                {/* <div className={styles['info-col-1']}>
                                   <p className={styles['form-text']}>
                                        <span className={styles['form-span']}>Number of seats</span>
 
                                        <br/>
 
                                        <input className={styles['form-strong']} name="numberOfSeats" id="numberOfSeats" defaultValue={car.numberOfSeats} />
                                   </p>
                              </div> */}

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
                    value={values.doors} onChange={changeHandler}
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
                    value={values.color} onChange={changeHandler}
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
                  value={values.description} onChange={changeHandler}
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
                    value={values.seller.name} onChange={changeHandler}
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
                    value={values.seller.phone} onChange={changeHandler}
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
                    value={values.seller.address} onChange={changeHandler}
                  />
                </p>

                <p>
                  <span className={styles["contact-info"]}>Email</span>

                  <br />

                  <input
                    type="text"
                    href="mailto:krisko512@gmail.com"
                    className={styles["contact-info"]}
                    name="email"
                    id="email"
                    value={values.seller.email} 
                    onChange={changeHandler}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
        <input className="" type="submit" value="Create" />
      </form>
    </section>
  );
}

export default Create;

{
  /* <div className={styles.wrapper}>
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
</div> */
}
