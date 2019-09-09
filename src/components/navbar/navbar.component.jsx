import React from 'react';
import './navbar.styles.scss';
import {Link} from 'react-router-dom';
import Logo from '../../assets/images/logo.jpg';

const NavBar = () =>{
    return(
        <div className='nav-bar'>
            
                <Link exact to='/' >Home</Link>
                <Link exact to='/contact'>Contact</Link>
                <Link exact to='/'><img src={Logo} alt="logo"/></Link>
                <Link exact to='/about-me'>About</Link>
                <Link exact to='/portofolio'>Portfolio</Link>
            
        </div>
    )
}

export default NavBar;