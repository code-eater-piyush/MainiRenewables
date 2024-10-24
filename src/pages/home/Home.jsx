// Home.js
import './home.css';
import Mission from '../mission/Mission';
import turbineImage from "../../assets/turbine.avif";
import Services from '../services/Services';
// import background from 'background.mp4';

const Home = () => {
    return (
       <section id='home'>
         <div className="home">
            {/* Video Background */}
            <video autoPlay loop muted className="hero-video">
                <source src="background.mp4" type="video/mp4" />
            </video>
            <div className="home-img">
                <img src={turbineImage} alt="Wind Turbine" />
            </div>
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
