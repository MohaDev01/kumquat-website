import './Main.css';
import Hero from './MainContent/Hero.js';
import Trust from './MainContent/Trust.js';
import Features from './MainContent/Features/Features.js';
import Features2 from './MainContent/Features/Features2.js';
import Features3 from './MainContent/Features/Features3.js';
import Integrations from './MainContent/Integrations/Integrations.js';
import Integrations2 from './MainContent/Integrations/Integrations2.js';
import Templates from './MainContent/Templates/Templates.js';
import Templates2 from './MainContent/Templates/Templates2.js';
import Templates3 from './MainContent/Templates/Templates3.js';
import Templates4 from './MainContent/Templates/Templates4.js';
import Testimonials from './MainContent/Testimonials.js';
import Plans from './MainContent/Plans.js';

function Main () {
  return (
    <div className="Main" id='main'>
      <Hero />
      <Trust />
      <Features />
      <Features2 />
      <Features3 />
      <Integrations />
      <Integrations2 />
      <Templates />
      <Templates2 />
      <Templates3 />
      <Templates4 />
      <Testimonials />
      <Plans />
    </div>
  );
}

export default Main;