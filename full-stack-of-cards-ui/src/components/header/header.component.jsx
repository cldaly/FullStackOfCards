import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.css';

const Header = ({ isLoggedIn, logout }) => {

    return (
        <div className="header">
            <h2><Link to='/cards'>Full Stack of Cards</Link></h2>
            {isLoggedIn ? (
                <nav>
                    <li><Link to='/user/addcard'>Add Card</Link></li>
                    <li><Link to='/cards' onClick={logout}>Logout</Link></li>
                </nav>
            ) : (
                <nav>
                    <li><Link to='/user/login'>Login</Link></li>
                </nav>
            )}
        </div>
    )
}

export default Header;