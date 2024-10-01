import './Contact.css';
import React, { Suspense } from 'react';
const Form = React.lazy(() => import('./Form'));
export default function Contact () {
  return (
    <div className="container" id="contact">
      <Suspense>
        <Form />
      </Suspense>
    </div>
  );
}