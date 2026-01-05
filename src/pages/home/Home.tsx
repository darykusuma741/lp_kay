import { useBodyClass } from '../../hooks/useBodyClass';
import HomeHeader from './Home.header';

function Home() {
  useBodyClass('bg-blue-50');

  return (
    <div className="relative w-screen h-screen overflow-x-scroll flex snap-x snap-mandatory">
      <HomeHeader />
      <div className="shrink-0 w-screen h-screen snap-start bg-sky-200 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Section 2</h1>
      </div>
    </div>
  );
}

export default Home;
