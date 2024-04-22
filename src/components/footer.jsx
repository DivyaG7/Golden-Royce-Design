import React from 'react'
import footer from '../assets/footer.png'
import '../components/footer.css'
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/logo_grd_RED AND GOLD_final 4.png'

export const Footer = () => {
    return (
        <div>
            <div className='footer mt-5'>
                <div className='row d-flex justify-content-between align-items-center footer-content'>
                    <div className='col-lg-6 col-md-12 col-12 col1'>
                        <h5 className='text-center'>Join us as we pioneer a</h5>
                        <h5 className='text-center'>golden age of technology in India!</h5>
                    </div>
                    <div className='col-lg-6 col-md-12 col-12 footer-content2'>
                        <div className='d-flex justify-content-center align-items-center gap-3'>
                            <img src={footer} alt='img' style={{ width: '50px' }} />
                            <h5>START YOUR PROJECT</h5>
                        </div>
                    </div>
                </div>


                <div className='mt-5 mb-3'>
                    <div className='row'>
                        <div className='col-md-4' id='foot1'>
                            <p style={{ fontWeight: 700 }}>Golden Royce Design</p>
                            <img src={logo} alt='logo' style={{ width: '50px' }} />
                        </div>
                        <div className='col-md-4' id='foot2'>
                            <h3 style={{ fontWeight: '800' }}><span style={{
                                backgroundImage: 'linear-gradient(to bottom, #DF2D2D, #FFC800)',
                                backgroundClip: 'text',
                                color: 'transparent'
                            }}>
                                Business Made Smart
                            </span></h3>
                            <p className='text-center mt-5' style={{ fontWeight: '500' }}>Do you have a project in mind, that you feel our
                                approach would work well for</p>
                            <form>
                                <div className="mb-3 mt-3">
                                    <input type="email" className="form-control" id="email" placeholder='Enter your email address' style={{border: '2px solid gray'}} />
                                </div>
                            </form>
                        </div>
                        <div className='col-md-4' id='foot3'>
                            <div className='button gap-2'>
                                <span className="arrow-circle">&#8594;</span>
                                <button style={{ border: 'none', background: 'transparent', color: 'white', fontWeight: '700' }}>Hire us</button>
                            </div>

                            <div className='mt-5'>
                                <p>Connect With us</p>
                                <div className="d-flex gap-2">
                                    <div className="facebook-icon">
                                        <FontAwesomeIcon icon={faFacebookF} size="x" />
                                    </div>
                                    <div className="facebook-icon">
                                        <FontAwesomeIcon icon={faTwitter} size="x" />
                                    </div>
                                    <div className="facebook-icon">
                                        <FontAwesomeIcon icon={faLinkedinIn} size="x" />
                                    </div>
                                    <div className="facebook-icon">
                                        <FontAwesomeIcon icon={faInstagram} size="x" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
