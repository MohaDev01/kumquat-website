import './Pricing.css';
import React, { Suspense } from 'react';
const Message = React.lazy(() => import('../Message/Message'));
export default function Pricing () {
  return (
    <div className="container" id="pricing">
      <Suspense>
        <Message />
      </Suspense>
    </div>
  );
}