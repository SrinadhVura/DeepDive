import React from "react";
import image from "../images/lewis-keegan-XQaqV5qYcXg-unsplash.jpg";

const imageAltText = "cert background";

const clist = [
  {
    name: "Custom Models, Layers and Loss functions with Tensorflow by DeepLearning.AI",
    org: "Coursera",
    issue: "June 2023",
    url: "https://coursera.org/share/9432a3add36477c5a854407c655898cc",
  },
  {
    name: "Microsoft certified:  Azure Data Fundamentals",
    org: "Microsoft",
    issue: "November 2022",
    url: "https://www.credly.com/badges/c3e081a1-426d-45bf-aa6d-6bd0e8f27208/public_url",
  },
  {
    name: "Microsoft certified: Azure AI Fundamentals",
    org: "Microsoft",
    issue: "October 2022",
    url: "https://www.credly.com/badges/47a3c2d7-7056-4643-b9ed-102e40f843cc/linked_in_profile",
  },
  {
    name: "IBM Certified Associate Developer - Quantum Computation using Qiskit v0.2X",
    org: "IBM",
    issue: "October 2022",
    url: "https://www.credly.com/badges/5a40339a-71cb-4954-85c2-72d48fbfae09/linked_in_profile",
  },
  {
    name: "Python 101 for Data Science",
    org: "IBM",
    issue: "October 2022",
    url: "https://courses.cognitiveclass.ai/certificates/742454f0339c45548d39a4129e1b2c74",
  },
  {
    name: "Problem Solving using Computational Thinking",
    org: "Coursera",
    issue: "October 2022",
    url: "https://coursera.org/verify/4HU7YK963XDX",
  },
  {
    name: "Become a SQL Developer",
    org: "LinkedIn",
    issue: "September 2022",
    url: "https://www.linkedin.com/learning/certificates/3eab28b3036748aa2c4a23e42881ad9623cfe62807015616b45a2f31388801b0?trk=backfilled_certificate",
  },
  {
    name: "SQL Intermediate",
    org: "Hackerrank",
    issue: "September 2022",
    url: "https://www.hackerrank.com/certificates/c7380dc064b8",
  },
  {
    name: "Microsoft Technology Associate: Database Administration Fundamentals (MTA)",
    org: "Microsoft",
    issue: "August 2022",
    url: "https://portal.certiport.com/Portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=132&cvid=Qf7qKmLRbKz7b/xmjDCgHg==",
  },
  {
    name: "Python for Deep Learning: Build Neural Networks in python",
    org: "Udemy",
    issue: "June 2022",
    url: "https://www.udemy.com/certificate/UC-2192ea47-1885-403c-91b3-dfc3a6febd87/",
  },
  {
    name: "Build a face recognition app using python",
    org: "Guvi",
    issue: "April 2021",
    url: "https://www.guvi.in/verify-certificate?id=96l89Ii5c3sv131221",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="padding">
      <img className="background" src={image} alt={imageAltText} />
      <h2 style={{ textAlign: "center" }}>Certifications </h2>
      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          width: "70%",
          padding: "4rem",
          margin: "3rem auto",
          flexDirection: "row",
        }}
      >
        <div className="containercert">
          {clist.map((cert) => (
            <div className="box" key={cert.name}>
              <a href={cert.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{cert.name}</h3>
              </a>
              <h4 style={{ flexBasis: "40px" }}>{cert.org}</h4>
              <p className="small">{cert.issue}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Certifications;
