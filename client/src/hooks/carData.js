import {useState} from "react";
import React from 'react'


 const useCarData = () => {
    const[condition,setCondition] = useState('');
    const[type,setType] = useState('');
    const[make,setMake] = useState('');
    const[model,setModel] = useState('');
    const[imageUrl,setImageUrl] = useState('');
    const[year,setYear] = useState(0);
    const[price,setPrice] = useState(0);
    const[gearbox,setGearbox] = useState('');
    const[fuel,setFuel] = useState('');
    const[color,setColor] = useState('');
    const[power,setPower] = useState(0);
    const[engineSize,setEngineSize] = useState(0);
    const[mileage,setMileage] = useState(0);
    const[doors,setDoors] = useState(0);
    const[description,setDescription] = useState('');
    const[miniDescription,setMiniDescription] = useState('');
    const[isOwner,setIsOwner] = useState(Boolean);
    const[name,setName] = useState('');
    const[phone,setPhone] = useState(0);
    const[email,setEmail] = useState('');
    const[address,setAddress] = useState('');


  return (
        condition,
        type,
        make,
        model,
        imageUrl,
        year,
        price,
        gearbox,
        fuel,
        color,
        power,
        engineSize,
        mileage,
        doors,
        description,
        miniDescription,
        isOwner,
        name,
        phone,
        email,
        address,
        setCondition,
        setType,
        setMake,
        setModel,
        setImageUrl,
        setYear,
        setPrice,
        setGearbox,
        setFuel,
        setColor,
        setPower,
        setEngineSize,
        setMileage,
        setDoors,
        setDescription,
        setMiniDescription,
        setIsOwner,
        setName,
        setPhone,
        setEmail,
        setAddress
  )
}

export default useCarData;

// {
//     values:{
//         condition,
//         type,
//         make,
//         model,
//         imageUrl,
//         year,
//         price,
//         gearbox,
//         fuel,
//         color,
//         power,
//         engineSize,
//         mileage,
//         doors,
//         description,
//         miniDescription,
//         isOwner,
//         name,
//         phone,
//         email,
//         address
//     },
//     setters:{
//         setCondition,
//         setType,
//         setMake,
//         setModel,
//         setImageUrl,
//         setYear,
//         setPrice,
//         setGearbox,
//         setFuel,
//         setColor,
//         setPower,
//         setEngineSize,
//         setMileage,
//         setDoors,
//         setDescription,
//         setMiniDescription,
//         setIsOwner,
//         setName,
//         setPhone,
//         setEmail,
//         setAddress
//     }
// }