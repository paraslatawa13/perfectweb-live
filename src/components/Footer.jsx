
import { Link } from "react-router-dom";
import "../App.css";

const quickLinks1 = [
  { to: "/about-us", label: "About Us" },
  { to: "/contact-us", label: "Contact Us" },
  { to: "/case-studies", label: "Case Study" },
  { to: "/blog", label: "Blog" },
  { to: "/privacy-policy", label: "Privacy Policy" },
];

const quickLinks2 = [
  { to: "/web-development-services", label: "Website Development Services" },
  { to: "/affordable-digital-marketing-services", label: "Digital Marketing Services" },
  { to: "/web-design-services", label: "Web Design Services" },
  { to: "/mobile-app-development-services", label: "Mobile App Development" },
];

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="top-footer">
        <div className="container">
          <div className="row align-items-start">

            <div className="col-md-3">
              <div className="social-media">
                <p>
                  Perfect Web Services delivers cutting-edge digital solutions—from web design and development to branding and marketing. We help businesses grow through creativity, technology, and strategy.
                </p>

               
                <div className="Social-content">
                  <a href="https://www.facebook.com/perfectwebservices" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com/perfect_web_services/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="https://www.youtube.com/channel/UCD1XPKqdbfK-jvFxWQBCUyg" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/perfect-web-services/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="https://x.com/PerfectWebServ1" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="footer-menu">
                <nav className="nav-menu">
                  <h3>Company</h3>
                  <ul className="navbar-nav">
                    {quickLinks1.map((link, i) => (
                      <li className="nav-item" key={i}>
                        <Link className="nav-link" to={link.to}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>

            <div className="col-md-3">
              <div className="footer-menu">
                <nav className="nav-menu">
                  <h3>Services</h3>
                  <ul className="navbar-nav">
                    {quickLinks2.map((link, i) => (
                      <li className="nav-item" key={i}>
                        <Link className="nav-link" to={link.to}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>

            <div className="col-md-3">
              <div className="address">
                <h3>Headquarter</h3>
                <p>
                  C-127, 4th Floor, Phase-8, Industrial Area, Sector 73,
                  Sahibzada Ajit Singh Nagar, Punjab 160071, India
                </p>

                <h3>Contact Us</h3>
                <div className="phone-number">
                  <a href="tel:918264958742"><i className="fa fa-phone"></i> +91-8264958742</a>
                  <a href="tel:917508738954"><i className="fa fa-phone"></i> +91-7508738954</a>
                </div>

                <div className="email-content">
                  <a href="mailto:contact@perfectwebservices.com">
                    <i className="fa fa-envelope"></i> contact@perfectwebservices.com
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="copy-right">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <p className="m-0"> 
                © {new Date().getFullYear()} Perfect Web Services. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

    </footer>

    
  );
};

export default Footer;
