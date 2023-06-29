import React from 'react';
import logo from "../../assets/logo.webp";
import "./Navbar.css";
import{ HashLink as Link} from 'react-router-hash-link';
import Header from '../Header/Header';

const Navbar = () => {
  return (
    <nav>
        <div className='nav-logo'>
             
             <img src={logo} alt="logo" />

        </div>

        <div className='nav-links'>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Portfolio</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar