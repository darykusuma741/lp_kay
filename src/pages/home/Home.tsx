import { useGSAP } from '@gsap/react';
import ScrollToTopOnMount from '../../common/hooks/ScrollToTopOnMount';
import { useBodyClass } from '../../common/hooks/useBodyClass';
import HomeAboutUs from './AboutUs/Home.AboutUs';
import HomeFeatures from './Features/Home.Features';
import HomeHero from './Hero/Home.Hero';
import HomeWeuse from './weuse/Home.Weuse';
import { ScrollSmoother } from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(ScrollSmoother);

function Home() {
  useBodyClass('bg-black');
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: '.container',
      content: '.content',
      smooth: 2.5,
      effects: true,
      smoothTouch: 0.2
    });
  });

  return (
    <>
      <ScrollToTopOnMount />
      <HomeHero />
      <HomeWeuse />
      <HomeFeatures />
      <HomeAboutUs />
    </>
  );
}

export default Home;
