import HomeAboutUsContent from './Content/Home.AboutUs.Content';
import HomeAboutUsTitle from './Title/Home.AboutUs.Title';
import HomeAboutUsFact from './Fact/Home.AboutUs.Fact';
import { MyBg2 } from '../../../common/components/MyBg2';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';

const HomeAboutUs: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(containerRef.current, {
      yPercent: 50,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'bottom bottom',
        end: '+=100%',
        scrub: true
      }
    });
  });

  return (
    <MyBg2>
      <div
        ref={containerRef}
        className="w-screen flex flex-col gap-16 lg:py-36 py-20 lg:px-36 px-10 justify-center items-center bg-center bg-cover bg-no-repeat"
      >
        <HomeAboutUsTitle />
        <HomeAboutUsContent />
        <HomeAboutUsFact />
        <hr className="md:block hidden border-t border-charcoal w-160" />
        <button className="font-ibm py-[0.7rem] px-[1.8rem] text-[0.9rem] hover:cursor-pointer rounded-full transition-all duration-300 text-white bg-linear-to-r hover:to-sky from-sky/20 hover:from-indigo to-indigo/20">
          View Show Catalogue
        </button>
      </div>
    </MyBg2>
  );
};

export default HomeAboutUs;
