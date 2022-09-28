import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Services.css';

function Services() {
  return (
    <div className="pageWrapper">
      <Navbar />
      <div className="services-content-wrapper">
        <div className="services-content">
          <h2>Our Services</h2>
          <p>
            At Durbar, apart from providing exceptional hospitality and taste of
            authentic Nepali cuisines, we facilitate functions for different
            kinds of occasions including wedding, birthday, weaning and so on.
            On premise events or delivery to your venue, we take care of them
            all for you.
          </p>
          <p>
            Our excellent team is recognized for our cateering services as well.
            And we can ensure you that you will remember us for any kind of
            functions and events.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
