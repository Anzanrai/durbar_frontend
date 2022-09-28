import React from 'react';
import './Contact.css';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <div className="pageWrapper">
      <Navbar />
      <div className="contact-content-wrapper">
        <div className="contact-content">
          <h2>Remember us for a feast</h2>
          <p>
            To make an earliest booking for our services, please reach out to us
            in our landline number 0228645212.
          </p>
          <p>
            To get notified for any announcement and deals, or any new dish,
            remember to follow us on our social media platforms.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
