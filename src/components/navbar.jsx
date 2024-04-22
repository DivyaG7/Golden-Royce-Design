import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/navbar.css';
import logo from "../assets/logo_grd_RED AND GOLD_final 4.png";




export const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className="navbar" id='navbar'>
            <div className="container">
                <div className='navigation'>
                    <img src={logo} alt='Golden_royce_design' />

                    <div className='navbar-toggle' onClick={toggleNav}>
                        <div className='bar' id='bar1'></div>
                        <div className='bar' id='bar2'></div>
                        <div className='bar' id='bar3'></div>
                    </div>
                </div>
                {isNavOpen && (
                    <div className="nav-modal">
                        <button className="close-btn" onClick={toggleNav}>Close</button>
                        <div className="nav-grid">
                            <div className="nav-column">
                                <ul className="nav-links">
                                    <li><Link to='/' onClick={toggleNav}><span>01</span>Home</Link></li>
                                    <li><Link to='/about' onClick={toggleNav}><span>02</span>Work</Link></li>
                                    <li><Link to='/services' onClick={toggleNav}><span>03</span>Services</Link></li>
                                </ul>
                            </div>
                            <div className="nav-column">
                                <ul className="nav-links">
                                    <li><Link to='/services' onClick={toggleNav}><span>04</span>Blog</Link></li>
                                    <li><Link to='/contact' onClick={toggleNav}><span>05</span>Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </nav>
    )
}
