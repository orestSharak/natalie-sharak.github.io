import React from 'react';

const Iframe = ({ source }) => {

    if (!source) {
        return <div>Loading...</div>;
    }

    const src = source;
    return (

                <iframe src={src} className="map" title="map" frameBorder="0"></iframe>

    );
};

export default Iframe;