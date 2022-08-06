import * as request from '../services/requester.js'
const serverUrl = 'https://localhost:7213';

//Register as User
export const register = (username,email,password) =>{
    return fetch(`${serverUrl}/api/Authenticate/register`,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify({username,email,password})
    })
    .then(res => res.json());
};

//register as Admin
export const registerAdmin = (username,email,password) =>{
    return fetch(`${serverUrl}/api/Authenticate/register-admin`,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify({username,email,password})
    })
    .then(res => res.json());
};


export const login = async (username,password)=>{
    let response  = await fetch(`${serverUrl}/api/Authenticate/login`,{
        method:'POST',
        headers: {
            'content-type':'application/json',
        },
        body: JSON.stringify({username,password})
    });

    let jsonResult = await response.json();

    if(response.ok){
        return jsonResult;
    }else {
        throw jsonResult.message;
    }
};


export const logout = async (token) => {
    // console.log(token)

    // try {
    //     const response = await fetch(`${serverUrl}/api/Authenticate/logout`,{
    //         method:'POST',
    //         headers: {
    //         Authorization:`Bearer ${token}`
    //         }
    //     });
    //     console.log(token);
    //     localStorage.removeItem('user')
    //     console.log(response);

    //     //localStorage.clear();
    //     return response;
    // } catch (error) {
    //     console.log(error);
    // }
    localStorage.clear();
};


// export const login = (username,password) => {
//     request.post(`${serverUrl}/api/Authenticate/login`,{username,password});
// }

// export const logout = async (token) => {
//     try {
//         const response = await fetch(`${serverUrl}/api/Authenticate/logout`, {
//             // headers: {
//             //     'X-Authorization': token
//             // }
//         });

//         return response;
//     } catch (error) {
//         console.log(error);
//     }
// };

// export const getUser = () => {
//     let username = localStorage.getItem('username');

//     return username;
// };

// export const isAuthenticated = () => {
//     return Boolean(getUser())
//};