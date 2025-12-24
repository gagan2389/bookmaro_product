
import React from 'react';
import dummydata from '../dummydata.json';

const NavBar: React.FC = () => {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between px-3">
            <a className="navbar-brand">{dummydata?.restaurant?.name}</a>
            <div className="flex flex-row gap-2">
                <i className="bi bi-geo-alt-fill text-indigo-900"></i>
                <p className='h-full !m-0'>{dummydata?.restaurant?.address?.area}</p>
            </div>
        </nav>
    );
};

export default NavBar;
