import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import AppProvider from "./context/AppContext";
import logo from "./assets/AKR7.avif";
import "./App.css";

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="app-container">
      <nav className="navbar">
        {/* Left Side: Logo and Brand Name */}
        <div className="logo-section">
          <img src={logo} alt="AKR Logo" className="logo-img" />
          <h1 className="brand-name">AKR Express</h1>
        </div>

        {/* Right Side: Desktop Links */}
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/services" onClick={closeMenu}>Services</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
          <Link to="/profile" onClick={closeMenu}>Profile</Link>
        </div>

        {/* Hamburger Menu Icon (Mobile Only) */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`line ${isMenuOpen ? "open1" : ""}`}></div>
          <div className={`line ${isMenuOpen ? "open2" : ""}`}></div>
          <div className={`line ${isMenuOpen ? "open3" : ""}`}></div>
        </div>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}