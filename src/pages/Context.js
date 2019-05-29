import React from 'react'
 
const Context = React.createContext({});

export const ContextProvider = Context.Provider;
export const ContextConsumner = Context.Consumer;

export default Context;

