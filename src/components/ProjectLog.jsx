import React from "react";
import "../styles/ArtGallery.css";
import "../styles/Projects.css";
import "../styles/ProjectLog.css";
import FadeInSection from "./FadeInSection";
import { Link, useParams } from "react-router-dom";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import InstagramIcon from "@mui/icons-material/Instagram";

const projectLogs = {
  mfp: {
    title: "Maratona Feminina de Programação 2026",
    date: "August 2026",
    description:
      "My first experience with competitive programming, competing in the Women’s Programming Marathon in Campinas, São Paulo.",
    image: "/assets/MFP/mfp.jpeg",

    badge: {
      text: "Official MFP website ↗",
      href: "https://mfp.ic.unicamp.br/",
    },
    logs: [
      {
        title: "0. my first step into competitive programming",
        content: [
          {
            type: "text",
            value:
              "MFP 2026 was my first experience with competitive programming. I joined the competition with a lot of curiosity and the opportunity to challenge myself in a completely different environment from the programming I was used to in my day-to-day work.",
          },
          {
            type: "image",
            value: "/assets/MFP/credenciamento.jpeg",
          },
          {
            type: "text",
            value:
              "Working with Python, I had to think through algorithmic problems, explore different approaches, and turn ideas into solutions under time constraints. It was a great way to practice problem-solving and step outside of my usual frontend-focused routine.",
          },
        ],
      },
      {
        title: "1. making it to the second stage",
        content: [
          {
            type: "text",
            value:
              "I advanced to the second stage of the competition, which made the experience even more rewarding. Each challenge required me to break down the problem, reason about possible solutions, and work together to decide which approach made the most sense.",
          },
          {
            type: "text",
            value:
              "As my first experience with competitive programming, it was challenging to work through unfamiliar problems under time constraints. It pushed me to think differently, test ideas quickly, and become more comfortable with problems that don't have an obvious solution.",
          },
          {
            type: "list",
            title: "What I worked with:",
            items: [
              "Python",
              "Algorithmic problem solving",
              "Data structures and algorithms",
              "Logical reasoning",
              "Problem solving under time constraints",
            ],
          },
          {
            type: "image",
            value: "/assets/MFP/competicao.jpeg",
          },
        ],
      },
      {
        title: "2. meeting women from across Latin America",
        content: [
          {
            type: "text",
            value:
              "Beyond the competition, one of the best parts of MFP was meeting talented women from different countries across Latin America. Everyone brought different experiences, backgrounds, and perspectives on technology.",
          },
          {
            type: "text",
            value:
              "Sharing experiences, learning from other participants, and seeing so many different paths into computing made the event much more meaningful than just a programming competition.",
          },
          {
            type: "text",
            value:
              "I left Campinas with new programming skills, new perspectives, and even more motivation to keep challenging myself and exploring different areas of technology.",
          },
          {
            type: "image",
            value: "/assets/MFP/grupo.jpeg",
          },
        ],
      },
    ],
  },

  "to-em-dia": {
    title: "Meu Imóvel Rural - Tô em dia?",
    description:
      "A national digital service that centralizes rural property information and documents, making access to credit and public services simpler.",
    image: "/assets/MeuImovelRural/login.png",

    badge: {
      text: "Featured by Globo Rural ↗",
      href: "https://globorural.globo.com/tecnologia-e-inovacao/noticia/2026/07/meu-imovel-rural-ganha-ferramentas-para-facilitar-acesso-ao-credito-e-planejamento-da-producao.ghtml",
    },
    logs: [
      {
        title: "0. where the idea started",
        content: [
          {
            type: "text",
            value:
              "Tô em Dia? is a feature of Meu Imóvel Rural designed to help rural producers identify outstanding issues that may affect their access to rural credit.",
          },
          {
            type: "text",
            value:
              "I had the opportunity to contribute to the conception and design of the feature, thinking through how the information could be organized into a clear and accessible experience. It was one of those projects where understanding the problem was just as important as building the interface.",
          },
          {
            type: "image",
            value: "/assets/MeuImovelRural/mir-toemdia-conformidade.png",
          },
        ],
      },
      {
        title: "1. from design to code",
        content: [
          {
            type: "text",
            value:
              "What made this project especially interesting was being able to work across both design and frontend development. I helped shape the interface and then contributed to bringing that experience to life in the application.",
          },
          {
            type: "text",
            value:
              "Working with the frontend team, I helped turn the prototypes into a functional experience while considering technical constraints, accessibility, and the different ways users would interact with the information.",
          },
          {
            type: "list",
            title: "What I worked with:",
            items: [
              "TypeScript",
              "Angular",
              "Frontend development",
              "Figma",
              "Accessibility",
              "UX and usability",
            ],
          },
        ],
      },
      {
        title: "2. a project with real-world impact",
        content: [
          {
            type: "text",
            value:
              "Tô em Dia? is part of Meu Imóvel Rural, a national digital service created to make important information and services more accessible to rural producers.",
          },
          {
            type: "text",
            value:
              "Seeing a feature I helped design and implement become part of a real public service was especially meaningful to me. It was a chance to see how design and code can come together to solve a practical problem for people outside the technology bubble.",
          },
          {
            type: "text",
            value:
              "The project was also featured by Globo Rural in an article about the new tools introduced to Meu Imóvel Rural to facilitate access to rural credit and production planning.",
          },
          {
            type: "image",
            value: "/assets/MeuImovelRural/globoRural.png",
          },
        ],
      },
    ],
  },

  "gas-do-povo": {
    title: "Meu Social - Gás do Povo",
    description:
      "A nationwide digital service that simplifies access to cooking gas for eligible families across Brazil.",
    image: "/assets/GDP/gdp.png",
    badge: {
      text: "Featured by G1 ↗",
      href: "https://g1.globo.com/especial-publicitario/sindigas/noticia/2026/05/25/gas-do-povo-amplia-acesso-ao-gas-de-cozinha-com-apoio-de-rede-presente-em-todo-o-brasil.ghtml",
    },

    logs: [
      {
        title: "0. working on a national public service",
        content: [
          {
            type: "text",
            value:
              "Gás do Povo is a nationwide public service that provides eligible families with access to cooking gas. Being part of its development has given me the opportunity to work on a product designed for a large and diverse group of users.",
          },
          {
            type: "text",
            value:
              "My main role in the project is mobile frontend development, contributing to the implementation and maintenance of interfaces and user flows across the application.",
          },
        ],
      },
      {
        title: "1. building and testing the experience",
        content: [
          {
            type: "text",
            value:
              "Alongside frontend development, I work with automated mobile testing using Maestro. I create and maintain tests to validate user flows and catch inconsistencies before they reach users.",
          },
          {
            type: "text",
            value:
              "This has helped me see development beyond just writing interfaces. Building a feature also means making sure it behaves reliably across the different steps of a user's journey.",
          },
          {
            type: "list",
            title: "What I worked with:",
            items: [
              "TypeScript",
              "Frontend development",
              "Maestro",
              "Mobile testing",
              "Functional testing",
            ],
          },
           {
            type: "image",
            value: "/assets/GDP/valesDisp.png",
          },
        ],
      },
      {
        title: "2. contributing to something bigger",
        content: [
          {
            type: "text",
            value:
              "Working on Gás do Povo has been an interesting experience because the software has a purpose beyond the product itself. Small decisions in an interface can affect how easily people understand and access an important public service.",
          },
          {
            type: "text",
            value:
              "My contribution has mainly been in frontend development and automated testing, with occasional involvement in interface decisions. It has been a valuable opportunity to work on a product with nationwide reach and see how software can support access to essential public services. It has been another step toward becoming a developer who thinks about both how things work and how people experience them.",
          },
        ],
      },
    ],
  },
};

