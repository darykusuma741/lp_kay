import HomeHeroContent from './Content/Home.Hero.Content';
import { MyBg } from '../../../common/components/MyBg';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const HomeHero: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contetntRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(contetntRef.current, {
      // rotate: 90,
      // filter: 'blur(10px)',
      yPercent: 50,
      scrollTrigger: {
        // pin: '.content',
        trigger: wrapperRef.current,
        start: 'bottom bottom',
        end: '+=100%',
        scrub: true
      }
    });
  });

  return (
    <div ref={wrapperRef}>
      <MyBg className="overflow-hidden justify-center items-center flex w-screen h-screen bg-midnight bg-center bg-cover bg-no-repeat">
        <div ref={contetntRef}>
          <HomeHeroContent />
        </div>
      </MyBg>
    </div>
  );
};

export default HomeHero;
