import './Footer.css';
function Footer () {
  return (
    <div className="container-fluid text-center" id="footer-section">
      <div className="row">
        <div className="col-md-3 col-6 col">
          <h3>PRODUCTS</h3>
          <ul className='d-flex flex-column text-justify'>
            <li>
              <a className="link" href='#'>All Products</a>
            </li>
            <li>
              <a className="link" href='#'>Templates</a>
            </li>
            <li>
              <a className="link" href='#'>Designs</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 col-6 col">
          <h3>RESOURCES</h3>
          <ul className='d-flex flex-column text-justify'>
            <li>
              <a className="link" href='#'>FAQ</a>
            </li>
            <li>
              <a className="link" href='#'>Blog</a>
            </li>
            <li>
              <a className="link" href='#'>Support</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 col-6 col">
          <h3>LEGAL</h3>
          <ul className='d-flex flex-column text-justify'>
            <li>
              <a className="link" href='#'>Privacy</a>
            </li>
            <li>
              <a className="link" href='#'>Terms</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 col-6 col">
          <h3>ABOUT</h3>
          <ul className='d-flex flex-column text-justify'>
            <li>
              <a className="link" href='#'>About Us</a>
            </li>
            <li>
              <a className="link" href='#'>Contact</a>
            </li>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/mohamedabdulrahmanyounis/" target="_blank">
                  <img src="https://mohadev01.github.io/icons/w-linkedin-com.png" alt="LinkedIn"/>
                </a>
              </li>
              <li>
                <a href="https://github.com/MohaDev01" target="_blank">
                  <img src="https://mohadev01.github.io/icons/w-github-com.png" alt="GitHub"/>
                </a>
              </li>
              <li>
                <a href="mailto:mohamedabdulrahmanyounis@gmail.com" target="_blank">
                  <img src="https://mohadev01.github.io/icons/w-mail-com.png" alt="Mail"/>
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;