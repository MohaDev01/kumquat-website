import './Products.css';
import React, { Suspense } from 'react';
const Message = React.lazy(() => import('../Message/Message'));
export default function Products () {
  return (
    <section className="container" id="products">
      <Suspense>
        <Message />
      </Suspense>
    </section>
  );
}