// Example component for the theme toggle button
import React from 'react';
import { useTheme } from '../../Context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="bg-gray-200 dark:bg-red-700 p-2 rounded-full focus:outline-none"
        >
            {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
    );
};

export default ThemeToggle;
