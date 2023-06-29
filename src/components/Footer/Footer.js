import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
        <div className='footer-copyright'>
            <p>
            © 2023 Sathsara Wijekulasuriya
            </p>
        </div>

        <div>
            <ul className='footer-social-media'>

                <li>
                    <a href="https://www.facebook.com/profile.php?id=100015062023259"><i className='fa-brands fa-facebook'></i></a>
                </li>

                <li>
                    <a href="https://www.twitter.com/SathsaraWj"><i className='fa-brands fa-twitter'></i></a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/sathsara-wijekulasuriya/"><i className='fa-brands fa-linkedin'></i></a>
                </li>

            </ul>
        </div>
    </footer>
  )
}

export default Footer