import HomeHeroFooterNavAbout from './About/Home.Hero.Footer.Nav.About';
import HomeHeroFooterNavWidget from './Widget/Home.Hero.Footer.Nav.Widget';

const HomeHeroFooterNav: React.FC = () => {
  return (
    <div className="flex flex-row gap-20">
      <HomeHeroFooterNavAbout />
      <HomeHeroFooterNavWidget />
    </div>
  );
};

export default HomeHeroFooterNav;
