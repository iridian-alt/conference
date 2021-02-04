import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import confLogo from '../images/Astronaut-bro.svg';

import BadgesList from '../components/BadgesList';
import PageError from '../components/PageError';



import './styles/Skeleton.css';
import api from '../api';

class Badges extends Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
    };
    /*callig to the api*/
    componentDidMount () {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null})

        try {
            const data = await  api.badges.list();
            this.setState({ loading: false, data: data })
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    render () {

        if (this.state.error) {
            return <PageError error={this.state.error} />
        }

        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges">
                        <div className="Badges__hero">
                            <div className="Badges__container">
                            <img
                                className="Badges_conf-logo img-fluid"
                                src={confLogo}
                                alt="Conf Logo"
                            />
                            </div>
                        </div>
                    </div>

                    <div className="Badges__container">
                        <div className="Badges__buttons">
                            <Link to="/badges/new" className="btn btn-primary">
                                New Badge
                            </Link>
                        </div>

                        <div className="Badges__list">
                            <div className="Badges__container">
                            { this.state.loading === true
                            ?
                                <li className="skeleton-item">
                                    <div>
                                        <div className="skeleton-img" />
                                    </div>
                                    <div className="skeleton-info">
                                        <p className="skeleton-name" />
                                        <p className="skeleton-email" />
                                    </div>
                                </li>
                            :
                                <BadgesList badges={this.state.data} />
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Badges;