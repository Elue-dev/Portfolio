import "./Testimonials.scss";
import TesImage from "../../assets/testimonials-theme.jpg";
import TestOne from "../../assets/ruon.jpeg";
import TestTwo from "../../assets/readone.jpeg";

export default function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <h1 className="title">Testimonials</h1>
      <div className="testimonial_cards">
        <div className="testimonial_one">
          <img src={TestOne} alt="onothoja ruona" className="ruon" />
          <div
            className="test_texts"
            style={{ background: `url(${TesImage})` }}
          >
            <h2 className="tes_title">
              Onothoja Ruona <br /> <i>Product Manager at Mecho</i>
            </h2>
            <p className="tes_detail">
              He takes this work serious, and never fails to ask questions to be
              sure on what to do. Top guy to work with.
            </p>
          </div>
        </div>
        <div className="testimonial_two">
          <img src={TestTwo} alt="ridwan otun" className="read" />
          <div
            className="test_texts"
            style={{ background: `url(${TesImage})` }}
          >
            <h2 className="tes_title">
              Ridwan Otun <br /> <i>Backend Engineer at Bamboo</i>
            </h2>
            <p className="tes_detail">
              Elue Wisdom is willing to learn and is passionate about this job.
              I like his willingness to work amongst most.
            </p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
