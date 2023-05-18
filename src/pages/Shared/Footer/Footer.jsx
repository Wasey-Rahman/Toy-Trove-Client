import React from 'react';
import logo from './Toy-Trove.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram ,faYoutube} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-neutral text-primary-content">
  <div>
    <img className="w-16"src={logo} alt="" /> 
    <p className="font-bold">
     Toy-Trove <br />Phone Number:+1 (123) 456-7890 <br />Email:info@toy-trove.com <br /> Address:
     Toy-Trove Headquarters
     1234 Fun Street
     Toyland, ABC 12345
     United States
    </p> 
    <p>Copyright © 2023 - All right reserved</p>
  </div> 
  
    <div>
    <div className="social-icons grid grid-flow-col gap-4">
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"> <FontAwesomeIcon icon={faYoutube} /></a>
            </div>
  </div>
</footer>
    );
};

export default Footer;