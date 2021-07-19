// == import de React
import React from 'react';

// == import sass associé
import './header.scss';

// == Composant Header
const Header = () => (
    <header className="header">
        <nav className="header-nav">
            <h1 className="header-title"><a href="#">Jona</a></h1>
            <ul className="header-list">
                <li className="header-link"><a href="#">CV</a></li>
                <li className="header-link"><a href="#">Portfolio</a></li>
                <li className="header-link"><a href="#">Tips</a></li>
            </ul>
            <button className="header-button">Theme</button>
        </nav>
    </header>        
);

// == export par défaut
export default Header;