import HomeAboutUsContent from './Content/Home.AboutUs.Content';
import HomeAboutUsTitle from './Title/Home.AboutUs.Title';
import bg from '../../../assets/bg.svg';
import HomeAboutUsFact from './Fact/Home.AboutUs.Fact';

const HomeAboutUs: React.FC = () => {
  return (
    <div
      className="w-screen flex flex-col gap-16 lg:py-36 py-20 lg:px-36 px-10 bg-midnight justify-center items-center bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <HomeAboutUsTitle />
      <HomeAboutUsContent />
      <HomeAboutUsFact />
      <hr className="md:block hidden border-t border-charcoal w-160" />
      <button className="py-[0.7rem] px-[1.8rem] text-[0.9rem] hover:cursor-pointer rounded-full transition-all duration-300 text-white bg-linear-to-r hover:to-sky from-sky/20 hover:from-indigo to-indigo/20">
        View Show Catalogue
      </button>
    </div>
  );
};

export default HomeAboutUs;
