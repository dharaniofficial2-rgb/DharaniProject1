import { useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";

function About() {
  const { company } = useContext(AppContext);

  useEffect(() => {
    console.log("About Page Loaded");
  }, []);

  return (
    <div className="about-page">
      <h1>About {company}</h1>

      <p className="about-text">
        {company} is a leading logistics and transportation company committed to
        delivering goods safely, quickly, and efficiently across India. With a
        strong network, advanced fleet, and experienced team, we ensure every
        shipment reaches its destination on time.
      </p>

      <div className="about-cards">
        <div className="about-box">
          <h2>🚛 Our Mission</h2>
          <p>
            To provide reliable and affordable transportation services while
            maintaining the highest standards of safety and customer
            satisfaction.
          </p>
        </div>

        <div className="about-box">
          <h2>🌍 Our Vision</h2>
          <p>
            To become one of the most trusted logistics companies in India by
            delivering excellence in every service we offer.
          </p>
        </div>

        <div className="about-box">
          <h2>⭐ Why Choose Us</h2>
          <p>
            Modern fleet, experienced drivers, fast delivery, and customer-first
            approach make us stand out in the logistics industry.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;