import HomeHeroContent from './Content/Home.Hero.Content';
import MyBg from '../../../common/components/MyBg';

const HomeHero: React.FC = () => {
  return (
    <MyBg className="overflow-hidden justify-center items-center flex w-screen h-screen bg-midnight bg-center bg-cover bg-no-repeat">
      <HomeHeroContent />
    </MyBg>
  );
};

export default HomeHero;
