import bg from '../../../assets/bg.svg';
import HomeHeroContent from './Content/Home.Hero.Content';

const HomeHero: React.FC = () => {
  return (
    <div
      className="parallax overflow-hidden w-screen min-h-200 sm:h-screen h-full bg-midnight bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <HomeHeroContent />
    </div>
  );
};

export default HomeHero;
