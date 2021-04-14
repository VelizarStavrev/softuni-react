import React from 'react';

// let contextValue = localStorage.getItem('user-token') ? true : false;
const isLogged = React.createContext({
    logged: false,
    setLogged: () => {}
});

export default isLogged;