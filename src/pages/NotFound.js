import React from 'react';
import './styles/NotFound.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import imageNotFound from '../images/404 Error with a cute animal-amico.svg';

function NotFound (){
    return (
        <React.Fragment>
            <div className="not-found">
                <div className="row" >
                    <div className="col-12 position-absolute top-100 start-50 translate-middle" >
                        <img className="rounded mx-auto d-block" src={imageNotFound} alt="not found" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NotFound;