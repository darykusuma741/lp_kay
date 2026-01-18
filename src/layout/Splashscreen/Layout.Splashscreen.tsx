import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { useRef, useState } from 'react';

interface LayoutSplashScreenProps {
  children?: React.ReactNode;
}

const LayoutSplashScreen: React.FC<LayoutSplashScreenProps> = ({ children }) => {
  const component = useRef(null);
  const textFull = useRef(null);
  const [show, setShow] = useState(true);

  useGSAP(() => {
    const split = SplitText.create(textFull.current, {
      type: 'chars'
      // autoSplit: true
    });
    const tl = gsap.timeline({
      onComplete: () => {
        // animasi selesai → hide splash
        setTimeout(() => {
          setShow(false);
          split.revert(); // optional: kembalikan DOM asli
        }, 200);
      }
    });
    tl.from(
      split.chars,
      {
        opacity: 0,
        stagger: 0.1,
        y: 150,
        duration: 0.2
      },
      0.5
    )
      .from(
        split.chars,
        {
          letterSpacing: 0,
          stagger: 0.1,
          duration: 0.2
        },
        '-=1.6'
      )
      .to(textFull.current, {
        opacity: 0
      });
    // return () => split.revert();
  }, []);

  return (
    <>
      {!show ? (
        children
      ) : (
        <div
          ref={component}
          className="w-screen h-screen bg-midnight overflow-hidden flex justify-center items-center"
        >
          <div
            ref={textFull}
            className="text-white lg:text-8xl md:text-6xl sm:text-5xl text-4xl font-bebas-neue font-extrabold full-txt"
          >
            KAY DIGITAL STUDIO
          </div>
        </div>
      )}
    </>
  );
};

export { LayoutSplashScreen };
