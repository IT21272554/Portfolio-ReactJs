import React from 'react';
import './Works.css';
import java from '../../assets/java.png';
import keyoola from '../../assets/keyoola.png';

const Works = () => {
  return (
    <div className='works-container'>
        <h1>My Recent Works</h1>

        <div className='works-list-container'>
            
            <div  className='works-item'>
            <a href="https://github.com/IT21272554/OnlineHelpDesk-JavaWebApplication">
            <h5>Online Help Desk - Java Web Application</h5>
                <img src={java} alt="Java"/>
                </a>
            </div>

           <div  className='works-item'>
           <a href="https://github.com/IT21272554/Keyoola-PHP-SearchEngine">
            <h5>Search Engine - PHP Web Application</h5>
                <img src={keyoola} alt="PHP"/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Works