import React from 'react';
// import { Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title">Get in Touch</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Contact Us</h3>
                        <p>Ready to transform your manufacturing operations? Reach out to our team for a personalized consultation.</p>

                        <div className="contact-methods">
                            <div className="contact-method">
                                {/* <Mail className="contact-icon" /> */}
                                <span className="contact-icon">✉️</span>
                                <a href="mailto:andrew.dimaggio@gaiapredictive.com">andrew.dimaggio@gaiapredictive.com</a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-cta">
                        <h3>Schedule a Demo</h3>
                        <p>See Gaia Predictive in action. Our team will walk you through a live demonstration tailored to your specific use cases.</p>
                        <a href="mailto:andrew.dimaggio@gaiapredictive.com?subject=Request%20Custom%20Demo" className="btn btn-primary">
                            Request Custom Demo
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
