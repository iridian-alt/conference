import React from 'react';
import  { Link } from 'react-router-dom';

import './styles/BadgeDetails.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

function BadgeDetails (props) {
    const badge = props.badge;
    return (
        <React.Fragment>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                            <h1 className="BadgeDetails__hero-attendant-name">
                                    Welcome
                                </h1>
                            </div>
                            <div className="col-6">
                                <h1 className="BadgeDetails__hero-attendant-name">
                                    { badge.firstName } { badge.lastName }
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                                firstName={badge.firstName}
                                lastName={badge.lastName}
                                email={badge.email}
                                twitter={badge.twitter}
                                jobTitle={badge.jobTitle}
                            />
                        </div>
                        <div className="col">
                            <h2>Actions</h2>
                            <div><Link to={`/badges/${badge.id}/edit`} className="btn btn-primary mb-4">Edit</Link></div>
                            <div><button onClick={props.onOpenModal} className="btn btn-danger" >Delete</button>
                                <DeleteBadgeModal
                                   isOpen={props.modalIsOpen}
                                   onClose={props.onCloseModal}
                                   onDeleteBadge={props.onDeleteBadge}
                                />
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default BadgeDetails;


