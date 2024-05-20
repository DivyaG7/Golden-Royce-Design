import React, { useState } from 'react'
// import { Navbar } from '../components/navbar'
import '../pages/Home.css'
import home1 from '../assets/home1.png'
import home2 from '../assets/home2.png'
import home3 from '../assets/home3.png'
import home4 from '../assets/home4.png'
import { Expertise } from '../components/home/home-component1'
// import { Testimonial } from '../components/home/home-component2'
import { Contact } from '../components/home/home-component3'
import VisibilitySensor from 'react-visibility-sensor';
import { Link } from 'react-router-dom'




export const Home = () => {
    // const [isVisible1, setIsVisible1] = useState(false);
    // const [isVisible2, setIsVisible2] = useState(false);
    // const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);

    // const handleChange1 = (visible) => {
    //     setIsVisible1(visible);
    // };

    // const handleChange2 = (visible) => {
    //     setIsVisible2(visible);
    // };

    // const handleChange3 = (visible) => {
    //     setIsVisible3(visible);
    // };

    const handleChange4 = (visible) => {
        setIsVisible4(visible);
    };

    const handleButtonClick = () => {
        const nextSection = document.getElementById('discover');
        nextSection.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div className='home'>
                {/* <Navbar /> */}
            </div>

            <section className='home-page d-flex justify-content-center align-items-center'>
                <div className='heading'>
                    <div className='hr me-2'></div>
                    <h6>GOLDEN ROYCE DESIGN</h6>
                    <div className='hr ms-2'></div>
                </div>

                <VisibilitySensor onChange={handleChange4} partialVisibility={100}>
                    <div className={isVisible4 ? 'animate-slide' : ''}>
                        <div className='mt-5 head-business'>
                            <p className="animate-slide"><span>We</span> Make <span>your Business</span> Beautiful <span>&</span> Smart</p>
                        </div >
                    </div>
                </VisibilitySensor>

                <div className='row justify-content-center mt-5 home-img'>
                    <div className='col-md-8 col-12 d-flex justify-content-center gap-4' >

                        <div className='animate-scroll-from-bottom'>
                            <Link to="/Buzzbee">
                                <img src={home1} alt='img' className='img-fluid' />
                            </Link>
                        </div>


                        <div className='animate-scroll'>
                            <Link to="/CyberSecurity">
                                <img src={home2} alt='img' className='img-fluid' />
                            </Link>
                        </div>



                        <div className='animate-scroll-from-bottom1'>
                            <Link to="/It">
                                <img src={home3} alt='img' className='img-fluid' />
                            </Link>
                        </div>


                    </div>
                    <div className='col-8 dot-img mt-5'>
                        <img src={home4} alt='img' className='img-fluid' />
                    </div>
                    <div className='col-8 mt-5 home-p'>
                        <p className='animate-scroll-from-bottom1'>We design and build beautiful brands, websites and products for startups and tech companies.</p>
                        <button className='mt-5 animate-scroll-from-bottom2' onClick={handleButtonClick}>Discover More</button>
                    </div>
                </div>
            </section >

            <section id='discover'>
                <Expertise />
            </section>

            {/* <section>
                <Testimonial />
            </section> */}

            <section>
                <Contact />
            </section>

        </>

    )
}
