import './App.css';
import Banner from './components/Banner/Banner.js';
import Filter from './components/Filter/Filter.js';
import Navigation from './components/Navigation/Navigation.js';
import NewestCars from './components/NewestCars/NewestCars.js';
import {Route} from 'react-router-dom';
import LowerBanner from './components/LowerBanner/LowerBanner.js';
import Footer from './components/Footer/Footer.js';
import SubFooter from './components/SubFooter/SubFooter.js';

function App() {
  return (
    <div className="App">
        <Navigation />
        <Banner />
        <Filter />
        <NewestCars/>
        <LowerBanner />
        <Footer />
        <SubFooter />
    </div>
  );
}

export default App;
