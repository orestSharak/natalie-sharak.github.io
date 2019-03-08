import React, {Component} from 'react';
import Header from "./Header";




class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slide: 0,
            lastScrollY: 0
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentWillMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    };

     handleScroll() {
        const {lastScrollY} = this.state;
        const currentScrollY = window.scrollY;

        if (0 <= currentScrollY  && currentScrollY < 100 ){
            this.setState({slide: '0'});
        }
        else if (currentScrollY > lastScrollY) {
            this.setState({slide: '-100%'});
        }
        else {
            this.setState({slide: '0'});
        }
        this.setState({lastScrollY: currentScrollY});
    };

    render() {
        return (
            <div
                className="my-header"
                style={{
                    transform: `translate(0, ${this.state.slide})`,
                    transition: 'transform .2s linear'
                }}
            >
             <Header/>
            </div>
        )
    }
}

export default Navbar;
