import React from 'react';
import PageLinks from './PageLinks';

const Footer = () => {
  return (
    <div>
      <footer className="section footer">
        <PageLinks parentClass="footer-links" itemClass="footer-link" />
        <p className="copyright">
          copyright &copy; Sandhu travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
