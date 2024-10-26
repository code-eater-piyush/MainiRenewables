import React from 'react';
import './solutions.css';

const Solutions = () => {
    return (
        <div className="solutions-section">
            {/* Canal Installation */}
            <div className="solution-card">
                <img src="canal.avif" alt="Canal Installation" />
                <div className="solution-info">
                    <h2>Canal Installation</h2>
                    <p>Generate damless power by harnessing the kinetic energy of water.</p>
                </div>
            </div>

            {/* Rooftop Installation */}
            <div className="solution-card">
                <div className="solution-info">
                    <h2>Rooftop Installation</h2>
                    <p>Our turbines on your rooftop for localized power generation.</p>
                </div>
                <img src="rooftop.jpg" alt="Rooftop Installation" />
            </div>

            {/* Windfarm Installation */}
            <div className="solution-card">
                <img src="windfarm.avif" alt="Windfarm Installation" />
                <div className="solution-info">
                    <h2>Windfarm Installation</h2>
                    <p>Large-scale installation for high-output power generation.</p>
                </div>
            </div>

            {/* More Solutions Button */}
            <div className="more-solutions">
                <button onClick={() => window.location.href = '/more-solutions'}>
                    More &gt;
                </button>
            </div>
        </div>
    );
};

export default Solutions;
