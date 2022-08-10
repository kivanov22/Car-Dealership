import React, { useContext,useEffect } from "react";
import styles from "../Catalog/CatalogCars.module.css";
import { useState } from "react";
import * as carService from "../../../services/carService.js";
import { CarsContext } from "../../../context/CarsContext.js";
import CatalogItem from "./CatalogItem/CatalogItem.js";


function CatalogCars() {
  //const { cars } = useContext(CarsContext);

  // const[collection,setCollection] = useState([]);
  // const[filter,setFilter] = useState({});
  const[selectedSorting,setSelectedSorting] = useState('');
  const[sortedCollection,setSortedCollection] = useState([]);


  
  const [value, setValue] = useState({
    cars:[],
    pages:0,
    currentPage:0,
  });
  // const[q,setQ] = useState('');
  // const [searchParam] = useState(['condition','make','model','price','mileage','power','fuel','doors','color','year']);

  //const [value,setValue] = useState([]);
  const page = Number(1);

  useEffect(()=>{
    carService.getAll(page)
    .then(res=>setValue(res))
  },[page]);
  

  // function sortBy(param){
  //   //let updatedCars = cars.cars;
  //   console.log(param);
  //   if(param === 'ascending'){
  //     return value.cars = value.cars.sort((a,b) => a - b);
  //   }
  //   else if(param === 'descending'){
  //     return value.cars = value.cars.sort((a,b) => b - a);
  //   }
  //   else if(param === 'priceLowest'){
  //     return value.cars = value.cars.price.sort((a,b) => a-b);
  //   }
  //   else if(param === 'priceHighest'){
  //     return value.cars = value.cars.price.sort((a,b) =>b-a);
  //   }
  //   return value.cars;
  // }
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

//  const sortBy = (array,criteria) => {
//     if(criteria === 'priceLowest'){
//       return [...array].sort((a,b)=> a.price - b.price)
//     }
//  }

useEffect(()=>{
  const sortArray = type =>{
    let filteredValue = [...value.cars];
    if(type ==='default'){
      filteredValue.sort((a,b)=>a - b);
    }
    else if (type==='ascending') {
      filteredValue.sort((a,b)=>a.year - b.year)
    }
    else if (type==='descending') {
      filteredValue.sort((a,b)=>b.year - a.year)
    }
    else if (type==='priceLowest') {
      filteredValue.sort((a,b)=>a.price - b.price)
    }
    else if (type==='priceHighest') {
      filteredValue.sort((a,b)=>b.price - a.price)
    }
    //let filteredValue = [...value.cars];
    // const types ={
    //   default:filteredValue,
    //   ascending:filteredValue = filteredValue.sort((a,b)=> a.year - b.year),
    //   descending:filteredValue =filteredValue.sort((a,b)=> b.year - a.year),
    //   priceLowest:filteredValue =filteredValue.sort((a,b)=> a.price - b.price),
    //   priceHighest:filteredValue =filteredValue.sort((a,b)=> b.price - a.price),
    // };

    // const types ={
    //   default:[...value.cars],
    //   ascending:[...value.cars].year,
    //   descending:[...value.cars].year,
    //   priceLowest:[...value.cars].price,
    //   priceHighest:[...value.cars].price,
    // };
    //const sortPropperty =types[type];
      //filteredValue =filteredValue.filter(sortPropperty); 
      // let sorting = [];
      // if(sortPropperty === 'default') return sorting=[value.cars];
      // if(sortPropperty === 'ascending') return sorting=[value.cars].sort((a,b)=>a[sortPropperty] - b[sortPropperty])
      // if(sortPropperty === 'descending') return sorting=[value.cars].sort((a,b)=>b[sortPropperty] - a[sortPropperty])
      // if(sortPropperty === 'priceLowest') return sorting=[value.cars].sort((a,b)=>a[sortPropperty] - b[sortPropperty])
      // if(sortPropperty === 'priceHighest') return sorting=[value.cars].sort((a,b)=>b[sortPropperty] - a[sortPropperty])
      
    //const sorted = [...value.cars].sort((a,b)=>b[sortPropperty] - a[sortPropperty]);
    // setSortedCollection(sortPropperty);
    setSortedCollection(filteredValue);
    console.log(sortedCollection);
  };

  sortArray(selectedSorting);
},[value.cars,selectedSorting])

  // const criteria = selectedSorting;
  // const sorted = carService.sortBy(criteria);

  //let filteredCars = value.cars.sortBy(value.cars,selectedSorting);

  //let filteredCars = [...value.cars].sort((a,b) => b.id - a.id);
 
  // const chouseCollection = (data) =>{
  //     if(filter.length > 0){
        
  //     }
  // }

  return (
    <section className={styles.catalog}>
      <div className={styles.rightSide}>
        <div className={styles.sortingContainer}>
        <label htmlFor="sort" className={styles.sort}>Sort By:</label>
            <select name="sort"
             id="sort" 
             className={styles["sorting-criteria"]} 
            value={selectedSorting} 
            onChange={(e) =>setSelectedSorting(e.target.value)}>
              <option value="default" name="default">All</option>
              <option value="ascending" name="ascending">Ascending</option>
              <option value="descending" name="descending">Descending</option>
              <option value="priceLowest" name="priceLowest">Price lower</option>
              <option value="priceHighest" name="priceHighest">Price higher</option>
            </select>
        </div>
        {value.cars.length > 0 
        ? sortedCollection.map(x=> <CatalogItem key={x.id} car={x} />)
        : <h1 className={styles.message}>There is no cars in DB !</h1>
        }
        <div className={styles.pageContainer}>
          <button className={styles.backwardBtn} >backward</button>
          <p>{value.currentPage}</p>
          {/* <p>Total Pages {cars.pages}</p> */}
          <button className={styles.forwardBtn}>forward</button>
        </div>
      </div>
    </section>
  );
}

export default CatalogCars;
