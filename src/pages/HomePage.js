import React from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarAlt, faClock, faShare, faShieldAlt, faRoad, faPhone, faClipboard } from '@fortawesome/free-solid-svg-icons';

import Header from '../components/Header';
import Footer from '../components/Footer';

import './HomePage.css';

export default function HomePage() {
    return (
        <>
            <Helmet>
                <title>Accueil - Taxis du bassin Lensois</title>
            </Helmet>

            <Header />

            <section className="section section_how">
                <div className="section_header">
                    <h1 className="section_header_title">Comment ça marche ?</h1>
                </div>

                <div className="section_content">
                    <div className="how">
                        <FontAwesomeIcon icon={faClipboard} className="how_icon" />
                        <div className="how_title">Estimez votre trajet</div>
                        <p className="how_description">Estimez le prix du trajet en quelques clics.</p>
                    </div>
                    <div className="how">
                        <FontAwesomeIcon icon={faPhone} className="how_icon" />
                        <div className="how_title">Appelez-nous</div>
                        <p className="how_description">Programmer votre départ avec l'un de nos chauffeurs.</p>
                    </div>
                    <div className="how">
                        <FontAwesomeIcon icon={faCarAlt} className="how_icon" />
                        <div className="how_title">En route</div>
                        <p className="how_description">On vous emmène à destination.</p>
                    </div>
                </div>
            </section>

            <section className="section section_why_us">
                <div className="section_header">
                    <h1 className="section_header_title">Pourquoi nous</h1>
                </div>

                <div className="section_content">
                    <div className="why_us">
                        <FontAwesomeIcon icon={faShare} className="why_us_icon" />
                        <div className="why_us_title">Simplicité</div>
                        <p className="why_us_description">Simulation en ligne de votre trajet</p>
                    </div>
                    <div className="why_us">
                        <FontAwesomeIcon icon={faClock} className="why_us_icon" />
                        <div className="why_us_title">Disponibilité</div>
                        <p className="why_us_description">Taxis disponibles 24h/24 et 7j/7</p>
                    </div>
                    <div className="why_us">
                        <FontAwesomeIcon icon={faRoad} className="why_us_icon" />
                        <div className="why_us_title">Toute distance</div>
                        <p className="why_us_description">Taxi sur Lens-Liévin et vers toute la France/Europe</p>
                    </div>
                    <div className="why_us">
                        <FontAwesomeIcon icon={faShieldAlt} className="why_us_icon" />
                        <div className="why_us_title">Sécurité</div>
                        <p className="why_us_description">Chauffeurs diplômés et expérimentés</p>
                    </div>
                </div>
            </section>

            <section className="section section_pub">
                <div className="section_header">
                    <h1 className="section_header_title">Remise -15%</h1>
                    <p className="section_header_description">Profitez de -15% de remise sur présentation de notre publicité.</p>
                </div>

                <div className="section_content">
                    <img src="images/pub.jpg" alt="Publicité" className="pub_image" />
                </div>
            </section>

            <Footer />
        </>
    )
}
