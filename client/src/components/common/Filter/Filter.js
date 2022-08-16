import React from "react";
import styles from "../Filter/Filter.module.css";
import { useState,useEffect } from "react";
// import FilterHeloper from "../Filter/filterHelper.js";
import * as carService  from '../../../services/carService.js';

function Filter({onFilterAllParams,onFilterMakes,onFilterMileage,onFilterCondition}) {
  const [makeList, setMakeList] = useState([]);
  const [modelList, setModelList] = useState([]);
  // const [make, setMake] = useState("");
  const [search, setSearch] = useState({});
  const [filters, setFilters] = useState({
    condition:"",
    make: "",
    mileage: 0,
    price:0,
    year:0,
    fuel:'',
    power:0,
    color:'',
    gearbox:'',
  });
  //  let {filterData,takeData} = useContext(SearchContext);
  // const {search,setSearch} =useContext(CarSearchContext);
  //let cars = require('../../../api/car-list.json');


  // const [cars, setCars] = useState({
  //   cars: [],
  //   pages: 0,
  //   currentPage: 0,
  // });
  
  // const page = Number(1);
  
  // useEffect(() => {
  //   carService.getAll(page).then((res) => setCars(res));
  // }, [page]);
  
  
  useEffect(()=>{
    carService.getMakes()
    .then(res=>setMakeList(res))
  },[])
  

  // useEffect(()=>{
  //   carService.getModels()
  //   .then(carData =>setModelList(carData));
  // },[]);

  const carFilterSubmitHandler = (e) => {
    e.preventDefault();

    let formData = Object.fromEntries(new FormData(e.currentTarget));

    setSearch(formData);
    //search = formData
    console.log(search);
  };

  const selectMakeHandler = (e) => {
    let makeValue = e.currentTarget.value;
  };

  const handleInput = (field) => (e) => {
    const { value } = e.target;
    let filterBy = null;
    setFilters({
      ...filters,
      [field]: value,
    });
    
    switch (field) {
      case "condition":
        filterBy='condition';
        onFilterAllParams(filterBy,value);
        break;
      case "make":
        filterBy='make';
        onFilterAllParams(filterBy,value);
        break;
      case "mileage":
        filterBy='mileage';
        onFilterAllParams(filterBy,value);
        break;
        case "price":
        filterBy='price';
        onFilterAllParams(filterBy,value);
        break;
        case "year":
          filterBy='year';
          onFilterAllParams(filterBy,value);
        break;
        case "fuel":
            filterBy='fuel';
            onFilterAllParams(filterBy,value);
        break;
        case "power":
            filterBy='power';
            onFilterAllParams(filterBy,value);
        break;
        case "color":
          filterBy='color';
          onFilterAllParams(filterBy,value);
      break;
      case "gearbox":
          filterBy='gearbox';
          onFilterAllParams(filterBy,value);
      break;
      default:
        break;
    }
  };

  return (
    <div className={styles.formHolder}>
      <form method="POST" onSubmit={carFilterSubmitHandler}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <label className={styles['label-text']} htmlFor="condition">Condition</label>
            <select 
            name="condition" 
            id="condition"
             className={styles.group}
             value={filters.condition}
             onChange={handleInput("condition")}
             >
              <option value={"All"}>All</option>
              <option value="used">Used</option>
              <option value="new">New</option>
            </select>
          </div>

          <div className={styles.container}>
            <label className={styles['label-text']} htmlFor="make">Make</label>
            {/* onChange={(e)=>setMake(e.target.value)} */}
            <select
              id="make"
              name="make"
              className={styles.group}
               value={filters.make}
              // onChange={selectMakeHandler}
              onChange={handleInput("make")}
            >
              <option value={"All"}>All</option>
              <option value="BMW">BMW</option>
              <option value="Mercedes">Mercedes</option>
              <option value="Opel">Opel</option>
              {/* {makeList.map((m)=>(
              <option value="all">All</option>,
              <option key={m} value={m}>{m}</option>
            ))}  */}
            </select>
          </div>

          {/* <div className={styles.container}>
            <label htmlFor="model">Model:</label>
            <select name="model" id="model" className={styles.group}>
              {modelList.map((m) => (
                <option value={m}>{m}</option>
              ))}
            </select>
          </div> */}

          {/* price drop down with different options maybe */}
          <div className={styles.container}>
            <label className={styles['label-text']} htmlFor="price">Price</label>
            <input 
            type="number" 
            name="price" 
            className={styles.group}
            value={filters.price}
            onChange={handleInput("price")}
            />
          </div>

          <div className={styles.container}>
            <label className={styles['label-text']} htmlFor="mileage">Mileage</label>
            <input
            id="mileage"
              type="number"
              name="mileage"
              className={styles.group}
              value={filters.mileage}
              onChange={handleInput("mileage")}
            />
          </div>

           <div className={styles.container}>
            <label className={styles['label-text']} htmlFor="power">Power</label>
            <input 
            type="number" 
            name="power" 
            className={styles.group}
            value={filters.power}
            onChange={handleInput("power")}
            />
          </div> 

          <div className={styles.container}>
            <label className={styles['label-text']} htmlFor="fuel">Fuel</label>
            <select 
            value={filters.fuel}
            onChange={handleInput("fuel")}
            className={styles.group}
            >
              <option value={"All"}>All</option>
              <option value="petrol">Petrol</option>
              <option value="diesel">Diesel</option>
            </select>
          </div>

          <div className={styles.container}>
            <label className={styles['label-text']} htmlFor="gearbox">Gearbox</label>
            <select 
            value={filters.gearbox}
            onChange={handleInput("gearbox")}
            className={styles.group}>
              <option value={"All"}>All</option>
              <option value="automatic">Automatic</option>
              <option value="manual">Manual</option>
            </select>
          </div>

          <div className={styles.container}>
            <label className={styles['label-text']} htmlFor="color">Color</label>
            <input 
            type="text" 
            name="color" 
            className={styles.group}
            value={filters.color}
            onChange={handleInput("color")}
             />
          </div>

          <div className={styles.container}>
            <label className={styles['label-text']} htmlFor="year">Year</label>
            <input
             type="number"
             name="year"
              className={styles.group}
              value={filters.year}
            onChange={handleInput("year")}
              />
          </div> 

          {/* <div className={styles.container}>
            <input className={styles.button} type="submit" value="Search" />
          </div> */}
        </div>
      </form>
    </div>
  );
}

export default Filter;
