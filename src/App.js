import './App.css';
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
const Nav = React.lazy(() => import('./components/Navigation/Nav.js'));
const Home = React.lazy(() => import('./components/Home/Home.js'));
const Products = React.lazy(() => import('./components/Products/Products.js'));
const Pricing = React.lazy(() => import('./components/Pricing/Pricing.js'));
const About = React.lazy(() => import('./components/About/About.js'));
const Contact = React.lazy(() => import('./components/Contact/Contact.js'));
const Footer = React.lazy(() => import('./components/Footer/Footer.js'));

function App() {
  return (
    <Suspense fallback={<div className="loader">Loading...</div>}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Suspense>
  );
}

export default App;