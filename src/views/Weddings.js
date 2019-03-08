import React from 'react';
import {Link} from 'react-router-dom';
import {withSize} from 'react-sizeme';
import StackGrid, {transitions, easings} from 'react-stack-grid';
import images from '../api/Collections';
import Footer from "../component/footer/Footer";

const transition = transitions.helix;

const Weddings = ({match, size}) => {

    return (
        <div>
            <div className="spacer-top container-fluid content">
                <StackGrid
                    className="spacer-top"
                    monitorImagesLoaded={true}
                    columnWidth={(size.width <= 768) ? '100%' : (size.width <= 992) ? '50%' : '33.33%'}
                    duration={600}
                    gutterWidth={10}
                    gutterHeight={10}
                    easing={easings.cubicOut}
                    appearDelay={60}
                    appear={transition.appear}
                    appeared={transition.appeared}
                    enter={transition.enter}
                    entered={transition.entered}
                    leaved={transition.leaved}
                >
                    {images.filter((title) => title.title === 'wedding').map(i => (
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
    )
};

export default withSize()(Weddings);