import './Features.css';
import pic from "../../../assets/pics/1.jpg";
import pic2 from "../../../assets/pics/28.png";
import pic3 from "../../../assets/pics/3.jpg";
function Features () {
  return (
    <section className="container-fluid" id="features-section">
      <div className="row text-center">
        <div className="col-md-12">
          <h1>Power Every Creative Project</h1>
          <h6>With 28+ Versatile Design Resources</h6>
        </div>
      </div>
      <div className="row text-justify">
        <div className="col-lg-4 cols">
          <div className="card border-0">
            <img src={pic} className="card-img-top" />
            <div className="card-body">
              <p>For Easy Customization</p>
              <p className="card-text">Empower your audience to engage, purchase, or download with design templates that capture essential details—like name and email.</p>
              <a className="card-link" href="#">Browse Digital Templates</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 cols">
          <div className="card border-0">
            <img src={pic2} className="card-img-top" />
            <div className="card-body">
              <p>For Customer Insights</p>
              <p className="card-text">Understand your audience's experience with products or services using templates that allow them to rank, rate, and share their feedback.</p>
              <a className="card-link" href="#">Browse Feedback Templates</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 cols">
          <div className="card border-0">
            <img src={pic3} className="card-img-top" />
            <div className="card-body">
              <p>For Seamless Transactions</p>
              <p className="card-text">Sell your digital products effortlessly with templates that enable secure checkouts and smooth payment processing.</p>
              <a className="card-link" href="#">Browse Order Templates</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-lg-12">
          <button className="btn btn-dark px-5 py-2">
            Sign up
          </button>
        </div>
      </div>
    </section>
  );
}

export default Features;