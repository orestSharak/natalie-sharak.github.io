import React from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import './css/bootstrap.min.css';
import App from './component/App';
import * as serviceWorker from './serviceWorker';

class Wrapper extends React.Component {
    constructor() {
        super();
        this.state = {isLoading: true}
    }
    componentDidMount() {
       setTimeout(()=> this.setState({isLoading: false}), 1000)
    }
    render() {
        if(this.state.isLoading){
            return(
                <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
                    <img className="loader-img" src="https://orestsharak.github.io/natalie-sharak.github.io/image/LOGO.png" alt="logo"/>
                </div>
            )
        }
        return(
            <App/>
        )
    }
}

ReactDOM.render(<Wrapper/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
