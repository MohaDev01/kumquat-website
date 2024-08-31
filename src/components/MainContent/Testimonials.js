import './Testimonials.css';
import Tesla from '../../assets/wendell.png';
function Testimonials () {
  return (
    <div className="container text-center" id="testimonials-section">
      <div className="row">
        <div className="col-md-12">
          <h2 className="card-text">We've seen 3x more engagement with our digital products than through traditional market research.</h2>
          <img src={Tesla} className="img-fluid" alt="pic" />
          <h6>Evan Ridge</h6>
          <p>Sr. Product Marketing Manager, VersaDyne</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;