import React from "react";
import image from "../images/kelli-tungay-2LJ4rqK2qfU-unsplash.jpg";
import image2 from "../images/joanna-kosinska-mjC9apK53a8-unsplash.jpg";
const imageAltText = "color pencils on a desk";

const Educationls = [
  {
    title: "B.Tech in Computer Science and Engineering",
    institution: "Andhra University College of Engineering",
    year: "2020 to 2024",
  },
  {
    title: "Intermediate in MPC BIEAP",
    institution: "Sri Chaitanya Junior College",
    year: "2018 to 2020",
  },
  {
    title: "SSC BSEAP",
    institution: "Sri Venkateswara Vidyapeeth",
    year: "March 2018",
  },
];

const Education = () => {
  return (
    <section id="education" className="padding">
      <img className="background" src={image2} alt={imageAltText} />
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ width: "50%" }}>
          <img
            src={image}
            alt={imageAltText}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideIn",
            }}
          />
        </div>
        
        <div className="container">
          {Educationls.map((education) => (
            <div className="box" key={education.title}>
              <h3 style={{ flexBasis: "40px" }}>{education.title}</h3>
              <h4 style={{ flexBasis: "40px" }}>{education.institution}</h4>
              <p className="small">{education.year}</p>
            </div>
          ))}
        </div>
        </div>

    </section>
  );
};

export default Education;
