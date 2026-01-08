import HomeHeroHeader from './Header/Home.Hero.Header';
import bg from '../../../assets/bg.svg';
import HomeHeroContent from './Content/Home.Hero.Content';

const HomeHero: React.FC = () => {
  return (
    <div
      className="relative overflow-hidden w-screen h-screen bg-midnight bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <HomeHeroHeader />
      <HomeHeroContent />
    </div>
  );
};

export default HomeHero;
