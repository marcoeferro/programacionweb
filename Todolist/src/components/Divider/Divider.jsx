import React from 'react';
import './Divider.scss'
const Divider = ({ isDarkMode }) => {
    return <hr className={`divider ${isDarkMode ? 'light-mode' : 'dark-mode'}`} />;
};

export default Divider;