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
import 'mapbox-gl/dist/mapbox-gl.css';

function Map({carId}) {
     const[sellerCity,setSellerCity] = useState('');
     const[selectedCity,setSelectedCity]= useState({});
  

 let id = carId;



     useEffect(()=>{
          carService.getSellerCity(id)
          .then(res=>setSellerCity(res));
     },[id])
    
     // let cityToFind = sellerCity;
     // console.log(cityToFind);
     // let findCityToCenter = places.find(c=>c.city===cityToFind);
     // console.log(findCityToCenter);
     
    
     
     // const coordinates = places
     // .filter(c=>c.city=== cityToFind)
     // .map(result =>({
     //      longitude: Number(result.latitude),
     //      latitude: Number(result.longitude),
     //    }));
     //   console.log(coordinates);

     // const center = getCenter(coordinates);


     const[viewport, setViewport] = useState({
          latitude:42.5998,//Number(findCityToCenter.latitude)
          longitude:23.0308,//Number(findCityToCenter.longitude)
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
     style={{width: 600, height: 400}}
     onViewportChange={viewport =>{setViewport(viewport)}}
     >
          {places.filter(c=>c.city === "Pernik")//cityToFind
          .map(result =>(
               <div key={result.longitude}>
               <Marker
               longitude={result.longitude}
               latitude={result.latitude}
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

                {selectedCity.longtitude===result.longitude ? (
                <Popup
                onClose={()=>setSelectedCity({})}
               closeOnClick={true}
               latitude={result.latitude}
               longitude={result.longitude}
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