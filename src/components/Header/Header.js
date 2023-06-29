import React from 'react';
import "./Header.css";
import Typical from "react-typical";
import Me from "../../assets/me2.jpg";

const Header = () => {
  return (
    
    <header>
        <div className='header-container'>

             <div className='header-content'>
                <h1>Hi! I am</h1>
                <h2 className='fullname'>Sathsara Wijekulasuriya.</h2>
                <h2>
                    I am a <Typical 
                    steps={[
                        'Fullstack developer. 🚀', 1000,
                        'Frontend developer. 🎇' , 1000,
                        'Backend developer. 💡' , 1000,
                        'React developer. ❄️' , 1000
                    ]} 
                    loop={Infinity} wrapper='b'/>
                </h2>

                <p>
                    I am an Undergraduate student at <a href="https://www.sliit.lk/">Sri Lanka Institute of Information Technology (SLIIT)</a> and
                     I am reading Bsc(Hons) Information Technology specializing in Information Technology degree.
                </p>

                <div className='hire-me'>
                    <button>Hire Me</button>
                </div>

             </div>

             <div className='profile-img-container'>
                <img src={Me} alt="Me"/>
                <div className='circle-1'></div>
                <div className='circle-2'></div>
                <div className='circle-3'></div>
             </div>
        </div>
    </header>
  )
}

export default Header