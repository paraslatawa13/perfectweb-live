import { Link } from "react-router-dom";
import { useBlogApi } from '../api/blogs'
import { useEffect, useState } from "react";

export default function CaseStudySidebar() {

    return (
        <div className="CaseSidebarinner">
            
            <div className="innersideb">
                <h1 className="fs-3 text-capitalize fw-ligter text-white">your brand could be <br /> our next sucess story</h1>
                <p className="pt-3 text-white">Perfect Web Services delivers  cutting-edge digital solutions-from web design and development to branding and marketing. We help businesses grow through creativity, technology, and strategy     </p>
                <div className="button-flex">
                    <Link to="/contact-us" className="btn btn-get-in bg-whitee">Get in Touch</Link>
                </div>
            </div>
        </div>
    );
}

