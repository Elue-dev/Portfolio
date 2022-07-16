import "./About.scss";
import Photo from "../../assets/wisdom.jpeg";

export default function About() {
  return (
    <div className="about" id="about">
      <h1 className="title">About me</h1>
      <div className="about_info">
        <div className="about_image">
          <img src={Photo} alt="wisdom's picture" />
        </div>
        <div className="about_details">
          I am <span>Elue Wisdom</span>, a Frontend Developer <br /> <br />
          Passionte Frontend Developer who is always ready to learn and work
          with people. I have used my skills to build few projects, and
          technologies I have worked with (but not limited to) include: HTML,
          CSS, SASS, JavaScript, jQuery, React JS, Redux, Firebase, Next JS,
          GraphQL, and Firebase as a backend service. <br /> <br />I have turned
          UI designs into functional responsive websites using the skills i have
          learnt.
        </div>
      </div>
    </div>
  );
}
