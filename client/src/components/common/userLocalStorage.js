

function getAuthToken() {
    return localStorage.getItem('authToken');
}

function getUsername() {
    return localStorage.getItem('username');
}

export function getUserEmail() {
    return localStorage.getItem('email');
}

export function getUserId() {
    return localStorage.getItem('userId');
}

function isLoggedIn() {
    return localStorage.getItem('authToken') !== null;
}

export default {
    getAuthToken,
    getUserId,
    getUsername,
    isLoggedIn,
    getUserEmail,
}