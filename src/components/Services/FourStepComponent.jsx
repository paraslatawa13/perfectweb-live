import { Link } from "react-router-dom";
const FourStepComponent = ({titles, btntext, faqDatas = []  }) => {
  return (
    <>
      <div className="row align-items-center justify-content-center">
        <div className="header-main  mb-5">
            {titles &&<h2>{titles}</h2>}
            <hr />
        </div>
      </div>
      <div className="fourStepComponent">
         {faqDatas.map((item, index) => (
          <div className="fourStepList" key={index}>
            <div className="foutListImage">
              {item.img && <img src={item.img} alt={item.title} />}
            </div>
            <div className="foutListcontent">
              <h5>{item.title}</h5>
               <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="button-flex">
        {btntext && <Link to="/contact-us" className="btn btn-primary">
          {btntext}
        </Link>}
      </div>
    </>
  );
};

export default FourStepComponent;
