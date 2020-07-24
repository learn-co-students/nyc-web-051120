import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
    return (
        <div className="navbar">
            <Link to="/">🐱</Link>
            <Link to="/">Home</Link>
            <Link to="/thecutest">Pets</Link>
            <Link to="/login">Login</Link>
            <Link to="/help">?</Link>
        </div>
    )
}

export default Navbar;