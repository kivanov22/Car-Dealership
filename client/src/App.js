import './App.css';
import Navigation from './components/layout/Navigation/Navigation.js';
import {Route, Routes} from 'react-router-dom';
import Login from './components/user/Login/Login.js';
import CatalogCars from './components/cars/Catalog/CatalogCars.js';
import Dashboard from './components/layout/Dashboard/Dashboard.js';
import Register from './components/user/Register/Register.js';
import Details from './components/cars/Details/Details.js';
import Edit from './components/cars/Edit/Edit.js';
import Create from './components/cars/Create/Create.js';
import * as carService from './services/carService.js';
import { useState } from "react";
import {useEffect} from "react";

function App() {
  const [cars, setCars] = useState([]);

  useEffect(()=>{
    carService.getAll()
    .then(carData =>setCars(carData));
  },[]);

  

  return (
    <div className="App">
        <Navigation />
        <main>
        <Routes>
          <Route path='/catalogCars' element={<CatalogCars cars={cars}/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Dashboard cars={cars}/>} />
          {/* <Route path="/details" element={<Details />} /> */}
          <Route path="/details/:carId" element={<Details cars={cars}/>} />
          <Route path="/edit/:carId" element={<Edit cars={cars}/>} />
          <Route path='/create' element={<Create />}/>
        </Routes>
        </main>
        
       
    </div>
  );
}

export default App;
