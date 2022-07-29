// import axios from 'axios';

// export  const baseUrl = 'http://localhost:7213/';

// export const createAPIEndpoint = endpoint => {
//     let url = baseUrl + 'api/' + endpoint;
//     // + '/'

//     return {
//         fetch: ()=> axios.get(url),
//         fetchById: id => axios.get(url + id),
//         post: newRecord => axios.post(url,newRecord),
//         put: (id,updatedRecord) => axios.put(url + id,updatedRecord),
//         delete: id => axios.delete(url + id),
//     }
// }