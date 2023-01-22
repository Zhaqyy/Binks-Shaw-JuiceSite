import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <section>
      <form className="form">
        <h2>CONTACT US</h2>
        <p type="Name:">
          <input placeholder="Your name" />
        </p>
        <p type="Email:">
          <input placeholder="Your Contact" />
        </p>
        <p type="Message:">
          <input placeholder="What would you like to tell us" />
        </p>
        <button>Send Message</button>
        
      </form>
    </section>
  );
};
export default Contact;
