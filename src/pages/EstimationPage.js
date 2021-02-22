import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import DateTimePicker from 'react-datetime-picker';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faCar, faMapMarker, faRoad } from '@fortawesome/free-solid-svg-icons';

import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

import * as turf from '@turf/turf'

import Header from '../components/Header';
import Footer from '../components/Footer';

import './EstimationPage.css';

import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

export default function EstimationPage() {
    const [geocoderStartLngLat, setGeocoderStartLngLat] = useState({
        longitude: 0,
        latitude: 0,
    });
    const [geocoderEndLngLat, setGeocoderEndLngLat] = useState({
        longitude: 0,
        latitude: 0,
    });
    const [passengers, setPassengers] = useState(1);
    const [dateTime, setDateTime] = useState(new Date());
    const [roundTrip, setRoundTrip] = useState(true);

    const [km, setKm] = useState(0);
    const [price, setPrice] = useState(0.00);

    const [submitted, setSubmitted] = useState(false);

    const pricesType = [
        1.02,
        1.30,
        2.04,
        2.60
    ];

    mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dGhpZXVtZWxpbiIsImEiOiJja2sxbTFscTIwc3ZsMnBydXhpYjFwY3JyIn0.9uiKO1Vsqo32x8gOgmfjHg';

    useEffect(() => {
        // add map
        const map = new mapboxgl.Map({
            container: 'mapContainer',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [2.867186203747194, 50.40144060726485],
            zoom: 9
        });

        // geocoder start & end
        const geocoder_start = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl,
            placeholder: 'Adresse de départ'
        });

        const geocoder_end = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl,
            placeholder: 'Adresse d\'arrivée',
        });

        // all geocoders output
        geocoder_start.on('result', (result) => {
            setGeocoderStartLngLat(
                {
                    longitude: result.result.center[0],
                    latitude: result.result.center[1],
                });
        });

        geocoder_start.on('clear', () => {
            setKm(0);
            setPrice(0.00);
            setSubmitted(false);
            setGeocoderStartLngLat(
                {
                    longitude: 0,
                    latitude: 0,
                });
        });

        geocoder_end.on('result', (result) => {
            setGeocoderEndLngLat(
                {
                    longitude: result.result.center[0],
                    latitude: result.result.center[1],
                });
        });

        geocoder_end.on('clear', () => {
            setKm(0);
            setPrice(0.00);
            setSubmitted(false);
            setGeocoderEndLngLat(
                {
                    longitude: 0,
                    latitude: 0,
                });
        });

        // check if all geocoders is not created
        if (typeof (document.getElementById('geocoder_start') === 'undefined')) document.getElementById('geocoder_start').appendChild(geocoder_start.onAdd(map));
        if (typeof (document.getElementById('geocoder_end') === 'undefined')) document.getElementById('geocoder_end').appendChild(geocoder_end.onAdd(map));

        // add controls to map
        map.addControl(new mapboxgl.NavigationControl());
    }, []);

    // functions
    const addPassenger = (event) => {
        event.preventDefault();

        setPassengers(passengers < 7 ? passengers + 1 : 7);
    }

    const subPassenger = (event) => {
        event.preventDefault();

        setPassengers(passengers > 1 ? passengers - 1 : 1);
    }

    const changePassengers = (event) => {
        setPassengers(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // calculate the distance to start point and end point
        const from = turf.point([geocoderStartLngLat['longitude'], geocoderStartLngLat['latitude']]);
        const to = turf.point([geocoderEndLngLat['longitude'], geocoderEndLngLat['latitude']]);
        const km = turf.distance(from, to).toFixed([2]);

        setKm(km);

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
        if (passengers > 5) {
            if (passengers === 6) price = price * km + 2.50;
            if (passengers === 7) price = price * km + 5.00;
        } else {
            price = price * km;
        }

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

                        <form onSubmit={handleSubmit} className="reservation_form" noValidate>
                            <div className="reservation_form_group">
                                <FontAwesomeIcon icon={faCar} className="reservation_icon" /><div id="geocoder_start"></div>
                            </div>
                            <div className="reservation_form_group">
                                <FontAwesomeIcon icon={faMapMarker} className="reservation_icon" /><div id="geocoder_end"></div>
                            </div>
                            <div className="reservation_form_inline">
                                <label className="reservation_label">Passagers</label>
                                <div className="reservation_passengers">
                                    <button className="button_passengers" onClick={(event) => subPassenger(event)}><FontAwesomeIcon icon={faMinus} className="reservation_passengers_icon" /></button>
                                    <input className="reservation_passengers_input" type="text" disabled value={passengers} onChange={(event) => changePassengers(event)} />
                                    <button className="button_passengers" onClick={(event) => addPassenger(event)}><FontAwesomeIcon icon={faPlus} className="reservation_passengers_icon" /></button>
                                </div>
                            </div>
                            <div className="reservation_form_inline">
                                <label className="reservation_label">Aller/retour</label>
                                <input type="checkbox" id="switch" className="reservation_switch" defaultChecked={false} onChange={(event) => {
                                    setRoundTrip(!roundTrip)
                                }} />
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
                                />
                            </div>
                            <div className="reservation_form_group">
                                <button type="submit" className="button button_submit">Avoir une estimation</button>
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
                            <div id="mapContainer" className="reservation_map" />
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
