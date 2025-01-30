import React from 'react';
import './HomePage.css';
import Banner from './components/Banner';

const HomePage = () => {
  return (
    <div className="home-page">
      <Banner />
      <main>
        <section className="hero">
          <h1>Welcome to Data Dork</h1>
          <p>Unleash the power of data with our cutting-edge solutions</p>
          <button className="cta-button">Get Started</button>
        </section>
        {/* Add more sections for Features, Tech Stack, Catalog, and Testimonials */}
      </main>
    </div>
  );
};

export default HomePage;
