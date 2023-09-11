/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/tim-arterbury-VkwRmha1_tI-unsplash.jpg";
import image2 from "../images/markus-spiske-k0rVudBoB4c-unsplash.jpg";
const imageAltText = "desktop with note and paint brush, palette";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Voice CLUE",
    description:
      "Voice CLUE is an AI powered voice assistant that can generate description of key word prompted by the user. An official top 5 project in cohere hackathon.",
    url: "https://gayatrivadaparty-cohere-hack-wem2-codevoice-clue-pliaoz.streamlit.app/",
  },
  {
    title: "Smoky Cars Analyzer",
    description:
      "Smoky Cars Analyzer is a web app that can judge the fitness of vehicles and can help the people mainly in polar countries to avoid pollution that is highly hazardous to animals like polar bears.",
    url: "https://github.com/SrinadhVura/CallForCode",
  },
  {
    title: "Predicting Puppy's mood",
    description:
      "Our deep learning model can predict your puppy's mood just my looking at the image. Puppy's can have 3 different moods - Sad, Relaxed, Happy. We have used Pytorch, Cuda framework, Python, Deep Learning Neural Networks.",
    url: "https://github.com/SrinadhVura/Predicting_puppy-s_mood",
  },
  {
    title: "WeatherApp",
    description:
      "The repository is a command-line python tool which retrieves detailed weather of the city that is provided as a command-line argument.",
    url: "https://github.com/SrinadhVura/WeatherApp",
  },
  {
    title: "MediFix",
    description:
      "Our Medifix is an AI powered assistant powered on gpt-3.5 turbo (chatGPT). Medifix is designed to help people by providing preventive measures based on the symptoms mentioned. Medifix is an official submission to OpenAI Stack Hack challenge.",
    url: "https://github.com/SrinadhVura/OpenAI-Stack-Hack",
  },
  {
    title: "Volume Controller",
    description:
      "The volume controller is designed by inheriting the concepts of computer vision and utilizes mediapipe framework from google. The volume of PC can be controlled by hand gestures using this repository.",
    url: "https://github.com/SrinadhVura/Volume_Contoller",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <img className="background" src={image2} alt={imageAltText} />

      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
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
        <div
          style={{
            backgroundColor: "white",
            width: "50%",
            padding: "4rem",
            margin: "3rem auto",
            textAlign: "center",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Projects</h2>
          <div className="container">
            {projectList.map((project) => (
              <div className="box" key={project.title}>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
                </a>
                <p className="small">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
