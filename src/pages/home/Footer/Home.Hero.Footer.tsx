import HomeHeroFooterContent from './Content/Home.Hero.Footer.Content';
import HomeHeroFooterNav from './Nav/Home.Hero.Footer.Nav';

const HomeHeroFooter: React.FC = () => {
  return (
    <div className="flex flex-col lg:px-36 px-10 lg:py-36 py-20 bg-white gap-10">
      <HomeHeroFooterContent />
      <hr className="md:block hidden border-t border-mist" />
      <HomeHeroFooterNav />
    </div>
  );
};

export default HomeHeroFooter;
