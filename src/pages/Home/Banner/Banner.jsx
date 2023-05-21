import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: true, // Whether animation should only happen once
      easing: 'ease-out', // Easing function for animations
    });
  }, []);
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://envato-shoebox-0.imgix.net/79d9/f1c9-bd80-4b6b-8478-d0bcf1f5e8e2/2021052522.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1000&s=ce1d52ffdecd9bb6cbb0984e9b48fdee")` }}>
  <div className="hero-overlay bg-opacity-60 "></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      {/* <h1 className="mb-5 text-5xl font-bold">Hello Toy World</h1> */}
      <h1 className="mb-5 text-5xl font-bold" data-aos="fade-up">Hello Toy World</h1>
      <p className="mb-5">A magical place that brings joy and wonder to children and adults.</p>
      <button className="btn btn-primary">Shop Now</button>
    </div>
  </div>
</div>
    );
};

export default Banner;