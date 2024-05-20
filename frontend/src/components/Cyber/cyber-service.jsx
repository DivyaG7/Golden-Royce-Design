import React from 'react'
import '../Cyber/cyber-service.css'

export const CyberService = () => {
    return (
        <div>
            <div className='cyber-service' id='managedServices'>
                <div className='row'>
                    <div className='col-md-6 p-5' style={{ color: 'white', background: '#0C6C69' }}>
                        <div className='d-flex justify-content-left align-items-center gap-2'>
                            <span style={{ boxSizing: 'border-box', borderLeft: '4px solid #FFC800', height: '7vh' }}></span>
                            <h1><span style={{ fontWeight: '800' }}>Managed</span> Services</h1>
                        </div>
                        <p className='mt-5' style={{ fontSize: '16px' }}>Cyber security services are professional services
                            that help organizations protect their networks and
                            data from cyber-attacks and should form a part of
                            a company's risk management plan. </p>
                        <p className='mt-4' style={{ fontSize: '16px' }}>Mobile App VA/PT Audit, Web VA/PT, Infra VA/PT
                            Audit, Website VA/PT Audit, API VA /PT Audit,
                            Thick client VA/PT Audit, Secure code review,
                            Database VA/PT Audit</p>
                    </div>
                    <div className='col-md-6 p-5'>
                        <div className='row'>
                            <div className='row'>
                                <div className='col-lg-6 col-md-8 col-6' id='left-col1'>
                                    <h3 style={{fontWeight: '700'}}>Infra VA/PT</h3>
                                    <ul className='mt-3' style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: '#474747', listStyle: 'none', marginLeft: '-30px' }}>
                                        <div className='d-flex gap-2'>
                                            <i className="fa fa-caret-right" style={{ fontSize: '24px', color: '#0C6C69' }}></i>
                                            <li>Host level VA/PT Audit</li>
                                        </div>
                                        <div className='d-flex gap-2'>
                                            <i className="fa fa-caret-right" style={{ fontSize: '24px', color: '#0C6C69' }}></i>
                                            <li>IOT VA/PT Audit</li>
                                        </div>
                                        <div className='d-flex gap-2'>
                                            <i className="fa fa-caret-right" style={{ fontSize: '24px', color: '#0C6C69' }}></i>
                                            <li>Wireless VA/PT Audit</li>
                                        </div>
                                        <div className='d-flex gap-2'>
                                            <i className="fa fa-caret-right" style={{ fontSize: '24px', color: '#0C6C69' }}></i>
                                            <li>Infra VA/PT Audit</li>
                                        </div>
                                    </ul>
                                </div>
                                <div className='col-lg-6 col-md-8 col-6' id='left-col2'>
                                    <h3 style={{fontWeight: '700'}}>Other VA/PT</h3>
                                    <ul className='mt-3' style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: '#474747', listStyle: 'none', marginLeft: '-30px' }}>
                                        <div className='d-flex gap-2'>
                                            <i className="fa fa-caret-right" style={{ fontSize: '24px', color: '#0C6C69' }}></i>
                                            <li>Cyber Intelligence</li>
                                        </div>
                                        <div className='d-flex gap-2'>
                                            <i className="fa fa-caret-right" style={{ fontSize: '24px', color: '#0C6C69' }}></i>
                                            <li>Vulnerability Audit</li>
                                        </div>
                                        <div className='d-flex gap-2'>
                                            <i className="fa fa-caret-right" style={{ fontSize: '24px', color: '#0C6C69' }}></i>
                                            <li>Cloud VA/PT Audit</li>
                                        </div>
                                        <div className='d-flex gap-2'>
                                            <i className="fa fa-caret-right" style={{ fontSize: '24px', color: '#0C6C69' }}></i>
                                            <li>Cyber forensics Audit</li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div className='border-bottom pt-3'></div>
                            <div className='d-flex gap-2'>
                                <i className="fa fa-caret-right mt-4" style={{ fontSize: '24px', color: '#0C6C69' }}></i>
                                <p className='mt-4' style={{color: '#474747'}}>Guard spot and vanquish cyber threat with our
                                    advanced VA/PT services.  Elevate your security
                                    with our streamlines  effective defence
                                    mechanism.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

