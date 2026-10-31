const ServicesCover = ({ sectionTitle, sectionSubText, services }) => {
  return (
    <div className="services-cover">
      <div className="container">
        {/* Title & Subtitle */}
        <div className="row justify-content-center mb-2">
          <div className="header-scrol-circle  text-center">
            {sectionTitle && <h2>{sectionTitle}</h2>}
            <hr />
            {sectionSubText && (
            <div className="mt-4 section-subhead text-center">
              <p>{sectionSubText}</p>
            </div>
          )}
          </div>
        </div>

        {/* Dynamic Services */}
        <div className="row justify-content-center">
          {services?.map((item, index) => (
            <div key={index} className="col-md-4 col-12">
              <div className="servicescoverList">
                <div className="sclICon">
                  {item.icon && <img src={item.icon} alt={item.heading} />}
                </div>
                <div className="scLcontent">
                  {item.heading && <h4>{item.heading}</h4>}
                 {item.text && (
                    typeof item.text === "string" ? (
                      <p>{item.text}</p>
                    ) : (
                      <div className="service-list">{item.text}</div>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesCover;
