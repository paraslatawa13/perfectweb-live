
const CFAQComponent = ({ faqData=[], image }) => {
  return (
    <div className="faqComponent d-flex align-items-center">
      <div className="faqblock">
        <div className="accordion" id="faqAccordion">
          {faqData.map((item, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading-${index}`}>
                <button
                  className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${index}`}
                  aria-expanded={index === 0 ? "true" : "false"}
                  aria-controls={`collapse-${index}`}
                >
                  {item.question}
                </button>
              </h2>
              <div
                id={`collapse-${index}`}
                className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                aria-labelledby={`heading-${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Image */}
      {image && (
        <div className="faqImage">
          <img
            src={image}
            alt="FAQ Illustration"
            className="img-fluid rounded"
            style={{ maxWidth: "400px" }}
          />
        </div>
      )}
    </div>
  );
};

export default CFAQComponent;
