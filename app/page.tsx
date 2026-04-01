import Loader from '@/components/Loader';
import Cursor from '@/components/Cursor';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Works from '@/components/sections/Works';
import Testimonials from '@/components/sections/Testimonials';

export default function Home() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <Cursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Works />
        <Testimonials />
      </main>

      <Footer />
    </>
  );
}