const ProjectLog = () => {
  const { projectId } = useParams();

  const renderContent = (content) => {
    return content.map((item, i) => {
      switch (item.type) {
        case "text":
          return (
            <p key={i} className="article-text">
              {item.value}
            </p>
          );
        case "image":
          return (
            <div key={i} className="article-image-container">
              <img
                src={item.value}
                alt="Project detail"
                className="article-image"
              />
            </div>
          );
        case "list":
          return (
            <div key={i} className="article-list-container">
              {item.title && (
                <div className="article-list-title">{item.title}</div>
              )}
              <ul className="article-list">
                {item.items.map((li, j) => (
                  <li key={j}>{li}</li>
                ))}
              </ul>
            </div>
          );
        case "tip":
          return (
            <div key={i} className="article-tip">
              {item.value}
            </div>
          );
        case "code":
          return (
            <div key={i} className="article-code-container">
              <pre className="article-code">
                <code>{item.value}</code>
              </pre>
            </div>
          );
        case "diagram":
          return (
            <div key={i} className="article-diagram-container">
              <pre className="article-diagram">{item.value}</pre>
            </div>
          );
        default:
          return null;
      }
    });
  };

  if (!projectId || !projectLogs[projectId]) {
    return (
      <div className="project-log-page">
        <div className="section-header">
          <Link to="/" className="back-button">
            <ArrowBackRoundedIcon />
          </Link>
          <span className="section-title">/ project not found</span>
        </div>
      </div>
    );
  }

  const project = projectLogs[projectId];

  return (
    <div className="project-log-page">
      <div className="section-header">
        <Link to="/" className="back-button">
          <ArrowBackRoundedIcon />
        </Link>
        <span className="section-title">/ project detail</span>
      </div>

      <FadeInSection delay="200ms">
        <div className="project-log-header">
          <h1 className="project-log-title">{project.title}</h1>

          {project.image && (
            <div
              className="project-log-hero-wrapper"
              style={project.heroStyle || {}}
            >
              <div className="project-log-hero-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-log-hero"
                />
              </div>
              {project.imageCaption && (
                <p className="project-log-hero-caption">
                  {project.imageCaption}
                </p>
              )}
            </div>
          )}

          <p className="project-log-description">{project.description}</p>
          {project.badge && (
            <a
              href={project.badge.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-badge"
            >
              {project.badge.text}
            </a>
          )}
          {project.date && (
            <div className="project-log-date">{project.date}</div>
          )}
        </div>
      </FadeInSection>

      {project.reelsLink && (
        <FadeInSection delay="300ms">
          <div className="reels-container">
            <a
              href={project.reelsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-reels-link"
            >
              <InstagramIcon className="reels-icon" />
              <span className="reels-text">
                Watch the build process on Instagram
              </span>
            </a>
          </div>
        </FadeInSection>
      )}

      <div className="project-log-container">
        {project.logs.map((log, i) => (
          <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
            <section className="article-section">
              <div className="article-header">
                <h2 className="article-title">{log.title}</h2>
              </div>
              <div className="article-content">
                {renderContent(log.content)}
              </div>
            </section>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
};

export default ProjectLog;
