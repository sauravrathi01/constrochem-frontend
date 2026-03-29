import React, { useState } from "react";
import Products from "../data/Products";
import { Link, useNavigate } from "react-router-dom";
import costrologo from "../images/logoimg.png";
import "../styles/navbar.css";
import { isLoggedIn, logout } from "../utils/auth";

const Navbar = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate("/login");
  };

  const handleProductsClick = () => {
    // Mobile only (matches CSS breakpoint)
    if (window.innerWidth <= 991) {
      setIsProductsOpen((prev) => !prev);
    }
  };

  const closeAll = () => {
    setIsOpen(false);
    setIsProductsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar navbar-dark">
      <div className="container-fluid">

        {/* Brand */}
        <Link className="navbar-brand mx-md-5" to="/" onClick={closeAll}>
          <img
            src={costrologo}
            className="img-fluid custom-logoimg"
            alt="constrochem logo"
          />
        </Link>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapse */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto gap-lg-4">

            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeAll}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={closeAll}>
                About
              </Link>
            </li>

            {/* PRODUCTS */}
            <li className="nav-item position-relative hover-dropdown">
              <span
                className="nav-link product-menu-title"
                onClick={handleProductsClick}
              >
                Products
              </span>

              <div
                className={`custom-dropdown ${
                  isProductsOpen ? "mobile-open" : ""
                }`}
              >
                {Products.map((cat, index) => (
                  <Link
                    key={index}
                    className="custom-dropdown-item"
                    to={`/products/${cat.replace(/\s+/g, "-").toLowerCase()}`}
                    onClick={closeAll}
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={closeAll}>
                Contact
              </Link>
            </li>

          </ul>

          <div className="d-flex gap-2 me-lg-5 mt-3 mt-lg-0">
            <button className="btn btn-danger px-4" type="button">
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
