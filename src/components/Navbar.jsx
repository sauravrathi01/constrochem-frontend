import React, { useState } from "react";
import Products from "../data/Products";
import { Link } from "react-router-dom";
// import costrologo from "../images/logo_constro.jpeg";
import costrologo from "../images/logoimg.png";
import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";
import { isLoggedIn, logout } from "../utils/auth";



const Navbar = () => {

  const navigate = useNavigate();

const handleLogout = () => {
  logout();
  setIsOpen(false);
  navigate("/login");
};

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar navbar-dark">
      <div className="container-fluid">

        {/* Brand */}
        <Link className="navbar-brand mx-md-5 text-white" to="/">
          {/* ConstroChem */}
          <img src={costrologo} className='img-fluid custom-logoimg' alt="constrochem logo"/>
        </Link>

        {/* Custom Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapse (React controlled) */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-4">

            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to="/"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to="/about"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>

            {/* Products (Desktop hover still works) */}
            <li className="nav-item position-relative hover-dropdown">
              <span className="nav-link text-white product-menu-title">
                Products
              </span>

              <div className="custom-dropdown shadow-lg">
                {Products.map((cat, index) => (
                  <Link
                    key={index}
                    to={`/products/${cat.replace(/\s+/g, "-").toLowerCase()}`}
                    className="custom-dropdown-item"
                    onClick={() => setIsOpen(false)}
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to="/contact"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>

          </ul>

          <form className="d-flex gap-2 me-5">
  <button
    className="btn btn-danger px-4"
    type="button"
    onClick={() => setIsOpen(false)}
  >
    GET IN TOUCH
  </button>

  {isLoggedIn() && (
    <button
      className="btn btn-outline-light px-4"
      type="button"
      onClick={handleLogout}
    >
      Logout
    </button>
  )}
</form>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
