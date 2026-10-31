import "../App.css";
import "../Responsive-App.css";
import { useMeta } from "../hooks/useMeta";
import MetaHelmet from "../reusablecomponents/MetaHelmet";

function ThankYou() {
  const { meta } = useMeta();
  return (
    <>
       <MetaHelmet meta={meta} />
       <style>
        {`
          .main-footer {
            display: none;
          }
        `}
      </style>
      {/* PAGE CONTENT */}
      
      <section className="thankyou-page">
        <div className="container">
            <div className="row row align-items-center">
                <div className=" col-12">
                    <div className="content-flex text-white">
                       <i className="fa fa-check-square-o"></i>
                        <h1>Thank You for<br></br> Reaching Out!</h1>
                        <p>
                            We’ve received your request and our team will contact you shortly.We appreciate your interest in Perfect Web Services.
                        </p>
                    </div>
                </div>
                <div className="col-12">
                    <div className="center-flex">
                        <div className="center-block">
                          <h3>Connect With Us</h3>
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
                </div>
            </div>
        </div>
      </section>
    </>
  );
}

export default ThankYou;
