import { useRef } from 'react';
import aboutUsItem1 from '../../../../assets/frame-34.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const HomeAboutUsContent: React.FC = () => {
  const box = useRef<HTMLDivElement>(null);
  const imgAboutRef = useRef<HTMLImageElement>(null);
  const desRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const end = () => `+=60%`;
    const start = 'top bottom';
    gsap.from(imgAboutRef.current, {
      // rotate: 90,
      filter: 'blur(10px)',
      x: -100,
      scrollTrigger: {
        // pin: '.content',
        trigger: box.current,
        start: start,
        end: end,
        scrub: true
      }
    });
    gsap.from(desRef.current, {
      // rotate: 90,
      filter: 'blur(10px)',
      x: 100,
      scrollTrigger: {
        trigger: box.current,
        start: start,
        end: end,
        scrub: true
      }
    });

    // gsap.fromTo(
    //   imgAboutRef.current,
    //   { x: 0 },
    //   {
    //     // filter: 'blur(10px)',
    //     xPercent: 50,
    //     scrollTrigger: {
    //       pin: true,
    //       trigger: imgAboutRef.current,
    //       start: 'top center-=200',
    //       end: () => `+=50%`,
    //       scrub: true,
    //       markers: true
    //     }
    //   }
    // );
  });

  return (
    <div
      ref={box}
      className="flex-col lg:flex-row flex justify-between lg:gap-20 gap-9 items-center"
    >
      <div ref={imgAboutRef} className="relative min-w-70 w-full h-70  rounded-4xl">
        <img src={aboutUsItem1} className="h-full w-full object-cover rounded-4xl" />
        <h3 className="absolute text-orange-200 font-extrabold font-great-vibes -bottom-8 -right-12 -rotate-35 text-[2.5rem] text-center">
          Kay Digital
          <br />
          Studio
        </h3>
      </div>
      <div ref={desRef} className="flex flex-col gap-5 text-white">
        <p className="lg:text-[.9rem] text-[.8rem] leading-loose">
          Kay Digital Studio is a company engaged in information technology and interior
          development. We provide website development, mobile application development, and other
          digital solutions to support business growth in the modern era. In addition, Kay Digital
          Studio offers interior development services ranging from design to construction stages,
          focusing on aesthetics, functionality, and quality workmanship. In addition, Kay Digital
          Studio offers interior development services ranging from design to construction stages,
          focusing on aesthetics, functionality, and quality workmanship.
        </p>
        <h1 className="lg:text-[1.3rem] text-[1.2rem] font-thin italic">
          "A work of art is the result of emotions conveyed without words."
        </h1>
      </div>
    </div>
  );
};

export default HomeAboutUsContent;
