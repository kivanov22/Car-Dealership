import React from "react";
import * as carService from "../../../services/carService.js";
import { useState,useEffect } from "react";

function FilterHelper(){
  const [cars, setCars] = useState({
    cars: [],
    pages: 0,
    currentPage: 0,
  });
  const [allData, setAllData] = useState(cars.cars);

  const page = Number(1);

  useEffect(() => {
    carService.getAll(page).then((res) => setCars(res));
  }, [page]);

   const handleFilterMake = (make) => {
    const filteredData = allData.filter((item) => {
      if (item.make === make) {
        return item;
      }
    });

    setAllData(filteredData);
  };

   const handleFilterMileage = (mileage)=>{
    const filteredData = allData.filter((item)=>{
        if(item.mileage <=mileage){
            return item;
        }
    })
    setAllData(filteredData);
  }


   return{
    handleFilterMake,
    handleFilterMileage
  }

}
export default FilterHelper;
