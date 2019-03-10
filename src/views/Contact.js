import React, {Component} from 'react';
import Footer from "../component/footer/Footer";
import Iframe from '../component/iframe';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faMobileAlt, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
library.add(fab);


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20587.95522824168!2d23.96673562870693!3d49.83316718126288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae762a48e4c9b%3A0x31b651c0f2a3e14!2sL%CA%B9vivsil%CA%B9mash+Z-D+Vat!5e0!3m2!1spl!2spl!4v1551815629970"
        };
    }

    render() {
        return (
            <div>
                <div className="spacer-top container content">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center">
                            <img className="contact-img" src="https://orestsharak.github.io/natalie-sharak.github.io/image/contact.jpg" alt="contact"/>
                            <h1>Natalie Sharak</h1>
                            <p>Photography</p>
                            <hr/>
                            <div className="d-flex flex-column ">
                            <span className="contact-text"><FontAwesomeIcon icon={faMapMarkerAlt} size="1x"/>&nbsp; Lviv, UA</span>
                            <a href="tel:+380637230755" className="contact-text"><FontAwesomeIcon icon={faMobileAlt} size="1x"/>&nbsp; +38 063 723 07 55</a>
                            <a href="mailto:korycia@gmail.com" className="contact-text"><FontAwesomeIcon icon={faEnvelope} size="1x"/>&nbsp; korycia@gmail.com</a>
                            <span className="d-flex flex-column">
                            <a className="social-btn contact-text" target="_blank"  rel="noopener noreferrer"  href="http://www.facebook.com/photoNataliSharak/"><FontAwesomeIcon
                                icon={['fab', 'facebook']} size="1x"/>&nbsp; Facebook</a>
                            <a className="social-btn contact-text" target="_blank" rel="noopener noreferrer"  href="http://www.instagram.com"><FontAwesomeIcon
                                icon={['fab', 'instagram']} size="1x"/>&nbsp; Instagram</a>
                            </span>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <Iframe source={this.state.src}/>
                            <h1 className="text-center">Any questions?</h1>
                            <hr/>
                            <p className="text-center">We can provide you collection information about price, booking dates and how many photos we deliver when you contact us</p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Contact;