import "../App.css";
import "../Responsive-App.css";
import blogHeader from "../assets/images/Blogs/blogHeader.webp";
import { useMeta } from "../hooks/useMeta";
import MetaHelmet from "../reusablecomponents/MetaHelmet";


function PrivacyPolicy() {
    const { meta } = useMeta();
    return (
        <>
        <MetaHelmet meta={meta} />
            <section className="privacy-blk spacer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 mb-4">
                            <div className="privacy-heading">
                                <h1>Privacy Policy</h1>
                            </div>
                        </div>
                        <div className="col-md-12 text-left">
                            <div className="privacy-content">
                                <p>At Perfect Web Services, we are committed to protecting your personal information and your right to privacy. This Privacy Policy outlines how we collect, use, and safeguard your data in compliance with the applicable laws of India, including but not limited to the Information Technology Act, 2000, and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.</p>
                                <h3 className="mb-3">Information Collection and Usage</h3>
                                <p>We collect personal information such as your name, contact details, email address, and any other details provided by you for the purpose of delivering services, facilitating communication, and improving our offerings.</p>
                                <p>Your information will be:</p>
                                <p>1. Used solely for providing quotes, delivering services, and enhancing user experience. 2. Shared only with divisions, sister concerns, or ventures of Perfect Web Services for business purposes, with your consent. 3. Handled in compliance with the laws applicable in India.</p>
                                <h3 className="mb-3">Data Security</h3>
                                <p>We prioritize the security of your data and have implemented reasonable technical and organizational measures to prevent unauthorized access, disclosure, or misuse.</p>
                                <h3 className="mb-3">Cookies Policy</h3>
                                <p>To enhance your browsing experience, we use temporary cookies that facilitate navigation on our website. These cookies do not collect sensitive personal information and are automatically deleted after your session ends.</p>
                                <h3 className="mb-3">Data Retention</h3>
                                <p>Your personal information will be retained for as long as necessary to fulfill the purposes outlined in this policy unless a longer retention period is required by law.</p>
                                <h3 className="mb-3">Data Modification and Deletion</h3>
                                <p>You have the right to request updates, modifications, or deletion of your personal information. To exercise this right, please contact us in writing, and we will promptly address your request.</p>
                                <h3 className="mb-3">Third-Party Sharing</h3>
                                <p>We will not share your information with external organizations or use it for commercial purposes without your explicit written consent, except as required by law or to comply with legal processes.</p>
                                <h3 className="mb-3">Legal Compliance</h3>
                                <p>This Privacy Policy is governed by and construed in accordance with the laws of India. By using our services, you agree to the terms outlined here.</p>
                                <h3 className="mb-3">Policy Updates</h3>
                                <p>Perfect Web Services reserves the right to update or modify this Privacy Policy at any time. Any changes will be reflected on this page.</p>
                                <h3 className="mb-3">Contact Us</h3>
                                <p>For questions or concerns regarding this Privacy Policy, or to request updates or deletion of your data, please contact us</p>
                                <p><strong>Email:</strong> contact@perfectwebservices.com</p>
                                <p><strong>Phone:</strong> +91-8264958742</p>
                                <p>By using our website and services, you agree to the collection and use of your information as outlined in this Privacy Policy.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PrivacyPolicy;
