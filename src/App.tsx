import { Hero } from './components/Hero';
import { DemoCarousel } from './components/DemoCarousel';
import { Benefits } from './components/Benefits';
import { ForWho } from './components/ForWho';
import { Urgency } from './components/Urgency';
import { Deliverables } from './components/Deliverables';
import { BonusAI } from './components/BonusAI';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <DemoCarousel />
      <Benefits />
      <ForWho />
      <Urgency />
      <Deliverables />
      <BonusAI />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
