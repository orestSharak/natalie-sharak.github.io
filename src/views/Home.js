import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import sizeMe from 'react-sizeme';
import StackGrid, {transitions, easings} from 'react-stack-grid';
import images from '../api/Collections';
import Footer from "../component/footer/Footer";

const transition = transitions.helix;

class Home extends Component {
    render() {
        const {size: {width}} = this.props;
        return (
            <div>
                <div className="container-fluid content">
                    <StackGrid
                        className="spacer-top"
                        monitorImagesLoaded={true}

                        columnWidth={(width <= 768) ? '100%' : (width <= 992) ? '50%' : '33.33%'}
                        duration={600}
                        gutterWidth={10}
                        gutterHeight={5}
                        easing={easings.cubicOut}
                        appearDelay={60}
                        appear={transition.appear}
                        appeared={transition.appeared}
                        enter={transition.enter}
                        entered={transition.entered}
                        leaved={transition.leaved}
                    >
                        {images.map(i => (
                            <figure
                                key={i.src}
                                className="image effect-sadie"
                            >
                                <Link to={{
                                    pathname: `/viewpage/${i.id}`
                                }}> <img src={`${i.src}.jpg`} alt={i.label}/>
                                    <figcaption>
                                        <h2>{i.label}</h2>
                                        <p>{i.title}</p>
                                    </figcaption>
                                </Link>
                            </figure>
                        ))}
                    </StackGrid>
                </div>
                <Footer/>
            </div>
        );
    }
}


export default sizeMe()(Home);
