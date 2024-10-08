import React, { useState } from 'react';
import '../home/home-component3.css';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';


export const Contact = () => {
    const [secondColumnWidth, setSecondColumnWidth] = useState('80%');
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalTitle, setModalTitle] = useState('');

    const toggleWidth = () => {
        setSecondColumnWidth(secondColumnWidth === '20%' ? '40%' : '20%');
    };


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email) {
            setModalTitle('Error');
            setModalMessage('Please fill out all fields.');
            setShowModal(true);
            return;
        }

        try {
            const res = await axios.post('https://golden-royce-design.onrender.com/form', formData);
            setModalTitle('Success');
            setModalMessage('Your form has been submitted successfully!');
            setFormData({ name: '', email: '' });
            console.log(res);
        } catch (err) {
            setModalTitle('Error');
            setModalMessage('Email is already registered.');
        }
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);



    return (
        <div className='contact mt-5'>
            <div className='text-center mb-5'>
                <h1 style={{ fontWeight: 'bold', color: '#AD000E' }}>Contact <span style={{ fontWeight: 'normal' }}>Us</span></h1>
            </div>
            <div className="row-container" style={{ position: 'relative', overflow: 'hidden' }}>
                <div className="row contact-parent">
                    <div className="col-12 col-md-6 p-5" style={{ width: '80%', transition: 'width 0.5s', background: '#BE0F0F' }} id="column1">
                        <h1 className='text-white ms-5'>Interested in <span style={{ fontWeight: 800 }}>discussing
                        </span> </h1>
                        <h1 className='text-white ms-5'><span>an project</span>with us.</h1>
                        <p className='text-white mt-3 ms-5'>Do you have a project in mind, that you feel our approach would work well for</p>
                        <button onClick={toggleWidth} className='mt-5 pe-5 ps-5 pt-2 pb-2 ms-5'>KNOW MORE <i className='far fa-arrow-alt-circle-right' style={{ fontSize: '24px', color: 'white' }}></i></button>
                        <p className='text-white mt-4 ms-5'>We’re growing a gang of people like you to share the hell</p>
                        <p className='text-white mt-4 ms-5'>out of first projects. Be sure to see them as they drop and help wake the world</p>
                    </div>
                    <div className="col-12 col-md-6 p-5" style={{ width: secondColumnWidth === '20%' ? '40%' : '20%', background: 'white', position: 'absolute', top: 0, right: 0, }} id="column2">
                        <h2>You’ll only </h2>
                        <h2>hear from </h2>
                        <h2>us when </h2>
                        <h2>it matters.</h2>
                        <form className='mt-3' onSubmit={handleSubmit}>
                            <div className="mb-3 mt-5">
                                <input type="text" className="form-control text-center" id="name" placeholder='Name' style={{ borderRadius: '20px', border: '1px solid black' }} value={formData.name} onChange={handleChange} onClick={toggleWidth} />
                            </div>
                            <div className="mb-3 mt-3">
                                <input type="email" className="form-control text-center" id="email" placeholder='Email' style={{ borderRadius: '20px', border: '1px solid black' }} value={formData.email} onChange={handleChange} />
                            </div>
                            <button type="submit" className="btn mt-2" style={{ background: 'black', color: 'white', width: '100%', borderRadius: '20px' }} onClick={toggleWidth} >Submit</button>
                        </form>
                        <Modal show={showModal} onHide={handleClose} centered>
                            <Modal.Body className="modal-body text-center">
                                <h5 className="modal-title">{modalTitle}</h5>
                                <p>{modalMessage}</p>
                            </Modal.Body>
                            <Modal.Footer className="modal-footer">
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>

                    <div className="col-12 col-md-6 p-5 ms-5" style={{ background: 'white' }} id="column3">
                        <h2>You’ll only hear from </h2>
                        <h2>us when it matters.</h2>
                        <form className='mt-3' onSubmit={handleSubmit} >
                            <div className="mb-3 mt-5">
                                <input type="text" className="form-control text-center" id="name" placeholder='Name' style={{ borderRadius: '20px', border: '1px solid black' }} value={formData.name} onChange={handleChange} />
                            </div>
                            <div className="mb-3 mt-3">
                                <input type="email" className="form-control text-center" id="email" placeholder='Email' style={{ borderRadius: '20px', border: '1px solid black' }} value={formData.email} onChange={handleChange} />
                            </div>
                            <button type="submit" className="btn mt-2" style={{ background: 'black', color: 'white', width: '100%', borderRadius: '20px' }}>Submit</button>
                        </form>
                        <Modal show={showModal} onHide={handleClose} centered>
                            <modalTitle className='mt-4' ><h5 className="modal-title">{modalTitle}</h5></modalTitle>
                            <Modal.Body className="modal-body text-center">
                                <p>{modalMessage}</p>
                            </Modal.Body>
                            <Modal.Footer className="modal-footer mb-2">
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    )
}
