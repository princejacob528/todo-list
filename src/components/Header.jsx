// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="p-6 pb-0">
      <div className="container">
        <a href="/" className="flex items-center">
          <img src="/Logo_NBG_Wide.png" alt="PrinceDev Logo" className="w-28" />
        </a>
      </div>
    </header>
  );
};

export default Header;
