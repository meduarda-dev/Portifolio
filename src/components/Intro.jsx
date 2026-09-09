import React from "react";
import "../styles/Intro.css";
import { TypeAnimation } from "react-type-animation";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import FadeInSection from "./FadeInSection";
import AsciiPortrait from "./AsciiPortrait";

const Intro = () => {
  return (
    <div id="intro">
      <div className="intro-simulation">
        <AsciiPortrait />
      </div>
      <div className="intro-block">
        <div className="intro-title">
          {"hey, I'm "}
          <span className="intro-name">
            <TypeAnimation
              sequence={["duda"]}
              wrapper="span"
              cursor={false}
              repeat={0}
            />
          </span>
          <span className="intro-cursor">|</span>
        </div>
        <FadeInSection>
          <div className="intro-desc">
            Front end software developer and student in Brazil. I build accessible, responsive, and beautiful interfaces by day and make strange little projects (that probably sounded better when we started) with friends by night.
          </div>
          <a href="/assets/CVEduardaRocha.pdf" download className="intro-contact">
            {"Download Resume"}
            <DownloadRoundedIcon  />
          </a>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Intro;
