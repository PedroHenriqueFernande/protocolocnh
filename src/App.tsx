import { Hero } from './components/Hero';
import { DemoCarousel } from './components/DemoCarousel';
import { Benefits } from './components/Benefits';
import { IdealForYou } from './components/IdealForYou';
import { Urgency } from './components/Urgency';
import { Deliverables } from './components/Deliverables';
import { BonusAI } from './components/BonusAI';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

import { StickyPromoBar } from './components/StickyPromoBar';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <StickyPromoBar />
      <Hero />
      <DemoCarousel />
      <Benefits />
      <IdealForYou />
      <Urgency />
      <Deliverables />
      <BonusAI />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
