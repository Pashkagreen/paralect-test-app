import React from 'react';
import '../MainPage/MainPage.scss'

const EmptyRepo = () => {
    return (
        <div className="empty-repo">
            <i className="fa-solid fa-folder-closed fa-4x" />
            <p>Repository list is empty</p>
        </div>
    );
};

export default EmptyRepo;