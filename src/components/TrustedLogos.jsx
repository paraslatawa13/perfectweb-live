// TrustedLogos.jsx
import Erica from "../assets/images/Home/Erica.webp";
import FebricLa from "../assets/images/Home/FebricLa.webp";
import FirstpointRealState from "../assets/images/Home/FirstpointRealState.webp";
import GiveADerm from "../assets/images/Home/GiveADerm.webp";
import HashStash from "../assets/images/Home/HashStash.webp";
import herBio from "../assets/images/Home/herbio.webp";
import tripley from "../assets/images/Home/tripley.webp";
import Kandor from "../assets/images/Home/Kandor.webp";
import Lambitelli from "../assets/images/Home/Lambitelli.webp";
import RapidScooter from "../assets/images/Home/RapidScooter.webp";
import ScImages from "../assets/images/Home/ScImages.webp";
import SendEngage from "../assets/images/Home/SendEngage.webp";
import SheegogContracting from "../assets/images/Home/SheegogContracting.webp";

const logos = [
  Erica,
  FebricLa,
  FirstpointRealState,
  GiveADerm,
  HashStash,
  herBio,
  tripley,
  Kandor,
  Lambitelli,
  RapidScooter,
  ScImages,
  SendEngage,
  SheegogContracting,

];

const TrustedLogos = () => {
  return (
    <div className="trusted-logos-all">
      {/* Part 1 - Right to Left */}
      <div className="trusted-logos part-1">
        <div className="trusted-logos-track">
          {logos.map((logo, i) => (
            <div className="trusted-logos-image" key={`p1-${i}`}>
              <img src={logo} alt="Logo" className="img-fluid" />
            </div>
          ))}
          {/* repeat again for infinite effect */}
          {logos.map((logo, i) => (
            <div className="trusted-logos-image" key={`p1-copy-${i}`}>
              <img src={logo} alt="Logo" className="img-fluid" />
            </div>
          ))}
        </div>
      </div>

      {/* Part 2 - Left to Right */}
      <div className="trusted-logos part-2">
        <div className="trusted-logos-track">
          {logos.map((logo, i) => (
            <div className="trusted-logos-image" key={`p2-${i}`}>
              <img src={logo} alt="Logo" className="img-fluid" />
            </div>
          ))}
          {/* repeat again */}
          {logos.map((logo, i) => (
            <div className="trusted-logos-image" key={`p2-copy-${i}`}>
              <img src={logo} alt="Logo" className="img-fluid" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedLogos;
