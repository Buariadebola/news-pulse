import React, { createContext, useEffect, useState } from 'react'

const UserContext = createContext();

const UserProvider = ({children}) => {

    const [name, setName] = useState(() => {
    return localStorage.getItem("name") || "";
  });

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  return (
    <UserContext.Provider value={{name, setName}}>
        {children}
    </UserContext.Provider>
  )
}

export { UserProvider, UserContext }
