import "./Skills.scss";
import { ImHtmlFive } from "react-icons/im";
import { ImCss3 } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { TbBrandBootstrap } from "react-icons/tb";
import { SiNextdotjs, SiFirebase, SiRedux } from "react-icons/si";
import SkillsImage from "../../assets/dev.webp";
import rtlImage from "../../assets/rtl.png";

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <h1 className="title">Stacks</h1>
      <div className="skills_info">
        <div className="skills_details">
          <h2 className="skills_info_title"> My creative skills & stacks </h2>
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
              <IoLogoJavascript className="javaScript" />
              <span>JavaScript</span>
            </p>
            <p>
              <FaReact className="react" />
              <span>REACT</span>
            </p>
            <p>
              <FaSass className="sass" />
              <span>SASS</span>
            </p>
            <p>
              <TbBrandBootstrap className="bootstrap" />
              <span>BOOTSTRAP</span>
            </p>
            <p>
              <SiNextdotjs className="nextjs" />
              <span>NEXT JS</span>
            </p>
            <p>
              <SiRedux className="redux" />
              <span>REDUX</span>
            </p>
            <p>
              <SiFirebase className="firebase" />
              <span>FIREBASE</span>
            </p>
            <p>
              <img
                src={rtlImage}
                alt="react-testing-library"
                style={{ width: "15%" }}
              />
              <span>REACT TESTING LIBRARY</span>
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
