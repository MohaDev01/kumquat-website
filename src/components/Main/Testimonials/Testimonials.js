import './Testimonials.css';
import EvanRidgePic from '../../../assets/wendell.webp';
function Testimonials () {
  return (
    <section className="container text-center" id="testimonials-section">
      <div className="row">
        <div className="col-md-12">
          <h2 className="card-text">We've seen 3x more engagement with our digital products than through traditional market research.</h2>
          <img src={EvanRidgePic} className="img-fluid" alt="Evan Ridge Image" loading="lazy" />
          <h6>Evan Ridge</h6>
          <p>Sr. Product Marketing Manager, VersaDyne</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;