// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white pb-0">
      <div className="container mx-auto text-center">
        <p className="mt-1">
          More information, mail us at{' '}
          <a href="mailto:princejacob528@gmail.com" className="text-teal-400">
            princejacob528@gmail.com
          </a>
        </p>
        <p className="mt-1">&copy; {new Date().getFullYear()} PrinceDev.in All rights reserved.</p>
        <div className="mt-0 flex justify-center space-x-4">
          <a href="https://www.instagram.com/_prince_j26_/?igsh=ZmNuZ2p2dW9mbjZ2&utm_source=qr" className="text-teal-400" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://github.com/princejacob528" className="text-teal-400" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/prince-jacob-bb979b274?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B91wleIXnQcOtAodd9mNyqw%3D%3D" className="text-teal-400" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
