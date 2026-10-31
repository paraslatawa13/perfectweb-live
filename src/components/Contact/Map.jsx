
import React from "react";


const Map = () => {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6860.033246607592!2d76.69608929618659!3d30.717933071887018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feef5ab28d829%3A0x21c1b62fbf60dafa!2sPerfect%20Web%20Services!5e0!3m2!1sen!2sin!4v1759145998915!5m2!1sen!2sin";

  return (
    <section className="mapSection">
      <iframe
        src={mapUrl}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </section>
  );
};

export default Map;
