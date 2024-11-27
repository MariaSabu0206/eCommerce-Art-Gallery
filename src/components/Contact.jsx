import React, { useState } from "react";
import "../CSS/Contact.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleContactSubmit = () => {
    if (!name || !email || !message) {
      alert("All fields in the Contact form are required!");
      return;
    }
    alert(`Thank you, ${name}! We'll get back to you soon.`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
        <Navbar/>
    <div className="contact-page">
      <h1>Contact Us</h1>
      <div className="contact-container">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button className="contact-submit-button" onClick={handleContactSubmit}>
          Send Message
        </button>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Contact;
