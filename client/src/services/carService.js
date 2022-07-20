const baseUrl = 'https://localhost:7213/api';

//GET All
export const getAll = async () => {
    const response = await fetch(`${baseUrl}/Car/GetAll`);
    const result = await response.json();
    // console.log(result);
    return result.value;
}

//Get:ID
export const getOne = async (carId)=> {
const response = await fetch(`${baseUrl}/Car/GetOne/${carId}`);
// ${carId}
const result = await response.json();

return result.value;
}
//Create Edit
export const createEdit = async (carData) => {
    const response = await fetch(`${baseUrl}/Car/CreateEdit`,{
        method:'POST',
        headers: {
            'content-type':'application/json',
            //'X-Authorization': token,
        },
        body: JSON.stringify(carData,carData.Id)
    });
    
    
    const result = await response.json();
    
    return result;
    }

//Post / Create 
export const create = async (carData) => {
const response = await fetch(`${baseUrl}/Car/Create`,{
    method:'POST',
    headers: {
        'content-type':'application/json',
        //'X-Authorization': token,
    },
    body: JSON.stringify(carData)
});


const result = await response.json();

return result.value;
}

export const edit = async (carData) => {
    const response = await fetch(`${baseUrl}/Car/Edit/${carData.id}`,{
        method:'POST',
        headers: {
            'content-type':'application/json',
        },
        body: JSON.stringify(carData)
    });
    
    
    
    const result = await response.json();
    
    return result.value;
}
    // export const update = (petId, petData) => request.put(`${baseUrl}/pets/${petId}`, petData);

// export const getOne = (id) => fetch(`${baseUrl}/games/${id}`).then(res => res.json());

// export const getLatest = () => {
//     return fetch(`${baseUrl}/games?sortBy=_createdOn%20desc&distinct=category`)
//         .then(res => res.json())
//}