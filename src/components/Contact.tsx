import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:rohitashsharma.work@gmail.com" data-cursor="disable">
                rohitashsharma.work@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+918209667869" data-cursor="disable">
                +91 82096 67869
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Portfolio</h4>
            <a
              href="https://www.behance.net/rohitashsharma2684"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Behance <MdArrowOutward />
            </a>
            <h4>Location</h4>
            <p>Churu, Rajasthan</p>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Rohitash Sharma</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

