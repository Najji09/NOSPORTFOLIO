import FrontPage from './forntpage';
import React from 'react';
import { useRef, useEffect } from 'react';
import Gallery from './portfoliopage';
import './App.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  const title = useRef();
  const q = gsap.utils.selector(title);
  useEffect(() => {
    gsap.from(q('.title_big'), {
      stagger: 0.3,
      x: 200,
      opacity: 0,
    });
  });
  return (
    <div className="App" ref={title}>
      <FrontPage refs={title} />
      <Gallery />
    </div>
  );
}

export default App;
