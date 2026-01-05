import { useBodyClass } from '../../hooks/useBodyClass';
import HomeHeader from './Home.header';

function Home() {
  useBodyClass('bg-black');

  return (
    <div className="relative w-screen h-screen overflow-x-scroll flex snap-x snap-mandatory">
      <HomeHeader />
      <div className="relative overflow-hidden shrink-0 w-screen h-screen snap-start bg-linear-to-br from-sky-800 to-black flex items-center justify-center">
        <p
          className="
        absolute
      select-none
      pointer-events-none
      text-[3rem]
      font-light
      tracking-tight
      bg-linear-to-r from-white/60 to-white/4
      bg-clip-text
      text-transparent
      sm:text-[5rem]
    "
        >
          <span className="font-extrabold">DEPOK </span>
          so Cute!!
        </p>
        {/* <h1 className="text-4xl font-bold text-white">Section 2</h1> */}
      </div>
    </div>
  );
}

export default Home;
