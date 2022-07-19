const baseUrl = 'https://localhost:7213/api';
// const baseUrl = 'http://localhost:3000/api';

//GET All
export const getAll = async () => {
    const response = await fetch(`${baseUrl}/Car/GetAll`);
    const result = await response.json();
    // console.log(result);
    return result.value;
}

//Get:ID
export const getOne = async (carId)=> {
const response = await fetch(`${baseUrl}/Car/${carId}`);
const result = await response.json();

return result.value;
}

//Post / Create 
export const create = async (carData) => {
const response = await fetch(baseUrl,{
    method:'POST',
    headers: {
        'content-type':'application/json',
    },
    body: JSON.stringify(carData)
});

const result = await response.json();

return result.value;
}

// export const getOne = (id) => fetch(`${baseUrl}/games/${id}`).then(res => res.json());

// export const getLatest = () => {
//     return fetch(`${baseUrl}/games?sortBy=_createdOn%20desc&distinct=category`)
//         .then(res => res.json())
//}