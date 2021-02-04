import React from 'react';
import '../pages/styles/Skeleton.css';

function PageLoading () {
    return (
        <div>
        <div className="container">
            <li className="skeleton-item">
                <div>
                    <div className="skeleton-img" />
                </div>
                <div className="skeleton-info">
                    <p className="skeleton-name" />
                    <p className="skeleton-email" />
                </div>
            </li>
        </div>
        </div>
    )
}

export default PageLoading;