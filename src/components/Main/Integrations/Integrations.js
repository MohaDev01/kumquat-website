import './Integrations.css';
import asana from "../../../assets/asana.svg";
import trello from "../../../assets/trello.svg";
import mailchimp from "../../../assets/mailchimp.svg";
import dropbox from "../../../assets/dropbox.svg";
import notion from "../../../assets/notion.svg";
import stripe from "../../../assets/stripe.svg";

function Integrations() {
  return (
    <section className="container-fluid text-center" id="integrations-section">
      <div className="row">
        <div className="col-lg-12">
          <h2>Integrates with all your essential apps</h2>
          <ul className="d-flex justify-content-center my-5">
            {[{src: asana, name: "Asana"}, {src: trello, name: "Trello"}, {src: mailchimp, name: "Mailchimp"}, 
              {src: dropbox, name: "Dropbox"}, {src: notion, name: "Notion"}, {src: stripe, name: "Stripe"}]
              .map((item, index) => (
                <li key={index}>
                  <img alt={item.name} src={item.src} className="img-fluid" loading="lazy" />
                  <p>{item.name}</p>
                </li>
            ))}
          </ul>
          <div className="col-md-12">
            <button className="btn btn-dark">Sign up</button>
            <button className="btn btn-outline-dark">Browse all integrations</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Integrations;
