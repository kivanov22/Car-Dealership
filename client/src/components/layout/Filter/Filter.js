import React from 'react';
import styles from '../Filter/Filter.module.css';
import {useState} from 'react';
import {useEffect} from 'react';
import * as carService from '../../../services/carService.js';


function Filter({search}) {

  const [makeList, setMakeList] = useState([]);
  const [modelList, setModelList] = useState([]);
  const [make,setMake] = useState('')


  useEffect(()=>{
    carService.getMakes()
    .then(carData =>setMakeList(carData));
  },[]);

  useEffect(()=>{
    carService.getModels()
    .then(carData =>setModelList(carData)); 
  },[]);


  
const carFilterSubmitHandler = (e) =>{
  e.preventDefault();

  let formData= Object.fromEntries(new FormData(e.currentTarget));

    search = formData
  //  const formInfo = {
  //   ...formData,
  //   ...search
  //  }
      //router
      console.log(search)
}

const selectMakeHandler = (e) =>{
  let makeValue = e.currentTarget.value;
  //console.log(makeValue);

  //setMake(makeValue)
  
  // let bmw = 'bmw';

  //   carService.getModels(bmw)
  //   .then(carData =>setModelList(carData)); 

   
 
}



  return (
    <section className={styles['section-filter']}>
      <form method='POST' onSubmit={carFilterSubmitHandler}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <label htmlFor="condition">Used/New:</label>
            <select name="condition" id="condition" className={styles.group}>
              <option value="all">All</option>
              <option value="used">Used</option>
              <option value="new">New</option>
            </select>
          </div>


          <div className={styles.container}>
            <label htmlFor="make">Make:</label>
            {/* onChange={(e)=>setMake(e.target.value)} */}
            <select name="make" id="make" className={styles.group}  onChange={selectMakeHandler}>
              {makeList.map((m)=>(
              <option  value={m}>{m}</option>
            ))} 
              
            </select>
          </div>

          <div className={styles.container}>
            <label htmlFor="model">Model:</label>
            <select name="model" id="model" className={styles.group} >
            {modelList.map((m)=>(
              <option  value={m}>{m}</option>
            ))} 
            </select>
          </div>

          <div className={styles.container}>
            <label htmlFor="price">Price</label>
            <input type="number" name="price" className={styles.group}/>
          </div>

          <div className={styles.container}>
            <label htmlFor="mileage">Mileage</label>
            <input type="number" name="mileage" className={styles.group}/>
          </div>

          <div className={styles.container}>
            <label htmlFor="engine">Engine size</label>
            <input type="number" name="engine" className={styles.group}/>
          </div>

          <div className={styles.container}>
            <label htmlFor="power">Power</label>
            <input type="number" name="power" className={styles.group}/>
          </div>

          <div className={styles.container}>
            <label htmlFor="">Fuel</label>
            <select className={styles.group}>
              <option value="all">All</option>
              <option value="petrol">Petrol</option>
              <option value="diesel">Diesel</option>
            </select>
          </div>

          <div className={styles.container}>
            <label htmlFor="gearbox">Gearbox</label>
            <select className={styles.group}>
              <option value="all">All</option>
              <option value="automatic">Automatic</option>
              <option value="manual">Manual</option>
            </select>
          </div>

          {/* <div className={styles.container}>
            <label htmlFor="doors">Doors</label>
            <input type="number" name="doors" className={styles.group}/>
          </div> */}

          <div className={styles.container}>
            <label htmlFor="color">Color</label>
            <input type="text" name="color" className={styles.group}/>
          </div>

          <div className={styles.container}>
            <label htmlFor="year">Year</label>
            <input type="number" name="year" className={styles.group}/>
          </div>

          <div className={styles.container}>
          <input className={styles.button} type="submit" value="Search" />
          </div>
        </div>
        </form>
    </section>
  )
}

export default Filter;


