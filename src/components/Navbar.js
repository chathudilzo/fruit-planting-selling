import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png"; // Add the path to your logo image here

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="We Grow Logo" style={styles.logoImage} />
        <h2 style={styles.logoText}>We Grow</h2>
      </div>
      <ul style={styles.navLinks}>
        <li>
          <Link to="/" style={styles.navLink}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" style={styles.navLink}>
            Products
          </Link>
        </li>
        <li>
          <Link to="/about" style={styles.navLink}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" style={styles.navLink}>
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#28a745",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  logoImage: {
    width: "40px",
    height: "40px",
  },
  logoText: {
    color: "#fff",
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: 0,
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "500",
    padding: "8px 12px",
    borderRadius: "5px",
    transition: "background-color 0.3s, color 0.3s",
  },
  navLinkHover: {
    backgroundColor: "#fff",
    color: "#28a745",
  },
};

export default Navbar;
