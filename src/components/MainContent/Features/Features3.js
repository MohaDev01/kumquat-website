import './Features3.css';
import pic4 from '../../../assets/pics/4.jpg';
import pic5 from '../../../assets/pics/5.jpg';
import pic6 from '../../../assets/pics/6.jpg';
function Features3 () {
  return (
    <div className="container-fluid" id="features3-section">
      <div className="container">
        <div className="row rows">
          <div className="col-md-6">
            <img src={pic4} className="img-fluid" />
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
            <img src={pic5} className="img-fluid" />
          </div>
        </div>
        <div className="row rows">
          <div className="col-md-6">
            <img src={pic6} className="img-fluid" />
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
  );
}

export default Features3;