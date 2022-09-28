import React from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
  return (
    <div className="footer-content-wrapper">
      <div className="footer-content-heading">FOLLOW US</div>
      <div className="footer-content-social-media">
        <div>
          <FacebookIcon className="socialmedia-icon" />
        </div>
        <div>
          <InstagramIcon className="socialmedia-icon" />
        </div>
        <div>
          <TwitterIcon className="socialmedia-icon" />
        </div>
      </div>
      <div className="footer-content-copyright">
        <CopyrightIcon /> Copyright registered to Durbar Fast Foods.
      </div>
    </div>
  );
}

export default Footer;
