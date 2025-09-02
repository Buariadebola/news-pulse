import React, { createContext, useState } from 'react'

const MenuContext = createContext();

const MenuProvider = ({children}) => {

    const [showMenubar, setShowMenubar] = useState(false);

    const handleMenubar = () => {
        setShowMenubar(! showMenubar)
    }

  return (
    <MenuContext.Provider value={{ handleMenubar, showMenubar, setShowMenubar}}>
        {children}
    </MenuContext.Provider>
  )
}

export { MenuProvider, MenuContext }
