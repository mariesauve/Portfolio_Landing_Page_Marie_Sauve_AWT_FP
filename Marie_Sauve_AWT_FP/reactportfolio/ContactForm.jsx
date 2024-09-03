import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/submit', formData)
            .then(response => {
                alert('Form submitted successfully!');
            })
            .catch(error => {
                console.error('There was an error submitting the form!', error);
            });
    };

    return (
        <section className="py-5">
            <div className="container px-5">
                {/* Contact form*/}
                <div className="bg-light rounded-4 py-5 px-4 px-md-5">
                    <div className="text-center mb-5">
                        <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
                            <i className="bi bi-envelope"></i>
                        </div>
                        <h1 className="fw-bolder">Get in touch</h1>
                        <p className="lead fw-normal text-muted mb-0">Let's work together!</p>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-8 col-xl-6">
                            <form id="contactForm" onSubmit={handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="name" type="text" placeholder="Enter your name..." value={formData.name} onChange={handleChange} required />
                                    <label htmlFor="name">Full name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="email" type="email" placeholder="name@example.com" value={formData.email} onChange={handleChange} required />
                                    <label htmlFor="email">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea className="form-control" id="message" placeholder="Enter your message here..." style={{ height: "10rem" }} value={formData.message} onChange={handleChange} required></textarea>
                                    <label htmlFor="message">Message</label>
                                    <div className="d-grid">
                                        <button className="btn btn-primary btn-lg rounded-pill mt-5" type="submit">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;
