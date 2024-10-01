import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';
import kumquat from '../../assets/kumquat3.png';
function Nav () {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="nav-bar">
      <a className="navbar-brand" href=".">
        <img src={kumquat} alt="Kumquat Logo" loading="lazy" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link className="nav-link text-secondary" to=".">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-secondary" to="/Products">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-secondary" to="/Pricing">Pricing</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link text-secondary" to="/About">About Us</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link text-secondary" to="/Contact">Contact</Link>
          </li>
        </ul>
        <ul className="navbar-nav d-flex flex-row justify-content-center">
          <li className="nav-item">
            <button className="btn btn-outline-dark bg-transparent border-0" aria-label="Log in">
              Log in
            </button>
          </li>
          <li className="nav-item">
            <button className="btn btn-dark" aria-label="Sign up">
              Sign up
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;