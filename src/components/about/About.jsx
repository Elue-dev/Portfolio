import "./About.scss";
import Photo from "../../assets/wisdom2.jpeg";

export default function About() {
  return (
    <div className="about" id="about">
      <h1 className="title">About</h1>
      <div className="about_info">
        //<div className="about_image">
         // <img src={Photo} alt="wisdom" />
        //</div>
        <div className="about_details">
          I am <span>Elue Wisdom</span>, a Software Developer <br /> <br />
          Passionte Software Developer who is always ready to learn and work
          with people. I have used my skills to build few projects, and
          technologies I have worked with (but not limited to) include: HTML,
          CSS, SASS, JavaScript, jQuery, React JS, Redux, Typescript, Next JS,
          GraphQL, Node JS, Express, MongoDB, Mongoose, MySQL, Postgres, Prisma
          and Firebase (BaaS) <br /> <br />I have turned UI designs into
          functional responsive websites using the skills i have learnt. I have
          also used Microsoft technologies such as Microsoft sharepoint,
          Microsoft Azure and Microsoft Power Automate for automated workflows.
        </div>
      </div>
    </div>
  );
}
