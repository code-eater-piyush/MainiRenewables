import React, { useEffect, useRef } from 'react';
import './about.css';

const About = () => {
  const contentRef = useRef(null); // Create a ref to the content

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add the class when the element is in view
        }
      });
    });

    const elements = contentRef.current.querySelectorAll('.slide-in');
    elements.forEach(element => {
      observer.observe(element); // Observe each element
    });

    return () => {
      elements.forEach(element => {
        observer.unobserve(element); // Clean up the observer
      });
    };
  }, []);

  return (
    <section id='about'>
      <div className="about">
        <div className="about-container">
          <div className="banner">
            <img src="about.jpg" alt="About Us" />
            <div className="overlay"></div>
            <div className="text-content">
              <p>
                Making Distributed Hydro in Highlands and Islands a Reality.
              </p>
              <button>Learn More</button>
            </div>
          </div>
          <div className="content" ref={contentRef}>
            <h1 className="slide-in">About Maini Renewables</h1>
            <h2 className="slide-in">Company History</h2>
            <p className="slide-in">
              Founded in 2010, Maini Renewables has been at the forefront of renewable energy solutions in India. Our journey began with a vision to harness the power of nature and provide sustainable energy solutions for communities in highlands and islands.
            </p>
            
            <h2 className="slide-in">Achievements</h2>
            <ul className="slide-in">
              <li>Installed over 100 renewable energy projects across India.</li>
              <li>Awarded 'Best Renewable Energy Company' by Green Awards 2022.</li>
              <li>Collaborated with local governments to implement community-based renewable energy systems.</li>
            </ul>

            <h2 className="slide-in">Goals</h2>
            <p className="slide-in">
              Our goal is to expand our reach and provide accessible renewable energy solutions to remote and underserved regions. We aim to innovate and develop new technologies that contribute to a sustainable future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
