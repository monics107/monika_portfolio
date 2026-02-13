import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setStatus("Message sent successfully! I will contact you soon.");
          setLoading(false);
          e.target.reset();
        },
        (error) => {
          console.log(error);
          setStatus("Something went wrong. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section className="contact-wrapper" id="contact">

      {/* BUBBLES BACKGROUND */}
      <div className="contact-bubbles">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="contact-bubble"
            style={{
              width: Math.random() * 8 + 4 + "px",
              height: Math.random() * 8 + 4 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animationDuration: 10 + Math.random() * 10 + "s",
            }}
          />
        ))}
      </div>

      <div className="contact-content">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h1>Let’s Connect</h1>
          <p>Reach me through</p>

          <div className="social-icons">
            <a href="mailto:monikacse2027@gmail.com">
              <FaEnvelope />
            </a>

            <a
              href="https://github.com/monics107"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/monika2027/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-right">
          <form className="contact-form" onSubmit={sendEmail}>

            <label>Full Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Enter your full name..."
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email address..."
              required
            />

            <label>Message</label>
            <textarea
              name="message"
              placeholder="Enter your message..."
              required
            />

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Sending..." : "Submit →"}
            </button>

            {status && (
              <p
                className={
                  status.includes("successfully")
                    ? "success-msg"
                    : "error-msg"
                }
              >
                {status}
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;