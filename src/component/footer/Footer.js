import React, {Component} from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fab} from '@fortawesome/free-brands-svg-icons';
library.add(fab);


class Footer extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="footer">
                        <div className="col-12 d-flex justify-content-end">
                            <a className="social-btn" target="_blank"  rel="noopener noreferrer"  href="http://www.facebook.com/photoNataliSharak/"><FontAwesomeIcon
                                icon={['fab', 'facebook']} size="2x"/></a>
                            <a className="social-btn" target="_blank" rel="noopener noreferrer"  href="http://www.instagram.com"><FontAwesomeIcon
                                icon={['fab', 'instagram']} size="2x"/></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
