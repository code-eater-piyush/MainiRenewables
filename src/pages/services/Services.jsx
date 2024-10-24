import './services.css';
import WindTurbine from '../../assets/WindTurbine.webp';
import WaterTurbine from '../../assets/waterTurbine.webp';

const servicesData = [
  {
    img: WindTurbine,
    title: 'Wind Turbine Design',
    description: 'Harness clean energy with our innovative wind turbine designs.',
    reverse: false, // Image on right, content on left
  },
  {
    img: WaterTurbine,
    title: 'Water Turbine Design',
    description: 'Efficient solutions for harnessing hydropower with advanced water turbines.',
    reverse: true, // Image on left, content on right
  },
];

const Services = () => {
  return (
    <section id='services'>
      <div className="services">
        <div className="services-container">
          <h1>Our Services</h1>
          <div className="services-content">
            {servicesData.map((service, index) => (
              <div
                className={`service-item ${service.reverse ? 'reverse' : ''}`} // Add reverse class conditionally
                key={index}
              >
                <div className="service-text">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <button className="cta-button">Learn More</button>
                </div>
                <div className="service-icon-container">
                  <img src={service.img} alt={service.title} className="service-icon" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
