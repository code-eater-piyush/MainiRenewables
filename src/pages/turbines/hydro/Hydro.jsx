import React from 'react';
import './Hydro.css'; // Add your custom styles here

const Hydro = () => {
  return (
    <div className="hydro-turbine">
      {/* Hero Section */}
      <section className="hero">
        <img src="hydro-turbine-image.jpg" alt="Hydro Turbine" className="hero-image" />
        <div className="hero-text">
          <h1>Hydro Turbine Overview</h1>
          <p>Innovating Sustainable Energy through Advanced Hydro Turbine Technology</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro">
        <h2>Powering the future with the flow of water</h2>
        <p>
        Revolutionizing energy production with efficient and sustainable hydro turbine technology        </p>
      </section>

      {/* Technical Specifications Section */}
      <section className="specs">
        <h2>Technical Specifications</h2>
        <table>
          <tbody>
            <tr>
              <th>Power Capacity</th>
              <td>2 MW</td>
            </tr>
            <tr>
              <th>Efficiency</th>
              <td>92%</td>
            </tr>
            <tr>
              <th>Material</th>
              <td>Stainless Steel</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>Francis Turbine</td>
            </tr>
            <tr>
              <th>Dimensions</th>
              <td>5m x 3m x 6m</td>
            </tr>
            <tr>
              <th>Control System</th>
              <td>Automated with IoT integration</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Working Principle Section */}
      <section className="working-principle">
        <h2>Working Principle</h2>
        <div className="working-illustration">
          <img src="turbine-working-diagram.jpg" alt="How the Hydro Turbine Works" />
        </div>
        <p>
          Water flows through the turbine, causing it to rotate. This motion turns a generator that produces electricity.
          The energy is then transmitted to the grid for use.
        </p>
      </section>

      {/* Key Features & Benefits Section */}
      <section className="features-benefits">
        <h2>Key Features & Benefits</h2>
        <ul>
          <li>
            <strong>Energy Efficiency:</strong> Maximizes power output while minimizing resource consumption.
          </li>
          <li>
            <strong>Environmentally Friendly:</strong> Produces clean, renewable energy with low carbon emissions.
          </li>
          <li>
            <strong>Durability:</strong> Designed for long-term use with minimal maintenance.
          </li>
          <li>
            <strong>Cost Efficiency:</strong> Reduces long-term operational costs through efficient energy generation.
          </li>
        </ul>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-images">
          <img src="turbine-gallery-1.jpg" alt="Hydro Turbine in Action" />
          <img src="turbine-gallery-2.jpg" alt="Hydro Turbine Construction" />
          <img src="turbine-gallery-3.jpg" alt="Hydro Turbine Installation" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h2>FAQ</h2>
        <div className="faq-item">
          <h3>What is the lifespan of the turbine?</h3>
          <p>The turbine is designed for a lifespan of up to 30 years with proper maintenance.</p>
        </div>
        <div className="faq-item">
          <h3>How does the turbine handle fluctuating water flow?</h3>
          <p>The turbine adjusts its speed automatically to optimize performance based on water flow conditions.</p>
        </div>
        <div className="faq-item">
          <h3>What maintenance is required?</h3>
          <p>Regular checks on blades, bearings, and generator are needed, along with cleaning and lubrication every year.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Us</h2>
        <p>If you have more questions or want to learn more about our hydro turbine, please get in touch with us!</p>
        <button className="contact-btn">Get in Touch</button>
      </section>
    </div>
  );
};

export default Hydro;
