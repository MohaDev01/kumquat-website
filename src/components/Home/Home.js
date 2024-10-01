import React, { Suspense } from 'react';
import './Home.css';
const Hero = React.lazy(() => import('../Main/Hero/Hero.js'));
const Trust = React.lazy(() => import('../Main/Trust/Trust.js'));
const Features = React.lazy(() => import('../Main/Features/Features.js'));
const Integrations = React.lazy(() => import('../Main/Integrations/Integrations.js'));
const Templates = React.lazy(() => import('../Main/Templates/Templates.js'));
const Testimonials = React.lazy(() => import('../Main/Testimonials/Testimonials.js'));
const Plans = React.lazy(() => import('../Main/Plans/Plans.js'));

function Home () {
  return (
    <main className="Home" id='home'>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <Trust />
        <Features />
        <Integrations />
        <Templates />
        <Testimonials />
        <Plans />
      </Suspense>
    </main>
  );
}

export default Home;