import React from 'react';

import imageError from '../images/404-error.svg';

import 'bootstrap/dist/css/bootstrap.min.css';

function PageError (props) {
    return (
        <React.Fragment>
            <div className="not-found">
                <div className="row" >
                    <div className="col-12 position-absolute top-100 start-50 translate-middle" >
                        <img className="rounded mx-auto d-block" src={imageError} alt="not found" />
                        <p> {props.error.message}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>

        
    )
  }


  export default PageError

