import React, { useState } from 'react';
import './Templates.css'; // Combine all styles into one CSS file
import pic7 from '../../../assets/pics/7.jpg';
import pic8 from '../../../assets/pics/8.jpg';
import pic9 from '../../../assets/pics/9.jpg';
import pic10 from '../../../assets/pics/25.jpg';
import pic11 from '../../../assets/pics/26.jpg';
import pic12 from '../../../assets/pics/27.jpg';

function TemplatesCombined() {
  const [imgSrc, setImgSrc] = useState(pic10);
  
  const handleToggle = (newSrc) => {
    setImgSrc(newSrc);
  };

  return (
    <div>
      <section className="container-fluid" id="templates-section">
        <div className="row text-center">
          <div className="col-md-12">
            <h1>Start with a Top Digital Product Template</h1>
          </div>
        </div>
        <div className="row text-justify">
          <div className="col-lg-4 cols">
            <div className="card border-0">
              <img alt="Card Image" src={pic7} className="card-img-top" loading="lazy" />
              <div className="card-body">
                <p className="card-title">Online Registration Template</p>
                <p className="card-text">Boost sign-ups with this user-friendly and fully customizable design.</p>
                <a className="card-link" href="#">Try it out</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 cols">
            <div className="card border-0">
              <img alt="Card Image2" src={pic8} className="card-img-top" loading="lazy" />
              <div className="card-body">
                <p className="card-title">Lead Generation Template</p>
                <p className="card-text">Attract and convert prospects with this ready-to-use solution.</p>
                <a className="card-link" href="#">Try it out</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 cols">
            <div className="card border-0">
              <img alt="Card Image3" src={pic9} className="card-img-top" loading="lazy" />
              <div className="card-body">
                <p className="card-title">Customer Feedback Template</p>
                <p className="card-text">Gain valuable insights and enhance customer experiences with this template.</p>
                <a className="card-link" href="#">Try it out</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-lg-12">
            <button className="btn btn-dark px-4 py-2">
              Browse all templates
            </button>
          </div>
        </div>
      </section>

      <div className="container-fluid text-center" id="templates2-section">
        <div className="row">
          <div className="col-md-12">
            <p className="card-text">Or Create a New Design Effortlessly</p>
          </div>
        </div>
      </div>

      <div className="container" id="templates3-section">
        <div className="row">
          <div className="col-lg-6">
            <ul className="d-flex flex-column">
              <details onToggle={() => handleToggle(pic10)}>
                <summary>
                  <button className="border-0 bg-transparent">
                    <h2>1. Build</h2>
                  </button>
                </summary>
                <div>
                  <p>Use our templates and 20+ design resources to create your digital product, then customize it to perfectly align with your brand.</p>
                </div>
              </details>
              <details onToggle={() => handleToggle(pic11)}>
                <summary>
                  <button className="border-0 bg-transparent">
                    <h2>2. Share</h2>
                  </button>
                </summary>
                <div>
                  <p>Obtain a link to showcase your product on social media or use ready-made code to integrate it into emails and landing pages.</p>
                </div>
              </details>
              <details onToggle={() => handleToggle(pic12)}>
                <summary>
                  <button className="border-0 bg-transparent">
                    <h2>3. Analyze</h2>
                  </button>
                </summary>
                <div>
                  <p>Review the data collected and receive insights on optimizing your design to enhance engagement and effectiveness.</p>
                </div>
              </details>
            </ul>
          </div>
          <div className="col-lg-6">
            <img alt="Design Image" src={imgSrc} className="img-fluid" loading="lazy" />
          </div>
        </div>
      </div>

      <div className="container-fluid text-center" id="templates4-section">
        <div className="row">
          <div className="col-md-12">
            <button className='btn btn-dark px-5 py-2'>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplatesCombined;
