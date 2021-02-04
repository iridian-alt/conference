import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Index.css'
import imageIndex from '../images/Welcome-bro.svg';
import imageStart from '../images/Astronaut-bro.svg'

function Index (){
    return (
        <React.Fragment>
            <div className="Badges__hero min-vh-100 my-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3 ">
                            <img src={imageStart} alt="Logo de la Conf" />
                            <h1 className="font-weight-bolder text-white">
                                PRINT YOUR BADGES
                            </h1>
                            <h4 className="font-weight-bold text-white">
                                The easiest way to manage your conference
                            </h4>
                            <Link to="/badges" className="btn btn-primary">
                                Start Now
                            </Link>
                        </div>
                    <div className="col-12 col-md-1"></div>
                    <div className="col-12 col-md-8">
                        <img src={imageIndex} alt="Astronautas" />
                    </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Index;