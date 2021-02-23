import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCar, faArrowDown } from '@fortawesome/free-solid-svg-icons';

import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar_logo">Taxis du bassin Lensois</Link>
            <input className="navbar_toggle" type="checkbox" id="navbar_toggle" />
            <label className="navbar_label" htmlFor="navbar_toggle"><span className="navicon"></span></label>
            <ul className="navbar_links">
                <li className="navbar_item"><Link to="/" className="navbar_link">Taxis</Link></li>
                <div className="dropdown">
                    <li className="navbar_item dropbtn"><Link to="#" className="navbar_link">Services <FontAwesomeIcon icon={faArrowDown} /></Link></li>
                    <ul className="dropdown_menu">
                        <li className="dropdown_item">
                            <Link to="#" className="dropdown_link">Link 1</Link>
                        </li>
                        <li className="dropdown_item">
                            <Link to="#" className="dropdown_link">Link 2</Link>
                        </li>
                        <li className="dropdown_item">
                            <Link to="#" className="dropdown_link">Link 3</Link>
                        </li>
                    </ul>
                </div>
                <li className="navbar_item"><Link to="/faq" className="navbar_link">F.A.Q</Link></li>
                <li className="navbar_item"><Link to="/contact" className="navbar_link">Nous contacter</Link></li>
                <div className="navbar_right">
                    <li className="navbar_item"><a href="tel:+33-6-69-74-77-36" className="button button_submit"><FontAwesomeIcon icon={faPhone} className="navbar_icon" /> Appelez maintenant</a></li>
                    <li className="navbar_item"><Link to="/estimer" className="button button_submit"><FontAwesomeIcon icon={faCar} className="navbar_icon" /> Faire une estimation</Link></li>
                </div>
            </ul>
        </nav>
    )
}
