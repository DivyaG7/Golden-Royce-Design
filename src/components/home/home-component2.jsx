import React, { useState } from 'react'
import client1 from '../../assets/client1.png'
import client2 from '../../assets/client2.png'
import client3 from '../../assets/client3.png'
import client4 from '../../assets/client4.png'
import client5 from '../../assets/client5.png'
import '../home/home-component2.css'

export const Testimonial = () => {
    const [clientInfo, setClientInfo] = useState({ name: 'Name', designation: 'Designation', text: 'Testimonial' });

    const displayClientInfo = (name, designation, text) => {
        setClientInfo({ name, designation, text });
    };

    const clearClientInfo = () => {
        setClientInfo({ name: 'Name', designation: 'Designation', text: 'Testimonial' });
    };


    return (
        <div className='mt-5 pt-5'>
            <div className='text-center mb-5'>
                <h1 style={{ fontWeight: 'bold', color: '#AD000E' }}>Client <span style={{ fontWeight: 'normal' }}>Testimonial</span></h1>
            </div>

            <section className='testimonial'>
                <div className="d-flex gap-0">
                    <div className='container ms-4'>
                        <div className="row me-3">
                            <div className="col-md-6">
                                <div className='test-name-desg'>
                                    <h3 style={{ fontWeight: '800', color: '#BE0F0F' }}>{clientInfo.name}</h3>
                                    <h5 style={{ fontSize: '16px' }}>{clientInfo.designation}</h5>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <p style={{ color: '#848484' }}><span style={{ fontSize: '24px', color: '#AD000E' }}>“</span>{clientInfo.text}<span style={{ fontSize: '24px', color: '#AD000E' }}>“</span></p>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center' style={{ width: '100%' }}>
                        <div className="image-container" onMouseOver={() => displayClientInfo('Gopinath', 'CEO - MediTech', "GRD played a pivotal role in launching our startup's online presence. Their design team crafted a stunning website that perfectly captured our brand's essence.")} onMouseOut={clearClientInfo}>
                            <img src={client1} alt="Img 1" className="image animate-scroll" />
                        </div>
                        <div className="image-container" onMouseOver={() => displayClientInfo('Aravinshakrishnan', 'VISUAL DESIGNER - Infosys', "GRD IT solutions optimized our checkout process, ensuring secure transactions. It's clear that their expertise lies in marrying design with technology")} onMouseOut={clearClientInfo}>
                            <img src={client2} alt="Img 2" className="image animate-scroll-from-bottom" />
                        </div>
                        <div className="image-container" onMouseOver={() => displayClientInfo('Guna', 'FOUNDER - Good Life', "Thanks to the exceptional expertise of their hacking IT service, our company's cybersecurity has been fortified beyond expectations.")} onMouseOut={clearClientInfo}>
                            <img src={client3} alt="Img 3" className="image animate-scroll" />
                        </div>
                        <div className="image-container" onMouseOver={() => displayClientInfo('Sherene', 'PRO - Ranger', "Partnering with GRD was a game-changer for our company. Their design team breathed new life into our branding, giving it a modern and appealing look.")} onMouseOut={clearClientInfo}>
                            <img src={client4} alt="Img 4" className="image animate-scroll-from-bottom" />
                        </div>
                        <div className="image-container" onMouseOver={() => displayClientInfo('Rithish', 'FOUNDER - FarmVilla', "GRD played a pivotal role in launching our startup's online presence. Their design team crafted a stunning website that perfectly captured our brand's essence.")} onMouseOut={clearClientInfo}>
                            <img src={client5} alt="Img 5" className="image animate-scroll-from-bottom" />
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

