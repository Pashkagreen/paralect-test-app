import React from 'react';
import './UserNotFound.scss'

const UserNotFound = () => {
    return (
        <div className='user-not-found'>
            <i className="fa-solid fa-user fa-4x" />
            <p>User not found</p>
        </div>
    );
};

export default UserNotFound;