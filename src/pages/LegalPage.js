import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Header from '../components/Header';
import Footer from '../components/Footer';

import './LegalPage.css';

export default function LegalPage() {
    return (
        <>
            <Helmet>
                <title>Mentions légales - Taxis du bassin lensois</title>
            </Helmet>

            <Header />

            <section className="section section_legal">
                <div className="section_header">
                    <h1 className="section_header_title">Mentions légales</h1>
                </div>

                <div className="section_content">
                    <div className="legal_text">
                        <h3 className="legal_text_title">Le site <Link to="/" className="legal_link">https://taxis-du-bassin-lensois/</Link> est édité par :</h3>

                        <ul className="legal_list">
                            <li className="legal_list_item">
                                <a href="https://matthieumelin.fr" target="_blank" rel="noreferrer" className="legal_link">Melin Matthieu</a>
                            </li>
                            <li className="legal_list_item">
                                <a href="http://abdel-behar.fr/" target="_blank" rel="noreferrer" className="legal_link">Behar Abdel</a>
                            </li>
                            <li className="legal_list_item">
                                <a href="http://bastien-flanquart.fr/" target="_blank" rel="noreferrer" className="legal_link">Flanquart Bastien</a>
                            </li>
                        </ul>
                    </div>

                    <div className="legal_text">
                        <h3 className="legal_text_title">Le site <Link to="/" className="legal_link">https://taxis-du-bassin-lensois.fr</Link> est édité pour :</h3>

                        <span className="legal_title">Adresse</span> : 25 rue Vanzetti, 62300 Lens<br />
                        <span className="legal_title">Téléphone</span> : 06 69 74 77 36<br />
                        <span className="legal_title">E-mail</span> : taxisdubassinlensois@gmail.com<br />
                        <span className="legal_title">Directeur de publication</span> : MOUAOUED KARIMA<br />
                        <span className="legal_title">SIREN</span> : 880 577 739<br />
                        <span className="legal_title">Autorisation stationnement</span> : Licence méricourt<br />
                    </div>

                    <div className="legal_text">
                        <h3 className="legal_text_title">Propriété intellectuelle</h3>

                        Tout le contenu du présent site incluant, de façon non limitative, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la propriété exclusive de la société <strong>TAXIS DU BASSIN LENSOIS</strong> à l’exception des marques, logos ou contenus appartenant à d’autres sociétés partenaires ou auteurs.<br />
                        Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l’accord exprès par écrit de <strong>TAXIS DU BASSIN LENSOIS</strong>.<br />
                        Cette représentation ou reproduction, par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.<br />
                        Le non-respect de cette interdiction constitue une contrefaçon pouvant engager la responsabilité civile et pénale du contrefacteur.<br />
                        En outre, les propriétaires des Contenus copiés pourraient intenter une action en justice à leur encontre.
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
