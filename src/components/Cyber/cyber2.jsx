import React, { useState } from 'react'
import Compilance from '../../assets/compilance.png'
import VisibilitySensor from 'react-visibility-sensor';
import '../../components/Cyber/cyber2.css'


export const Cyber2 = () => {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

    const handleChange1 = (visible) => {
        setIsVisible1(visible);
    };

    const handleChange2 = (visible) => {
        setIsVisible2(visible);
    };

    return (
        <div style={{ background: 'white' }}>
            <div className='m-5 cyber-sec-comp'>
                <VisibilitySensor onChange={handleChange1} partialVisibility={100}>
                    <div className={isVisible1 ? 'animate-slide' : ''}>
                        <h1>Compilance</h1>

                    </div>
                </VisibilitySensor>
            </div>

            <div className='cyber2 p-5 pt-0 cyber-sec-comp1'>
                <div className='row'>
                    <div className='col-md-12 col-lg-6'>
                        <VisibilitySensor onChange={handleChange2} partialVisibility={100}>
                            <div className={isVisible2 ? 'animate-slide' : ''}>
                                <div className='d-flex justify-content-center align-items-center' style={{ flexDirection: 'column' }}>
                                    <p className='mt-4' style={{ lineHeight: '30px' }}>
                                        We hold ISO/IEC 27001 and ISO 9001 certifications, which guarantees the
                                        highest information security during our software development projects. We
                                        also help our customers from various business domains to align their IT
                                        ecosystems with the industry-specific regulatory compliance (PSI DSS, SOX,
                                        FISMA, GLBA, HIPAA, HITECH, etc.).</p>
                                    <p style={{ lineHeight: '30px' }}>Our testing services are the right choice for businesses that want to make sure their solutions meet the global standards of data and business process management. At the same time, our informed recommendations form a solid basis for companies to improve their security practices overall and the protection of certain apps and network components in particular. </p>
                                </div>
                            </div>
                        </VisibilitySensor>
                    </div >
                    <div className='col-md-12 col-lg-6'>
                        <div className='d-flex justify-content-center align-items-center zoom-container'>
                            <img src={Compilance} alt='Compilance_img' className='img-fluid zoom-effect' style={{ width: '70%' }} />
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

