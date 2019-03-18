import React from 'react';
import {Link} from 'react-router-dom';
import Masonry from 'react-masonry-css';
import images from '../api/Collections';
import Footer from "../component/footer/Footer";

const breakpointColumnsObj = {
    default: 3,
    992: 2,
    767: 1
};

const LoveStory = ({match}) => {

    return (
        <div>
            <div className="spacer-top container-fluid content">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid spacer-top"
                    columnClassName="my-masonry-grid_column"
                >
                    {images.filter((title) => title.title === 'love-story').map((i, index) => (
                        <figure
                            key={index}
                            className="image effect-sadie"
                            style={{animationDelay: `${index * 100}ms`}}
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
                </Masonry>
            </div>
            <Footer/>
        </div>
    )
};

export default LoveStory;