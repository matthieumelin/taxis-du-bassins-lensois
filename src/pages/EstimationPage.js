import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import DateTimePicker from 'react-datetime-picker';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faCar, faMapMarker, faRoad } from '@fortawesome/free-solid-svg-icons';

import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

import axios from 'axios';

import Header from '../components/Header';
import Footer from '../components/Footer';

import './EstimationPage.css';

import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

export default function EstimationPage() {
    const [geocoderStartLngLat, setGeocoderStartLngLat] = useState({ longitude: 0, latitude: 0 });
    const [geocoderEndLngLat, setGeocoderEndLngLat] = useState({ longitude: 0, latitude: 0 });
    const [km, setKm] = useState(0.00);
    const [passengers, setPassengers] = useState(1);
    const [bags, setBags] = useState(0);
    const [dateTime, setDateTime] = useState(new Date());
    const [roundTrip, setRoundTrip] = useState(true);
    const [price, setPrice] = useState(0.00);
    const [submitted, setSubmitted] = useState(false);
    const pricesType = [
        2.04,
        2.60,
        1.02,
        1.30
    ];

    mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dGhpZXVtZWxpbiIsImEiOiJja2sxbTFscTIwc3ZsMnBydXhpYjFwY3JyIn0.9uiKO1Vsqo32x8gOgmfjHg';

    useEffect(() => {
        // add map
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [2.867186203747194, 50.40144060726485],
            zoom: 13
        });

        // geocoder start & end
        const geocoder_start = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl,
            marker: {
                color: 'green'
            },
            placeholder: 'Adresse de départ'
        });

        const geocoder_end = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl,
            marker: {
                color: 'green'
            },
            placeholder: 'Adresse d\'arrivée',
        });

        // all geocoders output
        geocoder_start.on('result', (result) => {
            setGeocoderStartLngLat({ longitude: result.result.center[0], latitude: result.result.center[1] });
        });

        geocoder_start.on('clear', () => {
            setKm(0.00);
            setPrice(0.00);
            setSubmitted(false);
            setPassengers(1);
            setBags(0);
            setGeocoderStartLngLat({ longitude: 0, latitude: 0 });
        });

        geocoder_end.on('result', (result) => {
            setGeocoderEndLngLat({ longitude: result.result.center[0], latitude: result.result.center[1] });
        });

        geocoder_end.on('clear', () => {
            setKm(0.00);
            setPrice(0.00);
            setSubmitted(false);
            setPassengers(1);
            setBags(0);
            setGeocoderEndLngLat({ longitude: 0, latitude: 0 });
        });

        // check if all geocoders is not created
        document.getElementById('geocoder_start').appendChild(geocoder_start.onAdd(map));
        document.getElementById('geocoder_end').appendChild(geocoder_end.onAdd(map));

        // add controls to map
        map.addControl(new mapboxgl.NavigationControl());
    }, []);
    
    const requestUrl = `https://api.mapbox.com/directions/v5/mapbox/driving/${geocoderStartLngLat['longitude']},${geocoderStartLngLat['latitude']};${geocoderEndLngLat['longitude']},${geocoderEndLngLat['latitude']}?access_token=pk.eyJ1IjoibWF0dGhpZXVtZWxpbiIsImEiOiJja2sxbTFscTIwc3ZsMnBydXhpYjFwY3JyIn0.9uiKO1Vsqo32x8gOgmfjHg`;

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requestUrl);
            const km = setKm((request.data.routes[0].distance / 1000).toFixed([1]));
    
            return km;
        }
    
        fetchData();
    }, [requestUrl]);

    // functions passengers
    const addPassenger = (event) => {
        event.preventDefault();

        setPassengers(passengers < 7 ? passengers + 1 : 7);
    }

    const subPassenger = (event) => {
        event.preventDefault();

        setPassengers(passengers > 1 ? passengers - 1 : 1);
    }

    // functions bags
    const addBag = (event) => {
        event.preventDefault();

        setBags(bags < 7 ? bags + 1 : 7);
    }

    const subBag = (event) => {
        event.preventDefault();

        setBags(bags > 0 ? bags - 1 : 0);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // initialize local variables
        const holyDates = [
            "01/01/" + dateTime.getFullYear(),
            "05/04/" + dateTime.getFullYear(),
            "01/05/" + dateTime.getFullYear(),
            "08/05/" + dateTime.getFullYear(),
            "24/05/" + dateTime.getFullYear(),
            "08/07/" + dateTime.getFullYear(),
            "15/08/" + dateTime.getFullYear(),
            "01/11/" + dateTime.getFullYear(),
            "11/11/" + dateTime.getFullYear(),
            "25/12/" + dateTime.getFullYear(),
        ];
        const date = dateTime.toLocaleDateString();
        const hours = dateTime.getHours();

        let price = 0;
        let holyDay = false;

        for (let i = 0; i < holyDates.length; i++) {
            if (dateTime.getDay() === 6 ||
                dateTime.getDay() === 0 || date === holyDates[i]) {
                holyDay = true;
            }
        }

        // check if day is not a holy day
        if (hours >= 19 || hours <= 6 || holyDay) {
            if (roundTrip) price = pricesType[1];
            else price = pricesType[3];
        } else {
            if (roundTrip) price = pricesType[0];
            else price = pricesType[2];
        }

        // check passengers amount and calcul the price
        let priceKmMul = price * km;

        // check kilometers
        if (km < 2.00) {
            priceKmMul = 0;
        } else {
            priceKmMul = price * (km - 2); 
        }

        if (passengers > 4) {
            if (passengers === 5) price = priceKmMul + 2.50;
            else if (passengers === 6) price = priceKmMul + 5.00;
            else price = priceKmMul + 7.50;
        } else {
            price = priceKmMul;
        }

        // check bags amount and add to final price
        if (bags >= 4) price = price + 2.00;

        // final price
        price = price + 7.30;

        // set price
        setPrice(price.toFixed([2]));

        // check if price is not equal to zero
        if (price !== 0.00 && km !== 0.00) {
            setSubmitted(true);
        } else {
            setSubmitted(false);
        }
    }

    return (
        <>
            <Helmet>
                <title>Faire une estimation - Taxis du bassin lensois</title>
            </Helmet>

            <Header />

            <section className="section section_reservation">
                <div className="section_header">
                    <h1 className="section_header_title">Faire une estimation</h1>
                    <p className="section_header_description">Cet outil est un simulateur de tarif. Il se rapproche au plus proche du tarif réel qui dépend des taximètres présents à bord de nos véhicules.</p>
                </div>

                <div className="section_content">
                    <div className="reservation">
                        <div className="reservation_header">
                            <h2 className="reservation_header_title">Faire une estimation</h2>
                        </div>

                        <form onSubmit={handleSubmit}
                            className="reservation_form" noValidate>
                            <div className="reservation_form_group">
                                <FontAwesomeIcon icon={faCar} className="reservation_icon" /><div id="geocoder_start"></div>
                            </div>
                            <div className="reservation_form_group">
                                <FontAwesomeIcon icon={faMapMarker} className="reservation_icon" /><div id="geocoder_end"></div>
                            </div>
                            <div className="reservation_form_inline">
                                <label className="reservation_label">Passagers</label>
                                <div className="reservation_plus_minus">
                                    <button className="button_plus_minus" onClick={(event) => subPassenger(event)}><FontAwesomeIcon icon={faMinus} className="reservation_plus_minus_icon" /></button>
                                    <input className="reservation_plus_minus_input" type="text" disabled value={passengers} onChange={(event) => setPassengers(event)} />
                                    <button className="button_plus_minus" onClick={(event) => addPassenger(event)}><FontAwesomeIcon icon={faPlus} className="reservation_plus_minus_icon" /></button>
                                </div>
                            </div>
                            <div className="reservation_form_inline">
                                <label className="reservation_label">Bagages</label>
                                <div className="reservation_plus_minus">
                                    <button className="button_plus_minus" onClick={(event) => subBag(event)}><FontAwesomeIcon icon={faMinus} className="reservation_plus_minus_icon" /></button>
                                    <input className="reservation_plus_minus_input" type="text" disabled value={bags} onChange={(event) => setBags(event)} />
                                    <button className="button_plus_minus" onClick={(event) => addBag(event)}><FontAwesomeIcon icon={faPlus} className="reservation_plus_minus_icon" /></button>
                                </div>
                            </div>
                            <div className="reservation_form_inline">
                                <label className="reservation_label">Aller/retour</label>
                                <input type="checkbox" id="switch" className="reservation_switch" defaultChecked={false} onChange={(event) => { setRoundTrip(!roundTrip) }} />
                                <label htmlFor="switch" className="reservation_toggle_label">Toggle</label>
                            </div>
                            <div className="reservation_form_inline reservation_date_time">
                                <label className="reservation_label">Date & Heure</label>
                                <DateTimePicker
                                    onChange={setDateTime}
                                    value={dateTime}
                                    name='datetime'
                                    required
                                    minDate={new Date()}
                                    clearIcon={null}
                                    disableClock={true}
                                    locale={"fr-FR"}
                                />
                            </div>
                            <div className="reservation_form_group">
                                <button type="submit"
                                    className="button button_submit">Avoir une estimation</button>
                            </div>

                            {submitted ?
                                <div className="reservation_result">
                                    <h2 className="reservation_result_title">{price} €</h2>
                                    <div className="reservation_result_infos">
                                        <div className="reservation_result_infos_km"><FontAwesomeIcon icon={faRoad} className="reservation_icon" /> {km} km</div>
                                    </div>
                                    <Link to="/contact" className="button button_submit">Réserver en ligne</Link>
                                </div>
                                : null}
                            <div id="map" className="reservation_map" />
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
