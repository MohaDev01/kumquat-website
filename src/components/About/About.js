import './About.css';
import React, { Suspense } from 'react';
const Message = React.lazy(() => import('../Message/Message'));
export default function About () {
  return (
    <div className="container" id="about">
      <Suspense>
        <Message />
      </Suspense>
    </div>
  );
}