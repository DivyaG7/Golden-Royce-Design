import React, { useState } from 'react'
import service1 from '../../assets/service1.png'
import service2 from '../../assets/service2.png'
import service3 from '../../assets/service3.png'
import '../IT/service1.css'
import VisibilitySensor from 'react-visibility-sensor';


export const Service1 = () => {
    const [isVisible1, setIsVisible1] = useState(false);
    // const [isVisible2, setIsVisible2] = useState(false);
    // const [isVisible3, setIsVisible3] = useState(false);

    const handleChange1 = (visible) => {
        setIsVisible1(visible);
    };

    // const handleChange2 = (visible) => {
    //     setIsVisible2(visible);
    // };

    // const handleChange3 = (visible) => {
    //     setIsVisible3(visible);
    // };

    return (
        <div className='service pt-4 pb-4'>
            <div className='m-5 text-white'>
                <VisibilitySensor onChange={handleChange1} partialVisibility={100}>
                    <div className={isVisible1 ? 'animate-slide' : ''}>
                        <h1>Information Technology Services:</h1>
                        <p className='mt-4'>In the vast landscape of IT, we offer tailored solutions ranging from software development and cloud computing to network infrastructure and IT support.</p>
                    </div>
                </VisibilitySensor>
            </div>

            <div className='service-area p-5'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='card mb-5'>
                            <div>
                                <img src={service1} alt='service-img' className='img-fluid w-100' />
                            </div>
                            {/* <VisibilitySensor onChange={handleChange2} partialVisibility={100}>
                                <div className={isVisible2 ? 'animate-scroll-from-bottom' : ''}> */}
                                    <div className='card-body p-4'>
                                        <h4>CLOUD SOLUTION</h4>
                                        <h5 style={{ color: '#01057F' }}>Greater Visibility, Manageability & Flexibility.</h5>
                                        <p className='pb-3' style={{ fontSize: '15px' }}>Leverage the power of the cloud with our
                                            scalable and secure solutions. Transform your
                                            operations, enhance flexibility, and achieve
                                            unparalleled business agility</p>
                                    </div>
                                {/* </div>
                            </VisibilitySensor> */}
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='card mb-5'>
                            <div>
                                <img src={service2} alt='service-img' className='img-fluid w-100' />
                            </div>
                            {/* <VisibilitySensor onChange={handleChange3} partialVisibility={100}>
                                <div className={isVisible3 ? 'animate-scroll-from-bottom' : ''}> */}
                                    <div className='card-body p-4'>
                                        <h4>COGNITIVE OPERATIONS</h4>
                                        <h5 style={{ color: '#01057F' }}>The performance of some composite
                                            cognitive activity</h5>
                                        <p className='pb-3' style={{ fontSize: '15px' }}>Embrace the future with cognitive technologies
                                            that optimize business processes, automate
                                            routine tasks, and unlock new levels of
                                            operational excellence.</p>
                                    </div>
                                {/* </div>
                            </VisibilitySensor> */}
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='card mb-5'>
                            <div>
                                <img src={service3} alt='service-img' className='img-fluid w-100' />
                            </div>
                            {/* <VisibilitySensor onChange={handleChange2} partialVisibility={100}>
                                <div className={isVisible2 ? 'animate-scroll-from-bottom' : ''}> */}
                                    <div className='card-body p-4'>
                                        <h4>CONSULTING SERVICES</h4>
                                        <h5 style={{ color: '#01057F' }}>Strategy, marketing, organization,
                                            operations, technology</h5>
                                        <p style={{ fontSize: '15px' }}>Navigate the complex IT landscape with our
                                            expert consulting services. From strategy
                                            development to implementation, we are your
                                            trusted advisors in achieving sustainable
                                            business success.
                                        </p>
                                    </div>
                                {/* </div>
                            </VisibilitySensor> */}
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

