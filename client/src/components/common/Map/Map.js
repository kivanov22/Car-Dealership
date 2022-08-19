import React from 'react'
import { useState } from "react";
import styles from './Map.module.css';

import ReactMapGL,{Marker,Popup} from 'react-map-gl';
import {places} from '../../../api/cities.js';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import 'mapbox-gl/dist/mapbox-gl.css';
// import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'

function Map({carId}) {
     const[selectedCity,setSelectedCity]= useState({});
     const[allCities,setAllCities] = useState(places);
    

     const[viewport, setViewport] = useState({
          longitude:23.319941,//Number(findCityToCenter.longitude) //23.0308 // 23.319941
          latitude:42.698334,//Number(findCityToCenter.latitude) //42.5998// BG 42.698334
          width:'100%',
          height:'100%',
          zoom:13,
      });

     
  return (
    <ReactMapGL 
     mapStyle="mapbox://styles/techwithchris7767/cl6i3lrjy006i16pk4ycgzskj"
     mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
     {...viewport}
     style={{width: 300, height: 300}}
     onViewportChange={viewport =>{setViewport(viewport)}}
     >
          {allCities
          .filter(c=>c.city === "Sofia")//cityToFind setCities
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