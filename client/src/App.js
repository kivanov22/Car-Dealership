import './App.css';
import Navigation from './components/layout/Navigation/Navigation.js';
import {Route, Routes} from 'react-router-dom';
import Login from './components/user/Login/Login.js';
import CatalogCars from './components/cars/Catalog/CatalogCars.js';
import Dashboard from './components/layout/Dashboard/Dashboard.js';
import Register from './components/user/Register/Register.js';
import Details from './components/cars/Details/Details.js';
import Edit from './components/cars/Edit/Edit.js';

function App() {
  return (
    <div className="App">
        <Navigation />
        <main>
        <Routes>
          <Route path='/catalogCars' element={<CatalogCars/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/details" element={<Details />} />
          <Route path="/details/:carId" element={<Details />} />
          <Route path="/edit/:carId" element={<Edit />} />
        </Routes>
        </main>
        
       
    </div>
  );
}

export default App;
