import { useBodyClass } from '../../hooks/useBodyClass';
import HomeAboutUs from './AboutUs/Home.AboutUs';
import HomeFeatures from './Features/Home.Features';
import HomeHero from './Hero/Home.Hero';

function Home() {
  useBodyClass('bg-black');

  return (
    <div className="">
      <HomeHero />
      <HomeFeatures />
      <HomeAboutUs />
    </div>
  );
}

export default Home;
