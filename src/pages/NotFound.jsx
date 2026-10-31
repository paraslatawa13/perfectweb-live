import React from "react";
import { Link } from "react-router-dom";


export default function NotFound() {
  return (
    <main className="notfound-page padd">
      <div className="container">
        <div className="notfound-card">
            <h1 className="nf-code">404</h1>
            <h2 className="nf-title">Page Not Found</h2>
            <p className="nf-desc">
                Oops! The page you're looking for doesn’t exist or may have been moved.
            </p>
             <div className="nf-actions">
                <Link to="/" className="btn btn-primary nf-btn">
                Go to Homepage
                </Link>
                <button
                className="btn nf-btn-secondary"
                onClick={() => window.history.back()}
                >
                <i className="fa fa-angle-left"></i> Go Back
                </button>
          </div>
        </div>
      </div>
    </main>
  );
}
