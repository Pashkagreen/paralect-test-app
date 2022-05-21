import React from 'react';

const UserInfo = ({users}) => {
    const {login, name, avatar_url, html_url, followers, following} = users
    return (
        <div className='user-info'>
            <div className="avatar">
                <img src={avatar_url} alt="User"/>
            </div>
            <h2 className='name'>{name}</h2>
            <a href={html_url} target='_blank'>{login}</a>
            <div className="followers">
                <div className="your-followers">
                    <i className="fa-solid fa-user-group"></i>
                    <p>{followers} followers</p>
                </div>
                <div className="you-following">
                    <i className="fa-solid fa-user"></i>
                    <p>{following} following</p>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;