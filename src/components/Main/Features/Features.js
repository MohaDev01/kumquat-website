import './Features.css';
import pic from "../../../assets/pics/1.webp";
import pic2 from "../../../assets/pics/28.webp";
import pic3 from "../../../assets/pics/3.webp";
import pic4 from '../../../assets/pics/4.webp';
import pic5 from '../../../assets/pics/5.webp';
import pic6 from '../../../assets/pics/6.webp';

function Features() {
  return (
    <div>
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
              <img src={pic} className="card-img-top" alt="Custom" loading="lazy" />
              <div className="card-body">
                <p className="card-title">For Easy Customization</p>
                <p className="card-text">Empower your audience to engage, purchase, or download with design templates that capture essential details—like name and email.</p>
                <a className="card-link" href="/templates">Browse Digital Templates</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 cols">
            <div className="card border-0">
              <img src={pic2} className="card-img-top" alt="Feedback" loading="lazy" />
              <div className="card-body">
                <p className="card-title">For Customer Insights</p>
                <p className="card-text">Understand your audience's experience with products or services using templates that allow them to rank, rate, and share their feedback.</p>
                <a className="card-link" href="/templates">Browse Feedback Templates</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 cols">
            <div className="card border-0">
              <img src={pic3} className="card-img-top" alt="Transactions" loading="lazy" />
              <div className="card-body">
                <p className="card-title">For Seamless Transactions</p>
                <p className="card-text">Sell your digital products effortlessly with templates that enable secure checkouts and smooth payment processing.</p>
                <a className="card-link" href="/templates">Browse Order Templates</a>
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

      <div className="container-fluid text-center" id="features2-section">
        <div className="row">
          <div className="col-lg-12">
            <p className="card-text">With Our Digital Assets, You Can...</p>
          </div>
        </div>
      </div>

      <div className="container-fluid" id="features3-section">
        <div className="container">
          <div className="row rows">
            <div className="col-md-6">
              <img src={pic4} className="img-fluid" alt="Stunning Designs" loading="lazy" />
            </div>
            <div className="col-md-6">
              <div className="card border-0">
                <div className="card-body">
                  <span>Create <strong>Stunning</strong> and Unique Designs</span>
                  <p className="card-text">Use brand kits to add logos, colors, and styles to your forms, then smoothly embed them in landing pages and emails without any coding.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row rows">
            <div className="col-md-6">
              <div className="card border-0">
                <div className="card-body">
                  <span>Engage Users <strong>More Effectively</strong></span>
                  <p className="card-text">Personalize interactions by addressing users by name, tailoring follow-up questions, and concluding with a personal touch.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src={pic5} className="img-fluid" alt="User Engagement" loading="lazy" />
            </div>
          </div>
          <div className="row rows">
            <div className="col-md-6">
              <img src={pic6} className="img-fluid" alt="Seamless Experience" loading="lazy" />
            </div>
            <div className="col-md-6">
              <div className="card border-0">
                <div className="card-body">
                  <span>Create a <strong>Seamless</strong> Experience</span>
                  <p className="card-text">Utilize advanced features to build interactive forms, schedule appointments, perform calculations, and automate personalized follow-ups.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
