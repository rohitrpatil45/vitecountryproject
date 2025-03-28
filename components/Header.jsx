import React, { useState, useEffect } from 'react';
import './header.css'

function Header() {
    const [darkMode, setDarkMode] = useState(() => {
        // Check localStorage for saved preference or use system preference
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode !== null) return JSON.parse(savedMode);
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        // Apply the dark mode class to the document body
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        // Save preference to localStorage
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    const toggleMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <div className='main-header'>
           <div className='header-container'>
           <div className='heading'>
                <h2>Where in the World</h2>
            </div>
            <div className='mode-btn'>
                <button onClick={toggleMode}>
                    {darkMode ? (
                        <>
                            <i className="fas fa-sun"></i> Light Mode
                        </>
                    ) : (
                        <>
                            <i className="fas fa-moon"></i> Dark Mode
                        </>
                    )}
                </button>
            </div>


           </div>
        </div>
    );
}

export default Header;