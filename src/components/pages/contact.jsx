import React from "react";
import { Container } from "react-bootstrap";
import decor from "../../images/decor.png";

const Contact = () => {
  return (
    <div>
      <div class="hero-section"></div>

   
<div class="contact-container">
    
    <img src={decor} alt="Decorative Element" class="decor"/>

    
    <div class="contact-box">
        <h2>Contact Us!</h2>
        <form class="contact-form" id="contact-form">
            <input type="message" id="name" name="from_name" placeholder="Your Name*" required/> <br/>
            <input type="message" id="email" name="from_email" placeholder="Email Address*" required/><br/>
            <input type="message" id="subject" name="subject" placeholder="Subject*" required/>
            <textarea id="text" name="message" placeholder="Message*" required></textarea>
            <button type="submit">Send Message</button>
        </form>
        <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
            <script src="../../email.js"></script>
        
    </div>
</div>

    </div>
  );
};

export default Contact;
