import React from 'react';

// let contextValue = localStorage.getItem('user-token') ? true : false;
const cartContext = React.createContext({
    cart: null,
    setCart: () => {}
});

export default cartContext;