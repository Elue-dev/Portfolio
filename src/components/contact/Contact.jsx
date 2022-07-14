import { useState } from "react";
import "./Contact.scss";
import { RiContactsFill } from "react-icons/ri";
import { ImLocation } from "react-icons/im";
import { GiLetterBomb } from "react-icons/gi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { AiFillFileText } from "react-icons/ai";
import { BsChatRightText, BsCheck2All } from "react-icons/bs";
import { FiAlertTriangle } from "react-icons/fi";
import { BiLoader } from "react-icons/bi";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { database } from "../../firebase";
import ReactWhatsapp from "react-whatsapp";
import { TbBrandWhatsapp } from "react-icons/tb";

export default function Contact() {
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (title === "" || email === "" || message === "") {
        setError("Please fill all fields");
        window.setTimeout(() => {
          setError("");
        }, 3000);
        return;
      }

      setLoading(true);
      setError("");
      setSuccess("");

      const colRef = collection(database, "messages");
      await addDoc(colRef, {
        title,
        email,
        message,
        time: serverTimestamp(),
      });
      setLoading(false);
      setSuccess("Your message has been recieved, thank you");
      window.setTimeout(() => {
        setSuccess("");
      }, 4000);
      setTitle("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="title">Contacts</div>
      <div className="contact_items">
        <div className="contact_details">
          <div className="info">
            <div className="name">
              <RiContactsFill className="contact_icon" />
              <p>Wisdom Elue</p>
            </div>
            <div className="location">
              <ImLocation className="contact_icon" />
              <p>Lagos, Nigeria</p>
            </div>
            <div className="email">
              <GiLetterBomb className="contact_icon" />
              <a href="mailto:eluewisdom@gmail.com">eluewisdom@gmail.com</a>
            </div>
            <div className="linkedin">
              <AiOutlineLinkedin className="contact_icon" />
              <a href="https://www.linkedin.com/in/wisdom-elue-8822a5188">
                LinkedIn
              </a>
            </div>
            <div className="github">
              <BsGithub className="contact_icon" />
              <a href="https://github.com/Elue-dev">github.com/Elue-dev</a>
            </div>
            <div className="resume">
              <AiFillFileText className="contact_icon" />
              <a href="https://eluedevresume.netlify.app"> Resume</a>
            </div>
            <div>
              <ReactWhatsapp
                number="234-810-733-9039"
                message="Hi there, i am from your website, i want to leave a message..."
                className="whatsapp"
              >
                <TbBrandWhatsapp size={25} /> 
                &nbsp; <span>Leave a message</span>
              </ReactWhatsapp>
            </div>
          </div>
        </div>
        <form
          className="contact_form"
          onSubmit={handleSubmit}
          name="contact-form"
          data-netlify="true"
        >
          <h3 className="heading">Leave a Message.</h3>
          {error && (
            <p className="error">
              {" "}
              <span>
                <FiAlertTriangle />
                &nbsp; {error}
              </span>
            </p>
          )}
          {success && (
            <p className="success">
              {" "}
              <span>
                <BsCheck2All />
                &nbsp; {success}
              </span>
            </p>
          )}
          <input type="hidden" name="form-name" value="contact-form" />
          <RiContactsFill className="form_icon " />
          <input
            type="text"
            name="name"
            placeholder="Your Name..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <GiLetterBomb className="form_icon" />
          <input
            type="email"
            name="email"
            placeholder=" Your Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <BsChatRightText className="form_icon" />
          <input
            name="message"
            placeholder="Message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <br />
          <button type="sumbit" className="submit">
            {loading ? <BiLoader /> : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
