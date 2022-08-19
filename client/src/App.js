import './styles/App.css';
import Navigation from './components/layout/Navigation/Navigation.js';
import {Route, Routes} from 'react-router-dom';
import Login from './components/user/Login/Login.js';
import CatalogCars from './components/cars/Catalog/CatalogCars.js';
import Dashboard from './components/layout/Dashboard/Dashboard.js';
// import Register from './components/user/Register/Register.js';
import Details from './components/cars/Details/Details.js';
import Edit from './components/cars/Edit/Edit.js';
import Create from './components/cars/Create/Create.js';
import { lazy,Suspense } from "react";
import MyListings from './components/cars/MyListings/MyListings.js';
import { AuthProvider} from './context/AuthContext.js';
import Logout from './components/user/Logout/Logout.js';
import {  CarsProvider } from './context/CarsContext.js';
import PrivateRoute from './components/common/PrivateRoute.js';
import PrivateGuard from './components/common/PrivateGuard.js';
import AppLogout from './components/user/Logout/AutoLogout/AppLogout.js';

const Register = lazy(()=> import('./components/user/Register/Register.js'));

function App() {
  

  return (
    <AppLogout>
    <AuthProvider >
    <div className="App">
        <Navigation />
        <CarsProvider>
        <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path='/catalogCars' element={<CatalogCars/>}/>
          <Route path="/login" element={<Login />} />
          
          <Route path="/register" element={
            <Suspense fallback={<image src={require('./assets/tire.gif')}></image>}>
              <Register />
            </Suspense>
          } />

          <Route path="/details/:carId" element={<Details />} />

          <Route element={<PrivateGuard/>}>
              <Route path="/logout" element={<Logout />} />
              <Route path="/edit/:carId" element={<Edit/>} />
          </Route>

          <Route path='/create' element={
            <PrivateRoute>
              <Create />
            </PrivateRoute>
          }/>

          <Route path='/myCars' element={
            <PrivateRoute>
              <MyListings />
            </PrivateRoute>
          } />
        </Routes>
        </main>
        </CarsProvider>
    </div>
    </AuthProvider>
    </AppLogout>
  );
}

export default App;
