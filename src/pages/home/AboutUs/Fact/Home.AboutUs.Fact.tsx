import { useGSAP } from '@gsap/react';
import HomeAboutUsFactItems from './Home.AboutUs.Fact.Items';
import { useRef } from 'react';
import gsap from 'gsap';

const HomeAboutUsFact: React.FC = () => {
  const aboutUsFactRef = useRef<HTMLDivElement | null>(null);
  const aboutUsContainerFactRef = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    gsap.from(aboutUsFactRef.current, {
      opacity: 0,
      y: 170,
      filter: 'blur(20px)',
      scrollTrigger: {
        // pin: '.content',
        trigger: aboutUsContainerFactRef.current,
        start: 'top-=60 bottom',
        end: () => `+=30%`,
        scrub: true
      }
    });
  });
  return (
    <div ref={aboutUsContainerFactRef}>
      <div ref={aboutUsFactRef} className="flex flex-row md:gap-20 gap-8 justify-center">
        <HomeAboutUsFactItems
          title="K+"
          value={29}
          subtitle="Customer Join"
          subtitle2="to find you here"
        />
        <HomeAboutUsFactItems title="%" value={100} subtitle="Trulyhired" subtitle2="by unicorns" />
        <HomeAboutUsFactItems
          title="%"
          value={98}
          subtitle="Qualified Devs"
          subtitle2="for your team"
        />
      </div>
    </div>
  );
};

export default HomeAboutUsFact;
