import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Helmet } from 'react-helmet';
import emailjs from 'emailjs-com';

import Header from '../components/Header';
import Footer from '../components/Footer';

import './ContactPage.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#80A142'
    }
};

Modal.setAppElement(document.getElementById('#button_contact'));

export default function ContactPage() {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        emailjs.init('user_U5FCm5IbpFLQYWv29KojA');
    }, []);

    const sendMail = (event) => {
        event.preventDefault();

        if (firstName !== '' && email !== '' && subject !== '' && message !== '') {
            emailjs.sendForm('service_dhba1a8', 'template_eujoo0n', '#form_contact')
                .then(() => {
                    openModal();
                }, (err) => {

                });
        }
    }

    const openModal = () => {
        setModalOpen(true);

        setInterval(() => {
            setModalOpen(false);
        }, 2000 * 2);
    }

    return (
        <>
            <Helmet>
                <title>Nous contacter - Taxis du bassin lensois</title>
            </Helmet>

            <Header />

            <div className="container">
                <Modal
                    isOpen={modalOpen}
                    style={customStyles}>

                    <div className="modal_title">Succès !</div>
                    <p className="modal_description">Nous avons bien reçu votre message, nous vous recontacterons dans les plus brefs délais.</p>
                </Modal>
                <section className="section section_contact">
                    <div className="section_header">
                        <h1 className="section_header_title">Nous contacter</h1>
                    </div>

                    <div className="section_content">
                        <form onSubmit={sendMail} id="form_contact" className="form_contact">
                            <div className="form_group">
                                <input type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Votre prénom"
                                    onChange={(event) => { setFirstName(event.target.value) }}
                                    className="form_input"
                                    required />
                            </div>
                            <div className="form_group">
                                <input type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Votre adresse e-mail"
                                    onChange={(event) => { setEmail(event.target.value) }}
                                    className="form_input"
                                    required />
                            </div>
                            <div className="form_group">
                                <input type="text"
                                    name="subject"
                                    id="subject"
                                    placeholder="Sujet"
                                    onChange={(event) => { setSubject(event.target.value) }}
                                    className="form_input"
                                    required />
                            </div>
                            <div className="form_group">
                                <textarea name="message"
                                    id="message"
                                    cols="30"
                                    rows="10"
                                    placeholder="Votre message.."
                                    onChange={(event) => { setMessage(event.target.value) }}
                                    className="form_input"
                                    required />
                            </div>
                            <div className="form_group">
                                <button type="submit" id="#button_contact"
                                    className="button button_submit">Envoyer</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    )
}
