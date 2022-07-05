import './App.css';
import Banner from './components/Banner/Banner.js';
import Filter from './components/Filter/Filter.js';
import Navigation from './components/Navigation/Navigation.js';
import NewestCars from './components/NewestCars/NewestCars.js';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Navigation />
        <Banner />
        <Filter />
        <NewestCars/>
    </div>
  );
}

export default App;
