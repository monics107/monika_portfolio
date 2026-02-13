// ContactPage.jsx
import React from "react";
import "./ContactPage.css";


export default function ContactPage() {
return (
<div className="contact-container">
<div className="contact-left">
<h1>Let’s Get In Touch</h1>
<p>
Or reach out manually at
<a href="mailto:hello@slothui.com"> hello@slothui.com</a>
</p>


<div className="social-links">
<a href="mailto:hello@slothui.com">📧 Email</a>
<a href="https://twitter.com/" target="_blank">🐦 Twitter</a>
<a href="https://linkedin.com/" target="_blank">💼 LinkedIn</a>
<a href="https://github.com/" target="_blank">🐙 GitHub</a>
</div>
</div>


<div className="contact-right">
<form>
<label>Full Name</label>
<input type="text" placeholder="Enter your full name..." required />


<label>Email Address</label>
<input type="email" placeholder="Enter your email address..." required />


<label>Phone Number</label>
<input type="text" placeholder="+44 (000) 000-0000" />


<label>Message</label>
<textarea placeholder="Enter your message..." maxLength="300"></textarea>


<div className="checkbox">
<input type="checkbox" required /> I agree to the Privacy Policy.
</div>


<button type="submit">Submit Form →</button>
</form>
</div>
</div>
);
}