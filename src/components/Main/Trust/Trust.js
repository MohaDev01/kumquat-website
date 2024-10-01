import './Trust.css';
import canva from '../../../assets/canva.svg';
import shopify from '../../../assets/shopify.svg';
import wix from '../../../assets/wix.svg';
import acc from '../../../assets/adobe-creative-cloud.svg';
import hubspot from '../../../assets/hubspot.svg';
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
              <img alt="Canva" src={canva} className="img-fluid" loading="lazy" />
            </li>
            <li>
              <img alt="Shopify" src={shopify} className="img-fluid" loading="lazy" />
            </li>
            <li>
             <img alt="Wix" src={wix} className="img-fluid" loading="lazy" />
            </li>
            <li>
              <img alt="Adobe Creative Cloud" src={acc} className="img-fluid" loading="lazy" />
            </li>
            <li>
              <img alt="HubSpot" src={hubspot} className="img-fluid" loading="lazy" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Trust;