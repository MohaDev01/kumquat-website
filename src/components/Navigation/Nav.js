import './Nav.css';
import kumquat from '../../assets/kumquat3.png';
function Nav () {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="nav-bar">
      <a className="navbar-brand" href=".">
        <img src={kumquat} alt="Logo"/>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <a className="nav-link text-secondary" href=".">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary" href="#Products">Products</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary" href="#Pricing">Pricing</a>
          </li>
          <li className="nav-item">
              <a className="nav-link text-secondary" href="#About">About Us</a>
          </li>
          <li className="nav-item">
              <a className="nav-link text-secondary" href="#footer-section">Contact</a>
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