import React from 'react';
import Logo from  "../../Images/cat.svg";
import './Navbar.scss'
import SearchForm from "../SearchForm/SearchForm";

const Navbar = () => {

    return (
        <div className='navbar'>
            <a href='/'
                className="navbar-logo">
                <img
                    src={Logo}
                    alt="Logo"
                    style={{ width: "40px", height: "40px" }}
                />
            </a>
            <SearchForm/>
        </div>
    );
};

export default Navbar;