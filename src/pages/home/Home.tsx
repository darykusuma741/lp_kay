import { useBodyClass } from '../../hooks/useBodyClass';
import HomeFeatures from './Features/Home.Features';
import HomeHero from './Hero/Home.Hero';

function Home() {
  useBodyClass('bg-black');

  return (
    <div className="">
      <HomeHero />
      <HomeFeatures />
    </div>
  );
}

export default Home;
