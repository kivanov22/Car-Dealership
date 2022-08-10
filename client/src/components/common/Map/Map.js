import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import styles from './Map.module.css';
import * as carService from '../../../services/carService.js';

import ReactMapGL,{Marker,Popup} from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';
import {places} from '../../../api/cities.js';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import mapboxgl from 'mapbox-gl';

function Map(carId) {
     const[selectedCity,setSelectedCity]= useState({});
     const[sellerCity,setSellerCity] = useState('');
  
console.log(selectedCity);
// let {car} = carId;
// car = Number(car)
// let id = car;



//      useEffect(()=>{
//           carService.getSellerCity(id)
//           .then(res=>setSellerCity(res));
//      },[id])

     // let cityArr = places.filter(function (e){
     //      return sellerCity === e.city;
     // });
     // console.log(cityArr);
// console.log(sellerCity);

     // const findCity = places.find(c => {
     //      return c.city === sellerCity;
     // });
     // console.log(findCity);
     
    
    
     
     // const coordinates = {
     //      longitude: findCity.lng,
     //      latitude: findCity.lat,
     //    };

     // const center = getCenter(coordinates);


     const[viewport, setViewport] = useState({
          latitude:42.6979,
          longitude:23.3217,
          width:'100%',
          height:'100%',
          zoom:10,
          
      });
      
     //  const map = new mapboxgl.Map({
     //      container:'map',
     //      style:'mapbox://styles/techwithchris7767/cl6i3lrjy006i16pk4ycgzskj',
     //      center:[42.6979,23.3217],
     //      zoom:13
     //  });
     // map.addControl(new mapboxgl.FullscreenControl());

  return (
    <ReactMapGL 
     mapStyle="mapbox://styles/techwithchris7767/cl6i3lrjy006i16pk4ycgzskj"
     mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
     {...viewport}
     onViewportChange={viewport =>{setViewport(viewport)}}
     >
          {places.filter(c=>c.city === 'Sofia')
          .map(result =>(
               <div key={result.lng}>
               <Marker
               longitude={result.lng}
               latitude={result.lat}
               offsetLeft={-20}
               offsetTop={-10}
               //key={result.id}
               >
                    <p
                    role="img"
                    onClick={() =>setSelectedCity(result.city)}
                    className={styles.markLocation}
                    >
                    <FontAwesomeIcon icon={faLocationDot} />
                    </p>
               </Marker>

                {selectedCity.lng===result.lng ? (
                <Popup
                onClose={()=>setSelectedCity({})}
               closeOnClick={true}
               latitude={result.lat}
               longitude={result.lng}
               >
               {result.city}
               </Popup>
               ):(false)}
          </div>
          ))}
     </ReactMapGL >
  )
}

export default Map;