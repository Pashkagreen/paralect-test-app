import React, {useEffect} from 'react';
import './MainPage.scss'
import UserInfo from "./UserInfo";
import UserRepos from "./UserRepos";
import {useSelector} from "react-redux";

const MainPage = () => {
    const users = useSelector(state => state.repos.users)

    return (
        <div className='user'>
            <UserInfo users={users}/>
            <UserRepos/>
        </div>
    );
};

export default MainPage;