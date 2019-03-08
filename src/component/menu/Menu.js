import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fab} from '@fortawesome/free-brands-svg-icons';

library.add(fab);


class Menu extends Component {

    render() {
        let visibility = "hide";
        if (this.props.menuVisibility) {
            visibility = "show";
        }

        return (
            <div id="slideMenu" className={visibility}
                 onClick={(twoFunc) => {
                     this.props.handleClickMenu(twoFunc);
                     this.props.handleToggleButton(twoFunc)
                 }}>
                <ul className="d-flex flex-column">
                    <li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>

                    <li><NavLink to="/portrait">Portraits</NavLink></li>

                    <li><NavLink to="/loveStory">Love-storys</NavLink></li>

                    <li><NavLink to="/weddings">Weddings</NavLink></li>

                    <li><NavLink to="/events">Events</NavLink></li>

                    <li><NavLink to="/kids">Kids</NavLink></li>

                    <li><NavLink to="/contact">Contact</NavLink></li>

                    <li><a className="social-btn social-menu" target="_blank" rel="noopener noreferrer"
                           href="https://www.facebook.com/photoNataliSharak/"><FontAwesomeIcon
                        icon={['fab', 'facebook']} size="2x"/></a>
                        <a className="social-btn social-menu" target="_blank" rel="noopener noreferrer"
                           href="http://instagram.com"><FontAwesomeIcon
                            icon={['fab', 'instagram']} size="2x"/></a></li>

                </ul>
            </div>
        )
    }
}

export default Menu;