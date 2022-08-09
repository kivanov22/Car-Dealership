import React, { useContext } from "react";
import styles from "../Catalog/CatalogCars.module.css";
import { useState } from "react";
import * as carService from "../../../services/carService.js";
import { CarsContext } from "../../../context/CarsContext.js";
import CatalogItem from "./CatalogItem/CatalogItem.js";


function CatalogCars() {
  const { cars } = useContext(CarsContext);
 
  // const[collection,setCollection] = useState([]);
  // const[filter,setFilter] = useState({});
  const[selectedSorting,setSelectedSorting] = useState('');
  // const [value, setValue] = useState({
  //   cars:[],
  //   pages:0,
  //   currentPage:0,
  // });
  // const[q,setQ] = useState('');
  // const [searchParam] = useState(['condition','make','model','price','mileage','power','fuel','doors','color','year']);

  //const [value,setValue] = useState([]);
  //const page = Number(1);

  // useEffect(()=>{
  //   carService.getAll(page)
  //   .then(res=>setValue(res))
  // },[page]);


  // function filterArray(array,filters) {
  //   const filterKeys = Object.keys(filters);

  //   return array.filter(item =>{
  //     return filterKeys.every(key=>{
  //       if(typeof filters[key] !== 'function')return true;
  //       return filters[key](item[key]);
  //     });
  //   });
  // } 

  const submitHandler = (e) =>{
    e.preventDefault();
    //let formData= Object.fromEntries(new FormData(e.currentTarget));

    // price = Number(price);
    // mileage = Number(mileage);
    // power = Number(power);
    // doors = Number(doors);
    // year = Number(year);
    // console.log(condition,make,model,price,mileage,power,fuel,doors,color,year);
    //setFilter(formData)
    // carService.filterCars(condition,make,model,price,mileage,power,fuel,doors,color,year)
    // .then(res=> setCollection(res))
    // console.log(collection);
  }

 
  const criteria = selectedSorting;
  const sorted = carService.sortBy(criteria);
 
 
  // const chouseCollection = (data) =>{
  //     if(filter.length > 0){
        
  //     }
  // }

  return (
    <section className={styles.catalog}>
      <div className={styles.rightSide}>
        <div className={styles.sortingContainer}>
        <label htmlFor="sort" className={styles.sort}>Sort By:</label>
            <select name="sort" id="sort" className={styles["sorting-criteria"]} 
            value={selectedSorting} onChange={(e) =>setSelectedSorting(e.target.value)}>
              <option value="all" name="all">All</option>
              <option value="ascending" name="ascending">Ascending</option>
              <option value="descending" name="descending">Descending</option>
              <option value="priceLowest" name="priceLowest">Price lower</option>
              <option value="priceHighest" name="priceHighest">Price higher</option>
            </select>
        </div>
        {cars.cars.length > 0 
        ? cars.cars.map(x=> <CatalogItem key={x.id} car={x} />)
        : <h1 className={styles.message}>There is no cars in DB !</h1>
        }
        <div className={styles.pageContainer}>
          <button className={styles.forwardBtn}>forward</button>
          <p>{cars.currentPage}</p>
          {/* <p>Total Pages {cars.pages}</p> */}
          <button className={styles.backwardBtn}>backward</button>
        </div>
      </div>
    </section>
  );
}

export default CatalogCars;
