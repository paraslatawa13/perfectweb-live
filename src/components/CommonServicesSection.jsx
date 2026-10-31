
const CommonServicesSection = ({
    subtitle,
    title,
}) => {
    return (
          <div className="row align-items-center justify-content-center flex-column">
            <div className="header-main">
              {title && <h2 className="text-center">{title}</h2>}
              <hr />
            </div>
            {subtitle && <p className="subhead">{subtitle}</p>}
          </div>
    );
};

export default CommonServicesSection;
