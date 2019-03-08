import React from 'react';
import '../css/App.css';
import images from '../api/Collections';
import Footer from "../component/footer/Footer";
import BackBtn from '../component/back_btn/BackBtn';


const Viewpage = ({match}) => {
    const image = images.find(({id}) =>
        id === match.params.id);

    return (
        <div>
            <div className="spacer-top content ">
                <div className="container-fluid ">
                    <div className="d-flex flex-column ">
                        {image.posters.map((i, index) => (
                            <img className="viewpage_image" key={index} src={`${i.url}.jpg`} alt={index}/>)
                        )}


                        <BackBtn/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
};
export default Viewpage;