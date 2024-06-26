import React, { useState } from 'react'
import '../IT/service2.css'
import service2 from '../../assets/service-2.png'
import VisibilitySensor from 'react-visibility-sensor';


export const Service2 = () => {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

    const handleChange1 = (visible) => {
        setIsVisible1(visible);
    };

    const handleChange2 = (visible) => {
        setIsVisible2(visible);
    };

    return (
        <div className='pt-2' style={{ background: 'white' }}>
            <div className='m-5 pt-4'>
                <VisibilitySensor onChange={handleChange1} partialVisibility={100}>
                    <div className={isVisible1 ? 'animate-slide' : ''}>
                        <h1>Other Services</h1>
                        <p className='mt-4'>
                            In the vast landscape of IT, we offer tailored solutions ranging from software development and cloud computing to network infrastructure and IT support. </p>
                    </div>
                </VisibilitySensor>
            </div>

            <div className='service2 p-5 pt-2'>
                <div className='row'>
                    <div className='col-md-12 col-lg-8'>
                        <VisibilitySensor onChange={handleChange2} partialVisibility={100}>
                            <div className={isVisible2 ? 'animate-slide' : ''}>
                                <div className='d-flex justify-content-center align-items-center' style={{ flexDirection: 'column' }}>
                                    <p style={{ color: '#888484' }}><span style={{ fontSize: '24px', color: '#01057F' }}><span style={{ fontWeight: '700' }}>Data</span> Analytic :</span> Unleash the power of your data with our
                                        advanced analytics solutions. Gain valuable insights, make
                                        informed decisions, and stay ahead in today's data-driven world.
                                    </p>
                                    <p style={{ color: '#888484' }}><span style={{ fontSize: '24px', color: '#01057F' }}><span style={{ fontWeight: '700' }}>Enterprise</span> Solutions  :</span> Leverage the power
                                        of the cloud with our scalable and secure solutions. Transform
                                        your operations, enhance flexibility, and achieve
                                        unparalleled business agility.</p>
                                    <p style={{ color: '#888484' }}><span style={{ fontSize: '24px', color: '#01057F' }}><span style={{ fontWeight: '700' }}>IoT</span> & <span style={{ fontWeight: '700' }}>Digital engineering</span>  :</span> Embrace the era of IoT and
                                        digital transformation. Our innovative solutions enable you to
                                        connect devices, analyse data, and drive intelligent decision-
                                        making.</p>
                                    <p style={{ color: '#888484' }}><span style={{ fontSize: '24px', color: '#01057F' }}><span style={{ fontWeight: '700' }}>Network services</span> & <span style={{ fontWeight: '700' }}>Solutions</span>  :</span> Ensure seamless
                                        connectivity and robust network infrastructure. Our solutions
                                        are designed to keep your business running smoothly in an
                                        ever-evolving digital landscape.</p>
                                    <p style={{ color: '#888484' }}><span style={{ fontSize: '24px', color: '#01057F' }}><span style={{ fontWeight: '700' }}>Cyber</span>security  :</span> Ensure the integrity and confidentiality of your
                                        digital assets with our robust cybersecurity solutions. Safeguard
                                        your business against evolving cyber threats with our cutting-edge
                                        security measures.</p>
                                </div>
                            </div>
                        </VisibilitySensor>
                    </div>
                    <div className='col-md-12 col-lg-4'>
                        <div className='d-flex justify-content-center align-items-center zoom-container'>
                            <img src={service2} alt='img' className='img-fluid zoom-effect' style={{ width: '70%' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

