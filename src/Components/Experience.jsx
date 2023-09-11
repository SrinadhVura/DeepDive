import React from "react";
import image from "../images/arlington-research-kN_kViDchA0-unsplash.jpg";

const imageAltText = "edu background";

const elist = [
  {
    name: "Generative AI and AWS cloud intern",
    company: "DIGIOTAI",
    tenure: "August 2023 to September 2023",
    resp: "As a Generative AI and AWS cloud intern, I have worked on various projects related to Generative AI and deploying them on AWS cloud.",
  },
  {
    name: "Coding Contests Organizer",
    company: "Edumoon",
    tenure: "September 2022 to Present",
    resp: "As a Coding Contests Organizer, I have organized various coding contests on Edumoon platform.",
  },
  {
    name: "Data Science and Business Analytics Intern",
    company: "The Sparks Foundation",
    tenure: "January 2023",
    resp: "I have worked on basic machine learning tasks like Linear Regression, Decision Tree, K-Means Clustering, etc.",
  },
  {
    name: "Content Writer",
    company: "QuantumGrad",
    tenure: "August 2022 to January 2023",
    resp: "As a content writer, I wrote articles on various topics related to Quantum Computing.",
  },
];
/*Create an awesome list of <experience></experience>*/
const Experience = () => {
  return (
    <section className="padding" id="experience">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "0.5rem",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.25)",
          position: "relative",
        }}
      >
        <h2 style={{ textAlign: "center" }} >Experience</h2>
        <br />
        <br />
        <div className="containerexp">
          {elist.map((e, index) => (
            <div className="item" key={index}>
              <h3>{e.name}</h3>
              <h4>{e.company}</h4>
              <h4>{e.tenure}</h4>
              <p>{e.resp}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Experience;
