// Layout.js
import React from 'react';
import { useTheme } from './Context/ThemeContext';


const Layout = ({ children }) => {
    const { theme } = useTheme();

    const backgroundColor = theme === 'light' ? 'bg-gray-100' : 'bg-gray-800';

    return (
        <div className={`theme-${theme} min-h-screen ${backgroundColor}`}>
            {children}
        </div>
    );
};

export default Layout;
