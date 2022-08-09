import './styles/App.css';
import Navigation from './components/layout/Navigation/Navigation.js';
import {Route, Routes} from 'react-router-dom';
import Login from './components/user/Login/Login.js';
import CatalogCars from './components/cars/Catalog/CatalogCars.js';
import Dashboard from './components/layout/Dashboard/Dashboard.js';
import Register from './components/user/Register/Register.js';
import Details from './components/cars/Details/Details.js';
import Edit from './components/cars/Edit/Edit.js';
import Create from './components/cars/Create/Create.js';
import { lazy,Suspense } from "react";
import MyListings from './components/cars/MyListings/MyListings.js';
import {AuthProvider} from './context/AuthContext.js';
import Logout from './components/user/Logout/Logout.js';
import {  CarsProvider } from './context/CarsContext.js';
import PrivateRoute from './components/common/PrivateRoute.js';
import PrivateGuard from './components/common/PrivateGuard.js';


function App() {

  // useEffect(()=>{
  //   carService.getAll(page)
  //   .then(carData =>setCars(carData));
  // },[page]);


  return (
    <AuthProvider >
    <div className="App">
        <Navigation />
        <CarsProvider>
        <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path='/catalogCars' element={<CatalogCars/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/details/:carId" element={<Details />} />

          <Route path="/edit/:carId" element={<Edit/>} />

          <Route path='/create' element={<Create />}/>
          <Route path='/myCars' element={<MyListings />} />
        </Routes>
        </main>
        </CarsProvider>
    </div>
    </AuthProvider>

  );
}

export default App;
