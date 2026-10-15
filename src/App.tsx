import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Gallery } from '@/components/Gallery';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { FloatingCall } from '@/components/FloatingCall';

function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-white font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingCall />
    </div>
  );
}

export default App;
