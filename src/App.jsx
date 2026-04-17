import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import AppProvider from "./context/AppContext";
import logo from "./assets/AKR7.avif";

function Layout() {
  return (
    <>
      <div className="navbar">
        <div className="logo-section">
          <img src={logo} alt="logo" />
          <h2>AKR Express</h2>
        </div>

        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </div>

      <Outlet />
    </>
  );
}

function App() {
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

export default App;