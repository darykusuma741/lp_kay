import { useBodyClass } from '../../common/hooks/useBodyClass';
import HomeAboutUs from './AboutUs/Home.AboutUs';
import HomeFeatures from './Features/Home.Features';
import HomeHero from './Hero/Home.Hero';

function Home() {
  useBodyClass('bg-black');

  return (
    <>
      <HomeHero />
      <HomeFeatures />
      <HomeAboutUs />
    </>
  );
}

export default Home;
