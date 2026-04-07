import React from "react";
import "./ContactPage.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaInstagram,
  FaFacebookF,
  FaYoutube
} from "react-icons/fa";

function ContactPage() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-overlay"></div>
        <div className="contact-hero-content">
          <p className="contact-tag">Get in Touch</p>
          <h1>Contact Vikaasa Mall</h1>
          <p>
            We are always happy to hear from you. Reach out for enquiries,
            support, feedback, partnerships, or visit us for a premium mall
            experience.
          </p>
        </div>
      </section>

      <section className="contact-main-section">
        <div className="contact-info-panel">
          <h2>Visit or Reach Us</h2>

          <div className="contact-info-card">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h3>Address</h3>
              <p>
                Door No. 15/23, Grand Trunk Road, Dargamitta,
                <br />
                Vellore, Tamil Nadu - 632014
              </p>
            </div>
          </div>

          <div className="contact-info-card">
            <FaPhoneAlt className="contact-icon" />
            <div>
              <h3>Phone</h3>
              <p>+91 6302338074</p>
            </div>
          </div>

          <div className="contact-info-card">
            <FaEnvelope className="contact-icon" />
            <div>
              <h3>Email</h3>
              <p>contact@vikaasamall.com</p>
            </div>
          </div>

          <div className="contact-info-card">
            <FaClock className="contact-icon" />
            <div>
              <h3>Working Hours</h3>
              <p>Monday - Sunday : 10:00 AM - 10:00 PM</p>
            </div>
          </div>

          <div className="contact-socials">
            <h3>Follow Us</h3>
            <div className="contact-social-icons">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-panel">
          <h2>Send Us a Message</h2>
          <form className="contact-form">
            <div className="contact-input-row">
              <input type="text" placeholder="Your Full Name" />
              <input type="email" placeholder="Your Email Address" />
            </div>

            <input type="text" placeholder="Subject" />

            <textarea
              rows="7"
              placeholder="Write your message here..."
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      <section className="contact-map-section">
        <div className="contact-map-box">
          <h2>Find Us Easily</h2>
          <p>
            Visit Vikaasa Mall and enjoy shopping, dining, and entertainment in
            one beautiful destination.
          </p>
          <div className="contact-map-placeholder">
            <FaMapMarkerAlt />
            <span>Location Map Area</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;