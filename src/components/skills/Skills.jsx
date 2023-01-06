import "./Skills.scss";
import { ImHtmlFive } from "react-icons/im";
import { ImCss3 } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { TbBrandBootstrap } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { SiNextdotjs, SiFirebase, SiRedux, SiExpress } from "react-icons/si";
import SkillsImage from "../../assets/dev.webp";
import rtlImage from "../../assets/rtl.png";
import mongoose from "../../assets/mongoose.png";
import express from "../../assets/express.png";

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <h1 className="title">Stack</h1>
      <div className="skills_info">
        <div className="skills_details">
          <h2 className="skills_info_title"> My creative skills & stack </h2>
          <p className="skills_info_desc">
            I have worked with these technologies and maximized them in building
            beautiful UI of websites and responsive for all devices
          </p>
          <div className="skills_lang">
            <p>
              <ImHtmlFive className="html" />
              <span>HTML5</span>
            </p>
            <p>
              <ImCss3 className="css" />
              <span>CSS3</span>
            </p>
            <p>
              <FaSass className="sass" />
              <span>SASS</span>
            </p>
            <p>
              <IoLogoJavascript className="javaScript" />
              <span>JavaScript</span>
            </p>

            <p>
              <FaReact className="react" />
              <span>REACT JS</span>
            </p>
            <p>
              <SiRedux className="redux" />
              <span>REDUX</span>
            </p>
            {/* <p>
              <img
                src={rtlImage}
                alt="react-testing-library"
                style={{ width: "15%" }}
              />
              <span>REACT TESTING LIBRARY</span>
            </p> */}

            {/* <p>
              <TbBrandBootstrap className="bootstrap" />
              <span>BOOTSTRAP</span>
            </p> */}
            <p>
              <SiNextdotjs className="nextjs" />
              <span>NEXT JS</span>
            </p>
            <p>
              <FaNodeJs className="nodejs" />
              <span>NODE JS</span>
            </p>
            <p>
              <SiExpress className="express" />
              <span>EXPRESS</span>
            </p>
            <p>
              <DiMongodb className="mongodb" />
              <span>MONGO DB</span>
            </p>
            <p>
              <img src={mongoose} alt="mongoose" style={{ width: "15%" }} />
              <span>MONGOOSE</span>
            </p>
            <p>
              <SiFirebase className="firebase" />
              <span>FIREBASE</span>
            </p>
            <p>
              <BsGithub className="git" />
              <span>GIT & GITHUB</span>
            </p>
          </div>
        </div>
        <div className="skills_image">
          <img src={SkillsImage} alt="developer" />
        </div>
      </div>
      <hr />
    </div>
  );
}
