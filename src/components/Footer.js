import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faList } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer_content">
                <p className="footer_copyright">2019 - 2021 Taxi du bassin lensois - Tous droits réservés</p>
                <ul className="footer_menu">
                    <li className="footer_item">
                        <Link to="/faq" className="footer_link"><FontAwesomeIcon icon={faQuestion} className="footer_icon" /> F.A.Q</Link>
                    </li>
                    <li className="footer_item">
                        <Link to="/legal" className="footer_link"><FontAwesomeIcon icon={faList} className="footer_icon" /> Mentions légales</Link>
                    </li>
                    <li className="footer_item footer_right">
                        <Link to="/legal" className="footer_link"><FontAwesomeIcon icon={faFacebook} className="footer_icon" /></Link>
                    </li>
                </ul>

            </div>
        </footer>
    )
}
