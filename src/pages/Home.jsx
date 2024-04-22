import React from 'react'
import { Navbar } from '../components/navbar'
import '../pages/Home.css'
import home1 from '../assets/home1.png'
import home2 from '../assets/home2.png'
import home3 from '../assets/home3.png'
import home4 from '../assets/home4.png'
import { Expertise } from '../components/home-component1'
import { Testimonial } from '../components/home-component2'
import { Contact } from '../components/home-component3'


export const Home = () => {
    return (
        <>
            <div className='home'>
                <Navbar />
            </div>

            <section className='home-page d-flex justify-content-center align-items-center'>
                <div className='heading'>
                    <div className='hr me-2'></div>
                    <h6>GOLDEN ROYCE DESIGN</h6>
                    <div className='hr ms-2'></div>
                </div>

                <div className='mt-5 head-business'>
                    <p><span>We</span> Make <span>your Business</span> Beautiful <span>&</span> Smart</p>
                </div>

                <div className='row justify-content-center mt-5 home-img'>
                    <div className='col-md-8 col-12 d-flex justify-content-center gap-4'>
                        <img src={home1} alt='img' className='image img-fluid' />
                        <img src={home2} alt='img' className='image img-fluid' />
                        <img src={home3} alt='img' className='image img-fluid' />
                    </div>
                    <div className='col-8 dot-img mt-5'>
                        <img src={home4} alt='img' className='img-fluid' />
                    </div>
                    <div className='col-8 mt-5 home-p'>
                        <p>We design and build beautiful brands, websites and products for startups and tech companies.</p>
                        <button className='mt-5'>Discover More</button>
                    </div>
                </div>
            </section>

            <section>
                <Expertise />
            </section>

            <section>
                <Testimonial />
            </section>

            <section>
                <Contact />
            </section>

        </>

    )
}
