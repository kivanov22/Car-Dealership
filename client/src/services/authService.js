// const baseUrl = 'http://localhost:3000';
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


export const login = async (username,email,password)=>{
    let response  = await fetch(`${serverUrl}/api/Authenticate/login`,{
        method:'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify({username,email,password})
    });

    let jsonResult = await response.json();

    if(response.ok){
        return jsonResult;
    }else {
        throw jsonResult.message;
    }
};

export const logout = (token) => {
    return fetch(`${serverUrl}/api/Authenticate/logout`,{
        headers: {
            'X-Authorization':token,
        }
    });
};

export const getUser = () => {
    let username = localStorage.getItem('username');

    return username;
};

export const isAuthenticated = () => {
    return Boolean(getUser())
};