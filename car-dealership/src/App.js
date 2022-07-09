import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import {Route, Routes} from 'react-router-dom';
import Login from './components/Login/Login.js';
import CatalogCars from './components/CatalogCars/CatalogCars.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import Register from './components/Register/Register.js';
import Details from './components/Details/Details.js';

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
        </Routes>
        </main>
        
       
    </div>
  );
}

export default App;
