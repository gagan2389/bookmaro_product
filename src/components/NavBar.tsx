
import React from 'react';
import dummydata from '../dummydata.json';
import logo from '/logo/logo.svg';


const NavBar: React.FC = () => {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between px-3">
            <img
                src={logo}
                alt="BookMaro Logo"
                className="d-inline-block align-top me-2"
            />
            <div className="flex flex-row gap-2">
                <i className="bi bi-geo-alt-fill text-indigo-900"></i>
                <p className='h-full !m-0 text-indigo-900'>{dummydata?.hero?.location}</p>
            </div>
        </nav>
    );
};

export default NavBar;
