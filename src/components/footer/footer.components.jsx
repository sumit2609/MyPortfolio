import React from 'react';
import './footer.style.css';


const Footer = () =>{
    return (
        <div>
            <div className="py-2 text-center footer-style">© SUMIT SHARMA &nbsp;{new Date().getFullYear()}</div>
        </div>
    );
};

export default Footer;