import React, { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContextProvider';

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className='bg-gray-100 text-grey-900 border-b border-gray-300 p-4 flex justify-between items-center dark:border-gray-600 dark:bg-gray-900 dark:text-white'>
            <h1>
               
            </h1>
            <button className='text-2xl text-dark' onClick={toggleTheme}>
                {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
        </div>
    );
};

export default Navbar;
