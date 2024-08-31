import React, {useState} from 'react';
import pic10 from '../../../assets/pics/25.jpg';
import pic11 from '../../../assets/pics/26.jpg';
import pic12 from '../../../assets/pics/27.jpg';
import './Templates3.css';
function Templates3 () {
  const [imgSrc, setImgSrc] = useState(pic10);
  const handleToggle = (newSrc) => {
    setImgSrc(newSrc);
  };
  return (
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
          <img alt="pic" src={imgSrc} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default Templates3;