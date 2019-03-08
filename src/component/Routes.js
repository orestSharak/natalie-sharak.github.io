import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Home from '../views/Home';
import Portrait from '../views/Portrait';
import Viewpage from '../views/Viewpage';
import Contact from "../views/Contact";
import Navbar from "./menu/Navbar";
import LoveStory from "../views/LoveStory";
import Weddings from "../views/Weddings";
import Kids from "../views/Kids";
import Events from "../views/Events";

const Routes = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Route
                render={({location}) => (
                    <div>
                        <Navbar/>
                        <Route component={ScrollToTop}/>
                        <div>
                            <TransitionGroup>
                                <CSSTransition key={location.key} classNames="fade"
                                               timeout={{enter: 1000, exit: 1000}}>
                                    <Switch location={location}>
                                        <Route  exact path="/" component={Home}/>
                                        <Route exact path="/portrait" component={Portrait}/>
                                        <Route exact path="/loveStory" component={LoveStory}/>
                                        <Route exact path="/weddings" component={Weddings}/>
                                        <Route exact path="/events" component={Events}/>
                                        <Route exact path="/kids" component={Kids}/>
                                        <Route exact path="/contact" component={Contact}/>
                                        <Route exact path="/viewpage/:id" component={Viewpage}/>
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        </div>
                    </div>
                )}
            />
        </Router>
    )
};

const ScrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
};

export default Routes;