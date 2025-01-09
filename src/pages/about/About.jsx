import React from 'react';
import './about.css';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Scroll to top before navigating
    window.scrollTo(0, 0);
    navigate('/contact');
  };


  return (
    <section id="about">
    <div className="hero">
      <h1>What We Do</h1>
      <h2>Clean. Safe. Renewable.</h2>
      <p>
        Maini Renewables offers scalable small hydro solutions harnessing the natural flow of water without a dam. Our innovative technology ensures cost-effective and eco-friendly energy solutions for a sustainable future.
      </p>
    </div>
      <div className="mission">
  <h2>Our Mission</h2>
  <p className="mission-tagline">"Empowering a sustainable future through innovative renewable energy solutions."</p>
  <div className="mission-content">
    <img src="About(Mission).avif" alt="Mission" className="mission-image" />
    <p className="mission-text">
    At Maini Renewables, our mission is to revolutionize energy production by harnessing renewable resources responsibly. We strive to create a greener future by providing efficient and sustainable energy solutions that benefit communities and preserve the planet for generations to come.
    </p>
  </div>
</div>

      <div className="impact">
        <h2>Our Impact</h2>
        <div className="impact-stats">
          <div className="stat">
            <h3>94 tonnes</h3>
            <p>Carbon dioxide saved annually per turbine</p>
          </div>
          <div className="stat">
            <h3>15kW</h3>
            <p>Power per turbine</p>
          </div>
        </div>
        <p className="impact-text">
          Beyond reducing carbon emissions, our installations provide communities with reliable energy, fostering economic growth and improving quality of life. Join us in making a tangible difference.
        </p>
      </div>

      <div className="installations">
        <h2>Where Can We Install Them?</h2>
        <div className="grid">
          <div className="grid-item">
            <img src="River.jpg" alt="Natural Flow" />
            <h3>Natural Flow</h3>
            <p>Rivers, Tides, and Ocean Currents</p>
          </div>
          <div className="grid-item">
            <img src="About(HydroDam).jpg" alt="Manmade Structures" />
            <h3>Manmade Structures</h3>
            <p>Irrigation canals, industrial and hydro dam tailrace channels</p>
          </div>
        </div>
        <p className="installations-text">
          Our solutions adapt seamlessly to diverse environments, ensuring compatibility and efficiency across natural and manmade water flows. Let us help you harness the power of water.
        </p>
      </div>

      <div className="cta">
        <h2>Join Us in Creating a Sustainable Future</h2>
        <button onClick={handleClick}>Contact Us</button>
      </div>
    </section>
  );
};

export default About;