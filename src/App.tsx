import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Programs from './components/Programs';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-if-bg">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Programs />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
