import React from "react";
import { useState } from "react";
import useCarData from "../../../hooks/carData.js";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from '../../../context/authContext.js';

import styles from "../Create/Create.module.css";
import * as carService from "../../../services/carService.js";

function Create() {
  const navigate = useNavigate();
  const {user} = useContext(AuthContext);
  const userId = user.id;

  const{ 
    condition,
    make,
    model,
    imageUrl,
    firstLowerImgUrl,
    secondLowerImgUrl,
    thirdLowerImgUrl,
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
    isOwner,
    fullName,
    phone,
    email,
    address,
    setCondition,
    setMake,
    setModel,
    setImageUrl,
    setFirstLowerImgUrl,
    setSecondLowerImgUrl,
    setThirdLowerImgUrl,
    setYear,
    setPrice,
    setGearbox,
    setFuel,
    setColor,
    setPower,
    setEngineSize,
    setMileage,
    setDoors,
    setDescription,
    setMiniDescription,
    setIsOwner,
    setFullname,
    setPhone,
    setEmail,
    setAddress
  }=useCarData();
 
  const carCreateSubmitHandler = (e) => {
    e.preventDefault();
    let {condition,
      make,
      model,
      imageUrl,
      firstLowerImgUrl,
      secondLowerImgUrl,
      thirdLowerImgUrl,
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
    let {fullName,address,email,phone}= Object.fromEntries(new FormData(e.currentTarget));
   
     year = Number(year);
     price= Number(price);
     power= Number(power);
     engineSize = Number(engineSize);
      doors = Number(doors);
     mileage = Number(mileage);
     isOwner = Boolean(isOwner);
      // phone = Number(phone);

    let carData = {
      condition,
      make,
      model,
      imageUrl,
      firstLowerImgUrl,
      secondLowerImgUrl,
      thirdLowerImgUrl,
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
        userId,
        fullName,
        address,
        email,
        phone
      }

      let sendData = {
        ...carData,
        seller
        }
      console.log(sendData)
      
     carService.create(sendData);
     navigate('/myCars')
    }
 

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
              <input type="text" id="imageUrl" name="imageUrl"  value={imageUrl} onChange={setImageUrl}/>
            </div>

            <br />

            <div className={styles.row}>
              <div className={styles["columns-photos"]}>
                <div className={styles["little-pics"]}>
                  {/* <img src={car} alt="" loading="lazy" className={styles['img-responsive']}/> */}
                  {/* <label  htmlFor="" className={styles['form-span']}>First Picture</label>
                                   <input type="text" id="firstImage" name="firstImage"/> */}
               <label htmlFor="firstLowerImgUrl" className={styles["form-span"]}>
                First Lower Image
              </label>
              <input type="text" id="firstLowerImgUrl" name="firstLowerImgUrl"  value={firstLowerImgUrl} onChange={setFirstLowerImgUrl}/>
                </div>

                <br />
              </div>

              <div className={styles["columns-photos"]}>
                <div className={styles["little-pics"]}>
                <label htmlFor="secondLowerImgUrl" className={styles["form-span"]}>
                Second Lower Image
              </label>
              <input type="text" id="secondLowerImgUrl" name="secondLowerImgUrl"  value={secondLowerImgUrl} onChange={setSecondLowerImgUrl}/>
                </div>

                <br />
              </div>

              <div className={styles["columns-photos"]}>
                <div className={styles["little-pics"]}>
                <label htmlFor="secondLowerImgUrl" className={styles["form-span"]}>
                Third Lower Image
              </label>
              <input type="text" id="thirdLowerImgUrl" name="thirdLowerImgUrl"  value={thirdLowerImgUrl} onChange={setThirdLowerImgUrl}/>
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
                value={miniDescription} onChange={setMiniDescription}
              />

              <label htmlFor="condition" className={styles["form-span"]}>
                Condition
              </label>
              <input type="text" id="condition" name="condition" value={condition} onChange={setCondition}/>

              <label htmlFor="price" className={styles["form-span"]}>
                Price
              </label>
              <input type="number" id="price" name="price" value={price} onChange={setPrice} />

              <div className={styles.row}>
                {/* <div className={styles["info-col-1"]}>
                  <p className={styles["form-text"]}>
                    <span className={styles["form-span"]}>Type</span>

                    <br />

                    <input
                      type="text"
                      className={styles["form-strong"]}
                      name="type"
                      id="type"
                    //   defaultValue={car.type}
                      value={type} onChange={setType}
                    />
                  </p>
                </div> */}

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
                    value={make} onChange={setMake}
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
                    value={model} onChange={setModel}
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
                    value={year} onChange={setYear}
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
                    value={mileage} onChange={setMileage}
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
                    value={fuel} onChange={setFuel}
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
                    value={engineSize} onChange={setEngineSize}
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
                    value={power} onChange={setPower}
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
                    value={gearbox} onChange={setGearbox}
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
                    value={isOwner} onChange={setIsOwner}
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
                    value={doors} onChange={setDoors}
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
                    value={color} onChange={setColor}
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
                  value={description} onChange={setDescription}
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
                    name="fullName"
                    id="fullName"
                    value={fullName} 
                    onChange={setFullname}
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
                    value={phone} onChange={setPhone}
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
                    value={address} onChange={setAddress}
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
                    value={email} 
                    onChange={setEmail}
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


