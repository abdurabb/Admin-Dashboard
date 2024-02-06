import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleChange= () => {
        setSidebarOpen((prevTheme) => (prevTheme === false ? true : false ));
    };

    return (
        <SidebarContext.Provider value={{ sidebarOpen ,toggleChange }}>
            {children}
        </SidebarContext.Provider>
    );

};

export const useSidebarOpen = () => {
    return useContext(SidebarContext);
};
