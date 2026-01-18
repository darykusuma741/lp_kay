import { gsap } from 'gsap';
import { ScrollSmoother, ScrollTrigger } from 'gsap/all';

import mountains from '../../assets/parallax/parallax1/Mountains.png';
import bgSky from '../../assets/parallax/parallax1/Bg_Sky.png';
import clouds01 from '../../assets/parallax/parallax1/clouds01.png';
import clouds05 from '../../assets/parallax/parallax1/clouds05.png';
import clouds03 from '../../assets/parallax/parallax1/clouds03.png';
import clouds09 from '../../assets/parallax/parallax1/clouds09.png';
import explorer from '../../assets/parallax/parallax1/Explorer.png';
import cave from '../../assets/parallax/parallax1/Cave.png';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

function Indonesia() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mountainsRef = useRef<HTMLImageElement>(null);
  const bgSkyRef = useRef<HTMLImageElement>(null);
  const caveRef = useRef<HTMLImageElement>(null);
  const explorerRef = useRef<HTMLImageElement>(null);
  const clouds01Ref = useRef<HTMLImageElement>(null);
  const clouds05Ref = useRef<HTMLImageElement>(null);
  const clouds03Ref = useRef<HTMLImageElement>(null);
  const clouds09Ref = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      ScrollSmoother.create({
        wrapper: containerRef.current,
        content: contentRef.current,
        smooth: 1.5,
        effects: true,
        smoothTouch: 0.2
      });

      const start = 'top+=7.5% center';
      const end = '+=600';
      gsap.to(mountainsRef.current, {
        scale: 1.1,
        xPercent: 4,
        ease: 'none',
        yPercent: 35,
        scrollTrigger: {
          start: start,
          end: end,
          scrub: true
          // markers: true
        }
      });

      gsap.to(bgSkyRef.current, {
        scale: 1.05,
        ease: 'none',
        yPercent: 15,
        scrollTrigger: {
          start: start,
          end: end,
          scrub: true
          // markers: true
        }
      });

      const start2 = 'top+=14.5% center';
      const end2 = '+=300';
      gsap.to(explorerRef.current, {
        scale: 1.4,
        ease: 'none',
        yPercent: 78,
        scrollTrigger: {
          start: start2,
          end: end2,
          scrub: true
          // markers: true
        }
      });
      gsap.to(caveRef.current, {
        scale: 1.0,
        ease: 'none',
        // yPercent: 78,
        scrollTrigger: {
          start: start2,
          end: end2,
          scrub: true
          // markers: true
        }
      });

      gsap.defaults({ duration: 2, ease: 'sine' });
      const tl = gsap.timeline();
      tl.from(clouds01Ref.current, { scale: 2.05, yPercent: 14, xPercent: -14 }, 0.2);
      tl.from(clouds05Ref.current, { scale: 3.05, yPercent: -30, xPercent: 24 }, 0.6);
      tl.from(clouds03Ref.current, { scale: 3.05, yPercent: 10, xPercent: 20 }, 0.9);
      tl.from(clouds09Ref.current, { scale: 3.05, yPercent: 10, xPercent: 20 }, 1.3);
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <div ref={contentRef} className="content bg-black relative" style={{ height: '6000px' }}>
        <img
          ref={bgSkyRef}
          className="absolute w-full xl:top-[-13%] lg:top-[-12%] md:top-[-10%] sm:top-[-5%] top-[0%] md:scale-100 sm:scale-120 scale-220"
          src={bgSky}
        />
        <img
          ref={mountainsRef}
          className="w-full absolute sm:top-[6%] top-[9%] scale-125"
          src={mountains}
        />
        <img
          data-speed=".4"
          ref={clouds01Ref}
          className="absolute w-full right-[-30%] md:top-[-9%] sm:top-[-3%] top-[7%]"
          src={clouds01}
        />
        <img
          data-speed=".4"
          ref={clouds05Ref}
          className="absolute w-full sm:left-[-30%] left-[-70%] sm:top-[-9%] top-[8%]"
          src={clouds05}
        />
        <img
          data-speed=".4"
          ref={clouds03Ref}
          className="absolute w-full sm:right-[-63%] right-[-53%] top-[11%]"
          src={clouds03}
        />
        <img
          data-speed=".4"
          ref={clouds09Ref}
          className="absolute w-full sm:left-[-93%] left-[-33%] top-[3%]"
          src={clouds09}
        />
        <img ref={caveRef} className="absolute w-full top-[10%] scale-370" src={cave} />
        <img ref={explorerRef} className="absolute w-full top-[19%] scale-100" src={explorer} />
        <div className="bg-black w-full h-full top-[26.5%] absolute"></div>
      </div>
    </div>
  );
}

export default Indonesia;
