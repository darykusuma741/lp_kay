import { useBodyClass } from '../../hooks/useBodyClass';
import HomeHero from './Hero/Home.Hero';

function Home() {
  useBodyClass('bg-black');

  return (
    <div className="">
      <HomeHero />
    </div>
  );
}

export default Home;
