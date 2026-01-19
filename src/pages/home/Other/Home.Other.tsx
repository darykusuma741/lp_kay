import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { useRef } from 'react';
import { HomeOtherTaniqu } from './Taniqu/Home.Other.Taniqu';

const HomeOther: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(containerRef.current, {
      height: 0,
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'top bottom',
        end: '+=100%',
        scrub: true
      }
    });

    gsap.fromTo(
      '.navbar',
      { background: 'var(--color-midnight)', color: 'var(--color-white)' },
      {
        background: 'var(--color-white)',
        color: 'var(--color-midnight)',
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'bottom-=20% bottom',
          end: '+=100',
          scrub: true
        }
      }
    );

    const splitText = SplitText.create(textRef.current, { type: 'chars' });
    const tmText = gsap.timeline({
      scrollTrigger: {
        pin: textRef.current,
        trigger: wrapperRef.current,
        start: 'center center-=25%',
        end: '+=50%',
        scrub: true
        // markers: true
      }
    });
    const mm = gsap.matchMedia();
    mm.add('(min-width: 640px)', () => {
      tmText.to(splitText.chars, {
        opacity: 0,
        x: 90,
        scale: 1.2,
        filter: 'blur(10px)',
        stagger: 0.1
      });
    });
  });

  return (
    <div className="bg-white">
      <div ref={wrapperRef} className="w-screen sm:h-screen h-[30vh]">
        <div
          ref={containerRef}
          className="w-screen sm:h-screen h-[30vh] bg-white flex justify-center items-center overflow-hidden"
        >
          <h1
            ref={textRef}
            className="text-center text-midnight sm:text-5xl text-2xl font-ibm font-thin max-w-[60%]"
          >
            There are also several applications that we have created!!
          </h1>
        </div>
      </div>
      <HomeOtherTaniqu />
    </div>
  );
};

export { HomeOther };
