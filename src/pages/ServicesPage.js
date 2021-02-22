import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Header from '../components/Header';
import Footer from '../components/Footer';

import './ServicesPage.css';

export default function ServicesPage() {
    return (
        <>
            <Helmet>
                <title>Services - Taxis du bassin lensois</title>
            </Helmet>

            <Header />

            <section className="section section_presentation">
                <div className="section_header">
                    <h1 className="section_header_title">Présentation</h1>

                    <div className="section_content">
                        <p className="presentation_text">
                            Nous sommes là pour mettre à disposition un service de transport Taxi sur le Bassin
                            Minier. Nous mettons tout en oeuvre pour vous satisfaire en proposant un véhicule propre
                            et entretenu.
                        </p>

                        <p className="presentation_text">
                            Le véhicule est désinfecté après chaque client. Une protection est installée entre le
                            chauffeur et le client pour une meilleure précaution .Il est obligatoire de vous installer à l
                            arrière droit pour appliquer une distance de sécurité. Le port du masque est obligatoire. Du
                            gel hydroalcoolique est à votre disposition.
                            Ensemble, prenons soin de nous et de nos familles!
                        </p>

                        <p className="presentation_text">
                            Nous avons parfaitement conscience qu’un client satisfait est un client fidèle. Nous
                            pouvons être fier des avis que vous nous mettez sur google et de la bonne presse que
                            vous nous faîtes en parlant à votre entourage personnel et professionnel. C'est ainsi que
                            nous pourrons continuer ensemble à nous rendre mutuellement service et vous compter
                            parmi notre clientèle des personnes qui nous font confiance et qui nous recommandent.
                            C’est pour cela que votre avis est important ! N’hésitez pas à faire part de votre chauffeur
                            de toutes vos observations afin d’améliorer encore la qualité de notre service.
                        </p>

                        <p className="presentation_text">
                            <strong>N'hésitez pas à demander une carte de visite. Une réduction de 15% est offerte à
                            chaque présentation !</strong>
                        </p>
                    </div>
                </div>
            </section>

            <section className="section section_services">
                <div className="section_header">
                    <h1 className="section_header_title">Services</h1>
                    <p className="section_header_description">Un transport adapté à vos besoins</p>
                </div>

                <div className="section_content">
                    <div className="service">
                        <h2 className="service_title">Zone desservie</h2>
                        <img src="../images/french_map.png" alt="Carte de la france" className="service_image" />
                        <p className="service_text">
                            A partir de Méricourt ou Lens nous desservons l’ensemble de la région Hauts-de-France.
                            En effet TAXIS DU BASSIN LENSOIS est présent dans les grandes villes telles que :
                            Lens, Dunkerque, Calais, Cambrai, Arras, Béthune, Lille, Roubaix, Tourcoing, Wattrelos,
                            Douai, Valenciennes, dans chacune de leurs agglomérations.
                            A ces villes, il faut ajouter les grandes gares et aéroports du Nord telles que la Gare de
                            Lens, Gare d’Arras, Gare Lille Flandres, la Gare Lille Europe et l’Aéroport de Lille-
                            Lesquin . On ne s’arrête pas à la frontière française avec des taxis vers les aéroports de
                            Charleroi ou encore de Liège. Nous pouvons aussi passer avec vous l’Eurostar et
                            desservir les aéroports de Londres tel que celui de Heathrow ou encore Gatwick et
                            Santed.
                            Taxis du Bassin Lensois effectue des déplacements régulierement vers la région
                            parisienne et notamment les Aéroports de Roissy Charles de Gaulle ou Orly. Notre société
                            n’a pas de limite de déplacement en France et en Europe et nos tarifs peuvent être ajustés
                            pour des destinations comme Francfort, Berlin, Genève, Rome, Barcelone ou encore
                            Madrid. Dans le cadre de ces déplacements, plus ou moins longs, nos tarifs deviennent
                            très avantageux grâce aux forfaits que nous appliquons sur les grandes distances.
                            Ainsi, nous proposons différentes tarifications, les plus adaptées possibles, en fonction de
                            vos besoins, votre destinations et le nombre de passager à transporter :
                            </p>
                        <ul>
                            <li>
                                Tarifs de taxi réglementés selon la Préfecture du Pas-de-Calais
                                    </li>
                            <li>
                                Tarifs au forfait pour les long trajets et les dessertes des gares et aéroports
                                    </li>
                        </ul>
                        <p className="service_text">
                            Saviez-vous que si vous voyagez en groupe, le transport est divisé par le nombre de
                            personne ; il suffit juste de vous mettre d’accord entre vous.
                            </p>
                    </div>
                    <div className="service">
                        <h2 className="service_title">Transfets gares et aéroports</h2>
                        <p className="service_text">
                            Nous vous récupérons sur simple demande dans les mêmes aéroports pour vous conduire
                            à l’adresse de votre choix dans le département du Pas-de-Calais. Pour ce faire, nous vous
                            attendrons directement au niveau des arrivées de votre vol avec un panonceau à votre
                            nom. Votre chauffeur de taxi à l’aéroport vous aidera ensuite à porter vos bagages jusqu’à
                            son véhicule garé à proximité. Grâce à nos outils de suivi de vol, nous vous assurons
                            d’être à l’heure à votre arrivée que vous ayez de l’avance ou du retard.
                            Ce service vous permet de vous rendre simplement à l’aéroport et économisant à la fois
                            du temps et de l’argent pour garer votre véhicule et vous rendre à l’aéroport.
                            Notre service de taxi aéroport depuis et vers Arras et Lens est disponible pour les
                            aéroports suivants :
                        </p>
                        <ul>
                            <li>
                                Aéroport de Lille Lesquin
                                    </li>
                            <li>
                                Aéroport de Bruxelles National (Aéroport de Zaventem)
                                    </li>
                            <li>
                                Aéroport de Charleroi Bruxelles Sud
                                    </li>
                            <li>
                                Aéroport de Paris Charles de Gaulle
                                    </li>
                            <li>
                                Aéroport de Paris Roissy
                                    </li>
                        </ul>
                    </div>
                    <div className="service">
                        <h2 className="service_title">Transports privés</h2>
                        <p className="service_text">
                            Quelle que soit la raison, <strong>Taxis du Bassin Lensois</strong> est à votre disposition pour venir vous
                                récupérer en urgence partout dans le Pas-de-Calais. Nous sommes aptes à intervenir en
                                urgence, et ce quels que soient l’heure ou le lieu, 24 heures sur 24 et 7 jours sur 7. Nous
                                nous engageons à nous rendre sur les lieux, puis vous emmener où vous le désirez, le
                                plus rapidement possible.
                            </p>
                        <p className="service_text">
                            <strong>Sur simple appel ou suite à une réservation en ligne bénéficiez d’un chauffeur de taxi </strong>
                                disponible pour votre trajet <strong>à la demande</strong>. Vous souhaitez vous rendre à <i>Arras, Lille</i> ou
                                <i>Amiens</i> pour un rendez-vous ? Vous désirez aller faire vos courses dans un centre
                                commercial ? Vous pouvez nous contacter à tout moment pour <strong>réserver votre taxi</strong>. Nous

                                assurons pour vous des trajets toutes distances à partir de <strong>Méricourt</strong> mais aussi de <strong>Lens </strong>
                                et des communes limitrophes.
                            </p>
                        <p className="service_text">
                            Nous sommes en mesure de réaliser des trajets dans tous le <strong>Pas-de-Calais</strong>, dans les
                                <strong> Hauts-de-France</strong> mais aussi dans toute la <i>France</i> et en <i>Belgique</i>.
                            </p>
                        <p className="service_text">
                            Notre service est disponible la journée et le week-end sur simple appel au <a href="tel:+33-6-69-74-77-36" className="service_link">06 69 74 77 36 </a>
                                et sur <Link to="/reserver" className="service_link">réservation</Link> pour les trajets la nuit.
                            </p>
                    </div>
                    <div className="service">
                        <h2 className="service_title">Transports professionnels</h2>
                        <p className="service_text">
                            Pour vos déplacements professionnels mais aussi vos transferts des gares
                            et aéroports, nous sommes à votre disposition à la demande ou sur réservation.
                            Nous vous récupérons sur simple demande dans les mêmes aéroports pour vous conduire
                            à l’adresse de votre choix dans le département du Pas-de-Calais. Pour ce faire, nous vous
                            attendrons directement au niveau des arrivées de votre vol avec un panonceau à votre
                            nom.
                            </p>
                        <p className="service_text">
                            Notre maître-mot : ponctualité et discrétion.
                            </p>
                    </div>
                    <div className="service">
                        <h2 className="service_title">Tourisme</h2>
                        <div className="service_images">
                            <img src="./images/tourism_1.jpg" alt="Tourisme" className="service_image" />
                            <img src="./images/tourism_2.jpg" alt="Tourisme" className="service_image" />
                            <img src="./images/tourism_3.jpg" alt="Tourisme" className="service_image" />
                            <img src="./images/tourism_4.jpg" alt="Tourisme" className="service_image" />
                            <img src="./images/tourism_5.jpg" alt="Tourisme" className="service_image" />
                            <img src="./images/tourism_6.jpg" alt="Tourisme" className="service_image" />
                            <img src="./images/tourism_7.jpg" alt="Tourisme" className="service_image" />
                            <img src="./images/tourism_8.jpg" alt="Tourisme" className="service_image" />
                            <img src="./images/tourism_9.jpg" alt="Tourisme" className="service_image" />
                            <img src="./images/tourism_10.jpg" alt="Tourisme" className="service_image" />
                            <img src="./images/tourism_11.jpg" alt="Tourisme" className="service_image" />
                            <img src="./images/tourism_12.jpg" alt="Tourisme" className="service_image" />
                            <img src="./images/tourism_13.jpg" alt="Tourisme" className="service_image" />
                            <img src="./images/tourism_14.jpg" alt="Tourisme" className="service_image" />
                            <img src="./images/tourism_15.jpg" alt="Tourisme" className="service_image" />
                        </div>
                        <p className="service_text">
                            Nous sommes aussi présents dans le tourisme en vous proposant divers circuits
                            touristiques. Vous pourrez visiter notre belle région et admirer les différents sites allant de
                            la Côte d Opale à l'Avesnois en passant par Le Musée du Louvre et les Flandres
                            françaises.
                            Nous effectuons votre retour des sites touristiques et culturels comme le Musée du
                            Louvre, le Mémorial Canadian ou les Terrils du Bassin Minier.
                                <strong> Visitez les plus beaux lieux des Hauts de france</strong> sans plus vous soucier des problèmes
                                de logistique et de conduite, le tout dans des véhicules modernes, confortables et offrant
                                plusieurs services à bord (bouteille d’eau, confiseries, guides touristiques, chargeur pour
                                vos appareils...).Réservez vite votre taxi sur le site, et <strong>découvrez le Pas-de-Calais</strong> et ses
                                richesses avec notre chauffeur.
                            </p>
                        <p className="service_text">
                            Notre maître-mot : ponctualité et discrétion.
                            </p>
                    </div>
                    <div className="service">
                        <h2 className="service_title">Transports scolaires</h2>
                        <img src="./images/school_transport.png" alt="Transports scolaires" className="service_image" />
                        <p className="service_text">
                            Notre chauffeur amènera votre enfant à l'école ou à son rendez-
                            vous en toute sécurité jusqu'à la prise en charge du personnel compétent.
                            Trois tailles de siège-auto à disposition, biensûr vous pouvez prendre le votre.
                            Précisez-nous juste l'âge de votre Bout-chou.
                            Nous sommes particulièrement vigilants sur les enfants et veillons à ce que le voyage se passe bien pour eux.
                            Nous vous proposons de nous contacter afin d’établir les modalités de transport.
                            </p>
                        <img src="./images/school_bag.png" alt="Sac d'école" className="service_image" />
                    </div>
                    <div className="service">
                        <h2 className="service_title">Assistances</h2>
                        <p className="service_text">
                            Vous êtes en panne dans le nord de la France, un souci quelconque vous empêche de
                            parvenir à votre destination en voiture dans le Pas-de-Calais ? Nous sommes là pour vous
                                aider à vous sortir de ces situations désagréables. <strong>Taxis du Bassin Lensois</strong> propose en
                                effet d’assurer votre transport en urgence, lorsque vous êtes victime d’une immobilisation
                                de véhicule qu’il s’agisse d’une panne mécanique, d’un accident de voiture, d’une erreur
                                ou d’une panne de carburant, une crevaison, un dysfonctionnement ou une perte de vos
                                clés...
                            </p>
                    </div>
                    <div className="service">
                        <h2 className="service_title">Transferts pour vos circuits et randonnées à pieds ou à vélos</h2>
                        <p className="service_text">
                            Vous avez un circuit de randonnées à pieds ou à vélo, là aussi, nous venons vous
                            récupérer pour vous ramener à votre lieu de départ, nous transportons vos vélos, si vous
                            ne souhaitez pas faire le retour avec.
                            N'hésitez pas à nous contacter, nous restons à votre service 24h/24 et 7j/7.
                            </p>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
