import './App.css';
import Banner from './components/Banner/Banner.js';
import Filter from './components/Filter/Filter.js';
import Navigation from './components/Navigation/Navigation.js';
import NewestCars from './components/NewestCars/NewestCars.js';
import {Route, Routes} from 'react-router-dom';
import LowerBanner from './components/LowerBanner/LowerBanner.js';
import Footer from './components/Footer/Footer.js';
import SubFooter from './components/SubFooter/SubFooter.js';
import Login from './components/Login/Login.js';
import CatalogCars from './components/CatalogCars/CatalogCars.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import Register from './components/Register/Register.js';

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

          {/* <Route path="/" element={<Banner />} />
          <Route path="/" element={<Filter />} />
          <Route path="/" element={<NewestCars />} />
          <Route path="/" element={<LowerBanner />} />
          <Route path="/" element={<Footer />} />
          <Route path="/" element={<SubFooter />} /> */}
        </Routes>
        </main>
        
       
    </div>
  );
}

export default App;

{/* <main>
        <Routes>
         <Route path="/login" element={<Login />}/>
        </Routes>
        </main> */}