import './Hero.css';
import gif from '../../../assets/hero.gif';
function Hero () {
  return (
    <section className="container-fluid" id="hero-section">
      <div className="row bg-body">
        <div className="col-lg-6 cols">
          <div className="card border-0">
            <div className="card-body">
              <h1 className="card-title mb-4">The Ultimate Digital Product Collection</h1>
              <p className="card-text mb-5">Craft <strong>stunning digital assets</strong> designed to elevate your projects. Try for free.</p>
              <button className="btn btn-dark px-5 py-3">
                Explore Products
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 cols">
          <img src={gif} alt="Animated Hero" className="img-fluid" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export default Hero;