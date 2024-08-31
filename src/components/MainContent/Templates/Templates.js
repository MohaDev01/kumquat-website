import './Templates.css';
import pic7 from '../../../assets/pics/7.jpg';
import pic8 from '../../../assets/pics/8.jpg';
import pic9 from '../../../assets/pics/9.jpg';
function Templates () {
  return (
    <div className="container-fluid" id="templates-section">
      <div className="row text-center">
        <div className="col-md-12">
          <h1>Start with a Top Digital Product Template</h1>
        </div>
      </div>
      <div className="row text-justify">
        <div className="col-lg-4 cols">
          <div className="card border-0">
            <img alt="pic" src={pic7} className="card-img-top" />
            <div className="card-body">
              <p>Online Registration Template</p>
              <p className="card-text">Boost sign-ups with this user-friendly and fully customizable design.</p>
              <a className="card-link" href="#">Try it out</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 cols">
          <div className="card border-0">
            <img alt="pic" src={pic8} className="card-img-top" />
            <div className="card-body">
              <p>Lead Generation Template</p>
              <p className="card-text">Attract and convert prospects with this ready-to-use solution.</p>
              <a className="card-link" href="#">Try it out</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 cols">
          <div className="card border-0">
            <img alt="pic" src={pic9} className="card-img-top" />
            <div className="card-body">
              <p>Customer Feedback Template</p>
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
    </div>
  );
}

export default Templates;