import { createContext,useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import * as carService from '../services/carService.js';


export const CarsContext = createContext();

export const CarsProvider = ({children}) =>{
    const navigate = useNavigate();
    const[cars,setCars] = useState([]);
    const page = Number(1);

    const carAdd = (carData) => {
        setCars(state => [
            ...state,
            carData,
        ]);

        navigate('/catalogCars');
    };

    const carEdit = (carId, carData) => {
        setCars(state => state.map(x => x.id === carId ? carData : x));
        navigate('/catalogCars');
    }

    useEffect(() => {
        carService.getAll(page)
            .then(result => {
                setCars(result);
            });
    }, [page]);
    //console.log(cars);
    return (
        <CarsContext.Provider value={{
            cars,
            carAdd,
            carEdit
            }}>
            {children}
        </CarsContext.Provider>
    )
}



    
