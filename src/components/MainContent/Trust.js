import './Trust.css';
import canva from '../../assets/canva.svg';
import shopify from '../../assets/shopify.svg';
import wix from '../../assets/wix.svg';
import acc from '../../assets/adobe-creative-cloud.svg';
import hubspot from '../../assets/hubspot.svg';
function Trust () {
  return (
    <section className="container-fluid text-center" id="trust-section">
      <div className="row">
        <div className="col-md-12">
          <h1>65% of Top Creators Rely on Our Digital Assets</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 bg-transparent">
          <ul className="d-flex justify-content-center">
            <li>
              <img alt="pic" src={canva} className="img-fluid" />
            </li>
            <li>
              <img alt="pic" src={shopify} className="img-fluid" />
            </li>
            <li>
             <img alt="pic" src={wix} className="img-fluid" />
            </li>
            <li>
              <img alt="pic" src={acc} className="img-fluid" />
            </li>
            <li>
              <img alt="pic" src={hubspot} className="img-fluid" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Trust;