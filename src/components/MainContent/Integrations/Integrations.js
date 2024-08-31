import './Integrations.css';
import asana from "../../../assets/asana.svg";
import trello from "../../../assets/trello.svg";
import mailchimp from "../../../assets/mailchimp.svg";
import dropbox from "../../../assets/dropbox.svg";
import notion from "../../../assets/notion.svg";
import stripe from "../../../assets/stripe.svg";
function Integrations () {
  return (
    <div className="container-fluid text-center" id="integrations-section">
      <div className="row">
        <div className="col-lg-12">
          <h2>Integrates with all your essential apps</h2>
          <ul className="d-flex justify-content-center my-5">
            <li>
              <img alt="pic" src={asana} className="img-fluid" />
              <p>Asana</p>
            </li>
            <li>
              <img alt="pic" src={trello} className="img-fluid" />
              <p>Trello</p>
            </li>
            <li>
              <img alt="pic" src={mailchimp} className="img-fluid" />
              <p>Mailchimp</p>
            </li>
            <li>
              <img alt="pic" src={dropbox} className="img-fluid" />
              <p>Dropbox</p>
            </li>
            <li>
              <img alt="pic" src={notion} className="img-fluid" />
              <p>Notion</p>
            </li>
            <li>
              <img alt="pic" src={stripe} className="img-fluid" />
              <p>Stripe</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Integrations;