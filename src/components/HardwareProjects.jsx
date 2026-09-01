import React from "react";
import "../styles/Projects.css";
import "../styles/HardwareProjects.css";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import FadeInSection from "./FadeInSection";
import { useNavigate } from "react-router-dom";

const hardwareProjects = {
  "Feminine Programming Marathon": {
    desc: "Made it to the second stage of the Brazilian Women’s Programming Marathon, competing in programming challenges and solving problems under time constraints.",
    techStack: "Python, Algorithmic problem solving, Data structures and algorithms",
    link: "/hardware/mfp",
    image: "/assets/MFP/mfp.jpeg"
  },
  "Tô em Dia? — Meu Imóvel Rural": {
    desc: "Contributed to designing and implementing Meu Imóvel Rural features that help rural producers access credit.",
    link: "/hardware/to-em-dia",
    image: "/assets/MeuImovelRural/mir.png",
    techStack: "React, React Native and Type Script",
    badge: { text: "Globo Rural feature", href: "https://globorural.globo.com/tecnologia-e-inovacao/noticia/2026/07/meu-imovel-rural-ganha-ferramentas-para-facilitar-acesso-ao-credito-e-planejamento-da-producao.ghtml" }
  },
  "Meu Social - Gás do Povo": {
    desc: "Worked on the design, frontend development, and automated testing of Gás do Povo, contributing to interfaces and user flows for a nationwide public service.",
    techStack: "React Native, TypeScript and Maestro",
    link: "/hardware/gas-do-povo",
    image: "/assets/GDP/vale.png",
    // imageStyle: { objectFit: "contain", padding: "12px" },
    badge: { text: "Teen Vogue feature", href: "https://www.teenvogue.com/story/diy-cyberdecks-newest-analog-trend-taking-social-media" }
  }
};

const HardwareProjects = () => {
  const navigate = useNavigate();

  return (
    <div id="hardware-projects">
      <div className="section-header">
        <span className="section-title">/ highlights</span>
      </div>
      <div className="project-container">
        <ul className="projects-grid">
          {Object.keys(hardwareProjects).map((key, i) => {
            const project = hardwareProjects[key];
            return (
              <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
                <li
                  className={`projects-card ${project.image ? "transparent-card" : ""}`}
                  onClick={() => navigate(project.link)}
                >
                  {project.image ? (
                    <div className="project-image-container">
                      <img src={project.image} alt={key} className="project-image" style={project.imageStyle || {}} />
                    </div>
                  ) : (
                    <div className="card-header">
                      <div className="folder-icon">
                        <FolderOpenRoundedIcon sx={{ fontSize: 35 }} />
                      </div>
                    </div>
                  )}
                  <div className="card-title">{key}</div>
                  {project.badge && (
                    <a
                      href={project.badge.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-badge-link"
                      onClick={e => e.stopPropagation()}
                    >
                      {project.badge.text}
                      <OpenInNewRoundedIcon sx={{ fontSize: 12, display: "block" }} />
                    </a>
                  )}
                  <div className="card-desc">{project.desc}</div>
                  <div className="full-log-link">See project</div>
                  <div className="card-tech">{project.techStack}</div>
                </li>
              </FadeInSection>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HardwareProjects;
