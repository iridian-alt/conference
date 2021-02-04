import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/Badge.css";

import confLogo from '../images/icons8-pixel-star-100.png';

import Gravatar from './Gravatar'


class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img
                        src={confLogo}
                        alt="conference logo"
                    />
                </div>
                <div className="Badge__section-name">
                    <Gravatar
                        className="Badge__avatar"
                        email={this.props.email}
                        alt="avatar"
                    />
                    <h1>{this.props.firstName} <br />{this.props.lastName}</h1>
                </div>
                <div className="Badge__section-info">
                    <h3> {this.props.jobTitle} </h3>
                    <div>@{this.props.twitter}</div>
                </div>
                <div className="Badge__footer">
                    #irinahconf
                </div>
            </div>
        )
    }
};

export default Badge;