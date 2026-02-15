import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

const BUBBLE_COUNT = 80;

const Contact = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [bubbles, setBubbles] = useState([]);

  // Generate floating bubbles
  useEffect(() => {
    const newBubbles = Array.from({ length: BUBBLE_COUNT }).map(() => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const size = 4 + Math.random() * 6;
      const duration = 8 + Math.random() * 6;
      const delay = Math.random() * 5;
      return { x, y, size, duration, delay };
    });
    setBubbles(newBubbles);
  }, []);

  // Handle form submission
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_4rqk6dq", // ✅ Working Service ID
        "template_jqpk1m7", // Your Template ID
        e.target,
        "mBk0luTWBD0q8WZLb" // Your Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully! I will contact you soon.");
          setLoading(false);
          e.target.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("Something went wrong. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section className="contact-wrapper" id="contact">
      {/* Bubble background */}
      <div className="bubble-container">
        {bubbles.map((b, i) => (
          <span
            key={i}
            className="bubble"
            style={{
              left: `${b.x}px`,
              top: `${b.y}px`,
              width: `${b.size}px`,
              height: `${b.size}px`,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="contact-content">
        {/* Left section: Social links */}
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

        {/* Right section: Contact form */}
        <div className="contact-right">
          <form className="contact-form" onSubmit={sendEmail}>
            <label htmlFor="from_name">Full Name</label>
            <input
              id="from_name"
              type="text"
              name="from_name"
              placeholder="Enter your full name..."
              required
            />

            <label htmlFor="from_email">Email Address</label>
            <input
              id="from_email"
              type="email"
              name="from_email"
              placeholder="Enter your email address..."
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
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