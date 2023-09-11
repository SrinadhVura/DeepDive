/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/krystal-ng-PrQqQVPzmlw-unsplash.jpg";

const imageAltText = "crystal abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am Srinadh Vura, a CS undergrad at Andhra University. An aspiring Generative AI and Deep Learning professional.";
/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Machine Learning",
  "Deep Learning",
  "Generative AI",
  "Computer Vision",
  "Python",
  "Java",
  "Data Science",
  "LLM",
  "GPT",
  "Google Cloud Platform",
  "Tensorflow",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I'm currently studying final year of graduation in Computer Science, an ambitious, aspiring AI enthusiast. I am a passionate learner and a tech enthusiast. I am interested in Machine Learning and Artificial Intelligence. I am a self-motivated person and I am always ready to learn new things. I am a team player and I can also work independently. I am a good listener and I am always open to new ideas. I am a good communicator. I am a good problem solver. Proficient in C, Java, Python and acquired knowledge in DSA. My realms of interest are AI, Data Science, MAchine Learning and Deep Learning. Drilling to the depths of technology with enthusiasm, creativity and optimistic view is my strength.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
