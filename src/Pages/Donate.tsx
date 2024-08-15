import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Pages/Donate.css';

const DonatePage = () => {
    return (
        <div className="container">
            <button className="donateButton">
                <Link className="donateLinkReact" to="#donate">Donate</Link> // TODO: Handle donating action.
            </button>
            <p><b>We appreciate your donation. &lt;3</b></p>
        </div>
    );
}

export default DonatePage;
