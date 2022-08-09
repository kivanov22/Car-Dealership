import React from 'react';
import styles from '../Filter/Filter.module.css';
import {useState} from 'react';

function Filter() {
  const [makeList, setMakeList] = useState([]);
  const [modelList, setModelList] = useState([]);
  const [make,setMake] = useState('')
  const [search,setSearch] = useState({});
//  let {filterData,takeData} = useContext(SearchContext);
  // const {search,setSearch} =useContext(CarSearchContext);
  //let cars = require('../../../api/car-list.json');

  // useEffect(()=>{
  //   carService.getMakes()
  //   .then(carData =>setMakeList(carData));
  // },[]);

  // useEffect(()=>{
  //   carService.getModels()
  //   .then(carData =>setModelList(carData)); 
  // },[]);
 

  
const carFilterSubmitHandler = (e) =>{
  e.preventDefault();

  let formData= Object.fromEntries(new FormData(e.currentTarget));

  setSearch(formData);
    //search = formData
  console.log(search);
   
}

const selectMakeHandler = (e) =>{
  let makeValue = e.currentTarget.value;
 
}

  return (
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
              {/* {cars.map((m)=>(
              <option  value={m}>{m}</option>
            ))}  */}
              
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
  )
}

export default Filter;


