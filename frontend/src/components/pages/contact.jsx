import decor from "../../images/decor.png";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

const serviceID = "service_prq9bh8";
const templateID = "template_wrkabh7";
const publicKey = "Wrr2nz10a-IwnQeAo";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current, {
      publicKey: publicKey,
    });
    setTimeout(
      () => {
        document.getElementById("contact-form").reset();

        console.log("Email was sent successfully!");
      },
      (error) => {
        console.log("Email was not sent...", error.text);
      }
    );
  };

  return (
    <div>
      <div class="hero-section"></div>

      <div class="contact-container">
        <img src={decor} alt="Decorative Element" className="decor" />

        <div class="contact-box">
          <h2>Contact Us!</h2>
          <form
            className="contact-form"
            id="contact-form"
            ref={form}
            onSubmit={sendEmail}>
            <input
              type="text"
              id="name"
              name="from_name"
              placeholder="Your Name*"
              required
            />{" "}
            <br />
            <input
              type="email"
              id="email"
              name="from_email"
              placeholder="Email Address*"
              required
            />
            <br />
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject*"
              required
            />
            <textarea
              id="text"
              name="message"
              placeholder="Message*"
              required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
