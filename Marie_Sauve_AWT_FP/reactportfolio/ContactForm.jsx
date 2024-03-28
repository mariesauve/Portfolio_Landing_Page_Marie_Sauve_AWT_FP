import React from 'react';



function ContactForm() {
    return (
        <section className="py-5">
            <div className="container px-5">
                {/* Contact form*/}
                <div className="bg-light rounded-4 py-5 px-4 px-md-5">
                    <div className="text-center mb-5">
                        <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3"><i className="bi bi-envelope"></i></div>
                        <h1 className="fw-bolder">Get in touch</h1>
                        <p className="lead fw-normal text-muted mb-0">Let's work together!</p>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-8 col-xl-6">
                            <form id="contactForm" action="submit.php" method="post">
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                    <label htmlFor="name">Full name</label>
                                    <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                    <label htmlFor="email">Email address</label>
                                    <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                    <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{ height: "10rem" }} data-sb-validations="required"></textarea>
                                    <label htmlFor="message">Message</label>
                                    <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                    <div className="d-grid"><button className="btn btn-primary btn-lg rounded-pill mt-5" id="button" href="mailto: marie.sauve@outlook.com" type="Submit">Submit</button></div>    {/* href="mailto:marie.sauve@outlook.com" */}
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



//import React, { useState } from 'react';

//function ContactForm() {
//    const [formData, setFormData] = useState({
//        name: '',
//        email: '',
//        message: ''
//    });

//    const handleChange = (e) => {
//        setFormData({ ...formData, [e.target.name]: e.target.value });
//    };

//    const handleSubmit = (e) => {
//        e.preventDefault();
//        fetch('http://your-php-server/submit.php', {
//            method: 'POST',
//            body: JSON.stringify(formData),
//            headers: {
//                'Content-Type': 'application/json'
//            }
//        })
//            .then(response => response.json())
//            .then(data => {
//                // Handle response data if needed
//                console.log(data);
//            })
//            .catch(error => {
//                console.error('Error:', error);
//            });
//    };

//    return (
//        <form onSubmit={handleSubmit}>
//            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
//            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
//            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message"></textarea>
//            <button type="submit">Submit</button>
//        </form>
//    );
//}

//export default ContactForm;
