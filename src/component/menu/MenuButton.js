import React, {Component} from 'react';

class MenuButton extends Component {

    render() {
        let visibility = "null";
        if (this.props.btnVisibility) {
            visibility = "open";
        }
        return (
            <div id="nav-icon"
                onClick={(twoFunc)=> {this.props.handleToggleButton(twoFunc); this.props.handleClickMenu(twoFunc)}}
                className={visibility}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        )
    }

}

export default MenuButton;