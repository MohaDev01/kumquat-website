import './Form.css';
import { useState } from 'react';
export default function Form () {
  const [ formStatus, setFormStatus ] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormStatus('Form submitted successfully.');
    event.target.reset();
  }
  return (
    <div className="container" id="form">
      <div className="row">
        <div className="col d-flex justify-content-center">
          <form onSubmit={handleSubmit}>
            <div className="col">
              <div className="row">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" aria-label="Your Name" required></input>
              </div>
              <div className="row">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" aria-label="Your Email" required></input>
              </div>
              <div className="row flex-column">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="5" aria-label="Your Message" required></textarea>
              </div>
              <div className="row">
                <button type="submit" className="btn btn-dark">
                  Submit
                </button>
              </div>
              {
                formStatus && (
                  <p className="status text-success">
                    {formStatus}
                  </p>
                )
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}