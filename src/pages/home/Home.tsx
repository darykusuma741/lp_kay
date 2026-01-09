import { useBodyClass } from '../../common/hooks/useBodyClass';
import HomeAboutUs from './AboutUs/Home.AboutUs';
import HomeFeatures from './Features/Home.Features';
import HomeHeroFooter from './Footer/Home.Hero.Footer';
import HomeHero from './Hero/Home.Hero';

function Home() {
  useBodyClass('bg-black');

  return (
    <div className="">
      <HomeHero />
      <HomeFeatures />
      <HomeAboutUs />
      <HomeHeroFooter />
    </div>
  );
}

export default Home;
