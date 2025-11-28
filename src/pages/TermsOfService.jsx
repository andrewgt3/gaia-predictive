import React, { useEffect } from 'react';

const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-page">
            <div className="container">
                <h1>Terms of Service</h1>
                <p className="last-updated">Last Updated: November 27, 2025</p>

                <section>
                    <h2>1. Acceptance of Terms</h2>
                    <p>By accessing and using gaiapredictive.com (the "Website"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this Website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
                </section>

                <section>
                    <h2>2. Use License</h2>
                    <p>Permission is granted to temporarily download one copy of the materials (information or software) on Gaia Predictive's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                    <ul>
                        <li>modify or copy the materials;</li>
                        <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                        <li>attempt to decompile or reverse engineer any software contained on Gaia Predictive's Website;</li>
                        <li>remove any copyright or other proprietary notations from the materials; or</li>
                        <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                    </ul>
                </section>

                <section>
                    <h2>3. Disclaimer</h2>
                    <p>The materials on Gaia Predictive's Website are provided "as is". Gaia Predictive makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                </section>

                <section>
                    <h2>4. Limitations</h2>
                    <p>In no event shall Gaia Predictive or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Gaia Predictive's Website.</p>
                </section>

                <section>
                    <h2>5. Governing Law</h2>
                    <p>Any claim relating to Gaia Predictive's Website shall be governed by the laws of the State of Michigan without regard to its conflict of law provisions.</p>
                </section>
            </div>
        </div>
    );
};

export default TermsOfService;
