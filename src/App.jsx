import Lenis from 'lenis'
import SplitText from "../src/reactbits/SplitText";
import Nav from "./components/Nav";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from 'react';

const App = () => {
  const cursorref = useRef(null)

  const lenis = new Lenis({
  autoRaf: true,
  lerp:0.06,
  smoothTouch:true,
  ease: 'ease.inOut',

});
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.lagSmoothing(0);

  const cursor = function (e) {
    console.log(e)
    if(e.x < 0 || e.y <0) {
      gsap.to('.cursor',{
        opacity:0,
        duration:0.5,
        ease:"ease.in"
      })
    };
    gsap.to('.cursor',{
      x:e.x,
      y:e.y,
      opacity:1,
      duration:0.5,
      ease:"ease.inOut"
    })
  }

  document.addEventListener('mousemove',cursor)

  return (
    <div className="h-screen w-full">
      <div className='cursor opacity-0 flex justify-center items-center text-white font-gray-300 fixed w-18 h-18 rounded-full backdrop-blur z-69 bg-white/30'>scroll</div>
      <Nav />
      <div className="w-full h-auto flex items-center justify-center relative z-10">
        <SplitText
          text="GUCCI"
          className="text-[22rem] text-white tracking-widest font-semibold text-center -mt-10"
          delay={140}
          duration={1.2}
          ease="elastic1.out(1,0.3)"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </div>
      <img className="w-full h-auto aspect-[16/9] cover absolute top-0" src="../src/assets/woman.jpg" alt="" />
    </div>
  );
};

export default App;
