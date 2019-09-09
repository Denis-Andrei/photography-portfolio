import React from 'react';
import './navbar.styles.scss';
import {Link} from 'react-router-dom';
import Logo from '../../assets/images/logo.jpg';

const NavBar = () =>{
    return(
        <div className='nav-bar'>
            
                <Link exact to='/photography-portfolio' >Home</Link>
                <Link exact to='/photography-portfolio/contact'>Contact</Link>
                <Link exact to='/photography-portfolio'><img src={Logo} alt="logo"/></Link>
                <Link exact to='/photography-portfolio/about-me'>About</Link>
                <Link exact to='/photography-portfolio/portofolio'>Portfolio</Link>
            
        </div>
    )
}

export default NavBar;