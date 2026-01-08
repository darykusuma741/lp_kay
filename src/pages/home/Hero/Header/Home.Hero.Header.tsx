import HomeHeroHeaderNavBtn from './Home.Hero.Header.Btn';
import HomeHeroHeaderNav from './Home.Hero.Header.Nav';

const HomeHeroHeader: React.FC = () => {
  return (
    <div className="w-screen flex justify-between items-center m2:px-37.5 md:px-20 px-10 h-25">
      <HomeHeroHeaderNav />
      <HomeHeroHeaderNavBtn />
    </div>
  );
};

export default HomeHeroHeader;
