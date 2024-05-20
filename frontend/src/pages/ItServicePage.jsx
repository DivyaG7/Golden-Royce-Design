import React from 'react'
import itLanding from '../assets/it-landing.png'
import { Link } from 'react-router-dom'
import '../pages/ItServicePage.css'

export const ItServicePage = () => {
    return (
        <div className='p-5' style={{ background: 'black', color: 'white' }}>
            <div className='d-flex justify-content-center align-items-center' style={{ flexDirection: 'column' }}>
                <h1 className='text-center'>IT Services & Solutions</h1>
                <img src={itLanding} alt='IT' className='img-fluid mt-5 landingImg' style={{ width: '40%' }} />
                <p className='mt-5 pt-5 text-center' style={{ color: '#7B7979' }}>We design and build beautiful brands, websites and
                    products for startups and tech companies.</p>
                <div className='d-flex justify-content-center align-items-center gap-5'>
                    <Link to='/CyberSecurityLanding'><div className="circle"></div></Link>
                    <div className="circle"></div>
                    <Link to='/BuzzBeeLanding'><div className="circle"></div></Link>
                </div>
                <Link to="/It">
                    <button className='mt-5 p-2' style={{ color: 'white', background: '#AD000E', border: 'none', borderRadius: '20px', width: '180px' }}>Discover More</button> </Link>
            </div>
        </div>
    )
}

