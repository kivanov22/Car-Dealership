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
import MyListings from './components/cars/MyListings/MyListings.js';
import PrivateRoute from './components/common/PrivateRoute.js';
import {AuthContext} from './context/authContext.js';
import {useLocalStorage} from './hooks/useLocalStorage.js';
import Logout from './components/user/Logout/Logout.js';

function App() {
  const [cars, setCars] = useState([]);
  const[auth, setAuth] = useLocalStorage('auth',{});
  const [search,setSearch] = useState({});


  const userLogin = (authData) => {
    setAuth(authData);
};

const userLogout = () => {
    setAuth({});
};

  useEffect(()=>{
    carService.getAll()
    .then(carData =>setCars(carData));
  },[]);



  return (
    <AuthContext.Provider value={{user: auth, userLogin,userLogout}}>
    <div className="App">
        <Navigation />
        <main>
        <Routes>
          <Route path="/" element={<Dashboard cars={cars} search={search}/>} />
          <Route path='/catalogCars' element={<CatalogCars cars={cars} search={search}/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/details/:carId" element={<Details />} />
          <Route path="/edit/:carId" element={<Edit cars={cars}/>} />
          <Route path='/create' element={<Create />}/>
          <Route path='/myCars' element={<MyListings />} />
        </Routes>
        </main>
    </div>
    </AuthContext.Provider>

  );
}

export default App;
