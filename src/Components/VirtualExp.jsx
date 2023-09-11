import React from "react";
import image from "../images/kevin-bhagat-zNRITe8NPqY-unsplash.jpg";
import image2 from "../images/annie-spratt-pKpipZVVEC0-unsplash.jpg";
const imageAltText = "work anywhere background";

const vexp = [
  {
    name: "AWS APAC Solutions Architect",
    company: "Amazon Web Services",
    issue: "September 2022",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/AWS/kkE9HyeNcw6rwCRGw_AWS%20APAC_4RKRsQCcGfwXRd9s8_1664271464007_completion_certificate.pdf",
  },
  {
    name: "Artificial Intelligence Virtual Experience",
    company: "Cognizant",
    issue: "September 2022",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Cognizant/5N2ygyhzMWjKQmgCK_Cognizant_4RKRsQCcGfwXRd9s8_1664090518532_completion_certificate.pdf",
  },
  {
    name: "Data Analytics and Visualization Virtual Experience",
    company: "Accenture",
    issue: "August 2022",
    url: "https://www.theforage.com/achievements?ref=4RKRsQCcGfwXRd9s8",
  },
];

/* An interactive url list of virtual experiences in react */
const VirtualExp = () => {
  return (
    <section className="padding" id="virtualexperience">
      <img className="background" src={image2} alt={imageAltText} />
      <h2 style={{ textAlign: "center" }}>Virtual Experience</h2>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
        <div style={{ maxWidth: "50%", alignSelf: "center", margin: "30px" }}>
          <img
            src={image}
            alt={imageAltText}
            style={{
              width: "100%",
              height: "80%",
              borderRadius: "0.5rem",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.25)",
              position: "relative",
              hover: "cursor",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideIn",
            }}
          />
        </div>
        <div
          style={{
            backgroundColor: "white",
            width: "50%",
            padding: "4rem",
            margin: "3rem 3rem 3rem auto",
            textAlign: "center",
          }}
        >
        <div className="containerv">
          {vexp.map((v) => (
            <div className="box" key={v.name}>
              <a href={v.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{v.name}</h3>
              </a>
              <h4 style={{ flexBasis: "40px" }}>{v.company}</h4>
              <p className="small">{v.issue}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};
export default VirtualExp;
