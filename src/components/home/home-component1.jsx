import React from 'react'
import '../home/home-component1.css'
import home5 from '../../assets/home5.png'
import home6 from '../../assets/home6.png'

export const Expertise = () => {
    return (
        <div className='home-component1 mt-5 pt-5'>
            <div className='text-center mb-5'>
                <h1 style={{ fontWeight: 'bold', color: '#AD000E' }}>Our <span style={{ fontWeight: 'normal' }}>Expertise</span></h1>
            </div>
            <div className='p-4'>
                <div className='row expertise'>
                    <div className='col-md-6 first-expertise'>
                        <div className='d-flex w-100 gap-2'>
                            <div className='col-md-6 align-self-end'>
                                <img src={home5} alt='img' className='img-fluid' style={{ height: '50%' }} />
                            </div>
                            <div className='col-md-6'>
                                <img src={home6} alt='img' className='img-fluid' />
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 sec-expertise'>
                        <div className='row gap-4'>
                            <div className='col-12 d-flex gap-5'>
                                <div className=''>
                                    <div className="double-circle"></div>
                                </div>
                                <div>
                                    <h3 style={{ fontWeight: '800' }}>Strategic <span style={{ fontWeight: 'normal' }}>Creativity</span></h3>
                                    <p style={{ color: '#88888A' }}>We blend <span style={{ color: '#AD000E' }}>strategic insight with creative flair,</span>
                                        ensuring every project has purpose and impact.</p>
                                </div>

                            </div>
                            <div className='col-12 d-flex gap-5'>
                                <div className=''>
                                    <div className="double-circle"></div>
                                </div>
                                <div>
                                    <h3 style={{ fontWeight: '800' }}>Tailored <span style={{ fontWeight: 'normal' }}>Solutions</span></h3>
                                    <p style={{ color: '#88888A' }}>No two projects are the same. We customize our
                                        services <span style={{ color: '#AD000E' }}>to meet the unique needs</span> of each client.</p>
                                </div>

                            </div>
                            <div className='col-12 d-flex gap-5'>
                                <div className=''>
                                    <div className="double-circle"></div>
                                </div>
                                <div>
                                    <h3 style={{ fontWeight: '800' }}>Proven <span style={{ fontWeight: 'normal' }}>Expertise</span></h3>
                                    <p style={{ color: '#88888A' }}>With decades of experience, Buzz Bee by GRD
                                        has a proven track <span style={{ color: '#AD000E' }}>record of delivering
                                            exceptional results.</span></p>
                                </div>
                            </div>
                            <div className='col-12 d-flex gap-5'>
                                <div className=''>
                                    <div className="double-circle"></div>
                                </div>
                                <div>
                                    <h3 style={{ fontWeight: '800' }}>Passionate <span style={{ fontWeight: 'normal' }}>Team</span></h3>
                                    <p style={{ color: '#88888A' }}>With decades of experience, Buzz Bee by GRD has
                                        a proven track record of delivering exceptional
                                        results.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
