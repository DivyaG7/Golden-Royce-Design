import React, { useRef } from 'react'
import '../Buzzbee/buzzbee.css'
import buzzbee from '../../assets/buzzbee.png'

export const Buzzbee1 = () => {

    const imageRef = useRef(null);

    const handleMouseMove = (event) => {
        const image = imageRef.current;
        const rect = image.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = event.clientX - centerX;
        const deltaY = event.clientY - centerY;
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        image.style.transform = `rotate(${angle}deg)`;
    };

    const handleMouseLeave = () => {
        const image = imageRef.current;
        image.style.transform = ''; // Reset the transform property
    };

    const handleButtonClick = () => {
        const nextSection = document.getElementById('buzzbeecomponent');
        nextSection.scrollIntoView({ behavior: 'smooth' });
      };

    return (
        <div>
            <div className='buzzbee mt-2' style={{ background: '#FFC704' }}>
                <div className='row p-5'>
                    <div className='col-md-6 pt-4'>
                        <h1 className='ps-3'><span style={{fontWeight: 'bold'}}>Buzz</span> Bee</h1>
                        <p className='mt-3 ps-3'>We design and build beautiful brands, websites and
                            products for startups and tech companies.</p>
                        <button className='mt-3 pt-1 pb-1 mb-5' style={{ width: '120px', border: 'none', borderRadius: '20px', background: 'black', color: 'white' }} onClick={handleButtonClick} >Explore</button>

                        <div className='mt-5 pt-5 ps-3 pb-4 buzz-first-comp-cont' style={{ background: 'black', color: 'white', borderRadius: '20px' }}>
                            <p>We are a dynamic and innovative company
                                specializing in three key verticals:</p>
                            <p style={{ fontSize: '12px' }}>
                                Cyber Security, Digital Marketing & Advertising,
                                and IT Solutions and Services.</p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='d-flex justify-content-center align-items-center' onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}>
                            <img ref={imageRef} src={buzzbee} alt='buzzbee-img' className='img-fluid buzz-img' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

