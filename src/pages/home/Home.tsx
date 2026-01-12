import ScrollToTopOnMount from '../../common/hooks/ScrollToTopOnMount';
import { useBodyClass } from '../../common/hooks/useBodyClass';
import HomeAboutUs from './AboutUs/Home.AboutUs';
import HomeFeatures from './Features/Home.Features';
import HomeHero from './Hero/Home.Hero';
import HomeWeuse from './weuse/Home.Weuse';

function Home() {
  useBodyClass('bg-black');

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
