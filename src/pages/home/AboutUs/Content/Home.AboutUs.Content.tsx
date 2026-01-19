import { useRef } from 'react';
import aboutUsItem1 from '../../../../assets/about-us-item-1.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const HomeAboutUsContent: React.FC = () => {
  const box = useRef<HTMLDivElement>(null);
  const imgAboutRef = useRef<HTMLImageElement>(null);
  const desRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    gsap.from(imgAboutRef.current, {
      // rotate: 90,
      filter: 'blur(10px)',
      x: -100,
      scrollTrigger: {
        // pin: '.content',
        trigger: box.current,
        start: 'top bottom',
        end: () => `+=50%`,
        scrub: true
      }
    });
    gsap.from(desRef.current, {
      // rotate: 90,
      filter: 'blur(10px)',
      x: 100,
      scrollTrigger: {
        trigger: box.current,
        start: 'top bottom',
        end: () => `+=50%`,
        scrub: true
      }
    });
  });

  return (
    <div
      ref={box}
      className="flex-col lg:flex-row flex justify-between lg:gap-31 gap-10 items-center"
    >
      <img ref={imgAboutRef} src={aboutUsItem1} className="w-100" />
      <p ref={desRef} className="text-white lg:text-[.9rem] text-[.8rem] leading-loose">
        Kay Digital Studio is a company engaged in information technology and interior development.
        We provide website development, mobile application development, and other digital solutions
        to support business growth in the modern era. In addition, Kay Digital Studio offers
        interior development services ranging from design to construction stages, focusing on
        aesthetics, functionality, and quality workmanship. In addition, Kay Digital Studio offers
        interior development services ranging from design to construction stages, focusing on
        aesthetics, functionality, and quality workmanship.
      </p>
    </div>
  );
};

export default HomeAboutUsContent;
