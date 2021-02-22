import React from 'react';

import Navbar from './Navbar';

import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <Navbar />

            <div className="header_content">
                <h1 className="header_title">Taxis du bassin Lensois</h1>
                <p className="header_description">Un taxi près de chez vous</p>
            </div>
        </header>
    )
}
