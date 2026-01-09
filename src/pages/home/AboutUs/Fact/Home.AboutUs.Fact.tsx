import HomeAboutUsFactItems from './Home.AboutUs.Fact.Items';

const HomeAboutUsFact: React.FC = () => {
  return (
    <div className="flex md:flex-row flex-col md:gap-20 gap-12 justify-center">
      <HomeAboutUsFactItems title="29 K+" subtitle="Customer Join" subtitle2="to find you here" />
      <HomeAboutUsFactItems title="100%" subtitle="Trulyhired" subtitle2="by unicorns" />
      <HomeAboutUsFactItems title="98%" subtitle="Qualified Devs" subtitle2="for your team" />
    </div>
  );
};

export default HomeAboutUsFact;
