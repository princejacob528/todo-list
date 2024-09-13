// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <div className="fixed top-0 left-0 m-4 ml-6">
      <a href="/">
        <img
          src="/Logo_NBG_Wide.png"
          alt="Brand Logo"
          className="h-20 w-auto"
        /></a>
    </div>
  );
};

export default Header;
