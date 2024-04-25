import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/navbar.css';
import logo from "../assets/logo_grd_RED AND GOLD_final 4.png";
import home from '../assets/Home-page.png'
import IT from '../assets/IT-page.png'
import cyber from '../assets/Cyber-page.png'
import buzzbee from '../assets/Buzzbee-page.png'




export const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className="navbar" id='navbar'>
            <div className="container">
                <div className='navigation'>
                    <Link to='/' >
                        <img src={logo} alt='Golden_royce_design' />
                    </Link>

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
                                    <li><Link to='/' onClick={toggleNav}><span>01</span>Home<img src={home} alt="home-img" className="nav-image" /></Link></li>
                                    <li><Link to='/IT' onClick={toggleNav}><span>02</span>Services<img src={IT} alt="IT-img" className="nav-image" /></Link></li>
                                    <li><Link to='/CyberSecurity' onClick={toggleNav}><span>03</span>Cybersecurity<img src={cyber} alt="cyber-img" className="nav-image" /></Link></li>
                                </ul>
                            </div>
                            <div className="nav-column">
                                <ul className="nav-links">
                                    <li><Link to='/BuzzBee' onClick={toggleNav}><span>04</span>BuzzBee<img src={buzzbee} alt="buzzbee-img" className="nav-image" /></Link></li>
                                    {/* <li><Link to='/Contact' onClick={toggleNav}><span>05</span>Contact<img src='' alt="contact-img" className="nav-image" /></Link></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </nav>
    )
}
