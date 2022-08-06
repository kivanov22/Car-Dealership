const baseUrl = 'https://localhost:7213/api';

//GET All
export const getAll = async (page) => {
    const response = await fetch(`${baseUrl}/Car/GetAll/${page}`);
    const result = await response.json();

    return result;
}

//Get:ID
export const getOne = async (carId)=> {
const response = await fetch(`${baseUrl}/Car/GetOne/${carId}`);
const result = await response.json();

return result.value;
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

export const edit = async (id,carData) => {
    const response = await fetch(`${baseUrl}/Car/Edit/${id}`,{
        method:'PUT',
        headers: {
            'content-type':'application/json',
        },
        body: JSON.stringify(carData)
    });
    
    const result = await response.json();
    
    return result.value;
}


export const deleteCar = (id) => {
    return fetch(`${baseUrl}/Car/Delete/${id}`,{
        method: 'DELETE',
    }).then(res=>res.json())
}

export const getLatest= async ()=> {
    const response = await fetch(`${baseUrl}/Car/Latest`);

    const result = await response.json();

    return result.value;

}

export const myCars = async (userId) => {
    const response = await fetch(`${baseUrl}/Car/MyCars/${userId}`);

    const result = await response.json(userId);

    return result.value;
}

export const getMakes = async () => {
    const response = await fetch(`${baseUrl}/Car/GetMake`)

    const result = await response.json();

    return result.value;
}

export const getModels = async () => {
    const response = await fetch(`${baseUrl}/Car/GetModel`)

    const result = await response.json();

    return result.value;
}
    // export const update = (petId, petData) => request.put(`${baseUrl}/pets/${petId}`, petData);

// export const getOne = (id) => fetch(`${baseUrl}/games/${id}`).then(res => res.json());

// export const getLatest = () => {
//     return fetch(`${baseUrl}/games?sortBy=_createdOn%20desc&distinct=category`)
//         .then(res => res.json())
//}