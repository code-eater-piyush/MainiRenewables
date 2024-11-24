import React, { useState, useEffect } from 'react';
import './home.css';
import Mission from '../mission/Mission';
import turbineImage from "../../assets/turbine.avif";
import Services from '../services/Services';

const Home = () => {
    const [isVideoActive, setIsVideoActive] = useState(false);

    useEffect(() => {
        // Toggle between video and image every 10 seconds
        const interval = setInterval(() => {
            setIsVideoActive((prev) => !prev);
        }, 8000); 

        return () => clearInterval(interval); // Clean up on unmount
    }, []);

    return (
        <section id='home'>
            <div className="home">
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    className={`hero-video ${isVideoActive ? 'visible' : 'hidden'}`}
                >
                    <source src="background.mp4" type="video/mp4" />
                </video>

                {/* Image Background */}
                <div
                    className={`hero-image ${!isVideoActive ? 'visible' : 'hidden'}`}
                    style={{
                        backgroundImage: `url(${turbineImage})`,
                    }}
                ></div>

                {/* Main Content */}
                <div className="home-content">
                    <h1>Make renewable energy predictable..</h1>
                    <h2>With small-scaled wind and hydrokinetic turbines for reliable power</h2>
                </div>
            </div>
            <Services />
            <Mission />
        </section>
    );
};

export default Home;
