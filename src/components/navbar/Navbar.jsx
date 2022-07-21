import { useContext, useState } from "react";
import "./Navbar.scss";
import { MdOutlineLightMode, MdLightMode, MdReviews } from "react-icons/md";
import { FcInfo, FcHome, FcContacts, FcWorkflow } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import { ModeContext } from "../../contexts/ModeContext";

export default function Navbar() {
  const { mode, changeMode } = useContext(ModeContext);

  return (
    <>
      <nav>
        <div className="nav">
          <div className="logo">
            <a href="#">
              Elue-<span>Dev</span>
            </a>
          </div>
          {/* <div className="menu">
            {menuOpen ? (
              <VscEyeClosed
                onClick={() => setMenuOpen(!menuOpen)}
                className="menu_open"
              />
            ) : (
              <RiMenuAddLine
                onClick={() => setMenuOpen(!menuOpen)}
                className="menu_open"
              />
            )}
          </div> */}
          <ul className="nav_links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <li className="change_mode">
            {mode === "light" ? (
              <MdLightMode
                className="mode_icon"
                onClick={() => changeMode("dark")}
              />
            ) : (
              <MdOutlineLightMode
                className="mode_icon dark_mode"
                onClick={() => changeMode("light")}
              />
            )}
          </li>
        </div>
      </nav>

      <div className="bottom__nav">
        <ul>
          <li>
            <a href="/#">
              <FcHome size={25} />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#about">
              <FcInfo size={25} />
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#skills">
              <GiSkills size={25} style={{ color: "coral" }} />
              <span>Skills</span>
            </a>
          </li>
          <li>
            <a href="/#projects">
              <FcWorkflow size={25} />
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a href="#testimonials">
              <MdReviews size={25} style={{ color: "#b68e2a" }} />
              <span>Testim..</span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <FcContacts size={25} />
              <span>Contacts</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
