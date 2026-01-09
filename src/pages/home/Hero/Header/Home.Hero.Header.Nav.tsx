import MyLogo from '../../../../common/components/MyLogo';

const HomeHeroHeaderNav: React.FC = () => {
  return (
    <div className="flex justify-center items-center text-white text-[1rem] gap-17">
      <MyLogo />
      <ul className="m2:flex hidden space-x-17">
        <li className="hover:text-gray-200 cursor-pointer">Home</li>
        <li className="hover:text-gray-200 cursor-pointer">About</li>
        <li className="hover:text-gray-200 cursor-pointer">Services</li>
        <li className="hover:text-gray-200 cursor-pointer">Contact</li>
      </ul>
    </div>
  );
};

export default HomeHeroHeaderNav;
