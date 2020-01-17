import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.css';

const Header = () => {

    return (
        <div className="header">
            <h2><Link to='/'>Full Stack of Cards</Link></h2>
            <nav>
                <li><Link to='/user/login'>Login</Link></li>
                <li><Link to='/user/register'>Register</Link></li>
            </nav>
        </div>
    )
}

export default Header;