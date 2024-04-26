import React, { useState } from 'react'
// import ellipse from '../../assets/Ellipse.png'
// import sheild from '../../assets/sheild.png'
// import lock from '../../assets/lock.png'
// import right from '../../assets/right_arrow.png'
// import bottom from '../../assets/bottom-arrow.png'
// import center from '../../assets/center.png'
// import left from '../../assets/left-arrow.png'
import cyber from '../../assets/cyber.png'
import '../Cyber/cyber.css'
import VisibilitySensor from 'react-visibility-sensor';



export const Cyber1 = () => {
    const [isVisible1, setIsVisible1] = useState(false);

    const handleChange1 = (visible) => {
        setIsVisible1(visible);
    };
    return (
        <div>
            <div className='cyber1 p-2 pt-4 pb-4'>
                <div className='row pt-5 pb-5'>
                    <div className='col-md-7 col-12 pt-2 pb-3'>
                        <div className='cyber-area ps-5 pe-4 mb-2'>
                            <VisibilitySensor onChange={handleChange1} partialVisibility>
                                <div className={isVisible1 ? 'animate-slide' : ''}>
                                    <h1 style={{ fontWeight: '400' }}><span style={{ fontWeight: '700' }}>Professional</span> <span style={{ color: '#56E3D2' }}>protection</span> with</h1>
                                    <h1 style={{ fontWeight: '400' }}>reliable <span style={{ fontWeight: '700' }}>services</span></h1>
                                    <p className='mt-3'>Proactively identify threats to your digital infrastructure so you
                                        can minimise damage, reduce costs and financial losses, and prevent
                                        future attacks in an ever-evolving landscape.</p>
                                    <button className='mt-3 pt-1 pb-1' style={{ width: '100px', border: 'none', borderRadius: '20px', background: '#58DB77' }}>EXPLORE</button>
                                </div>
                            </VisibilitySensor>
                        </div>
                    </div>
                    <div className='col-md-3 col-4 image-container d-flex justify-content-center align-items-center mx-auto'>
                        {/* <img src={ellipse} alt="Ellipse" className="image ellipse p-1" />
                        <img src={sheild} alt="Shield" className="image shield p-1" />
                        <img src={lock} alt="Lock" className="image lock" />
                        <img src={right} alt="Right" className="image right" />
                        <img src={bottom} alt="Bottom" className="image bottom" />
                        <img src={center} alt="Center" className="image center" />
                        <img src={left} alt="Left" className="image left" /> */}
                        <VisibilitySensor onChange={handleChange1} partialVisibility>
                            <div className={isVisible1 ? 'animate-scroll' : ''}>
                                <img src={cyber} alt="cyber-img" className="image" style={{ width: '350px' }} />
                            </div>
                        </VisibilitySensor>
                    </div>
                </div>
            </div>
        </div>
    )
}

