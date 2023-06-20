import React from 'react'
import './header.css';
import logo from '../../images/logo.svg'
import user from '../../images/user.svg'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='nav'>
            <div className="nav__items">
                <Link to="/" ><img src={logo} alt="logo"/></Link>
                <Link to="/restaraunt"><img src={user} alt="user"/> </Link>
            </div>
        </div>
    )
}

export default Header