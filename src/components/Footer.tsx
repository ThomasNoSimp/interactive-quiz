import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <nav>
                <ul className="footer-menu">
                    <li><Link to="/download">Download App</Link></li>
                    <li><Link to="/donate">Donate</Link></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
