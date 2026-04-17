import { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

import akr1 from "../assets/AKRImage.jpg";
import akr2 from "../assets/AKR5.jpg";
import akr3 from "../assets/AKR8.avif";
import akr4 from "../assets/AKR3.jpg";

function Home() {
  const { company } = useContext(AppContext);
  const navigate = useNavigate();

  const images = [akr1, akr2, akr3, akr4];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      
      <div className="hero">

        <div className="hero-left">
          <h1>{company}</h1>

          <h2 className="tagline">
            Fast • Safe • Reliable Logistics Services
          </h2>

          <p>
            We deliver goods safely across India with modern trucks, fast service,
            and trusted logistics support for businesses and individuals.
          </p>

          <button className="btn" onClick={() => navigate("/services")}>
            Explore Services
          </button>
        </div>

        <div className="hero-right">
  <img
    src={images[index]}
    alt="slider"
    className="slider-image fade"
  />
</div>
</div>
<div className="special-section">
        <h1 className="section-title">Our Special Services</h1>

        <div className="special-grid">

          <div className="special-card">
            <img src={akr1} />
            <h3>Transport</h3>
            <p>Agricultural sector Logistics</p>
          </div>

          <div className="special-card">
            <img src={akr2} />
            <h3>Logistics</h3>
            <p>Logistics in Pharma Industry</p>
          </div>

          <div className="special-card">
            <img src={akr3} />
            <h3>Fast Delivery</h3>
            <p>Logistics in Textile Handloom Industry</p>
          </div>

          <div className="special-card">
            <img src={akr4} />
            <h3>Affordable Price</h3>
            <p>logistics in different services</p>
          </div>

        </div>

        <button className="btn view-btn" onClick={() => navigate("/about")}>
          View All Services
        </button>
      </div>
    </>
  );
}

export default Home;