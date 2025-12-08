import { Hero } from './components/Hero';
import { DemoCarousel } from './components/DemoCarousel';
import { Benefits } from './components/Benefits';
import { Urgency } from './components/Urgency';
import { Deliverables } from './components/Deliverables';
import { BonusAI } from './components/BonusAI';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <DemoCarousel />
      <Benefits />
      <Urgency />
      <Deliverables />
      <BonusAI />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
