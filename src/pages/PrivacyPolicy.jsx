import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-page">
            <div className="container">
                <h1>Privacy Policy</h1>
                <p className="last-updated">Last Updated: November 27, 2025</p>

                <section>
                    <h2>1. Introduction</h2>
                    <p>Gaia Predictive ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website gaiapredictive.com (our "Website") and our practices for collecting, using, maintaining, protecting, and disclosing that information.</p>
                </section>

                <section>
                    <h2>2. Information We Collect</h2>
                    <p>We collect several types of information from and about users of our Website, including information:</p>
                    <ul>
                        <li>By which you may be personally identified, such as name, postal address, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline ("personal information").</li>
                        <li>About your internet connection, the equipment you use to access our Website, and usage details.</li>
                    </ul>
                </section>

                <section>
                    <h2>3. How We Use Your Information</h2>
                    <p>We use information that we collect about you or that you provide to us, including any personal information:</p>
                    <ul>
                        <li>To present our Website and its contents to you.</li>
                        <li>To provide you with information, products, or services that you request from us.</li>
                        <li>To fulfill any other purpose for which you provide it.</li>
                    </ul>
                </section>

                <section>
                    <h2>4. Data Security</h2>
                    <p>We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Website.</p>
                </section>

                <section>
                    <h2>5. Contact Information</h2>
                    <p>To ask questions or comment about this privacy policy and our privacy practices, contact us at: <a href="mailto:contact@gaiapredictive.com">contact@gaiapredictive.com</a></p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
