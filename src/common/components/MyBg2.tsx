import { useRef } from 'react';
import blt1 from '../../assets/blt1.png';
import blt2 from '../../assets/blt2.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface MyBg2Props {
  className?: string;
  children?: React.ReactNode;
}

const MyBg2: React.FC<MyBg2Props> = ({ className, children }) => {
  const box = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLImageElement>(null);
  const image2Ref = useRef<HTMLImageElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(image1Ref.current, {
      rotate: 50,
      y: 190,
      scrollTrigger: {
        // pin: '.content',
        trigger: box.current,
        start: 'top bottom',
        end: () => `+=${box.current!.offsetHeight}`,
        scrub: true
        // markers: true
      }
    });
    gsap.from(image2Ref.current, {
      rotate: 50,
      y: -190,
      scrollTrigger: {
        // pin: '.content',
        trigger: box.current,
        start: 'top center',
        end: () => `+=${box.current!.offsetHeight}`,
        scrub: true
        // markers: true
      }
    });
    gsap.from(bgRef.current, {
      scale: 0.7,
      borderRadius: 90,
      scrollTrigger: {
        // pin: '.content',
        trigger: box.current,
        start: 'top bottom-=100',
        end: () => `+=80%`,
        scrub: true
      }
    });
  });

  return (
    <div ref={box} className={`${className} relative overflow-hidden`}>
      <div className="-z-12 absolute w-full h-full bg-white"></div>
      <div
        ref={bgRef}
        className="-z-11 absolute w-full h-full bg-midnight"
        style={{ scale: 1.0 }}
      ></div>
      <img
        ref={image1Ref}
        // style={{ y: y1, rotate: rotate1 }}
        className="absolute opacity-50 sm:top-[-26%]  top-[-9%] left-[-15%] sm:w-[60vw] w-90 -z-10"
        src={blt1}
      />
      <img
        ref={image2Ref}
        // style={{ y: y2, rotate: rotate2 }}
        className="absolute opacity-50 sm:bottom-[-26%] bottom-[-5%] right-[-20%] sm:w-[60vw] w-200 -z-10"
        src={blt2}
      />
      {children}
    </div>
  );
};

export { MyBg2 };
