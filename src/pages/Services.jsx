function Services() {
  const services = [
    {
      name: "Transport",
      desc: "Safe and secure goods transport across India",
      price: "₹5000 / trip",
      icon: "🚛",
    },
    {
      name: "Logistics",
      desc: "Complete supply chain & warehouse solutions",
      price: "₹3000 / service",
      icon: "📦",
    },
    {
      name: "House Shifting",
      desc: "Professional home shifting with care",
      price: "₹8000 / shift",
      icon: "🏠",
    },
    {
      name: "Express Delivery",
      desc: "Fast 24-hour delivery service",
      price: "₹2000 / delivery",
      icon: "⚡",
    },
  ];

  return (
    <div className="services-page">

      <h1 className="services-title">Our Premium Services</h1>
      <p className="services-subtitle">
        Reliable, fast and affordable logistics solutions
      </p>

      <div className="services-grid">

        {services.map((item, index) => (
          <div className="service-card" key={index}>

            <div className="icon">{item.icon}</div>

            <h2>{item.name}</h2>
            <p>{item.desc}</p>

            <span className="price">{item.price}</span>

            <button className="service-btn">Book Now</button>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Services;