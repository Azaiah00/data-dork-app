import React from 'react';
import './Banner.css';
import dataDorkLogo from './assets/images/Data Dork Logo 2.png'; // Adjust the path based on your directory structure

const Banner = () => {
  return (
    <div className="banner">
      <div className="logo">
        <img src={dataDorkLogo} alt="Data Dork Logo" />
      </div>
      <nav className="menu">
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#tech-stack">Tech Stack</a></li>
          <li><a href="#catalog">Catalog</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#inforgraphics">Infographics</a></li>
        </ul>
      </nav>
    </div>
  );
}; 

export default Banner;
 