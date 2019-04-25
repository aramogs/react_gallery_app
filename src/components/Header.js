import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => (
    <nav className="main-nav">
        <h2>React Gallery App</h2>
        <ul>
            {/* Redirecting to the appropiate routes */}
            <li><NavLink exact to='/'>Search</NavLink></li>
            <li><NavLink to='/cats'>Cats</NavLink></li>
            <li><NavLink to='/dogs'>Dogs</NavLink></li>
            <li><NavLink to='/birds'>Birds</NavLink></li>
        </ul>
    </nav>
);

export default Header;