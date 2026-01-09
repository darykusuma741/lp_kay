import MyLogo from '../../../../../common/components/MyLogo';
import twitterLogo from '../../../../../assets/twitter.png';
import facebookLogo from '../../../../../assets/facebook.png';
import instagramLogo from '../../../../../assets/instagram.png';
import gitLogo from '../../../../../assets/git.png';

const HomeHeroFooterNavAbout: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <MyLogo className="" />
      <div className="sm:w-80 w-full">
        <p className="text-slate text-[.9rem] font-light">
          Kay Digital Studio delivers innovative digital solutions and creative interior designs,
          tailored to your needs. Transforming ideas into real experiences through technology and
          design.
        </p>
      </div>
      <div className="flex flex-row gap-7">
        <img src={twitterLogo} className="h-4 object-contain hover:cursor-pointer" />
        <img src={facebookLogo} className="h-4 object-contain hover:cursor-pointer" />
        <img src={instagramLogo} className="h-4 object-contain hover:cursor-pointer" />
        <img src={gitLogo} className="h-4 object-contain hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default HomeHeroFooterNavAbout;
