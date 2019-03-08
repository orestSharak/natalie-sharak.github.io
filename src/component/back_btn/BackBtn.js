import React from 'react';
import { withRouter } from 'react-router-dom';


const BackBtn = ({ history }) =>
    <div className="back-btn"
                     onClick={() => history.goBack()}
    >Back</div>;

export default withRouter(BackBtn);