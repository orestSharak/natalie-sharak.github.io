import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Menu from "./Menu";
import MenuButton from "./MenuButton";


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            active: false
        };
        this.handleClickMenu = this.handleClickMenu.bind(this);
        this.handleToggleButton = this.handleToggleButton.bind(this);
    }

    handleClickMenu() {
        this.setState({visible: !this.state.visible})
    }

    handleToggleButton() {
        const currentState = this.state.active;
        this.setState({active: !currentState})
    }


    render() {
        return (
            <div className="container-fluid">
                <NavLink exact to="/"><img src="https://orestsharak.github.io/natalie-sharak.github.io/image/LOGO-TRANSPARENT.png" alt="logo" style={{
                    height: '100px'
                }}/></NavLink>
                <MenuButton handleClickMenu={this.handleClickMenu}
                            handleToggleButton={this.handleToggleButton}
                            btnVisibility={this.state.active}/>
                <Menu
                    menuVisibility={this.state.visible}
                    handleClickMenu={this.handleClickMenu}
                    handleToggleButton={this.handleToggleButton}
                />
            </div>
        )
    }
}

export default Header;