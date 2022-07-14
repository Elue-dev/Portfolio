import { useContext, useState } from "react";
import "./Navbar.scss";
import { useAuth } from "../../contexts/AuthContext";
import { RiMenuAddLine } from "react-icons/ri";
import { VscEyeClosed } from "react-icons/vsc";
import { MdOutlineLightMode, MdLightMode } from "react-icons/md";
import { ModeContext } from "../../contexts/ModeContext";

export default function Navbar() {
  const { user, googleSignin, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const { mode, changeMode } = useContext(ModeContext);

  const handleGoogleSignIn = async () => {
    try {
      await googleSignin();
      setMenuOpen(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setMenuOpen(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <nav>
      <div className="nav">
        <div className="logo">
          <a href="#">
            Elue-<span>Dev</span>
          </a>
        </div>
        <div className="menu">
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
        </div>
        <ul
          className={menuOpen ? "nav_links show" : "nav_links"}
          onClick={() => setMenuOpen(false)}
        >
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
          {user ? (
            <li onClick={handleLogout} style={{ cursor: "pointer" }}>
              <a className="signBtn">Sign Out</a>
            </li>
          ) : (
            <li onClick={handleGoogleSignIn} style={{ cursor: "pointer" }}>
              <a className="signBtn">Sign In</a>
            </li>
          )}
          {user && (
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="signin"
            />
          )}
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
        </ul>
      </div>
    </nav>
  );
}
