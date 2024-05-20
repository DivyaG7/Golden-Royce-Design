import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../IT/animation.css'
import animation1 from '../../assets/animation1.png'
import animation2 from '../../assets/animation2.png'
import animation3 from '../../assets/animation3.png'
import it1 from '../../assets/it1.png'


export const Animation = () => {
    const [triggered, setTriggered] = useState(false);
    const [showImage, setShowImage] = useState(true); // Initially show the image


    useEffect(() => {
        // Hide the image after a delay
        const timer = setTimeout(() => {
            setShowImage(false);
        }, 1000); // Adjust the delay as needed to match the duration of your animation

        // Clean up the timer on component unmount
        return () => clearTimeout(timer);
    }, []); // Run this effect only once on initial render

    const handleClick = () => {
        setTriggered(true);
        setShowImage(true);

        setTimeout(() => {
            setTriggered(false);
            setTimeout(() => {
                setShowImage(false);
            }, 1000); // Delay to hide the image after animation completes
        }, 1000); // Adjust the delay as needed to allow the animations to reset
    };



    return (
        <>
            <div className="animation" onClick={handleClick}>
                <div className="row">
                    <div className="col-md-4 w-100">
                        <CSSTransition key={triggered ? "animation1-key" : ""} in={triggered} appear={true} timeout={1000} classNames="fade">
                            <img src={animation1} alt="Setting Symbol" className="setting-symbol left rotate-left-top img-fluid" />
                        </CSSTransition>
                    </div>
                    <div className="col-md-4 w-100">
                        <CSSTransition key={triggered ? "animation2-key" : ""} in={triggered} appear={true} timeout={1000} classNames="fade">
                            <img src={animation2} alt="Setting Symbol" className="setting-symbol right rotate-bottom-right img-fluid" />
                        </CSSTransition>
                    </div>
                    <div className="col-md-4 w-100">
                        <CSSTransition key={triggered ? "animation3-key" : ""} in={triggered} appear={true} timeout={1000} classNames="fade-in">
                            <img src={animation3} alt="Setting Symbol" className="setting-symbol center fade-in img-fluid" />
                        </CSSTransition>
                    </div>
                </div>
            </div>

            <div className="row text-white it-content d-flex justify-content-between align-items-center">
                <div className="col-md-6 col-12 d-flex it">
                    <h1>
                        The <span style={{ fontWeight: '800' }}>Next <span style={{ color: '#22AB9B' }}>Gen</span>eration</span>
                    </h1>
                    <h1>of Technology</h1>
                    <p>
                        Our goal is to optimize your technology landscape, ensuring seamless operations and enhanced productivity with help of Artificial Intelligence (AI).
                    </p>
                </div>
                {showImage && (
                    <CSSTransition in={triggered} appear={true} timeout={1000} classNames="fadeIn">
                        <div className="col-md-6 it-image">
                            <img src={it1} alt="it-img" className="img-fluid fadeIn" />
                        </div>
                    </CSSTransition>
                )}
            </div>

        </>

    );
}

