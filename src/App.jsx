import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ExoapeStyleParallax() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1, // control scroll speed
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    lenis.on('scroll', ScrollTrigger.update);

    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    // Slow background scroll
    gsap.to('.bg-img', {
      yPercent: -30,
      scale: 1.1,
      ease: 'none',
      scrollTrigger: {
        trigger: '.section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Text fade in + move
    gsap.from('.heading', {
      y: 100,
      opacity: 0,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.heading',
        start: 'top 80%',
        end: 'top 40%',
        scrub: true,
      },
    });

    gsap.from('.paragraph', {
      y: 50,
      opacity: 0,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.paragraph',
        start: 'top 85%',
        end: 'top 50%',
        scrub: true,
      },
    });
  }, []);

  return (
    <div ref={scrollRef} className="bg-black text-white font-sans">
      <section className="section relative h-screen overflow-hidden">
        <div className="bg-img absolute top-0 left-0 w-full h-full -z-10">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
          <h1 className="heading text-6xl font-bold mb-4">Scroll Magic ✨</h1>
          <p className="paragraph text-xl max-w-xl">
            This is where your background scrolls slowly, your content fades in, and everything feels buttery smooth with Lenis + GSAP.
          </p>
        </div>
      </section>

      <section className="h-screen flex items-center justify-center bg-gray-900">
        <h2 className="text-4xl">More Sections Below...</h2>
      </section>
    </div>
  );
}
