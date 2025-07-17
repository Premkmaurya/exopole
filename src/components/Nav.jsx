import SplitText from "../reactbits/SplitText";
import gucciLogo from "../assets/gucci-logo.png";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";


gsap.registerPlugin(ScrollTrigger)
const Nav = () => {
  const navRef = useRef(null);
  
useEffect(() => {
  const nav = navRef.current;
  if (!nav) return;

  const hideNav = gsap.to(nav, {
    y: -5,
    paused: true,
    autoAlpha: 0,
    duration: 0.5,
    ease: "ease.inOut",
  });

  ScrollTrigger.create({
    trigger: nav,
    start: "top top",
    end: "+=50",
    onEnter: () => hideNav.play(),
    onLeaveBack: () => hideNav.reverse(),
    scrub: true,
  });

  return () => {
    hideNav.kill();
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);


  return (
    <div className="relative z-20 w-full h-[10vh] flex items-center justify-between py-15 px-14">
      <nav ref={navRef} className="flex items-center justify-between w-full">
        <img src={gucciLogo} alt="Gucci Logo" className="h-[2rem] w-[2rem]" />
        <ul className="flex items-center uppercase justify-between gap-5 text-white font-semibold">
          <li>
            <SplitText
              text="home"
              className="text-sm text-white tracking-tight font-bold text-center"
              delay={100}
              duration={1.1}
              ease="elastic1.out(1,0.3)"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </li>
          <li>
            <SplitText
              text="products"
              className="text-sm text-white tracking-tight font-semibold text-center"
              delay={100}
              duration={1.1}
              ease="elastic1.out(1,0.3)"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </li>
          <li>
            <SplitText
              text="our story"
              className="text-sm text-white tracking-tight font-semibold text-center"
              delay={100}
              duration={1.1}
              ease="elastic1.out(1,0.3)"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
