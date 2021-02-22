import React from 'react';
import { Helmet } from 'react-helmet';

import Header from '../components/Header';
import Footer from '../components/Footer';

import './FaqPage.css';

export default function FaqPage() {
    return (
        <>
            <Helmet>
                <title>Foire aux questions - Taxis du bassin lensois</title>
            </Helmet>

            <Header />

            <section className="section section_faq">
                <div className="section_header">
                    <h1 className="section_header_title">Foire aux questions (F.A.Q)</h1>
                </div>

                <div className="section_content">
                    <div className="faq">
                        <div className="faq_title">Quels sont les horaires d’ouverture de Taxis du bassin Lensois ?</div>
                        <div className="faq_content">
                            <p className="faq_response">Les horaires d'ouverture sont 24h/24 7j/7.</p>
                        </div>
                    </div>
                    <div className="faq">
                        <div className="faq_title">Quelle est l'adresse de Taxis du bassin Lensois ?</div>
                        <div className="faq_content">
                            <p className="faq_response">Le siège social est situé à Lens.<br />
                            Autorisation de stationnement : Méricourt</p>
                        </div>
                    </div>
                    <div className="faq">
                        <div className="faq_title">Quels sont les moyens de paiement acceptés par Taxis du bassin Lensois ?</div>
                        <div className="faq_content">
                            <p className="faq_response">Taxis du bassin Lensois propose les moyens de paiement suivants:</p>
                            <ul>
                                <li>CB</li>
                                <li>Espèces</li>
                                <li>Chèque</li>
                                <li>Virement bancaire</li>
                            </ul>
                        </div>
                    </div>
                    <div className="faq">
                        <div className="faq_title">Quels sont les prestations et services que propose Taxis du bassin Lensois ?</div>
                        <div className="faq_content">
                            <p className="faq_response">Taxis du bassin Lensois propose les prestations et services suivants:</p>
                            <ul>
                                <li>Transport long trajet</li>
                                <li>Transport toutes distances</li>
                                <li>Navette aéroport</li>
                                <li>Disponibles 7j/7</li>
                                <li>Transfert vers les gares, les aéroports</li>
                            </ul>
                        </div>
                    </div>
                    <div className="faq">
                        <div className="faq_title">Comment nous procédons durant le protocole sanitaire ?</div>
                        <div className="faq_content">
                            <p className="faq_response">Le véhicule est désinfecté après chaque client.<br />
                                Une protection est installée entre le chauffeur et le client pour une meilleure précaution.<br />
                                Il est obligatoire de vous installer à l arrière droit pour appliquer une distance de sécurité.<br />
                                Le port du masque est obligatoire. Du gel hydroalcoolique est à votre disposition.<br />
                                Ensemble, prenons soin de nous et de nos familles!.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
