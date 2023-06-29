import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className='services-container'>
        <div className='services-list-container'>
           
            <div className='service-item-container'>
                <h1>My <span>Skills</span></h1>
                <div className='service-item'>
                    <i className='fa-solid fa-code'/>
                    <div className='item-desc'>
                        <h3>Frontend Web Development</h3>
                        <p>HTML, CSS, JavaScript, React JS</p>
                    </div>
                </div>

                <div className='service-item'>
                    <i className='fa-solid fa-gears'/> 
                    <div className='item-desc'>
                        <h3>Backend Web Development</h3>
                        <p>PHP, Java, Node JS, Express JS</p>
                    </div>
                </div>

                <div className='service-item'>
                    <i className='fa-solid fa-database'/>
                    <div className='item-desc'>
                        <h3>Database Management</h3>
                        <p>SQL, MongoDB</p>
                    </div>
                </div>
            </div>

            <div className='services-desc-container'>
                <h1>My <span>Services</span></h1>
                <p>I provide MERN Stack based frontend, backend and fullstack web development services.</p>
                <button>Hire Me</button>
            </div>
        </div>
    </div>
  )
}

export default Services