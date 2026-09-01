import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

const About = () => {
  const one = (
    <p>
      I am currently a <b>Software Developer</b> at
      <a href="https://www.dataprev.gov.br/"> Dataprev</a>, a Brazilian government technology company, where I build web and mobile applications for digital public services, focusing on creating more accessible and intuitive experiences for millions of people across Brazil.
    </p>
  );
  const two = (
    <p>
      In my free time, I like making things with my hands, painting, crocheting, crafting, and whatever creative project I happen to get curious about.
    </p>
  );

  const techStack = [
    "React.js",
    "Typescript",
    "React Native",
    "Java",
    "Javascript ES6+",
    "Python"
  ];

  return (
    <div id="about">
      <FadeInSection>
        <div className="section-header ">
          <span className="section-title">/ about me</span>
        </div>
        <div className="about-content">
          <div className="about-description">
            {one}
            {"Here are some technologies I have been working with:"}
            <ul className="tech-stack">
              {techStack.map((techItem, i) => (
                <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
                  <li>{techItem}</li>
                </FadeInSection>
              ))}
            </ul>
            {two}
          </div>
          <div className="about-image">
            <img alt="Eduarda Rocha" src={"/assets/me2.jpeg"} />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default About;
