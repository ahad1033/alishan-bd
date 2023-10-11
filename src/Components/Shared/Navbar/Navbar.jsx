import React from 'react';
import logo from '../../../assets/logo.png'

const Navbar = () => {

    const navItems = <>
        <li><a>Home</a></li>
        <li tabIndex={0}>
            <details>
                <summary>Our Products</summary>
                <ul className="p-2 w-full">
                    <li><a>Stone Basins</a></li>
                    <li><a>Commodes</a></li>
                </ul>
            </details>
        </li>
        <li><a>About Us</a></li>
        <li><a>Contact Us</a></li>
    </>

    return (
        <nav className='section-container bg-black'>
            <div className="navbar">
                <div id='1' className="lg:hidden md:hidden navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#B0903D">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                </div>
                <div id='2' className="lg:navbar-start md:navbar-start sm:navbar-end">
                    <img id='img' className='items-center' src={logo} width="60px" alt="Alishan" />
                </div>
                <div id='3' className="navbar-end hidden lg:flex md:flex">
                    <ul className="menu menu-horizontal px-1 font-bold text-[var(--text-primary)]">
                        {navItems}
                    </ul>
                </div>
            </div>
        </nav>



    );
};

export default Navbar;